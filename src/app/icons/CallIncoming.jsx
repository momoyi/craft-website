function CallIncomingIcon({ strokeWidth, color }) {
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
        d='M15 5V9H19M21 3L15.4059 8.59414'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <path
        d='M7.33957 3H3.98685C3.43414 3 2.98438 3.44971 3.00042 4.00219C3.32014 15.0141 8.98594 20.6799 19.9978 20.9996C20.5503 21.0156 21 20.5659 21 20.0132V16.6604C21 16.2649 20.7671 15.9065 20.4057 15.7459L17.0654 14.2613C16.7171 14.1065 16.3111 14.163 16.0183 14.407L13.9654 16.1178C13.6762 16.3587 13.2747 16.4181 12.9315 16.2637C10.0586 14.971 9.02895 13.9414 7.73635 11.0685C7.58192 10.7253 7.64126 10.3238 7.8822 10.0346L9.59295 7.98173C9.83696 7.68891 9.89346 7.28291 9.73865 6.9346L8.25409 3.59432C8.09346 3.23291 7.73506 3 7.33957 3Z'
        stroke={color ? color : 'currentColor'}
        strokeWidth={strokeWidth ? strokeWidth : '1.5'}
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
}

export default CallIncomingIcon;
