import React from 'react';
import { useChatStore } from './useChatStore';
import { ref, update, remove } from 'firebase/database';
import { db, auth } from './firebase';
import { Phone, PhoneOff, Video } from 'lucide-react';

export default function IncomingCallModal() {
  const { incomingCall, setIncomingCall, startCall } = useChatStore();

  if (!incomingCall) return null;

  const handleAccept = async () => {
    const myUid = auth.currentUser?.uid;
    
    if (myUid) {
      await update(ref(db, `calls/${myUid}`), { status: 'answered' });
    }

    startCall(incomingCall.callType, incomingCall.roomId);
    setIncomingCall(null);
  };

  const handleDecline = async () => {
    const myUid = auth.currentUser?.uid;
    if (myUid) {
      await update(ref(db, `calls/${incomingCall.callerId}`), { status: 'ended' });
      await remove(ref(db, `calls/${myUid}`));
    }
    setIncomingCall(null);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-slate-800 text-white rounded-2xl p-6 w-full max-w-sm text-center shadow-2xl border border-slate-700">
        <div className="w-20 h-20 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          {incomingCall.callType === 'video' ? <Video size={36} /> : <Phone size={36} />}
        </div>

        <h3 className="text-xl font-bold mb-1">{incomingCall.callerName}</h3>
        <p className="text-slate-400 text-sm mb-6">
          {incomingCall.callType === 'video' ? 'Մուտքային տեսազանգ...' : 'Մուտքային ձայնային զանգ...'}
        </p>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handleDecline}
            className="flex flex-col items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
          >
            <div className="w-14 h-14 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center text-red-500">
              <PhoneOff size={24} />
            </div>
            <span className="text-xs">Մերժել</span>
          </button>

          <button
            onClick={handleAccept}
            className="flex flex-col items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <div className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
              <Phone size={24} />
            </div>
            <span className="text-xs">Պատասխանել</span>
          </button>
        </div>
      </div>
    </div>
  );
}