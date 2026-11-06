"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { fetchProducts, type Product } from "./todos/data/products";

type CartEntry = {
  key: string;
  productId: number;
};

type ShopContextValue = {
  products: Product[];
  cart: CartEntry[];
  isLoading: boolean;
  loadError: string | null;
  addToCart: (productId: number) => void;
  removeFromCart: (key: string) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);
const CART_STORAGE_KEY = "205-pin-cart";

function isCartEntry(entry: unknown, productIds: Set<number>): entry is CartEntry {
  if (typeof entry !== "object" || entry === null) return false;

  const candidate = entry as Record<string, unknown>;
  return (
    typeof candidate.key === "string" &&
    typeof candidate.productId === "number" &&
    productIds.has(candidate.productId)
  );
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let isCurrent = true;

    fetchProducts()
      .then((loadedProducts) => {
        if (!isCurrent) return;

        setProducts(loadedProducts);
        const productIds = new Set(loadedProducts.map((product) => product.id));

        try {
          const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
          const parsedCart: unknown = savedCart ? JSON.parse(savedCart) : [];

          if (Array.isArray(parsedCart)) {
            setCart(parsedCart.filter((entry) => isCartEntry(entry, productIds)));
          }
        } catch {
          setCart([]);
        }
      })
      .catch((error: unknown) => {
        console.error("Failed to load products:", error);
        if (isCurrent) setLoadError("Unable to load products. Please try again later.");
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  useEffect(() => {
    if (isLoading) return;

    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cart, isLoading]);

  const addToCart = useCallback((productId: number) => {
    setCart((currentCart) => {
      if (currentCart.some((entry) => entry.productId === productId)) {
        return currentCart;
      }

      const key = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      return [...currentCart, { key, productId }];
    });
  }, []);

  const removeFromCart = useCallback((key: string) => {
    setCart((currentCart) => currentCart.filter((entry) => entry.key !== key));
  }, []);

  const value = useMemo(
    () => ({ products, cart, isLoading, loadError, addToCart, removeFromCart }),
    [products, cart, isLoading, loadError, addToCart, removeFromCart]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used inside ShopProvider");
  return context;
}
