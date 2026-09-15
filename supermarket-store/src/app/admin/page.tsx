"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { hasAdminSession, clearAdminSession } from "@/lib/admin-auth";
import { products, categoryList } from "@/data/products";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!hasAdminSession()) {
      router.replace("/admin/login");
    } else {
      setChecked(true);
    }
  }, [router]);

  const stats = useMemo(() => {
    const totalStockValue = products.reduce(
      (sum, p) => sum + p.price * p.stock,
      0
    );
    const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 10);
    const outOfStock = products.filter((p) => p.stock <= 0);

    return {
      totalProducts: products.length,
      totalCategories: categoryList.length,
      totalStockValue,
      lowStock,
      outOfStock,
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase().trim();
    if (!term) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }, [search]);

  function handleLogout() {
    clearAdminSession();
    router.push("/admin/login");
  }

  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500">Checking admin session…</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Link href="/" className="text-lg font-extrabold">
            🛒 <span className="text-green-600">NASSER</span> ADMIN
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-green-600">
              View Store
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-1 text-gray-500">
          Overview of your store's products and stock.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Products</p>
            <p className="mt-2 text-3xl font-extrabold">{stats.totalProducts}</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Categories</p>
            <p className="mt-2 text-3xl font-extrabold">{stats.totalCategories}</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Inventory Value (Retail)</p>
            <p className="mt-2 text-3xl font-extrabold">
              ₦{stats.totalStockValue.toLocaleString()}
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Low / Out of Stock</p>
            <p className="mt-2 text-3xl font-extrabold text-orange-600">
              {stats.lowStock.length + stats.outOfStock.length}
            </p>
          </div>
        </div>

        {(stats.lowStock.length > 0 || stats.outOfStock.length > 0) && (
          <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h2 className="font-bold text-orange-800">⚠️ Stock Alerts</h2>
            <ul className="mt-3 space-y-1 text-sm text-orange-700">
              {stats.outOfStock.map((p) => (
                <li key={p.id}>{p.name} — Out of stock</li>
              ))}
              {stats.lowStock.map((p) => (
                <li key={p.id}>
                  {p.name} — Only {p.stock} left
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-bold">All Products</h2>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-green-600 sm:w-64"
            />
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Product</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Retail Price</th>
                  <th className="px-4 py-3 font-semibold">Wholesale Price</th>
                  <th className="px-4 py-3 font-semibold">Stock</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="border-b last:border-0">
                    <td className="flex items-center gap-2 px-4 py-3">
                      <span className="text-xl">{p.icon}</span>
                      {p.name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{p.category}</td>
                    <td className="px-4 py-3">₦{p.price.toLocaleString()}</td>
                    <td className="px-4 py-3">₦{p.wholesalePrice.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      {p.stock <= 0 ? (
                        <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                          Out of stock
                        </span>
                      ) : p.stock <= 10 ? (
                        <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">
                          {p.stock} left
                        </span>
                      ) : (
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                          {p.stock} in stock
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            This dashboard currently reads product data directly from the
            site's code, so it's read-only. Connecting a database (e.g.
            Supabase, Firebase, or a custom backend) would let you edit
            stock, prices and add new products from here.
          </p>
        </div>
      </section>
    </main>
  );
}
