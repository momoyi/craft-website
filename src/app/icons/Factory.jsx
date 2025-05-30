function FactoryIcon({ strokeWidth, color }) {
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
        d='M3 10H9.00293'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M13.0034 2H8C6.89543 2 6 2.89543 6 4V4'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M16 2H17'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M11.0039 5H17.0068'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M8.97685 13.5222L15.0555 11.0594V13.5463L20.9885 11.0594L20.999 20.9987C20.9995 21.5515 20.5515 21.9999 19.9987 21.9998L8.97685 21.9972M8.97685 13.5222V21.9972M8.97685 13.5222V8.00192C8.97685 7.44889 8.52796 7.00086 7.97493 7.00192L3.99808 7.00956C3.44655 7.01062 3 7.45802 3 8.00956V20.9995C3 21.552 3.448 21.9998 4.00047 21.9995L8.97685 21.9972'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}

export default FactoryIcon;
