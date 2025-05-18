import Link from 'next/link';

function RootHeader() {
  return (
    <header className='container flex flex-col gap-6 py-5 tracking-tight md:flex-row md:justify-between md:gap-0'>
      <Link prefetch={true} className='no-underline' href='/'>
        <div className='flex items-center justify-start gap-3'>
          <div className='text-xl'>Craft</div>
          <div
            className='rounded-full border border-[rgba(255,255,255,0.12)] bg-[#1f1f1f] px-3 py-1.5
              text-center text-xs text-gray-200'
          >
            Moyi's interactive React explorations & components
          </div>
        </div>
      </Link>

      <a
        className='text-sm text-white hover:text-white'
        target='_blank'
        rel='noopener noreferrer'
        href='https://momoyi.design'
      >
        Visit my portfolio
      </a>
    </header>
  );
}

export default RootHeader;
