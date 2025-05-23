function CircleArrowUpIcon({ strokeWidth, color }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      fill='none'
      className='injected-svg'
      role='img'
      color={color || 'currentColor'}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM15.5294 11.0001L11.9995 7.46973L8.46875 11L9.52934 12.0608L11.2494 10.3409V16.5304H12.7494V10.3412L14.4687 12.0607L15.5294 11.0001Z'
        fill={color || 'currentColor'}
      ></path>
    </svg>
  );
}

export default CircleArrowUpIcon;
