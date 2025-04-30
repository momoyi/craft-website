'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import useMeasure from 'react-use-measure';
import ArrowUpIcon from '@/app/icons/ArrowUp';
import VoiceIcon from '@/app/icons/Voice';
import DotSpinner from '@/app/icons/DotSpinner';
import SpotlightDialog from './SpotlightDialog';
import clsx from 'clsx';

export default function SpotlightInput() {
  const [inputVal, setInputVal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentAction, setCurrentAction] = useState('looking');
  const [actionContent, setactionContent] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ref, bounds] = useMeasure();

  const dialogDelay = 0.4;

  const processChars = 'Thinking...'.split('');

  function resetInput() {
    setInputVal('');
    setSubmitted(false);
    setCurrentAction('looking');
    setDialogOpen(false);
  }

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
    let timer3;

    if (submitted) {
      timer1 = setTimeout(() => {
        setCurrentAction('scanning');

        timer2 = setTimeout(() => {
          setCurrentAction('recommending');

          timer3 = setTimeout(() => {
            setDialogOpen(true);
            setCurrentAction('looking');
          }, 1500);
        }, 1500);
      }, 1500);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
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

      <div className='font-inter relative flex flex-col gap-1 rounded-xl p-2'>
        <AnimatePresence>
          {submitted && !dialogOpen && (
            <motion.div
              key={dialogOpen}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', visualDuration: 0.5, bounce: 0 }}
              className='absolute inset-0 z-0 h-full overflow-hidden rounded-xl'
            >
              <div className='animated-gradient absolute right-0 top-0 h-full w-[400%]'></div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className='relative'>
          {submitted && !dialogOpen && (
            <AnimatePresence>
              <motion.div
                key={dialogOpen}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                dela
                transition={{
                  type: 'spring',
                  visualDuration: 0.5,
                  bounce: 0,
                  delay: 0.15,
                }}
                className='z-2 absolute flex w-full items-center justify-between overflow-hidden px-2 pb-1'
              >
                <div className='py-0.25 flex items-center gap-3'>
                  <DotSpinner />
                  {submitted && !dialogOpen && (
                    <div className='flex'>
                      {processChars.map((char, index) => (
                        <div className='flex text-sm'>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.5,
                              ease: 'easeInOut',
                              delay: index * 0.03,
                              repeat: Infinity,
                              repeatType: 'reverse',
                              repeatDelay: 0.5,
                            }}
                            key={index}
                          >
                            {char}
                          </motion.span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className='relative flex h-[1.5em] items-center justify-end overflow-y-clip whitespace-nowrap text-right text-sm text-[rgba(255,255,255,0.6)]'>
                  <AnimatePresence mode='sync'>
                    <motion.span
                      key={currentAction}
                      className='absolute right-0'
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={{ y: '-100%', opacity: 0 }}
                      transition={{
                        delay: 0.5,
                        duration: 0.4,
                        type: 'spring',
                        bounce: 0,
                      }}
                    >
                      {actionContent}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Relative version to hold the space so there are no layout jumps */}
          <div className='z-2 pointer-events-none relative flex w-full items-center justify-between px-2 pb-1 opacity-0'>
            <div className='py-0.25 flex items-center gap-3'>
              <DotSpinner />
              <span className='text-sm font-medium'>Thinking...</span>
            </div>
            <div className='text-[rgba(255,255,255,0.6)]'>
              <span key={currentAction}>{actionContent}</span>
            </div>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={{
            height: bounds.height || 'auto',
            width: bounds.width || 'auto',
          }}
          transition={{
            duration: 0.75,
            type: 'spring',
            bounce: 0,
            delay: dialogDelay,
          }}
          className='flex origin-bottom flex-col justify-end overflow-hidden rounded-xl bg-white'
        >
          <div className='inner w-fit' ref={ref}>
            <SpotlightDialog
              open={dialogOpen}
              transitionDelay={dialogDelay}
              reset={resetInput}
            />

            <div className='relative flex w-fit items-center justify-between rounded-xl bg-white'>
              <div className='z-2 absolute right-3 flex justify-end gap-2'>
                <button
                  disabled={!inputVal.length > 0}
                  onClick={() => setSubmitted(true)}
                  onMouseDown={() => setIsPressed(true)}
                  onMouseUp={() => setIsPressed(false)}
                  onMouseLeave={() => setIsPressed(false)}
                  className='ease disabled:pointer-events-none: text-gray-400 duration-300 hover:text-gray-700'
                >
                  <VoiceIcon color={'currentColor'} />
                </button>
                {inputVal.length > 0 && (
                  <button
                    disabled={!inputVal.length > 0}
                    onMouseDown={() => setIsPressed(true)}
                    onMouseUp={() => setIsPressed(false)}
                    onMouseLeave={() => setIsPressed(false)}
                    onClick={() => setSubmitted(true)}
                    className='ease disabled:pointer-events-none: text-gray-400 duration-300 hover:text-gray-700'
                  >
                    <ArrowUpIcon color={'currentColor'} />
                  </button>
                )}
              </div>
              <motion.input
                className='flexitems-center w-[480px] justify-between rounded-[10px] border border-transparent bg-white px-4 py-3 text-sm font-medium leading-6 text-gray-800 opacity-100 outline-none placeholder:text-gray-400 focus:border focus:border-gray-300'
                placeholder='Search or ask'
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                disabled={dialogOpen}
                style={{
                  transition: 'transform 0.15s linear',
                  transform:
                    isPressed && !submitted ? 'scale(0.95)' : 'scale(1)',
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSubmitted(true);
                  } else if (e.key === 'Escape') {
                    if (submitted && dialogOpen) {
                      setSubmitted(false);
                    }
                  }
                }}
              ></motion.input>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
