"use client";

import ProductCard from "../product-card";
import { useShop } from "../shop-context";

export default function ProductsPage() {
  const { products, cart, isLoading, loadError, addToCart } = useShop();
  const cartProductIds = new Set(cart.map((entry) => entry.productId));
  const availableProducts = products.filter(
    (product) => !cartProductIds.has(product.id)
  );

  return (
    <section className="mx-auto mt-4 w-full max-w-6xl px-4">
      <div className="h-[68vh] min-h-[340px] max-h-[560px] overflow-y-auto overscroll-contain rounded-2xl border border-sky-300 bg-sky-50 p-2.5 shadow-inner sm:p-3">
        {isLoading ? (
          <p className="p-4 text-center text-sm text-gray-600">กำลังโหลดสินค้า...</p>
        ) : loadError ? (
          <p className="p-4 text-center text-sm text-red-700" role="alert">{loadError}</p>
        ) : (
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
            {availableProducts.map((product) => (
              <ProductCard
                actionLabel="Add to Cart"
                actionType="add"
                key={product.id}
                onAction={() => addToCart(product.id)}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
