import Link from 'next/link';

function RootFooter() {
  return (
    <footer className='flex border-t border-[rgba(255,255,255,0.08)] py-4 tracking-tight'>
      <div className='container flex w-full flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-0'>
        <p className='text-gray-500'>
          Obsessed with quality craft, constantly executing.
        </p>

        <a
          className='text-sm text-white hover:text-white'
          target='_blank'
          rel='noopener noreferrer'
          href='https://momoyi.design'
        >
          momoyi.design
        </a>
      </div>
    </footer>
  );
}

export default RootFooter;
