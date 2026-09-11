import { ref, set } from 'firebase/database';
import { db, auth } from './firebase';
import { useChatStore } from './useChatStore';

export const initiateCall = async (targetUser, callType) => {
  const currentUser = auth.currentUser;
  if (!currentUser || !targetUser) return;

  const roomId = `room_${currentUser.uid}_${targetUser.id}_${Date.now()}`;
  const { startCall } = useChatStore.getState();

  // 1. Отправляем сигнал входящего вызова получателю
  await set(ref(db, `calls/${targetUser.id}`), {
    callerId: currentUser.uid,
    callerName: currentUser.displayName || 'Пользователь',
    roomId: roomId,
    callType: callType,
    status: 'ringing',
  });

  // 2. Создаем запись своего статуса
  await set(ref(db, `calls/${currentUser.uid}`), {
    callerId: currentUser.uid,
    roomId: roomId,
    callType: callType,
    status: 'calling',
  });

  // 3. Переключаем свой интерфейс в режим звонка
  startCall(callType, roomId);
};