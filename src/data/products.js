import { assets } from "../assets/assets";

export const products = [
  {
    id: 1,
    name: "Modern Wooden Chair",
    price: "3200",
    regular_price: "4200",
    images: [{ src: assets.p1 }],
    categories: [{ name: "Chair" }],
    tags: [{ name: "Living Room" }],
  },
  {
    id: 2,
    name: "Minimal Sofa",
    price: "12000",
    regular_price: "15000",
    images: [{ src: assets.p2 }],
    categories: [{ name: "Sofa" }],
    tags: [{ name: "Living Room" }],
  },
  {
    id: 3,
    name: "Classic Wall Clock",
    price: "2500",
    regular_price: "3200",
    images: [{ src: assets.p3 }],
    categories: [{ name: "Decor" }],
    tags: [{ name: "Wall" }],
  },
  {
    id: 4,
    name: "Coffee Table",
    price: "5400",
    regular_price: "6200",
    images: [{ src: assets.p4 }],
    categories: [{ name: "Table" }],
    tags: [{ name: "Living Room" }],
  },
];