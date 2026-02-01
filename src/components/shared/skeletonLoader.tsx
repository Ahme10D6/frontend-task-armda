export  function SkeletonCard() {
      return (
        <div className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm h-full animate-pulse">
          <div className="w-40 h-40 bg-gray-400 rounded-xl mb-4" />
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4" />
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-6" />
          <div className="w-full h-12 bg-gray-300 rounded-xl" />
        </div>
      );
    }

export function SkeletonDetails() {
  return (
    <div className="container mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center bg-[#F6F6F6] rounded-2xl p-10">
          <div className="w-full max-w-[400px] aspect-square bg-gray-300 rounded-xl" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-9 bg-gray-300 rounded w-3/4" />
          <div className="flex items-center gap-2">
            <div className="h-6 w-24 bg-gray-300 rounded" />
            <div className="h-4 w-12 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-20 bg-gray-300 rounded" />
            <div className="h-6 w-16 bg-gray-200 rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
          <div className="flex gap-4 mt-6">
            <div className="flex-1 h-12 bg-gray-300 rounded-xl" />
            <div className="flex-1 h-12 bg-gray-300 rounded-xl" />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#F6F6F6] p-4 rounded-xl">
                <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto mb-2" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}