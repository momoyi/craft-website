'use client';
import CheckIcon from '@/app/icons/Check';
import CloseIcon from '@/app/icons/Close';
import MicrophoneIcon from '@/app/icons/Microphone';
import PlayIcon from '@/app/icons/Play';
import SendIcon from '@/app/icons/Send';
import StopIcon from '@/app/icons/Stop';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';

function VoiceNote() {
  const [activeView, setActiveView] = useState('default');
  const [recorded, setRecorded] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(null);

  const moveTransition = { type: 'spring', bounce: 0.5, visualDuration: 0.4 };

  function reset() {
    setRecordingDuration(0);
    setRecorded(false);
    setActiveView('default');
  }

  useEffect(() => {
    let timer;
    if (activeView === 'recording') {
      timer = setInterval(() => {
        setRecordingDuration((prev) => prev + 0.5);
      }, 500);
    }

    return () => {
      clearInterval(timer);
    };
  }, [activeView]);

  let content = useMemo(() => {
    switch (activeView) {
      case 'default':
        return (
          <div
            onClick={() => {
              setActiveView('recording');
            }}
            className='absolute inset-0 flex h-full w-full items-center justify-center p-2'
          >
            <div className='h-5.5 w-5.5 text-white'>
              <MicrophoneIcon />
            </div>
          </div>
        );

      case 'recording':
        return (
          <div className='absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden rounded-[100px] bg-[rgba(255,0,11,0.05)] p-2'>
            <svg
              className='z-2 absolute inset-0 h-full w-full'
              width='100%'
              height='100%'
              viewBox='0 0 104 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <motion.path
                d='M103.5 32 C103.5 49.397 89.397 63.5 72 63.5 H32 C14.603 63.5 0.5 49.397 0.5 32 C0.5 14.603 14.603 0.5 32 0.5 H72 C89.397 0.5 103.5 14.603 103.5 32 Z'
                stroke='#ff0013'
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: {
                    duration: 12,
                    ease: 'linear',
                  },
                  opacity: {
                    duration: 0.5,
                    ease: 'easeIn',
                  },
                }}
                onAnimationComplete={() => {
                  setActiveView('play');
                }}
              />
            </svg>

            <div className='sheen z-3 pointer-events-none absolute left-0 top-[-20%] h-[200%] w-[50%] bg-[rgba(255,255,255,0.02)]' />
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
        return <PlayComponent duration={recordingDuration} />;
      default:
        break;
    }
  }, [activeView]);

  return (
    <div className='sandbox font-inter h-80'>
      {/* To preload lottie file */}
      <div className='hidden'>
        <DotLottieReact
          src='https://lottie.host/72a2d0a2-0a09-4942-abd0-ecc503074098/nRYFGPFP6c.json'
          autoplay={false}
          loop={false}
          style={{ display: 'none' }}
        />
      </div>

      <div className=''>
        <div className='relative flex justify-center'>
          {/* Center button (with should be w-26) */}
          <motion.button
            initial={{ width: 64 }}
            animate={{ width: activeView === 'default' ? 64 : 104 }}
            transition={moveTransition}
            className='z-3 relative flex h-16 items-center justify-center rounded-[100px] border border-[rgba(255,255,255,0.1)] bg-gray-900 transition-colors transition-transform duration-300 ease-out hover:bg-[#1c1c1c]'
          >
            <AnimatePresence initial={false} mode='popLayout'>
              <motion.div
                initial={{ filter: 'blur(4px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                exit={{ filter: 'blur(4px)', opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                key={activeView}
                className='h-full w-full'
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Side buttons */}
          <motion.button
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x:
                activeView === 'default' ? 0 : 'calc(-100% - (40px / 2) - 8px)',
              opacity: activeView === 'default' ? 0 : 1,
            }}
            transition={{
              x: moveTransition,
              opacity: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
            }}
            onClick={() => {
              reset();
            }}
            className='z-1 absolute flex h-16 w-16 items-center justify-center rounded-[100px] border border-[rgba(255,255,255,0.1)] bg-gray-900 p-2 transition-colors transition-transform duration-300 ease-out hover:bg-[#1c1c1c] active:scale-95'
          >
            <div className='h-5.5 w-5.5 text-white'>
              <CloseIcon />
            </div>
          </motion.button>

          <motion.button
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: activeView === 'default' ? 0 : 'calc(100% + (40px / 2) + 8px)',
              opacity: activeView === 'default' ? 0 : 1,
            }}
            transition={{
              x: moveTransition,
              opacity: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
            }}
            onClick={() => {
              setRecorded(true);
              setActiveView('play');
            }}
            className='z-1 absolute flex h-16 w-16 items-center justify-center rounded-[100px] border border-[rgba(255,255,255,0.1)] bg-gray-900 p-2 transition-colors transition-transform duration-300 ease-out hover:bg-[#1c1c1c] active:scale-95'
          >
            <AnimatePresence initial='false' mode='popLayout'>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                key={recorded}
                transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
                className=''
              >
                {recorded ? (
                  <div className='h-5.5 w-5.5 text-white'>
                    <SendIcon />
                  </div>
                ) : (
                  <div className='h-5.5 w-5.5 text-white'>
                    <CheckIcon />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function PlayComponent({ duration }) {
  const [visibleDuration, setVisibleDuration] = useState(Math.round(duration));
  const [durationString, setDurationString] = useState(
    Math.round(duration).toString().padStart(2, '0')
  );
  const [paused, setPaused] = useState(true);
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setVisibleDuration((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    setDurationString(visibleDuration.toString().padStart(2, '0') + 's');

    if (visibleDuration === 0) {
      setTimeout(() => {
        setPaused(true);
        setVisibleDuration(Math.round(duration));
      }, 1000);
    }
  }, [visibleDuration]);

  if (duration == null || isNaN(duration)) return null;

  return (
    <div
      onClick={() => {
        setPaused((prev) => !prev);
      }}
      className='absolute inset-0 flex h-full w-full items-center justify-center p-2'
    >
      <div
        className={clsx(
          'ease duration-250 flex items-center justify-center gap-1 transition-colors',
          paused ? '' : 'text-[#ff000b]'
        )}
      >
        <AnimatePresence initial={false} mode='popLayout'>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            key={paused}
            transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
          >
            {paused ? (
              <div className='h-5.5 w-5.5'>
                <PlayIcon />
              </div>
            ) : (
              <div className='h-5.5 w-5.5'>
                <StopIcon />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          animate={{ width: bounds.width }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
        >
          <div
            ref={ref}
            className='flex w-fit text-base font-semibold tracking-wide'
          >
            {durationString.split('').map((char, index) => (
              <AnimatePresence key={index} initial={false} mode='popLayout'>
                <motion.span
                  key={char}
                  initial={{
                    y: paused ? -8 : 8,
                    opacity: 0,
                    filter: 'blur(3px)',
                    scale: 0.5,
                  }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  exit={{
                    y: paused ? 8 : -8,
                    opacity: 0,
                    filter: 'blur(3px)',
                    scale: 0.5,
                  }}
                  transition={{
                    y: { type: 'spring', bounce: 0.4, visualDuration: 0.5 },
                    opacity: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
                    filter: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              </AnimatePresence>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default VoiceNote;
