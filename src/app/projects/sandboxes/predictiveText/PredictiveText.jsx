'use client';
import CircleArrowUpIcon from '@/app/icons/CirlceArrowUp';
import ImageIcon from '@/app/icons/Image';
import MicrophoneIcon from '@/app/icons/Microphone';
import { useState, useEffect } from 'react';

function PredictiveText() {
  const [inputValue, setInputValue] = useState('');
  const [empty, setEmpty] = useState(true);

  function handleInputChange(e) {
    let val = e.target.value;
    setInputValue(val);
    setEmpty(val.trim() === '');
  }

  return (
    <div className='sandbox font-inter h-70'>
      <div className='w-100 relative flex items-center'>
        <div className='absolute right-3 flex h-fit items-center'>
          {empty ? (
            <div className='flex gap-3 pr-2 text-[hsl(0,0%,80%)]'>
              <button className='h-5 w-5'>
                <MicrophoneIcon />
              </button>
              <button className='h-5 w-5'>
                <ImageIcon />
              </button>
            </div>
          ) : (
            <button className='h-8 w-8 text-white'>
              <CircleArrowUpIcon />
            </button>
          )}
        </div>

        <input
          className='w-full rounded-xl bg-[hsl(0,0%,9%)] p-4 font-semibold text-[hsl(100,0%,95%)] outline-none placeholder:text-[hsl(100,0%,40%)]'
          placeholder='Write a message'
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </div>
    </div>
  );
}

export default PredictiveText;
