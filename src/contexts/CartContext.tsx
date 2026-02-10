import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { CartItem, Photo } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (photo: Photo) => void;
  removeFromCart: (photoId: string) => void;
  updateQuantity: (photoId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (photo: Photo) => {
    setCart(prev => {
      const existing = prev.find(item => item.photo.id === photo.id);
      if (existing) {
        return prev.map(item =>
          item.photo.id === photo.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { photo, quantity: 1 }];
    });
  };

  const removeFromCart = (photoId: string) => {
    setCart(prev => prev.filter(item => item.photo.id !== photoId));
  };

  const updateQuantity = (photoId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(photoId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.photo.id === photoId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.photo.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
