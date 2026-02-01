import Link from 'next/link';
import Button from '@/components/shared/button';
import { SkeletonDetails } from '@/components/shared/skeletonLoader';
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-extrabold text-gray-100 select-none">
        404
      </h1>
      
      <div className="absolute flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link href="/">
          <Button 
            label="Go Back Home" 
            variant="primary" 
            className="px-10"
          />
        </Link>
      </div>
    </div>
  );
}