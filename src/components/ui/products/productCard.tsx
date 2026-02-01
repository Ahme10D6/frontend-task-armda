'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/shared/button";
import { Product } from "@/types/product";
import { Heart } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  return (
    <Link href={`/product/${product.id}`} key={product.id} className="group block">
      <div className="relative flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
        <button
          type="button"
          onClick={toggleFavorite}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/90 shadow-sm hover:bg-white hover:shadow transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"
            }`}
          />
        </button>
        <div className="relative w-40 h-40 mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <h2 className="text-sm font-medium text-center line-clamp-2 mb-2 h-10">
          {product.title}
        </h2>
        <p className="text-xl font-bold text-black mb-4">${product.price}</p>
        <Button label="Buy Now" variant="primary" className="w-full mt-auto" />
      </div>
    </Link>
  );
}