function WriteIcon({ strokeWidth, color }) {
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
        d='M9.5 3H5C3.34315 3 2 4.34315 2 6V19C2 20.6569 3.34315 22 5 22H18C19.6569 22 21 20.6569 21 19V14'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 'currentColor'}
        strokeLinecap='round'
      ></path>
      <path
        d='M22 2C12.5 2 11 6.4 11 13C13.1024 13 16.407 12.2221 18.7729 9.95256C19.5427 9.21413 19.3295 7.99712 18.4761 7.35711L18 7C22 6 22 3 22 2Z'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 'currentColor'}
        strokeLinejoin='round'
      ></path>
      <path
        d='M9 17C10.5 13 12.5 10 15 8'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 'currentColor'}
        strokeLinecap='round'
      ></path>
    </svg>
  );
}

export default WriteIcon;
