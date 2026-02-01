import LoadingSkeleton from '@/components/shared/loader';

export default function ProductLoading() {
  return (
    <div className="container mx-auto px-4 py-10">
      <LoadingSkeleton type="details" />
    </div>
  );
}
