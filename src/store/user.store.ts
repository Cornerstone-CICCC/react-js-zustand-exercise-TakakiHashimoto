import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
  hobbies: string[];
}

type State = { users: User[] };

type Action = {
  addUser: (input: Omit<User, "id">) => void;
  deleteUser: (id: string) => void;
};

export const useUserStore = create<State & Action>((set) => ({
  users: [],
  addUser: (input) =>
    set((state) => ({ users: [...state.users, { id: uuidv4(), ...input }] })),
  deleteUser: (id) =>
    set((state) => ({ users: state.users.filter((u) => u.id !== id) })),
}));
