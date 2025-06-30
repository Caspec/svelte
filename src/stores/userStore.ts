import { writable } from "svelte/store";

export type User = {
  id: number;
  name: string;
  email: string;
};

function createUserStore() {
  const { subscribe, set, update } = writable<User[]>([]);
  const isLoading = writable(true);
  const error = writable<string | null>(null);

  async function fetchUsers() {
    isLoading.set(true);
    error.set(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      set(data);
    } catch (err) {
      error.set((err as Error).message);
    } finally {
      isLoading.set(false);
    }
  }

  return {
    subscribe,
    fetchUsers,
    isLoading,
    error,
  };
}

export const userStore = createUserStore();
