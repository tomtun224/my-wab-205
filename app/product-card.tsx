import type { Product } from "./todos/data/products";

type ProductCardProps = {
  product: Product;
  actionLabel: string;
  onAction: () => void;
  actionType: "add" | "remove";
};

export default function ProductCard({
  product,
  actionLabel,
  onAction,
  actionType,
}: ProductCardProps) {
  const actionStyle =
    actionType === "add"
      ? "border-green-300 bg-green-50 text-green-800 hover:bg-green-100 focus-visible:ring-green-400"
      : "border-red-300 bg-red-50 text-red-800 hover:bg-red-100 focus-visible:ring-red-400";

  return (
    <article
      className={`overflow-hidden rounded-xl border shadow-sm ${
        actionType === "add" ? "border-green-300" : "border-red-300"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-sky-100 via-slate-200 to-emerald-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          src={product.thumbnailUrl}
        />
        <span className="absolute right-1.5 top-1.5 rounded-md bg-black/70 px-1.5 py-0.5 text-xs font-semibold text-white">
          ${product.price.toFixed(2)}
        </span>
        <p className="absolute inset-x-0 bottom-0 line-clamp-2 bg-black/70 px-2 py-1.5 text-xs leading-snug text-white">
          {product.title}
        </p>
      </div>
      <button
        className={`min-h-9 w-full border-t px-2 py-1.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset ${actionStyle}`}
        onClick={onAction}
        type="button"
      >
        {actionLabel}
      </button>
    </article>
  );
}
