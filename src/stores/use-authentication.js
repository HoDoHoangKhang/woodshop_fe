import { create } from "zustand";

const useAuthentication = create((set) => ({
  user: {},
  setUser: (user) => set({ user }),
}));

export default useAuthentication;
