import { SkeletonCard, SkeletonDetails } from '@/components/shared/skeletonLoader';

export default function LoadingSkeleton({ type }: { type: 'card' | 'details' }) {
  if (type === 'details') {
    return (
      <div className="w-full container mx-auto px-4 py-10 ">
        <SkeletonDetails />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}