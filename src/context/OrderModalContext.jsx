import { createContext, useContext, useState } from 'react';

const OrderModalContext = createContext(null);

export function OrderModalProvider({ children }) {
  const [state, setState] = useState({ open: false, presetWebsiteId: null });

  const openOrderModal = (presetWebsiteId = null) => setState({ open: true, presetWebsiteId });
  const closeOrderModal = () => setState({ open: false, presetWebsiteId: null });

  return (
    <OrderModalContext.Provider value={{ ...state, openOrderModal, closeOrderModal }}>
      {children}
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext);
  if (!ctx) throw new Error('useOrderModal must be used inside OrderModalProvider');
  return ctx;
}
