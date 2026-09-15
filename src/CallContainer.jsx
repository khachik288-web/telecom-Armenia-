import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useChatStore } from './useChatStore';
import { auth } from './firebase';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// ВАЖНО: замените на реальные значения из вашего кабинета console.zegocloud.com
// (Project → App ID / Server Secret). Текущие значения — плейсхолдеры из
// документации Zego и НЕ будут работать для реального звонка.
const ZEGO_APP_ID = 1189438953;
const ZEGO_SERVER_SECRET = "f8303c56d9b17e2f6b3c13a28e826508";

export default function CallContainer({ roomId: propRoomId, userId: propUserId, userName: propUserName }) {
  const containerRef = useRef(null);
  const { callType, endCall, roomId: storeRoomId } = useChatStore();

  // Берём значения из пропсов (их передаёт chatWidget.jsx), из стора,
  // а на самый крайний случай — из Firebase Auth. useChatStore НЕ хранит
  // юзера, поэтому currentUser отсюда мы больше не тянем.
  const roomId = propRoomId || storeRoomId || 'default_room';
  const userId = propUserId || auth.currentUser?.uid || Date.now().toString();
  const userName =
    propUserName ||
    auth.currentUser?.displayName ||
    auth.currentUser?.email?.split('@')[0] ||
    'User';

  useEffect(() => {
    if (!containerRef.current) return;

    let zpInstance = null;
    let cancelled = false;

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

      if (cancelled) return;

      if (!ZEGO_SERVER_SECRET || ZEGO_SERVER_SECRET.startsWith("ВАШ_")) {
        console.error(
          "ZegoCloud: не заданы реальные ZEGO_APP_ID/ZEGO_SERVER_SECRET в CallContainer.jsx"
        );
        alert("Զանգերի ֆունկցիան դեռ կարգավորված չէ (Zego keys)։");
        endCall();
        return;
      }

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        ZEGO_APP_ID,
        ZEGO_SERVER_SECRET,
        String(roomId),
        String(userId),
        String(userName)
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
      cancelled = true;
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
