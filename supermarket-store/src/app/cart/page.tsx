"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { cartProducts, updateQuantity, removeFromCart, totalPrice, clearCart, isHydrated } =
    useCart();

  const whatsappNumber = "2340000000000"; // TODO: replace with the real business WhatsApp number

  const orderSummary = cartProducts
    .map(
      (entry) =>
        `${entry.product.name} (${entry.product.unit}) x${entry.quantity} - ₦${(
          entry.product.price * entry.quantity
        ).toLocaleString()}`
    )
    .join("%0A");

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Nasser Enterprise, I'd like to place an order:"
  )}%0A%0A${orderSummary}%0A%0A${encodeURIComponent(
    `Total: ₦${totalPrice.toLocaleString()}`
  )}`;

  if (isHydrated && cartProducts.length === 0) {
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <p className="text-6xl">🛒</p>
          <h1 className="mt-4 text-2xl font-bold">Your cart is empty</h1>
          <p className="mt-2 text-gray-500">
            Browse our products and add items to your cart.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
          >
            Shop Products
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Your Cart</h1>
        <p className="mt-2 text-gray-500">
          {cartProducts.length} item{cartProducts.length !== 1 ? "s" : ""} in
          your cart
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {cartProducts.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-4 rounded-2xl border p-4 sm:flex-row sm:items-center"
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-4xl"
                  >
                    {product.icon}
                  </Link>

                  <div className="flex-1">
                    <Link
                      href={`/products/${product.id}`}
                      className="font-bold hover:text-green-600"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-gray-500">{product.unit}</p>
                    <p className="mt-1 font-semibold text-green-600">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-lg border border-gray-300">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(product.id, quantity - 1)
                        }
                        className="px-3 py-1.5 font-bold text-gray-600 hover:text-green-600"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            Math.min(product.stock, quantity + 1)
                          )
                        }
                        className="px-3 py-1.5 font-bold text-gray-600 hover:text-green-600"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <span className="w-24 text-right font-bold">
                      ₦{(product.price * quantity).toLocaleString()}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Remove ${product.name}`}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={clearCart}
              className="mt-6 text-sm font-semibold text-gray-500 hover:text-red-600"
            >
              Clear cart
            </button>
          </div>

          <div className="h-fit rounded-2xl border bg-gray-50 p-6">
            <h2 className="text-lg font-bold">Order Summary</h2>

            <div className="mt-4 flex items-center justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="mt-4 flex items-center justify-between border-t pt-4 text-lg font-extrabold">
              <span>Total</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-xl bg-green-600 px-6 py-4 text-center font-bold text-white transition hover:bg-green-700"
            >
              Checkout via WhatsApp
            </a>

            <Link
              href="/products"
              className="mt-3 block rounded-xl border border-gray-300 px-6 py-4 text-center font-bold transition hover:border-green-600 hover:text-green-600"
            >
              Continue Shopping
            </Link>

            <p className="mt-4 text-center text-xs text-gray-400">
              Orders are confirmed directly with our team via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
