import LoadingSkeleton from '@/components/shared/loader';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-10">
      <LoadingSkeleton type="card" />
    </div>
  );
}
