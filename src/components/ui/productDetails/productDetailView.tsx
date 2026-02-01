'use client';

import { useEffect, useState } from 'react';
import { getProduct } from '@/lib/api';
import { Product } from '@/types/product';
import Breadcrumbs from '@/components/shared/breadcrumbs';
import ProductContainer from './prouductContainer';
import { showErrorToast } from '@/components/shared/error';
import LoadingSkeleton from '@/components/shared/loader';
import Button from '@/components/shared/button';
import { useRouter } from 'next/navigation';

export default function ProductDetailView({ id }: { id: string }) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const numericId = parseInt(id, 10);
    if (Number.isNaN(numericId)) {
      showErrorToast(new Error('Invalid product ID'));
    }

    getProduct(numericId)
      .then((data) => setProduct(data))
      .catch((err) => {
        showErrorToast(err, 'Failed to load product. Please try again.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-10">
        <LoadingSkeleton type="details" />
      </div>
    );
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-10">
      <p className="text-center text-gray-500">Product not found.</p>
      <Button label="Go back to home" variant="primary" onClick={() => router.back()} />
    </div>
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Breadcrumbs customLabels={{ [id]: product.title }} />
      <ProductContainer product={product} />
    </div>
  );
}
