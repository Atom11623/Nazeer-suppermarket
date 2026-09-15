import Link from "next/link";

type CategoryCardProps = {
  name: string;
  icon: string;
  description: string;
};

export default function CategoryCard({
  name,
  icon,
  description,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${name.toLowerCase().replace(/\s+/g, "-")}`}
      className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
    >
      <div className="text-5xl transition duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-4 font-bold text-gray-900 group-hover:text-green-600">
        {name}
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-500">
        {description}
      </p>

      <span className="mt-4 inline-block text-xs font-semibold text-green-600">
        Shop Now →
      </span>
    </Link>
  );
}