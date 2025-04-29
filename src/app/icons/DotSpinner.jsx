function DotSpinner() {
  const dotStyle = {
    width: '4px',
    height: '4px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    position: 'absolute',
  };

  return (
    <div className='dotSpinner relative flex h-3 w-3 justify-center'>
      <div className='dot bottom-0 left-0' style={dotStyle}></div>
      <div className='dot top-0' style={dotStyle}></div>
      <div className='dot bottom-0 right-0' style={dotStyle}></div>
    </div>
  );
}

export default DotSpinner;
