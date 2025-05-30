function NewTabIcon({ strokeWidth, color }) {
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
        d='M10.0017 3C7.05534 3.03208 5.41096 3.21929 4.31838 4.31188C2.99988 5.63037 2.99988 7.75248 2.99988 11.9966C2.99988 16.2409 2.99988 18.363 4.31838 19.6815C5.63688 21 7.75899 21 12.0032 21C16.2474 21 18.3695 21 19.688 19.6815C20.7808 18.5887 20.9678 16.9438 20.9999 13.9963'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M14 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V10M20 4L11 13'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}

export default NewTabIcon;
