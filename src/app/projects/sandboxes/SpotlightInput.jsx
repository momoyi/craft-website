'use client';
import { useState, useEffect } from 'react';
import motion from 'motion';
import useMeasure from 'react-use-measure';
import ArrowUpIcon from '@/app/icons/ArrowUp';
import VoiceIcon from '@/app/icons/Voice';

export default function SpotlightInput() {
  const [inputVal, setInputVal] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (inputVal.length > 0) {
      setDialogOpen(true);
    }
  }, [inputVal]);

  return (
    <div className='flex flex-col gap-1 p-2'>
      <div className='relative flex items-center justify-between'>
        <div className='absolute right-3 flex justify-end gap-2'>
          <button
            disabled={inputVal.length > 0}
            className='ease text-gray-400 duration-300 hover:text-gray-700'
          >
            <VoiceIcon color={'currentColor'} />
          </button>
          {inputVal.length > 0 && (
            <button
              disabled={inputVal.length > 0}
              className='ease text-gray-400 duration-300 hover:text-gray-700'
            >
              <ArrowUpIcon color={'currentColor'} />
            </button>
          )}
        </div>
        <input
          className='flex w-[320] items-center justify-between rounded-[10px] border border-transparent bg-white px-6 py-3 leading-6 text-gray-800 outline-none placeholder:text-gray-400 focus:border focus:border-gray-300'
          placeholder='Search or ask'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log('Enter pressed');
            } else if (e.key === 'Escape') {
              setDialogOpen(false);
            }
          }}
        ></input>
      </div>
    </div>
  );
}
