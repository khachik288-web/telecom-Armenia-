import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, onValue, push, get } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { MessageCircle, X, ArrowLeft, Send } from "lucide-react";

function getChatId(uid1, uid2) {
  return [uid1, uid2].sort().join("_");
}

const DEFAULT_AVATAR =
  "https://img.magnific.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80";

export default function ChatWidget() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("list");
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const myUid = auth.currentUser?.uid;

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
    if (!activeUser || !myUid) return;

    const chatId = getChatId(myUid, activeUser.uid);
    const messagesRef = ref(db, `chats/${chatId}/messages`);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data)
        .map(([id, msg]) => ({ id, ...msg }))
        .sort((a, b) => a.timestamp - b.timestamp);
      setMessages(list);
    });

    return () => unsubscribe();
  }, [activeUser, myUid]);

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

  const openChatWith = async (user) => {
    setActiveUser(user);
    setView("chat");
  };

  const handleSend = async () => {
    if (!text.trim() || !activeUser || !myUid) return;
    const chatId = getChatId(myUid, activeUser.uid);

    await push(ref(db, `chats/${chatId}/messages`), {
      from: myUid,
      text: text.trim(),
      timestamp: Date.now(),
    });
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
        <div className="w-[340px] h-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          <div className="bg-[#00293c] text-white px-4 py-3 flex items-center gap-3">
            {view === "chat" && (
              <button onClick={() => setView("list")} className="text-white/80 hover:text-white">
                <ArrowLeft size={18} />
              </button>
            )}
            <div className="flex-1 min-w-0">
              {view === "list" ? (
                <p className="font-medium">Հաղորդագրություններ</p>
              ) : (
                <p className="font-medium truncate">{activeUser?.name || "..."}</p>
              )}
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {view === "list" && (
            <div className="flex-1 overflow-y-auto">
              {users.length === 0 && (
                <p className="text-slate-400 text-sm text-center mt-8">
                  Դեռ ոչ մի օգտատեր չկա
                </p>
              )}
              {users.map((user) => (
                <button
                  key={user.uid}
                  onClick={() => openChatWith(user)}
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

          {view === "chat" && (
            <>
              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
                {messages.map((msg) => {
                  const isMine = msg.from === myUid;
                  return (
                    <div
                      key={msg.id}
                      className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm ${
                        isMine
                          ? "self-end bg-[#e8615a] text-white rounded-br-sm"
                          : "self-start bg-slate-100 text-slate-800 rounded-bl-sm"
                      }`}
                    >
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
                  onKeyDown={handleKeyDown}
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
        </div>
      )}
    </div>
  );
}