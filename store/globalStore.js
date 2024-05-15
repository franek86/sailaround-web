import { create } from "zustand";

const useGlobalStore = create((set) => ({
    isMobileMenuOpen: false,
    toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen}))
 }))

 export default useGlobalStore