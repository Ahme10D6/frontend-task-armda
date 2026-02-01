import ProductDetailView from '@/components/ui/productDetails/productDetailView';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetailView id={id} />;
}
