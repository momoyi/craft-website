export default function ProjectSkeleton() {
  return (
    <div className=''>
      <div className='animate-pulse md:px-4'>
        <div className='flex w-full flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-0'>
          <div className='shimmer h-5 w-48 rounded'></div>
          <div className='shimmer h-4 w-24 rounded'></div>
        </div>

        <div className='mt-10 space-y-2'>
          <div className='shimmer h-4 w-full rounded'></div>
          <div className='shimmer h-4 w-5/6 rounded'></div>
          <div className='shimmer h-4 w-3/4 rounded'></div>
        </div>

        <div className='pt-4'>
          <div className='shimmer h-4 w-40 rounded'></div>
        </div>
      </div>

      {/* Fake sandbox height */}
      <div className='mt-10 h-80 w-full rounded-md bg-gray-900'></div>
    </div>
  );
}
