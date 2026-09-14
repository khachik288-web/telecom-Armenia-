import React, { useState, useEffect, useRef } from 'react';
import { Phone, Video, X, Send, MessageSquare, Minimize2, User } from 'lucide-react';
import useChatStore from './useChatStore_3';
import { initiateCall } from './callUtils';
import CallContainer from './CallContainer_5';

export default function ChatWidget() {
  const {
    isOpen,
    toggleWidget,
    activeChat,
    view,
    messages,
    sendMessage,
    unreadCount,
    currentUser
  } = useChatStore();

  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (view === 'chat') {
      scrollToBottom();
    }
  }, [messages, view]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText);
    setInputText('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleWidget}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Open Chat"
      >
        <MessageSquare size={26} className="group-hover:scale-110 transition-transform" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[470px] h-[675px] max-w-[95vw] max-h-[90vh] bg-slate-900 text-white rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden backdrop-blur-lg">
      {/* Header */}
      <div className="p-4 bg-slate-800/80 border-b border-white/10 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold border border-blue-500/30">
              {activeChat?.name ? activeChat.name[0].toUpperCase() : <User size={20} />}
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
          </div>
          <div>
            <h3 className="font-medium text-sm text-white/90">
              {activeChat?.name || "Աջակցություն"}
            </h3>
            <p className="text-xs text-emerald-400">Առցանց</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {view === "chat" && (
            <>
              <button
                onClick={() => initiateCall(activeChat, "audio")}
                className="p-1.5 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                title="Ձայնային զանգ"
              >
                <Phone size={18} />
              </button>
              <button
                onClick={() => initiateCall(activeChat, "video")}
                className="p-1.5 hover:bg-white/10 rounded-full text-white/90 transition-colors"
                title="Տեսազանգ"
              >
                <Video size={18} />
              </button>
            </>
          )}

          <button
            onClick={toggleWidget}
            className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
          >
            <Minimize2 size={18} />
          </button>
        </div>
      </div>

      {/* Main View Area */}
      {view === "call" ? (
        <div className="flex-1 min-h-0 w-full h-full relative overflow-hidden">
          <CallContainer />
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex flex-col bg-slate-950/50">
          {/* Message History */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => {
              const isMe = msg.senderId === currentUser?.id;
              return (
                <div
                  key={msg.id || index}
                  className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      isMe
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-100 rounded-bl-none border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                  </span>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <form onSubmit={handleSend} className="p-3 bg-slate-800/50 border-t border-white/10 flex items-center space-x-2 shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Գրեք հաղորդագրություն..."
              className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-xl transition-colors flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}