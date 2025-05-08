function LocationMarkerIcon({ strokeWidth = 1.5, color = 'currentColor' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      fill='none'
      className='injected-svg'
      data-src='https://cdn.hugeicons.com/icons/location-04-stroke-standard.svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      color={color}
    >
      <path
        d='M6 18C4.75527 18.396 4 19.184 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.184 19.2447 18.396 18 18'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M19 9.2C19 13.9809 13.8979 17.0126 12.4054 17.7971C12.1485 17.9322 11.8515 17.9322 11.5946 17.7971C10.1021 17.0126 5 13.9809 5 9.2C5 5.22355 8.13401 2 12 2C15.866 2 19 5.22355 19 9.2Z'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}

export default LocationMarkerIcon;
