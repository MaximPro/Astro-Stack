import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// UI State for React Components
interface UIState {
  // Modal management
  isModalOpen: boolean;
  modalContent: string | null;
  openModal: (content: string) => void;
  closeModal: () => void;

  // Mobile menu
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;

  // Loading states
  isLoading: boolean;
  setLoading: (loading: boolean) => void;

  // Toast notifications
  toast: { message: string; type: 'success' | 'error' | 'info' } | null;
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
  hideToast: () => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      // Modal state
      isModalOpen: false,
      modalContent: null,
      openModal: (content) => set({ isModalOpen: true, modalContent: content }),
      closeModal: () => set({ isModalOpen: false, modalContent: null }),

      // Mobile menu
      isMobileMenuOpen: false,
      toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

      // Loading
      isLoading: false,
      setLoading: (loading) => set({ isLoading: loading }),

      // Toast
      toast: null,
      showToast: (message, type) => {
        set({ toast: { message, type } });
        // Auto-hide after 5 seconds
        setTimeout(() => {
          set({ toast: null });
        }, 5000);
      },
      hideToast: () => set({ toast: null }),
    }),
    { name: 'UI Store' },
  ),
);

// Shopping Cart / Form State
interface CartState {
  selectedPlan: string | null;
  selectedAddons: string[];
  totalPrice: number;
  selectPlan: (plan: string, price: number) => void;
  toggleAddon: (addon: string, price: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    (set) => ({
      selectedPlan: null,
      selectedAddons: [],
      totalPrice: 0,

      selectPlan: (plan, price) =>
        set({ selectedPlan: plan, totalPrice: price }),

      toggleAddon: (addon, price) =>
        set((state) => {
          const hasAddon = state.selectedAddons.includes(addon);
          return {
            selectedAddons: hasAddon
              ? state.selectedAddons.filter((a) => a !== addon)
              : [...state.selectedAddons, addon],
            totalPrice: hasAddon ? state.totalPrice - price : state.totalPrice + price,
          };
        }),

      clearCart: () =>
        set({ selectedPlan: null, selectedAddons: [], totalPrice: 0 }),
    }),
    { name: 'Cart Store' },
  ),
);
