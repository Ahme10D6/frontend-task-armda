'use client';

import { useEffect, useState } from 'react';
import { getProducts } from '@/lib/api';
import { Product } from '@/types/product';
import ProductCard from './productCard';
import { showErrorToast } from '@/components/shared/error';
import LoadingSkeleton from '@/components/shared/loader';

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setError(false);
      })
      .catch((err) => {
        showErrorToast(err, 'Failed to load products. Please try again.');
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-10">
        <LoadingSkeleton type="card" />
      </div>
    );
  }

  if (error || products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No products to show.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
