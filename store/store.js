import { createStore } from "zustand/vanilla";

const useStore = createStore((set) => ({
  chat: [
    {
      role: "user",
      content:
        "You are an AI chatbot. your name is Chat Ai. Your task is to answer users question in a concise way and easy to understand. So understand the context and answer users message",
    },
  ],
  addChat: (payload) => set((state) => ({ chat: [...state, payload] })),
}));
