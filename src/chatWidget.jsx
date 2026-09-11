import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, onValue, push } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { MessageCircle, X, ArrowLeft, Send, Users, Video, Phone } from "lucide-react";
import { useChatStore } from "./useChatStore";
import CallContainer from "./CallContainer";

function getChatId(uid1, uid2) {
  return [uid1, uid2].sort().join("_");
}

const DEFAULT_AVATAR =
  "https://img.magnific.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80";

export default function ChatWidget() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [unreadChats, setUnreadChats] = useState({});
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const {
    isOpen,
    view,
    activeChat,
    setIsOpen,
    setView,
    openPrivateChat,
    openGroupChat,
    startCall,
  } = useChatStore();

  const myUid = auth.currentUser?.uid;
  const myName = auth.currentUser?.displayName || auth.currentUser?.email?.split("@")[0] || "User";

  const activeChatId = activeChat
    ? activeChat.isGroup
      ? "public_group"
      : getChatId(myUid, activeChat.id)
    : null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  // Отслеживание непрочитанных сообщений во всех чатах
  useEffect(() => {
    if (!myUid) return;

    const chatsRef = ref(db, "chats");
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const newUnreads = {};

      Object.entries(data).forEach(([chatId, chatData]) => {
        if (!chatData.messages) return;
        const msgList = Object.values(chatData.messages);
        if (msgList.length === 0) return;

        const lastMsg = msgList.reduce(
          (acc, curr) => (curr.timestamp > acc.timestamp ? curr : acc),
          msgList[0]
        );

        if (lastMsg.from !== myUid) {
          const isCurrentlyReading = isOpen && view === "chat" && activeChatId === chatId;
          if (!isCurrentlyReading) {
            newUnreads[chatId] = true;
          }
        }
      });

      setUnreadChats(newUnreads);
    });

    return () => unsubscribe();
  }, [myUid, isOpen, view, activeChatId]);

  useEffect(() => {
    if (!isOpen || view !== "list") return;

    const usersRef = ref(db, "users");
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data)
        .map(([uid, info]) => ({ uid, ...info }))
        .filter((u) => u.uid !== myUid);
      setUsers(list);
    });

    return () => unsubscribe();
  }, [isOpen, view, myUid]);

  useEffect(() => {
    if (!activeChat || !myUid) return;

    const chatId = activeChat.isGroup
      ? "public_group"
      : getChatId(myUid, activeChat.id);

    const messagesRef = ref(db, `chats/${chatId}/messages`);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data)
        .map(([id, msg]) => ({ id, ...msg }))
        .sort((a, b) => a.timestamp - b.timestamp);
      setMessages(list);
    });

    return () => unsubscribe();
  }, [activeChat, myUid]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleWidgetClick = () => {
    if (isLoggedIn) {
      setIsOpen(true);
    } else {
      navigate("/reg");
    }
  };

  const handleOpenGroupChat = () => {
    setUnreadChats((prev) => ({ ...prev, public_group: false }));
    openGroupChat();
  };

  const handleOpenPrivateChat = (user) => {
    const chatId = getChatId(myUid, user.uid);
    setUnreadChats((prev) => ({ ...prev, [chatId]: false }));
    openPrivateChat(user);
  };

  const handleSend = async () => {
    if (!text.trim() || !activeChat || !myUid) return;

    const chatId = activeChat.isGroup
      ? "public_group"
      : getChatId(myUid, activeChat.id);

    await push(ref(db, `chats/${chatId}/messages`), {
      from: myUid,
      senderName: myName,
      text: text.trim(),
      timestamp: Date.now(),
    });
    setText("");
  };

  const currentRoomId = activeChat
    ? activeChat.isGroup
      ? "public_group"
      : getChatId(myUid, activeChat.id)
    : "default";

  const hasAnyUnread = Object.values(unreadChats).some(Boolean);

  return (
    <div className="fixed bottom-6 right-6 z-[2000]">
      {!isOpen && (
        <button
          onClick={handleWidgetClick}
          className="relative w-14 h-14 rounded-full bg-[#e8615a] hover:bg-[#dd534c] text-white flex items-center justify-center shadow-lg transition-colors"
        >
          <MessageCircle size={26} />
          {hasAnyUnread && (
            <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-blue-500 border-2 border-white rounded-full"></span>
          )}
        </button>
      )}

      {isOpen && (
        <div className="w-[470px] h-[675px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#00293c] text-white px-4 py-3.5 flex items-center gap-2 shrink-0">
            {view !== "list" && (
              <button onClick={() => setView("list")} className="text-white/80 hover:text-white mr-1 shrink-0">
                <ArrowLeft size={20} />
              </button>
            )}

            <div className="flex-1 min-w-0">
              {view === "list" ? (
                <p className="font-medium text-base">Հաղորդագրություններ</p>
              ) : (
                <p className="font-medium text-base truncate">{activeChat?.name}</p>
              )}
            </div>

            {view === "chat" && (
              <div className="flex items-center gap-2 mr-2 shrink-0">
                <button
                  onClick={() => startCall("audio")}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                  title="Ձայնային զանգ"
                >
                  <Phone size={18} />
                </button>
                <button
                  onClick={() => startCall("video")}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                  title="Տեսազանգ"
                >
                  <Video size={18} />
                </button>
              </div>
            )}

            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white shrink-0">
              <X size={20} />
            </button>
          </div>

          {/* View: List */}
          {view === "list" && (
            <div className="flex-1 min-h-0 overflow-y-auto">
              <button
                onClick={handleOpenGroupChat}
                className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 text-left border-b border-slate-100 bg-slate-50/50 relative"
              >
                <div className="w-11 h-11 rounded-full bg-[#e8615a] text-white flex items-center justify-center shrink-0">
                  <Users size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800">Ընդհանուր Խումբ</p>
                  <p className="text-xs text-slate-400">Գրեք բոլորին</p>
                </div>
                {unreadChats["public_group"] && (
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shrink-0 ml-auto" />
                )}
              </button>

              {users.map((user) => {
                const chatId = getChatId(myUid, user.uid);
                const isUnread = unreadChats[chatId];
                return (
                  <button
                    key={user.uid}
                    onClick={() => handleOpenPrivateChat(user)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 text-left border-b border-slate-50 relative"
                  >
                    <img
                      src={user.photoURL || DEFAULT_AVATAR}
                      alt={user.name}
                      className="w-11 h-11 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-800 truncate">
                        {user.name || "Անանուն"}
                      </p>
                      <p className="text-xs text-slate-400 truncate">{user.email}</p>
                    </div>
                    {isUnread && (
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shrink-0 ml-auto" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* View: Chat */}
          {view === "chat" && (
            <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
              <div className="flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-2.5">
                {messages.map((msg) => {
                  const isMine = msg.from === myUid;
                  return (
                    <div
                      key={msg.id}
                      className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm ${
                        isMine
                          ? "self-end bg-[#e8615a] text-white rounded-br-sm"
                          : "self-start bg-slate-100 text-slate-800 rounded-bl-sm"
                      }`}
                    >
                      {activeChat.isGroup && !isMine && (
                        <p className="text-[10px] font-bold opacity-75 mb-0.5">{msg.senderName}</p>
                      )}
                      {msg.text}
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>

              <div className="shrink-0 flex items-center gap-2 p-3 border-t border-slate-100 bg-white">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Գրեք հաղորդագրություն..."
                  className="flex-1 border border-slate-200 rounded-full px-4 py-2 outline-none text-sm focus:border-[#e8615a] transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#e8615a] hover:bg-[#dd534c] text-white rounded-full w-9 h-9 flex items-center justify-center shrink-0 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          )}

          {/* View: Call */}
          {view === "call" && (
            <div className="flex-1 min-h-0 w-full h-full relative overflow-hidden">
              <CallContainer roomId={currentRoomId} userId={myUid} userName={myName} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}