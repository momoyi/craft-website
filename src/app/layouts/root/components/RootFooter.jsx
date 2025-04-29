import Link from 'next/link';

function RootFooter() {
  return (
    <footer className='flex mt-20 py-4 tracking-tight border-t border-[rgba(255,255,255,0.08)]'>
      <div className='container w-full flex justify-between'>
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
