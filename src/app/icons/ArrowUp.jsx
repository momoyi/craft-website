function ArrowUpIcon({ strokeWidth, color }) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 7V17'
        stroke={color ? color : 'black'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 12L12 7L7 12'
        stroke={color ? color : 'black'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default ArrowUpIcon;
