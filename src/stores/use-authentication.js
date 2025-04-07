import { create } from "zustand";

const useAuthentication = create((set) => ({
  isAuthenticated: false,
  user: {},
  setUser: (user) => set({ user }),
  authenticate: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: {} }),
}));

export default useAuthentication;
