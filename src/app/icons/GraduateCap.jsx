function GraduateCapIcon({ strokeWidth = 1.5, color = 'currentColor' }) {
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
        d='M6 11V17C6 17 8 19 12 19C16 19 18 17 18 17V11'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
      ></path>
      <path
        d='M20.5 16.5L19.0647 19.8435C18.8369 20.374 19.2391 21 19.8286 21H21.1714C21.7609 21 22.1631 20.374 21.9353 19.8435L20.5 16.5ZM20.5 16.5V9.5'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M11.88 3.00881C8.99494 3.42745 4.62406 5.88446 2.46271 7.18816C1.84576 7.5603 1.84576 8.4397 2.46271 8.81184C4.62406 10.1155 8.99494 12.5725 11.88 12.9912C11.961 13.0029 12.039 13.0029 12.12 12.9912C15.0051 12.5725 19.3759 10.1155 21.5373 8.81184C22.1542 8.4397 22.1542 7.5603 21.5373 7.18816C19.3759 5.88446 15.0051 3.42745 12.12 3.00881C12.039 2.99706 11.961 2.99706 11.88 3.00881Z'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}

export default GraduateCapIcon;
