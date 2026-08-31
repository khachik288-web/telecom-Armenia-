import { create } from 'zustand';

export const useChatStore = create((set) => ({
  isOpen: false,
  view: 'list', // 'list' | 'chat' | 'call'
  activeChat: null, // { id, name, isGroup }
  callType: null, // 'video' | 'audio'

  setIsOpen: (isOpen) => set({ isOpen }),
  setView: (view) => set({ view }),
  
  openPrivateChat: (user) =>
    set({
      view: 'chat',
      activeChat: { id: user.uid, name: user.name || 'Անանուն', isGroup: false },
    }),

  openGroupChat: () =>
    set({
      view: 'chat',
      activeChat: { id: 'public_group', name: 'Խմբային չատ', isGroup: true },
    }),

  startCall: (type) => set({ view: 'call', callType: type }),
  endCall: () => set({ view: 'chat', callType: null }),
}));
