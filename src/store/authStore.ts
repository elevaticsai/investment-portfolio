import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  email: string;
  name?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setError: (error: string | null) => void;
}

const defaultUser = {
  email: 'vineet@elevatics.ai',
  name: 'Vineet Kumar',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vineet'
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          
          if (email === 'vineet@elevatics.ai' && password === 'password') {
            set({ user: defaultUser, isAuthenticated: true });
          } else {
            throw new Error('Invalid credentials');
          }
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'An error occurred' });
        } finally {
          set({ isLoading: false });
        }
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      setError: (error) => set({ error }),
    }),
    {
      name: 'auth-storage',
    }
  )
);