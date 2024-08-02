import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state: any) => ({ count: state.count + 10 })),
  decreaseCount: () => set((state: any) => ({ count: state.count - 10 })),
}));
