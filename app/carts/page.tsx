"use client";

import ProductCard from "../product-card";
import { useShop } from "../shop-context";

export default function CartsPage() {
  const { products, cart, isLoading, loadError, removeFromCart } = useShop();
  const items = cart.flatMap((entry) => {
    const product = products.find((item) => item.id === entry.productId);
    return product ? [{ ...entry, product }] : [];
  });
  const total = items.reduce((sum, item) => sum + item.product.price, 0);

  return (
    <section className="mx-auto mt-4 w-full max-w-6xl px-4">
      <div className="h-[68vh] min-h-[340px] max-h-[560px] overflow-y-auto overscroll-contain rounded-2xl border border-rose-300 bg-rose-50 p-2.5 shadow-inner sm:p-3">
        {isLoading ? (
          <p className="p-4 text-center text-sm text-gray-600">กำลังโหลดรถเข็น...</p>
        ) : loadError ? (
          <p className="p-4 text-center text-sm text-red-700" role="alert">{loadError}</p>
        ) : (
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
            {items.map(({ key, product }) => (
              <ProductCard
                actionLabel="Remove"
                actionType="remove"
                key={key}
                onAction={() => removeFromCart(key)}
                product={product}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <span className="rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-amber-950">
          Count: {items.length} {items.length === 1 ? "item" : "items"}
        </span>
        <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
          Price: ${total.toFixed(2)}
        </span>
      </div>
    </section>
  );
}
