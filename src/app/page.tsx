import { Suspense } from 'react';
import Breadcrumbs from '@/components/shared/breadcrumbs';
import ProductGrid from '@/components/ui/products/productGrid';
import Loading from '@/app/loading';

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Breadcrumbs customLabels={{ 'product': 'Product' }} />
      <Suspense fallback={<Loading />}>
        <ProductGrid />
      </Suspense>
    </div>
  );
}