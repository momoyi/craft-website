function BackIcon({ strokeWidth, color }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className='injected-svg'
      role='img'
      color={color ? color : 'currentColor'}
    >
      <path
        d='M4.00002 6L4.00002 18'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
      ></path>
      <path
        d='M20 12L8.37476 12M12 8L8.00002 12L12 16'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
      ></path>
    </svg>
  );
}

export default BackIcon;
