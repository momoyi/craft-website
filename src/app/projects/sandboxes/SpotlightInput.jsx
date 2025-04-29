'use client';
import { useState, useEffect } from 'react';
import motion from 'motion';
import useMeasure from 'react-use-measure';
import ArrowUpIcon from '@/app/icons/ArrowUp';
import VoiceIcon from '@/app/icons/Voice';
import DotSpinner from '@/app/icons/DotSpinner';

export default function SpotlightInput() {
  const [inputVal, setInputVal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentAction, setCurrentAction] = useState('looking');
  const [actionContent, setactionContent] = useState('');

  useEffect(() => {
    switch (currentAction) {
      case 'looking':
        setactionContent('Looking for files');
        break;
      case 'scanning':
        setactionContent('Scanning images');
        break;
      case 'recommending':
        setactionContent('Recommending actions');
        break;
      default:
        break;
    }
  }, [currentAction]);

  useEffect(() => {
    let timer1;
    let timer2;

    if (submitted) {
      timer1 = setTimeout(() => {
        setCurrentAction('scanning');

        timer2 = setTimeout(() => {
          setCurrentAction('recommending');
        }, 1100);
      }, 1500);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [submitted]);

  return (
    <div className='block'>
      {/* <button
        className='mb-5'
        onClick={() => {
          setDialogOpen(!dialogOpen);
        }}
      >
        Toggle
      </button> */}

      <div className='relative flex flex-col gap-1 rounded-xl p-2'>
        {submitted && (
          <div className='absolute inset-0 rounded-xl bg-amber-500'></div>
        )}

        <div className='relative'>
          {submitted && (
            <div className=' z-2 absolute flex w-full items-center justify-between px-2'>
              <div className='py-0.25 flex items-center gap-3'>
                <DotSpinner />
                <span className='text-sm font-medium'>Thinking...</span>
              </div>
              <div className='text-[rgba(255,255,255,0.6)]'>
                <span key={currentAction}>{actionContent}</span>
              </div>
            </div>
          )}
          <div className=' z-2 relative flex w-full items-center justify-between px-2 opacity-0'>
            <div className='py-0.25 flex items-center gap-3'>
              <DotSpinner />
              <span className='text-sm font-medium'>Thinking...</span>
            </div>
            <div className='text-[rgba(255,255,255,0.6)]'>
              <span key={currentAction}>{actionContent}</span>
            </div>
          </div>
        </div>

        <div className='relative flex items-center justify-between'>
          <div className='absolute right-3 flex justify-end gap-2'>
            <button
              disabled={!inputVal.length > 0}
              className='ease disabled:pointer-events-none: text-gray-400 duration-300 hover:text-gray-700'
            >
              <VoiceIcon color={'currentColor'} />
            </button>
            {inputVal.length > 0 && (
              <button
                disabled={!inputVal.length > 0}
                onClick={() => setSubmitted(true)}
                className='ease disabled:pointer-events-none: text-gray-400 duration-300 hover:text-gray-700'
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
                setSubmitted(true);
              } else if (e.key === 'Escape') {
                if (submitted) {
                  setSubmitted(false);
                }
              }
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}
