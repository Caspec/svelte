import axios from "axios";
import { writable, readable, derived } from "svelte/store";

export type User = {
  id: number;
  name: string;
  email: string;
};

function createUserStore() {
  const { subscribe, set } = writable<User[]>([]);
  const isLoading = writable(true);
  const error = writable<string | null>(null);
  const price = writable(100);
  const quantity = writable(2);

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

  const userTime = readable<Date>(new Date(), (set) => {
    const interval = setInterval(() => {
      set(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });

  const total = derived(
    [price, quantity],
    ([$price, $quantity]) => $price * $quantity
  );

  const totalWithTax = derived(total, ($total) => $total * 1.25);

  return {
    subscribe,
    fetchUsers,
    isLoading,
    error,
    userTime,
    price,
    quantity,
    total,
    totalWithTax,
  };
}

export const userStore = createUserStore();
