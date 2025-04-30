function ListIcon({ strokeWidth, color }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      fill='none'
      className='injected-svg'
      role='img'
      color={color ? color : 'currentColor'}
    >
      <path
        d='M9 5L21 5'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
      ></path>
      <path
        d='M3 5L5 5'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
      ></path>
      <path
        d='M9 12L21 12'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
      ></path>
      <path
        d='M3 12L5 12'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
      ></path>
      <path
        d='M9 19L21 19'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
      ></path>
      <path
        d='M3 19L5 19'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
      ></path>
    </svg>
  );
}

export default ListIcon;
