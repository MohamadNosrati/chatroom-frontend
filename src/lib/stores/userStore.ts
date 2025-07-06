import { create } from "zustand";
import { IUserParams } from "../types/users";

interface IUserStore {
  filters: Partial<IUserParams>;
  setFilters: (updates: Partial<IUserParams>) => void;
  resetFilters: () => void;
}

const useUserStore = create<IUserStore>((set) => ({
  filters: {
    userName: "",
    email: "",
    createdAt: undefined,
    limit: 3,
    page: 1,
    updatedAt: undefined,
    iaActive:undefined,
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
        isActive:undefined
      },
    }),
}));

export default useUserStore;
