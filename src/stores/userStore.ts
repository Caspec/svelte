import axios from "axios";
import { writable } from "svelte/store";

export type User = {
  id: number;
  name: string;
  email: string;
};

function createUserStore() {
  const { subscribe, set } = writable<User[]>([]);
  const isLoading = writable(true);
  const error = writable<string | null>(null);

  async function fetchUsers() {
    isLoading.set(true);
    error.set(null);
    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      set(response.data);
    } catch (err) {
      error.set(err instanceof Error ? err.message : "Unknown error");
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
