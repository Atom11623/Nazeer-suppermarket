import Link from "next/link";

export default function Footer() {
return ( <footer className="bg-gray-950 text-white"> <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"> <div> <h2 className="text-xl font-extrabold sm:text-2xl">
🛒 <span className="text-green-500">NASSER</span> ENTERPRISE </h2>


      <p className="mt-4 leading-7 text-gray-400">
        Nasser Enterprise NIG. LTD is your trusted destination
        for groceries, beverages, household essentials and
        everyday products.
      </p>

      <p className="mt-4 text-sm font-semibold text-gray-300">
        Retail & Wholesale
      </p>
    </div>

    <div>
      <h3 className="font-bold">Shop</h3>

      <div className="mt-4 flex flex-col gap-3 text-gray-400">
        <Link href="/products" className="hover:text-white">
          Products
        </Link>

        <Link href="/categories" className="hover:text-white">
          Categories
        </Link>

        <Link href="/wholesale" className="hover:text-white">
          Wholesale
        </Link>

        <Link href="/cart" className="hover:text-white">
          Shopping Cart
        </Link>
      </div>
    </div>

    <div>
      <h3 className="font-bold">Company</h3>

      <div className="mt-4 flex flex-col gap-3 text-gray-400">
        <Link href="/about" className="hover:text-white">
          About Us
        </Link>

        <Link href="/contact" className="hover:text-white">
          Contact Us
        </Link>

        <Link href="/delivery" className="hover:text-white">
          Delivery
        </Link>

        <Link href="/privacy" className="hover:text-white">
          Privacy Policy
        </Link>
      </div>
    </div>

    <div>
      <h3 className="font-bold">Contact</h3>

      <div className="mt-4 space-y-3 text-gray-400">
        <p>
          📍 No. 001 Hausa Quarters, Obajana,
          Lokoja, Kogi State
        </p>

        <p>🇳🇬 Nigeria</p>

        <p>📞 Contact us for orders</p>

        <p>💬 WhatsApp available</p>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-800">
    <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-center text-sm text-gray-500 sm:flex-row sm:justify-between lg:px-8">
      <p>
        © {new Date().getFullYear()} Nasser Enterprise NIG. LTD.
        All rights reserved.
      </p>

      <p>
        Obajana, Lokoja, Kogi State, Nigeria
      </p>
    </div>
  </div>
</footer>


);
}
