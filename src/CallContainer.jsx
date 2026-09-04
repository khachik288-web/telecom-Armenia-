import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useChatStore } from './useChatStore';

export default function CallContainer({ roomId, userId, userName }) {
  const containerRef = useRef(null);
  const { callType, endCall } = useChatStore();

  useEffect(() => {
    if (!containerRef.current) return;

    let zpInstance = null;

    const initCall = async () => {
      // Вызов системного окна браузера для запроса прав на микрофон и камеру
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: callType === 'video',
        });
        // Освобождаем треки, чтобы Zego мог сам захватить устройства
        stream.getTracks().forEach((track) => track.stop());
      } catch (err) {
        console.error("Разрешение на микрофон/камеру не получено:", err);
        alert("Զանգի համար անհրաժեշտ է տալ микрофон-ի և камера-յի թույլտվություն браузерում:");
        endCall();
        return;
      }

      const appID = 123456789; 
      const serverSecret = "abcdef1234567890abcdef1234567890";

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        userId || Date.now().toString(),
        userName || 'User'
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
          endCall();
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
  }, [roomId, userId, userName, callType, endCall]);

  return (
    <div className="w-full h-full flex flex-col bg-slate-900 text-white relative">
      <button
        onClick={endCall}
        className="absolute top-2 right-2 z-[3000] bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-full"
      >
        Ավարտել
      </button>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}