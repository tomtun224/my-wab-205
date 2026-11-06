"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonStyles } from "@/components/tailgrids/core/button";
import { useAuth } from "./auth-context";
import { useShop } from "./shop-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/animation", label: "Animation" },
  { href: "/calculator", label: "Calculator" },
  { href: "/todos", label: "Todos" },
];

export default function ShopNavigation() {
  const pathname = usePathname();
  const { products, cart } = useShop();
  const { logout } = useAuth();
  const cartProductIds = new Set(cart.map((entry) => entry.productId));
  const availableProductCount = products.filter(
    (product) => !cartProductIds.has(product.id)
  ).length;

  const linkClass = (href: string) =>
    buttonStyles({
      appearance: pathname === href ? "fill" : "outline",
      variant: "primary",
      size: "sm",
    });

  return (
    <nav aria-label="Main navigation" className="mt-4 flex flex-wrap justify-center gap-2 px-4">
      {links.map(({ href, label }) => (
        <Link
          aria-current={pathname === href ? "page" : undefined}
          className={linkClass(href)}
          href={href}
          key={href}
        >
          {label}
        </Link>
      ))}
      <Link
        aria-current={pathname === "/products" ? "page" : undefined}
        className={linkClass("/products")}
        href="/products"
      >
        Products <span className="rounded-full bg-red-500 px-1.5 text-xs text-white">({availableProductCount})</span>
      </Link>
      <Link
        aria-current={pathname === "/carts" ? "page" : undefined}
        className={`${linkClass("/carts")} relative`}
        href="/carts"
      >
        Carts
        <span className="absolute -right-2 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[11px] leading-none text-white">
          {cart.length}
        </span>
      </Link>
      <button
        className={buttonStyles({
          appearance: "fill",
          variant: "danger",
          size: "sm",
        })}
        onClick={logout}
        type="button"
      >
        Logout
      </button>
    </nav>
  );
}
