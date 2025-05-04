function StopIcon({ color }) {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.25 7C3.25 4.92893 4.92893 3.25 7 3.25H17C19.0711 3.25 20.75 4.92893 20.75 7V17C20.75 19.0711 19.0711 20.75 17 20.75H7C4.92893 20.75 3.25 19.0711 3.25 17V7Z'
        fill={color ? color : 'currentColor'}
      ></path>
    </svg>
  );
}

export default StopIcon;
