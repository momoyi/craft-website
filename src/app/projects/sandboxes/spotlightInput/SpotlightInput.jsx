'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import useMeasure from 'react-use-measure';
import ArrowUpIcon from '@/app/icons/ArrowUp';
import VoiceIcon from '@/app/icons/Voice';
import DotSpinner from '@/app/icons/DotSpinner';
import SpotlightDialog from './SpotlightDialog';
import clsx from 'clsx';
import SpotlightActions from './SpotlightActions';

export default function SpotlightInput() {
  const [inputVal, setInputVal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentAction, setCurrentAction] = useState('looking');
  const [actionContent, setactionContent] = useState('');
  const [activeFile, setActiveFile] = useState(false);
  const [activeView, setActiveView] = useState('input');
  const [isPressed, setIsPressed] = useState(false);
  const [transitionDelay, setTransitionDelay] = useState(0.3);
  const [ref, bounds] = useMeasure();

  const content = useMemo(() => {
    switch (activeView) {
      case 'input':
        break;
      case 'dialog':
        return (
          <SpotlightDialog
            setActiveView={setActiveView}
            transitionDelay={transitionDelay}
            reset={resetInput}
            setActiveFile={setActiveFile}
          />
        );
      case 'actions':
        return (
          <SpotlightActions
            transitionDelay={transitionDelay}
            reset={resetInput}
            activeFile={activeFile}
            setActiveView={setActiveView}
          />
        );
    }
  }, [activeView]);

  const processChars = 'Thinking...'.split('');

  function resetInput() {
    setInputVal('');
    setSubmitted(false);
    setCurrentAction('looking');
    setActiveView('input');
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
            setActiveView('dialog');
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
      <div
        className='font-inter relative flex flex-col gap-1 rounded-xl p-2 pb-4'
        style={{
          '--external-padding-vertical': '6px',
          '--external-padding-horizontal': '10px',
        }}
      >
        <AnimatePresence>
          {submitted && activeView === 'input' && (
            <motion.div
              key={activeView}
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
          {submitted && activeView === 'input' && (
            <AnimatePresence>
              <motion.div
                key={activeView}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
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
                  {submitted && activeView === 'input' && (
                    <div className='flex'>
                      {processChars.map((char, index) => (
                        <div className='flex text-sm' key={index}>
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
                  <AnimatePresence mode='wait'>
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
          }}
          className='flex origin-bottom flex-col justify-end overflow-hidden rounded-xl bg-white'
        >
          <div className='inner w-fit' ref={ref}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeView}
                exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0 }}
              >
                {content}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {activeView !== 'actions' && (
                <motion.div
                  initial={{ opacity: 0, y: '120%' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: '120%',
                    transition: { duration: 0.3, delay: 0 },
                  }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className='relative flex w-fit items-center justify-between overflow-hidden rounded-xl bg-white'
                >
                  <div className='z-2 absolute right-3 flex justify-end gap-2 overflow-hidden'>
                    <div
                      style={{
                        transform:
                          inputVal.length > 0
                            ? 'translateX(0px)'
                            : 'translateX(32px)',
                      }}
                      className='duration-250 flex justify-end gap-2 transition-transform'
                    >
                      <button
                        disabled={
                          !inputVal.length > 0 || activeView !== 'input'
                        }
                        onClick={() => setSubmitted(true)}
                        onMouseDown={() => setIsPressed(true)}
                        onMouseUp={() => setIsPressed(false)}
                        onMouseLeave={() => setIsPressed(false)}
                        className='ease disabled:pointer-events-none: text-gray-400 duration-300 hover:text-gray-700'
                      >
                        <div className='h-6 w-6'>
                          <VoiceIcon color={'currentColor'} />
                        </div>
                      </button>

                      <button
                        disabled={
                          !inputVal.length > 0 || activeView !== 'input'
                        }
                        onMouseDown={() => setIsPressed(true)}
                        onMouseUp={() => setIsPressed(false)}
                        onMouseLeave={() => setIsPressed(false)}
                        onClick={() => setSubmitted(true)}
                        className='ease disabled:pointer-events-none: text-gray-400 duration-300 hover:text-gray-700'
                      >
                        <ArrowUpIcon color={'currentColor'} />
                      </button>
                    </div>
                  </div>
                  <motion.input
                    className='flexitems-center w-[360px] justify-between rounded-[10px] border border-transparent bg-white px-4 py-3 text-sm font-medium leading-6 text-gray-800 opacity-100 outline-none placeholder:text-gray-400 focus:border focus:border-gray-300'
                    placeholder='Search or ask'
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    disabled={activeView !== 'input'}
                    style={{
                      transition: 'transform 0.15s linear',
                      transform:
                        isPressed && !submitted ? 'scale(0.95)' : 'scale(1)',
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setSubmitted(true);
                      } else if (e.key === 'Escape') {
                        if (submitted && activeView !== 'input') {
                          setSubmitted(false);
                        }
                      }
                    }}
                  ></motion.input>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
