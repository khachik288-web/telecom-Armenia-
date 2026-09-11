import { useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db, auth } from './firebase'; // Перепроверь путь к файлу firebase
import { useChatStore } from './useChatStore';

export const useCallListener = () => {
  const { setIncomingCall, endCall, view } = useChatStore();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const callRef = ref(db, `calls/${currentUser.uid}`);

    const unsubscribe = onValue(callRef, (snapshot) => {
      const data = snapshot.val();

      if (data && data.status === 'ringing') {
        setIncomingCall(data);
      } else if (data && data.status === 'ended') {
        remove(callRef);
        if (view === 'call') {
          endCall();
        }
      } else if (!data) {
        setIncomingCall(null);
      }
    });

    return () => unsubscribe();
  }, [auth.currentUser?.uid, view]);
};