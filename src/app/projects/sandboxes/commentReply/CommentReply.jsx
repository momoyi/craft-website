'use client';
import ChatFilledIcon from '@/app/icons/ChatFilled';
import CheckIcon from '@/app/icons/Check';
import CloseIcon from '@/app/icons/Close';
import Image from 'next/image';
import { motion, AnimatePresence, MotionConfig, easeOut } from 'motion/react';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

function CommentReplyComponent() {
  const [inputVal, setInputVal] = useState('');
  const [count, setCount] = useState(0);
  const [shadowCount, setShadowCount] = useState(0);
  const [replies, setReplies] = useState([]);
  const [showSpan, setShowSpan] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showShadowForm, setShowShadowForm] = useState(true);
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  function handleSubmit(e) {
    e.preventDefault();
    setShowSpan(true);
    setReplies((prev) => [...prev, { id: count, text: inputVal }]);
    setInputVal('');
    setCount((prev) => prev + 1);
    setShowShadowForm(false);
    setShowForm(false);

    //Delay re-showing the input
    setTimeout(() => {
      setShowForm(true);
    }, 10);
  }

  return (
    <div className='sandbox font-inter h-120 md:h-150 pb-50 items-end'>
      <MotionConfig
        transition={{
          duration: 0.3,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      >
        <div
          className='flex flex-col items-center gap-1.5'
          style={{ '--width': '480px' }}
        >
          <motion.div
            animate={hasMounted ? { height: bounds.height || 'auto' } : false}
            transition={{
              duration: 0.25,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className='w-(--width) rounded-(--radius) flex origin-bottom flex-col gap-3 bg-gray-100 text-gray-900 will-change-[height]'
            style={{ '--radius': '1.25rem' }}
          >
            <div ref={ref} className='flex w-full flex-col gap-3 p-1 pb-3'>
              <div className='flex w-full items-center justify-between rounded-[calc(var(--radius)-4px)] bg-gray-200 px-2 py-1.5 '>
                <div className='flex items-center gap-1'>
                  <div className='h-4 w-4 text-[rgba(0,0,0,0.2)]'>
                    <ChatFilledIcon />
                  </div>
                  <span className='text-sm font-medium text-gray-700'>
                    Comment
                  </span>
                </div>
                <div className='flex items-center gap-1.5 text-[rgba(0,0,0,0.225)]'>
                  <button className='h-6 w-6 '>
                    <CheckIcon strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => {
                      //reset();
                    }}
                    className='h-6 w-6 '
                  >
                    <CloseIcon strokeWidth={2} />
                  </button>
                </div>
              </div>

              <div className='flex w-full flex-col gap-4 px-2'>
                <div className='flex flex-col items-start gap-2'>
                  <div className='flex items-center gap-1.5'>
                    <div className='relative h-9 w-9'>
                      <Image
                        alt='User Avatar'
                        fill
                        sizes='(max-width: 120px) 100vw, 120px'
                        src={'/avatar 2.png'}
                        className='rounded-full'
                      />
                    </div>
                    <div className='flex items-end gap-1.5'>
                      <span className='text-base/1 font-semibold text-gray-900'>
                        Mike
                      </span>
                      <span className='text-xs/1 text-gray-500'>
                        13 hours ago
                      </span>
                    </div>
                  </div>

                  <p className='text-[15px]'>
                    Is it just me, or is Amala so overrated? Still better than
                    semo tbf.
                  </p>
                </div>
                <AnimatePresence initial={false} mode='popLayout'>
                  {replies.map((reply, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: '-80%',
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      onAnimationComplete={() => {
                        setShadowCount((prev) => prev + 1);
                        setShowShadowForm(true);
                      }}
                      className='flex flex-col items-start gap-2'
                    >
                      <div className='flex items-center gap-1.5'>
                        <motion.div
                          layoutId={`reply-img-${reply.id}`}
                          transition={{
                            duration: 0.3,
                            ease: [0.215, 0.61, 0.355, 1],
                          }}
                          className='relative h-9 w-9 will-change-transform'
                        >
                          <Image
                            alt='User Avatar'
                            fill
                            sizes='(max-width: 120px) 100vw, 120px'
                            src={'/avatar 1.png'}
                            className='rounded-full'
                          />
                        </motion.div>
                        <div className='flex items-end gap-1.5'>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className='text-base/1 font-semibold text-gray-900'
                          >
                            You
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className='text-xs/1 text-gray-500'
                          >
                            now
                          </motion.span>
                        </div>
                      </div>

                      <motion.p
                        layoutId={`reply-text-${reply.id}`}
                        onLayoutAnimationComplete={() => {
                          setShowSpan(false);
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.215, 0.61, 0.355, 1],
                        }}
                        className='shrink-0 text-[15px] will-change-transform'
                      >
                        {reply.text}
                      </motion.p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <div className='relative h-11 w-[calc(var(--width)-16px)]'>
            {/* Live form */}
            <AnimatePresence initial={false}>
              <motion.form
                key={count}
                initial={{
                  opacity: 0,
                  y: 44,
                  scale: 0.85,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.3,
                    ease: [0.215, 0.61, 0.355, 1],
                  },
                }}
                style={{
                  visibility: showForm ? 'visible' : 'hidden',
                  pointerEvents: showForm ? 'auto' : 'none',
                }}
                onSubmit={handleSubmit}
                className='z-2 relative flex w-full items-center justify-between gap-2 rounded-3xl bg-gray-100 p-1'
              >
                <div className='relative h-9 w-9 shrink-0 grow-0 will-change-transform'>
                  <Image
                    alt='User Avatar'
                    fill
                    sizes='(max-width: 120px) 100vw, 120px'
                    src={'/avatar 1.png'}
                    className='rounded-full'
                  />
                </div>
                <div className='relative flex h-auto grow flex-col justify-center'>
                  <input
                    className='relative h-auto w-full text-[15px] text-gray-800 outline-none will-change-transform placeholder:text-gray-400'
                    placeholder='Reply'
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && inputVal.trim() !== '') {
                        handleSubmit(e);
                      }
                    }}
                  />
                </div>

                <button
                  disabled={!inputVal.trim()}
                  className='active:scale-92 rounded-full bg-gray-800 px-3 py-2 text-sm font-medium text-gray-200 transition-transform disabled:opacity-85'
                >
                  Send
                </button>
              </motion.form>
            </AnimatePresence>

            {/* Shadow Form */}
            <motion.form
              initial={{
                opacity: 1,
                y: 0,
              }}
              animate={{
                opacity: showShadowForm ? 1 : 0,
                y: showShadowForm ? 0 : '-80%',
                scale: 1,
                transition: showShadowForm
                  ? {
                      duration: 0,
                      ease: 'linear',
                    }
                  : {
                      duration: 0.2,
                      ease: [0.215, 0.61, 0.355, 1],
                    },
              }}
              className='z-1 pointer-events-none absolute inset-0 flex h-fit w-full items-center justify-between gap-2 rounded-3xl bg-gray-100 p-1'
            >
              <motion.div
                layoutId={`reply-img-${count}`}
                // animate={{
                //   opacity: showForm ? 0 : 1,
                //   transition: { duration: 0.15, ease: 'easeOut' },
                // }}
                style={{ opacity: showShadowForm ? 1 : 0 }}
                className='duration-400 relative h-9 w-9 shrink-0 grow-0 transition-opacity ease-out will-change-transform'
              >
                <Image
                  alt='User Avatar'
                  fill
                  sizes='(max-width: 120px) 100vw, 120px'
                  src={'/avatar 1.png'}
                  className='rounded-full'
                />
              </motion.div>

              <div className='relative flex h-auto grow flex-col justify-center'>
                <motion.input
                  className='relative h-auto w-full text-[15px] text-gray-800 outline-none will-change-transform placeholder:text-gray-400'
                  placeholder=''
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputVal.trim() !== '') {
                      handleSubmit(e);
                    }
                  }}
                />
                <AnimatePresence initial={false} mode='popLayout'>
                  {inputVal && (
                    <motion.span
                      key='input-preview'
                      layoutId={`reply-text-${count}`}
                      className='pointer-events-none absolute left-0 shrink-0 text-nowrap text-[15px] text-gray-800 will-change-transform'
                      style={{ opacity: 1 }}
                    >
                      {inputVal}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <button className='active:scale-92 rounded-full bg-gray-800 px-3 py-2 text-sm font-medium text-gray-200 transition-transform disabled:opacity-85'>
                Send
              </button>
            </motion.form>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
}

export default CommentReplyComponent;
