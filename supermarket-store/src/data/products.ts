export type Product = {
id: string;
name: string;
slug: string;
category: string;
description: string;
price: number;
wholesalePrice: number;
wholesaleMinimum: number;
unit: string;
stock: number;
icon: string;
featured: boolean;
};

export const products: Product[] = [
{
id: "1",
name: "Premium Rice",
slug: "premium-rice",
category: "Groceries",
description:
"Quality rice suitable for homes, restaurants, events and businesses.",
price: 45000,
wholesalePrice: 42000,
wholesaleMinimum: 5,
unit: "25kg Bag",
stock: 100,
icon: "🍚",
featured: true,
},
{
id: "2",
name: "Spaghetti",
slug: "spaghetti",
category: "Groceries",
description:
"Quality spaghetti suitable for family meals, restaurants and food businesses.",
price: 12000,
wholesalePrice: 10500,
wholesaleMinimum: 10,
unit: "Carton",
stock: 100,
icon: "🍝",
featured: true,
},
{
id: "3",
name: "Macaroni",
slug: "macaroni",
category: "Groceries",
description:
"Quality macaroni for everyday cooking and food businesses.",
price: 12000,
wholesalePrice: 10500,
wholesaleMinimum: 10,
unit: "Carton",
stock: 100,
icon: "🍝",
featured: true,
},
{
id: "4",
name: "Indomie Instant Noodles",
slug: "indomie-instant-noodles",
category: "Groceries",
description:
"Popular instant noodles suitable for homes, shops, restaurants and bulk buyers.",
price: 11000,
wholesalePrice: 9800,
wholesaleMinimum: 10,
unit: "Carton",
stock: 120,
icon: "🍜",
featured: true,
},
{
id: "5",
name: "Cooking Oil",
slug: "cooking-oil",
category: "Groceries",
description:
"Quality cooking oil suitable for household and commercial cooking.",
price: 12000,
wholesalePrice: 11000,
wholesaleMinimum: 10,
unit: "5 Litres",
stock: 80,
icon: "🫗",
featured: true,
},
{
id: "6",
name: "Milk",
slug: "milk",
category: "Groceries",
description:
"Quality milk products suitable for families, restaurants and businesses.",
price: 10000,
wholesalePrice: 9000,
wholesaleMinimum: 10,
unit: "Carton",
stock: 70,
icon: "🥛",
featured: true,
},
{
id: "7",
name: "Assorted Biscuits",
slug: "assorted-biscuits",
category: "Biscuits & Snacks",
description:
"Assorted quality biscuits for homes, shops, offices and events.",
price: 10000,
wholesalePrice: 9000,
wholesaleMinimum: 10,
unit: "Carton",
stock: 100,
icon: "🍪",
featured: true,
},
{
id: "8",
name: "Cream Biscuits",
slug: "cream-biscuits",
category: "Biscuits & Snacks",
description:
"Tasty cream biscuits suitable for everyday snacks.",
price: 7500,
wholesalePrice: 6800,
wholesaleMinimum: 10,
unit: "Carton",
stock: 80,
icon: "🍪",
featured: false,
},
{
id: "9",
name: "Omo Detergent",
slug: "omo-detergent",
category: "Household",
description:
"Laundry detergent for washing clothes and everyday household cleaning.",
price: 8500,
wholesalePrice: 7600,
wholesaleMinimum: 5,
unit: "Carton",
stock: 60,
icon: "🧼",
featured: true,
},
{
id: "10",
name: "Laundry Detergent",
slug: "laundry-detergent",
category: "Household",
description:
"Effective laundry detergent for homes and businesses.",
price: 8500,
wholesalePrice: 7600,
wholesaleMinimum: 5,
unit: "Carton",
stock: 70,
icon: "🧺",
featured: false,
},
{
id: "11",
name: "Tissue Paper",
slug: "tissue-paper",
category: "Household",
description:
"Quality tissue paper for homes, offices, hotels and businesses.",
price: 7500,
wholesalePrice: 6800,
wholesaleMinimum: 10,
unit: "Pack",
stock: 100,
icon: "🧻",
featured: false,
},
{
id: "12",
name: "Bottled Water",
slug: "bottled-water",
category: "Drinks & Beverages",
description:
"Refreshing bottled drinking water for homes, offices, events and businesses.",
price: 4500,
wholesalePrice: 4000,
wholesaleMinimum: 10,
unit: "Pack",
stock: 200,
icon: "💧",
featured: true,
},
{
id: "13",
name: "Soft Drinks",
slug: "soft-drinks",
category: "Drinks & Beverages",
description:
"Assorted soft drinks suitable for homes, restaurants, shops and events.",
price: 9000,
wholesalePrice: 8200,
wholesaleMinimum: 10,
unit: "Crate",
stock: 100,
icon: "🥤",
featured: true,
},
{
id: "14",
name: "Fruit Juice",
slug: "fruit-juice",
category: "Drinks & Beverages",
description:
"Refreshing fruit juices suitable for homes, offices, restaurants and events.",
price: 10000,
wholesalePrice: 9000,
wholesaleMinimum: 10,
unit: "Carton",
stock: 80,
icon: "🧃",
featured: true,
},
{
id: "15",
name: "Malt Drink",
slug: "malt-drink",
category: "Drinks & Beverages",
description:
"Refreshing malt drinks suitable for homes, celebrations and businesses.",
price: 10000,
wholesalePrice: 9000,
wholesaleMinimum: 10,
unit: "Crate",
stock: 80,
icon: "🥤",
featured: false,
},
{
id: "16",
name: "Energy Drink",
slug: "energy-drink",
category: "Drinks & Beverages",
description:
"Energy drinks suitable for retail and bulk purchases.",
price: 12000,
wholesalePrice: 10800,
wholesaleMinimum: 10,
unit: "Carton",
stock: 60,
icon: "⚡",
featured: false,
},
{
id: "17",
name: "Juice Drinks",
slug: "juice-drinks",
category: "Drinks & Beverages",
description:
"Assorted juice drinks for homes, offices, parties and events.",
price: 9000,
wholesalePrice: 8200,
wholesaleMinimum: 10,
unit: "Carton",
stock: 75,
icon: "🧃",
featured: false,
},
{
id: "18",
name: "Bathing Soap",
slug: "bathing-soap",
category: "Personal Care",
description:
"Everyday bathing soap for personal hygiene and freshness.",
price: 6500,
wholesalePrice: 5800,
wholesaleMinimum: 10,
unit: "Carton",
stock: 90,
icon: "🧼",
featured: false,
},
{
id: "19",
name: "Toothpaste",
slug: "toothpaste",
category: "Personal Care",
description:
"Toothpaste for everyday oral hygiene and fresh breath.",
price: 7000,
wholesalePrice: 6200,
wholesaleMinimum: 10,
unit: "Carton",
stock: 80,
icon: "🪥",
featured: false,
},
{
id: "20",
name: "Cooking Pot Set",
slug: "cooking-pot-set",
category: "Kitchen",
description:
"Durable cooking pots suitable for homes and professional kitchens.",
price: 35000,
wholesalePrice: 32000,
wholesaleMinimum: 5,
unit: "Set",
stock: 30,
icon: "🍳",
featured: false,
},
];

export function getProductById(id: string): Product | undefined {
return products.find((product) => product.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
return products.filter(
(product) =>
product.category.toLowerCase() === category.toLowerCase()
);
}

export function searchProducts(searchTerm: string): Product[] {
const term = searchTerm.toLowerCase().trim();

if (!term) {
return products;
}

return products.filter(
(product) =>
product.name.toLowerCase().includes(term) ||
product.category.toLowerCase().includes(term) ||
product.description.toLowerCase().includes(term)
);
}

export const categoryList: string[] = Array.from(
new Set(products.map((product) => product.category))
);

