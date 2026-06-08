import dogFood1 from "@/assets/products/dog-food-1.jpg";
import dogFood2 from "@/assets/products/dog-food-2.jpg";
import dogFood3 from "@/assets/products/dog-food-3.jpg";
import dogFood4 from "@/assets/products/dog-food-4.jpg";
import catFood1 from "@/assets/products/cat-food-1.jpg";
import catFood2 from "@/assets/products/cat-food-2.jpg";
import catFood3 from "@/assets/products/cat-food-3.jpg";
import catFood4 from "@/assets/products/cat-food-4.jpg";
import treats1 from "@/assets/products/treats-1.jpg";
import treats2 from "@/assets/products/treats-2.jpg";
import treats3 from "@/assets/products/treats-3.jpg";
import treats4 from "@/assets/products/treats-4.jpg";
import toys1 from "@/assets/products/toys-1.jpg";
import toys2 from "@/assets/products/toys-2.jpg";
import toys3 from "@/assets/products/toys-3.jpg";
import toys4 from "@/assets/products/toys-4.jpg";
import accessories1 from "@/assets/products/accessories-1.jpg";
import accessories2 from "@/assets/products/accessories-2.jpg";
import accessories3 from "@/assets/products/accessories-3.jpg";
import accessories4 from "@/assets/products/accessories-4.jpg";

export interface Product {
  name: string;
  price: string;
  image: string;
  tag?: string;
}

export interface Category {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  cover: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    slug: "dog-food",
    name: "Dog Food",
    emoji: "🐕",
    tagline: "Complete & balanced nutrition",
    description:
      "Premium dry and wet food for every breed and life stage — packed with real meat and wholesome ingredients to keep tails wagging.",
    cover: dogFood1,
    products: [
      { name: "Premium Adult Kibble", price: "₹1,299", image: dogFood1, tag: "Bestseller" },
      { name: "Real Meat Wet Food", price: "₹149", image: dogFood2 },
      { name: "Grain-Free Puppy Food", price: "₹1,499", image: dogFood3, tag: "New" },
      { name: "Senior Dog Formula", price: "₹1,349", image: dogFood4 },
    ],
  },
  {
    slug: "cat-food",
    name: "Cat Food",
    emoji: "🐈",
    tagline: "Purr-fect meals for felines",
    description:
      "Nutritious dry and wet cat food crafted to support healthy coats, strong muscles and happy, playful kitties.",
    cover: catFood1,
    products: [
      { name: "Premium Cat Kibble", price: "₹1,099", image: catFood1, tag: "Bestseller" },
      { name: "Wet Food in Gravy", price: "₹89", image: catFood2 },
      { name: "Tuna Delight Can", price: "₹129", image: catFood3 },
      { name: "Kitten Growth Formula", price: "₹1,199", image: catFood4, tag: "New" },
    ],
  },
  {
    slug: "treats",
    name: "Treats",
    emoji: "🦴",
    tagline: "Rewards they'll love",
    description:
      "Healthy, tasty treats for training and pampering — from dental chews to crunchy biscuits and protein-rich jerky.",
    cover: treats1,
    products: [
      { name: "Dental Chew Sticks", price: "₹299", image: treats1, tag: "Bestseller" },
      { name: "Crunchy Dog Biscuits", price: "₹199", image: treats2 },
      { name: "Chicken Jerky Strips", price: "₹349", image: treats3 },
      { name: "Soft Training Treats", price: "₹179", image: treats4, tag: "New" },
    ],
  },
  {
    slug: "toys",
    name: "Toys",
    emoji: "🧸",
    tagline: "Hours of happy play",
    description:
      "Durable, safe and fun toys to keep your pets active and engaged — from tug ropes to squeaky balls and chew bones.",
    cover: toys1,
    products: [
      { name: "Cotton Rope Tug Toy", price: "₹249", image: toys1, tag: "Bestseller" },
      { name: "Squeaky Rubber Ball", price: "₹149", image: toys2 },
      { name: "Durable Chew Bone", price: "₹299", image: toys3 },
      { name: "Feather Cat Wand", price: "₹199", image: toys4, tag: "New" },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    emoji: "🎀",
    tagline: "Everyday essentials with style",
    description:
      "Stylish, comfortable and practical accessories — premium collars, leashes, bowls and cozy beds for your furry family.",
    cover: accessories1,
    products: [
      { name: "Leather Collar", price: "₹599", image: accessories1, tag: "Bestseller" },
      { name: "Matching Leash", price: "₹699", image: accessories2 },
      { name: "Steel Food Bowl", price: "₹449", image: accessories3 },
      { name: "Plush Pet Bed", price: "₹1,899", image: accessories4, tag: "New" },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
