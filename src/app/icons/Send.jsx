function SendIcon({ color }) {
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
        d='M22.2119 2.73615C22.3006 2.46843 22.2317 2.17356 22.0334 1.97295C21.8352 1.77234 21.5412 1.69992 21.2724 1.78551L2.27241 7.83651C1.97497 7.93124 1.7673 8.20031 1.75103 8.51205C1.73475 8.82379 1.91328 9.11302 2.19925 9.2382L10.1996 12.7403L14.4705 8.46977L15.5311 9.53046L11.2403 13.821L14.5075 21.7845C14.6266 22.0747 14.9138 22.2602 15.2273 22.2493C15.5409 22.2385 15.8146 22.0336 15.9133 21.7358L22.2119 2.73615Z'
        fill={color ? color : 'currentColor'}
      ></path>
    </svg>
  );
}

export default SendIcon;
