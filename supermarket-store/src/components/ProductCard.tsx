"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const isOutOfStock = product.stock <= 0;

  function handleAddToCart() {
    addToCart(product.id, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="relative flex h-52 items-center justify-center bg-gray-100">
          {product.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
              Featured
            </span>
          )}

          <span className="text-7xl transition duration-300 group-hover:scale-110">
            {product.icon}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
          {product.category}
        </p>

        <Link href={`/products/${product.id}`}>
          <h3 className="mt-2 line-clamp-2 min-h-12 font-bold text-gray-900 transition hover:text-green-600">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 text-sm text-gray-500">{product.unit}</p>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold text-gray-900">
              ₦{product.price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400">Retail</span>
          </div>

          <div className="mt-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-green-600">
              ₦{product.wholesalePrice.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400">Wholesale</span>
          </div>
        </div>

        <div className="mt-3">
          {isOutOfStock ? (
            <p className="text-xs font-semibold text-red-600">Out of stock</p>
          ) : product.stock <= 10 ? (
            <p className="text-xs font-semibold text-orange-600">
              Only {product.stock} left
            </p>
          ) : (
            <p className="text-xs font-medium text-gray-500">In stock</p>
          )}
        </div>

        <div className="mt-5 flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 rounded-lg border border-gray-200 px-3 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600"
          >
            View
          </Link>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:bg-gray-300 ${
              justAdded ? "bg-green-800" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isOutOfStock ? "Unavailable" : justAdded ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
