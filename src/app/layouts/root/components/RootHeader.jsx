import Link from 'next/link';

function RootHeader() {
  return (
    <header className='flex container justify-between py-5 tracking-tight'>
      <Link className='no-underline' href='/'>
        <div className='flex justify-start gap-3 items-center'>
          <div className='text-xl'>Craft</div>
          <div
            className='border text-gray-200 text-xs border-[rgba(255,255,255,0.12)] px-3 py-1.5
              rounded-full bg-[#1f1f1f]'
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
