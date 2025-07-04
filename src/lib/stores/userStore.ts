import { create } from "zustand";
import { IUserParams } from "../types/users";

interface IUserStore {
  filters: Partial<IUserParams>;
  setFilters: (updates: Partial<IUserParams>) => void;
  resetFilters: () => void;
}

const useUserStore = create<IUserStore>((set) => ({
  filters: {
    userName: undefined,
    email: undefined,
    createdAt: undefined,
    limit: 3,
    page: 1,
    updatedAt: undefined,
  },
  setFilters: (updates: Partial<IUserParams>) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...updates,
      },
    })),
  resetFilters: () =>
    set({
      filters: {
        userName: undefined,
        email: undefined,
        createdAt: undefined,
        limit: 3,
        page: 1,
        updatedAt: undefined,
      },
    }),
}));

export default useUserStore;
