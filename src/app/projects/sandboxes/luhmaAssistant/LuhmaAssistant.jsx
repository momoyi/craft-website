'use client';
import { useRef, useState, useEffect, useMemo } from 'react';
import {
  AnimatePresence,
  delay,
  easeOut,
  motion,
  MotionConfig,
} from 'motion/react';
import { useAnimate } from 'motion/react';
import CloseIcon from '@/app/icons/Close';
import Image from 'next/image';
import RestartIcon from '@/app/icons/Restart';

function LuhmaAssistant() {
  const [resetKey, setResetKey] = useState(0);
  const [secondPathAnimated, setSecondPathAnimated] = useState(false);
  const p1Duration = 0.3;
  const p2Duration = 0.47;
  const cp1Duration = 0.42;
  const cp2Duration = 0.25;
  const cp3Duration = 0.25;
  const [view, setView] = useState('default');
  const [height, setHeight] = useState(0);

  const content = useMemo(() => {
    switch (view) {
      case 'default':
        break;

      case 'hey':
        return <HeyView setHeight={setHeight} />;
      case 'article':
        return <ArticleView setHeight={setHeight} />;
    }
  }, [view]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (view === 'hey') {
        setView('article');
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, [view]);

  useEffect(() => {
    console.log('height', height);
  }, [height]);

  function resetAnim() {
    setSecondPathAnimated(false);
    setView('default');
    setHeight(0);
    setResetKey((prev) => prev + 1);
  }

  return (
    <div className='sandbox font-nunito relative h-80'>
      <motion.div
        key={resetKey}
        className='relative flex h-full w-full items-center justify-center pt-0'
      >
        <button
          onClick={() => {
            resetAnim();
          }}
          className='group absolute right-1 top-1 cursor-pointer rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.08)] p-1.5'
        >
          <div className='duration-250 ease relative h-4 w-4 text-gray-300 transition-colors group-hover:text-white'>
            <RestartIcon />
          </div>
        </button>
        <motion.div className='flex flex-col items-start gap-2 font-light tracking-normal'>
          <motion.div
            transition={{
              ease: 'easeOut',
              duration: 0.25,
            }}
          >
            <div
              style={{
                transform: secondPathAnimated
                  ? 'translateX(12px) translateY(-4px)'
                  : '',
              }}
              className='ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] flex h-10 w-10 items-center justify-center pl-4 transition-transform duration-200'
            >
              <MotionConfig
                transition={{
                  pathLength: { ease: 'linear' },
                }}
              >
                <svg
                  width='160'
                  height='160'
                  viewBox='0 0 320 320'
                  fill='none'
                  className='pointer-events-none absolute'
                >
                  <motion.path
                    d='M161.963 158.107C157.5 157.5 152.122 157.585 148.791 153.097C146.063 149.422 147.07 142.072 147.737 137.798L150 119.5C150.42 116.662 153.432 106.283 151.915 104.233C151.378 103.506 150.483 103.152 149.612 103.042C148.47 102.899 148.722 105.699 148.5 106.5C147.241 111.052 146.578 114.635 142.5 117C137.804 119.724 131.762 119.095 126.25 117.64C123.991 117.044 121.816 115.845 120.001 114.38C117.541 112.395 115 110 115 110'
                    stroke='#757475'
                    strokeWidth='6'
                    strokeLinecap='round'
                    strokeDasharray='1'
                    pathLength={1}
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: 0.99 }}
                    transition={{
                      strokeDashoffset: {
                        duration: p2Duration,
                        ease: 'easeInOut',
                      },
                      opacity: {
                        duration: p2Duration + 0.1,
                        ease: [0.95, 0.05, 0.795, 0.035],
                      },
                    }}
                    onAnimationComplete={() => {
                      setSecondPathAnimated(true);
                      setView('hey');
                    }}
                  />
                  <motion.path
                    d='M208 110.433C206.5 113.5 202.037 116.571 202.037 116.571C197.178 119.849 191.517 120.801 185.882 119.5C179.358 117.994 176.5 116 173 110'
                    stroke='#757475'
                    strokeWidth='7'
                    strokeLinecap='round'
                    strokeDasharray='1'
                    pathLength={1}
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -1 }}
                    transition={{
                      strokeDashoffset: {
                        duration: p1Duration,
                        ease: 'easeInOut',
                      },
                    }}
                  />

                  {/* Completed path */}
                  <motion.path
                    d='M162.638 157.492C160.578 155.671 152.893 156.078 149.098 156.314C148.504 156.351 148.015 155.864 148.035 155.269C148.145 152.007 147.948 148.431 145.67 145.929C144.918 145.104 144.011 144.462 142.853 144.414C141.373 144.354 139.934 145.42 138.923 146.393C136.612 148.618 135.03 151.861 133.557 154.857C133.18 155.623 132.077 155.584 131.709 154.814C129.57 150.334 126.249 145.72 121.724 143.79C121.191 143.563 120.731 143.415 120.083 143.207C118.938 142.838 118.606 142.61 117.106 142.421V142.421C114.971 142.151 112.835 142.742 110.824 143.509C108.147 144.529 105.717 145.708 103.321 147.678L99.8236 150.735C99.8236 150.735 98.6796 151.88 97.5784 152.981C96.4772 154.083 95.3333 155.228 95.3333 155.228C89.8356 162.419 85.2574 172.009 86.4685 181.335C86.8767 184.479 88.2825 187.307 90.8304 189.252C93.2858 191.127 96.1386 191.795 99.185 191.372C104.382 190.653 108.731 187.617 111.824 183.494C119.106 173.788 119.01 161.121 120.355 149.659L120.606 143.88'
                    stroke='#018CFE'
                    strokeWidth='7'
                    strokeLinecap='round'
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      secondPathAnimated
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: {
                        duration: cp1Duration,
                        ease: 'easeIn',
                      },
                    }}
                    strokeDasharray='0 1'
                  />
                  <motion.path
                    d='M120.355 142.158C119.106 136.38 118.106 128.107 113.874 120.38C112.231 117.38 106.106 111.38 101.106 110.38C91.106 107.88 78.1061 117.88 83.1062 135.38C88.606 148.88 95.1056 154.88 95.1056 154.88'
                    stroke='#018CFE'
                    strokeWidth='7'
                    strokeLinecap='round'
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      secondPathAnimated
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: { duration: cp2Duration, delay: cp1Duration },
                      opacity: { delay: cp1Duration, duration: 0.01 },
                    }}
                    strokeDasharray='0 1'
                  />
                  <motion.path
                    d='M96.106 155.88L105.106 161.88'
                    stroke='#018CFE'
                    strokeWidth='7'
                    strokeLinecap='round'
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      secondPathAnimated
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: {
                        duration: cp3Duration,
                        delay: cp1Duration + cp2Duration,
                      },
                      opacity: { delay: cp1Duration + cp2Duration },
                    }}
                    strokeDasharray='0 1'
                  />
                </svg>
              </MotionConfig>
            </div>
          </motion.div>

          <motion.div
            animate={{ height: height === 0 ? 'auto' : height }}
            className='relative w-[260px] origin-bottom'
          >
            <AnimatePresence mode='popLayout'>
              <motion.div key={view} className='absolute inset-0 w-full'>
                {content}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function HeyView({ setHeight }) {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div ref={divRef} className='flex w-full flex-col gap-1 text-base'>
      <MotionConfig
        transition={{
          visualDuration: 0.15,
          type: 'spring',
          bounce: 0.01,
        }}
      >
        <motion.span
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: -6,
            opacity: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.35 },
          }}
          transition={{ delay: 0.15 }}
          className='text-gray-400'
        >
          Hey Jacob.
        </motion.span>
        <p className='flex max-w-full flex-col text-white'>
          <motion.span
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -6,
              opacity: 0,
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.3,
                delay: 0.2,
              },
            }}
            transition={{ delay: 0.05 }}
          >
            I've found an interesting
          </motion.span>
          <motion.span
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -6,
              opacity: 0,
              transition: {
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.3,
                delay: 0.35,
              },
            }}
            transition={{ delay: 0.15 }}
          >
            article for you!
          </motion.span>
        </p>
      </MotionConfig>
    </div>
  );
}

function ArticleView({ setHeight }) {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div ref={divRef} className='flex w-full flex-col gap-4'>
      <motion.div
        initial={{ y: 3, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.25,
          ease: [0.165, 0.84, 0.44, 1],
          delay: 0.4,
        }}
        className='flex w-full items-center justify-between text-[14px] text-gray-400'
      >
        <span>Article Suggestion</span>
        <button>
          <div className='h-3 w-3'>
            <CloseIcon />
          </div>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
        className='h-[1px] w-full bg-gray-800'
      ></motion.div>
      <div className='flex items-center gap-4'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.35,
            bounce: 0.1,
            delay: 0.72,
          }}
          className='relative h-11 w-11'
        >
          <Image
            fill={true}
            src='/bact.jpg'
            alt='decorative image'
            className='rounded-full object-cover'
          />
        </motion.div>
        <div className='flex flex-col'>
          <motion.span
            initial={{ y: 3, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.25,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className='max-w-50 text-white'
          >
            AI Advancing Quantum
          </motion.span>
          <motion.span
            initial={{ y: 3, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.25,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className='max-w-50 text-white'
          >
            Computing
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default LuhmaAssistant;
