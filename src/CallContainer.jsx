import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useChatStore } from './useChatStore';
import { ref, remove, update } from 'firebase/database';
import { db, auth } from './firebase';

export default function CallContainer({ targetUserId }) {
  const containerRef = useRef(null);
  const { callType, roomId, endCall, activeChat } = useChatStore();
  const receiverId = targetUserId || activeChat?.id;

  const handleHangUp = async () => {
    const currentUid = auth.currentUser?.uid;
    
    if (currentUid) {
      await remove(ref(db, `calls/${currentUid}`));
    }
    if (receiverId) {
      await update(ref(db, `calls/${receiverId}`), { status: 'ended' });
    }

    endCall();
  };

  useEffect(() => {
    if (!containerRef.current || !roomId) return;

    let zpInstance = null;

    const initCall = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: callType === 'video',
        });
        stream.getTracks().forEach((track) => track.stop());
      } catch (err) {
        console.error("Права на камеру/микрофон не получены:", err);
        alert("Заказу необходимо предоставить доступ к микрофону и камере в настройках браузера.");
        handleHangUp();
        return;
      }

      // Замени на реальные данные из консоли ZegoCloud
      const appID = 123456789; 
      const serverSecret = "abcdef1234567890abcdef1234567890"; 

      const currentUid = auth.currentUser?.uid || Date.now().toString();
      const currentName = auth.currentUser?.displayName || 'Пользователь';

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        currentUid,
        currentName
      );

      zpInstance = ZegoUIKitPrebuilt.create(kitToken);
      zpInstance.joinRoom({
        container: containerRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONOneCall,
        },
        turnOnCameraWhenJoining: callType === 'video',
        turnOnMicrophoneWhenJoining: true,
        showMyCameraToggleButton: callType === 'video',
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: false,
        onLeaveRoom: () => {
          handleHangUp();
        },
      });
    };

    initCall();

    return () => {
      if (zpInstance) {
        try {
          zpInstance.destroy();
        } catch (e) {
          console.error(e);
        }
      }
    };
  }, [roomId, callType]);

  return (
    <div className="w-full h-full flex flex-col bg-slate-900 text-white relative overflow-hidden">
      <button
        onClick={handleHangUp}
        className="absolute top-3 right-3 z-[3000] bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-full shadow-md transition-all"
      >
        Ավարտել
      </button>
      <div ref={containerRef} className="w-full h-full min-h-0 flex-1 overflow-hidden" />
    </div>
  );
}