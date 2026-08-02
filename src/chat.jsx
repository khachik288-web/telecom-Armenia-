import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, onValue, push, get } from "firebase/database";
import { FaArrowLeft } from "react-icons/fa";

// Детерминированный id чата — не зависит от того, кто кому первый написал
function getChatId(uid1, uid2) {
  return [uid1, uid2].sort().join("_");
}

export default function Chat() {
  const { userId } = useParams(); // uid собеседника, из адреса /chat/:userId
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [otherUser, setOtherUser] = useState(null);
  const bottomRef = useRef(null);

  const myUid = auth.currentUser?.uid;
  const chatId = myUid ? getChatId(myUid, userId) : null;

  // подгружаем инфо о собеседнике (имя, фото)
  useEffect(() => {
    get(ref(db, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) setOtherUser(snapshot.val());
    });
  }, [userId]);

  // слушаем сообщения этого чата в реальном времени
  useEffect(() => {
    if (!chatId) return;

    const messagesRef = ref(db, `chats/${chatId}/messages`);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data)
        .map(([id, msg]) => ({ id, ...msg }))
        .sort((a, b) => a.timestamp - b.timestamp);
      setMessages(list);
    });

    return () => unsubscribe();
  }, [chatId]);

  // автопрокрутка вниз при новом сообщении
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!text.trim() || !chatId) return;

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
    <div className="max-w-2xl mx-auto mt-10 px-6 flex flex-col h-[80vh]">
      {/* Шапка чата */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <Link to="/users" className="text-slate-500 hover:text-slate-800">
          <FaArrowLeft size={18} />
        </Link>
        <img
          src={
            otherUser?.photoURL ||
            "https://img.magnific.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80"
          }
          alt={otherUser?.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="font-medium text-slate-800">{otherUser?.name || "..."}</p>
      </div>

      {/* Сообщения */}
      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2">
        {messages.map((msg) => {
          const isMine = msg.from === myUid;
          return (
            <div
              key={msg.id}
              className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
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

      {/* Поле ввода */}
      <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Գրեք հաղորդագրություն..."
          className="flex-1 border border-slate-200 rounded-full px-4 py-2 outline-none text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-[#e8615a] hover:bg-[#dd534c] text-white rounded-full px-5 py-2 text-sm font-medium"
        >
          Ուղարկել
        </button>
      </div>
    </div>
  );
}