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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

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

  return (
    <div className="fixed bottom-6 right-6 z-[2000]">
      {!isOpen && (
        <button
          onClick={handleWidgetClick}
          className="w-14 h-14 rounded-full bg-[#e8615a] hover:bg-[#dd534c] text-white flex items-center justify-center shadow-lg transition-colors"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {isOpen && (
        <div className="w-[360px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#00293c] text-white px-4 py-3 flex items-center gap-2">
            {view !== "list" && (
              <button onClick={() => setView("list")} className="text-white/80 hover:text-white mr-1">
                <ArrowLeft size={18} />
              </button>
            )}

            <div className="flex-1 min-w-0">
              {view === "list" ? (
                <p className="font-medium">Հաղորդագրություններ</p>
              ) : (
                <p className="font-medium truncate">{activeChat?.name}</p>
              )}
            </div>

            {view === "chat" && (
              <div className="flex items-center gap-2 mr-2">
                <button
                  onClick={() => startCall("audio")}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                  title="Ձայնային զանգ"
                >
                  <Phone size={16} />
                </button>
                <button
                  onClick={() => startCall("video")}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                  title="Տեսազանգ"
                >
                  <Video size={16} />
                </button>
              </div>
            )}

            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* View: List */}
          {view === "list" && (
            <div className="flex-1 overflow-y-auto">
              <button
                onClick={openGroupChat}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-left border-b border-slate-100 bg-slate-50/50"
              >
                <div className="w-10 h-10 rounded-full bg-[#e8615a] text-white flex items-center justify-center shrink-0">
                  <Users size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800">Ընդհանուր Խումբ</p>
                  <p className="text-xs text-slate-400">Գրեք բոլորին</p>
                </div>
              </button>

              {users.map((user) => (
                <button
                  key={user.uid}
                  onClick={() => openPrivateChat(user)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-left border-b border-slate-50"
                >
                  <img
                    src={user.photoURL || DEFAULT_AVATAR}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-800 truncate">
                      {user.name || "Անանուն"}
                    </p>
                    <p className="text-xs text-slate-400 truncate">{user.email}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* View: Chat */}
          {view === "chat" && (
            <>
              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
                {messages.map((msg) => {
                  const isMine = msg.from === myUid;
                  return (
                    <div
                      key={msg.id}
                      className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
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

              <div className="flex items-center gap-2 p-3 border-t border-slate-100">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Գրեք հաղորդագրություն..."
                  className="flex-1 border border-slate-200 rounded-full px-3 py-1.5 outline-none text-sm"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#e8615a] hover:bg-[#dd534c] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0"
                >
                  <Send size={14} />
                </button>
              </div>
            </>
          )}

          {/* View: Call */}
          {view === "call" && (
            <CallContainer roomId={currentRoomId} userId={myUid} userName={myName} />
          )}
        </div>
      )}
    </div>
  );
}