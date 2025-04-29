export default function VoiceIcon({ strokeWidth, color }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      class='injected-svg'
      role='img'
      color={color ? color : '#000000'}
    >
      <path
        d='M9 3V21'
        stroke={color ? color : '#000000'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M6 7V17'
        stroke={color ? color : '#000000'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M12 6V18'
        stroke={color ? color : '#000000'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M15 9L15 15'
        stroke={color ? color : '#000000'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M18 7L18 17'
        stroke={color ? color : '#000000'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M21 11L21 13'
        stroke={color ? color : '#000000'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M3 11L3 13'
        stroke={color ? color : '#000000'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}
