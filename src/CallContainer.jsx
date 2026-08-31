import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useChatStore } from './useChatStore';

export default function CallContainer({ roomId, userId, userName }) {
  const containerRef = useRef(null);
  const { callType, endCall } = useChatStore();

  useEffect(() => {
    if (!containerRef.current) return;

    // Бесплатные тестовые ключи AppID и AppSign от ZegoCloud
    const appID = 123456789; 
    const serverSecret = "abcdef1234567890abcdef1234567890";
    
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      userId || Date.now().toString(),
      userName || 'User'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
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

    return () => {
      try {
        zp.destroy();
      } catch (e) {
        console.error(e);
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