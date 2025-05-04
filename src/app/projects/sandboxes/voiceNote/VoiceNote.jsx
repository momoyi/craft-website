'use client';
import CheckIcon from '@/app/icons/Check';
import CloseIcon from '@/app/icons/Close';
import MicrophoneIcon from '@/app/icons/Microphone';
import PlayIcon from '@/app/icons/Play';
import SendIcon from '@/app/icons/Send';
import StopIcon from '@/app/icons/Stop';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';

function VoiceNote() {
  const [activeView, setActiveView] = useState('recording');
  const [recorded, setRecorded] = useState(false);

  let content = useMemo(() => {
    switch (activeView) {
      case 'default':
        return (
          <div className='absolute inset-0 flex items-center justify-center p-2'>
            <div className='h-5.5 w-5.5 text-white'>
              <MicrophoneIcon />
            </div>
          </div>
        );

      case 'recording':
        return (
          <div className='absolute inset-0 flex items-center justify-center overflow-hidden rounded-[100px] p-2'>
            <svg
              viewBox='0 0 100 100'
              className='absolute inset-0 h-full w-full'
              preserveAspectRatio='none'
            >
              <motion.rect
                x='0.5'
                y='0.5'
                width='calc(100% - 1px)'
                height='calc(100% - 1px)'
                rx='100'
                ry='100'
                fill='transparent'
                stroke='red'
                strokeWidth='1'
                strokeDasharray='400'
                strokeDashoffset='0'
                transition={{
                  duration: 12,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            </svg>
            <div className='sheen z-3 absolute left-0 top-0 h-[200%] w-[50%] bg-[rgba(255,255,255,0.02)]' />
            <div className='h-16 w-16'>
              <DotLottieReact
                src='https://lottie.host/72a2d0a2-0a09-4942-abd0-ecc503074098/nRYFGPFP6c.json'
                style={{ width: '100%', height: '100%' }}
                loop
                autoplay
              />
            </div>
          </div>
        );

      case 'play':
        return <PlayComponent />;
      default:
        break;
    }
  }, [activeView]);

  return (
    <div className='sandbox font-inter h-80'>
      <div className=''>
        <div className='relative flex justify-center'>
          <button className='z-3 relative flex h-16 w-16 items-center justify-center rounded-[100px] border border-[rgba(255,255,255,0.1)] bg-gray-900 transition-colors transition-transform duration-300 ease-out hover:bg-[#1c1c1c]'>
            <div>{content}</div>
          </button>
          <button className='z-1 absolute flex h-16 w-16 items-center justify-center rounded-[100px] border border-[rgba(255,255,255,0.1)] bg-gray-900 p-2 transition-colors transition-transform duration-300 ease-out hover:bg-[#1c1c1c] active:scale-95'>
            <div className='h-5.5 w-5.5 text-white'>
              <CloseIcon />
            </div>
          </button>
          <button className='z-1 absolute flex h-16 w-16 items-center justify-center rounded-[100px] border border-[rgba(255,255,255,0.1)] bg-gray-900 p-2 transition-colors transition-transform duration-300 ease-out hover:bg-[#1c1c1c] active:scale-95'>
            {recorded ? (
              <div className='h-5.5 w-5.5 text-white'>
                <SendIcon />
              </div>
            ) : (
              <div className='h-5.5 w-5.5 text-white'>
                <CheckIcon />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function PlayComponent({ duration }) {
  const [visibleDuration, setVisibleDuration] = useState(duration);
  const [durationString, setDurationString] = useState(
    toString(duration).padStart(2, '0')
  );
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (visibleDuration >= 0) {
      setInterval(() => {
        let str = toString(visibleDuration).padStart(2, '0');
        setDurationString(str);
        setVisibleDuration((prev) => prev - 1);
      }, 1000);
    }
  }, [visibleDuration]);

  return (
    <div className='absolute inset-0 flex items-center justify-center p-2'>
      <div className='flex items-center justify-center gap-1'>
        {paused ? (
          <div className='h-5.5 w-5.5'>
            <PlayIcon />
          </div>
        ) : (
          <div className='h-5.5 w-5.5'>
            <StopIcon />
          </div>
        )}

        <div className='flex text-base font-semibold tracking-tight'>
          {durationString.split('').map((char) => (
            <span>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VoiceNote;
