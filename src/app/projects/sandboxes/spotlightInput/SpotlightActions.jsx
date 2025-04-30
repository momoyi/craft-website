import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import ShareIcon from '@/app/icons/Share';
import CopyIcon from '@/app/icons/Copy';
import CommentIcon from '@/app/icons/Comment';
import ListIcon from '@/app/icons/List';
import NewTabIcon from '@/app/icons/NewTab';
import ArrowRightIcon from '@/app/icons/ArrowRight';
import CloseIcon from '@/app/icons/Close';

function SpotlightActions({
  reset,
  transitionDelay,
  activeFile,
  setActiveView,
}) {
  return (
    <MotionConfig
      transition={{ duration: 0.3, ease: [0.455, 0.03, 0.515, 0.955] }}
    >
      <motion.div layout className='flex w-[480px] flex-col gap-4 px-4 py-4'>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: transitionDelay + 0.1 }}
          className='text-xs font-semibold text-gray-400'
        >
          Actions
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: transitionDelay + 0.1 }}
          className='flex flex-col gap-4'
        >
          {actions.map((action) => (
            <button
              key={action.text}
              onClick={() => {
                //reset();
                setActiveView('dialog');
              }}
              className='before:-inset-x-(--external-padding-horizontal) before:-inset-y-(--external-padding-vertical) ease active:scale-98
                 relative flex items-center justify-between transition-transform duration-200 before:absolute before:z-0
                 before:h-[calc(100%+var(--external-padding-vertical)*2)] before:w-[calc(100%+var(--external-padding-horizontal)*2)] before:rounded-md before:border before:border-gray-300 before:opacity-0 before:transition-opacity
                 before:ease-linear hover:before:opacity-100 active:before:bg-[rgba(0,0,0,0.05)]'
            >
              <div className='z-1 relative flex items-center justify-start gap-2 text-gray-700'>
                <div className='relative aspect-square h-4 w-4 overflow-hidden rounded-sm'>
                  {action.icon}
                </div>

                <span className='z-1 relative text-[14px] font-semibold'>
                  {action.text}
                </span>
              </div>
              <div className='h-4 w-4 text-gray-300'>
                <ArrowRightIcon strokeWidth={2} color={'currentColor'} />
              </div>
            </button>
          ))}
        </motion.div>
        <div className='w-full pt-4'>
          <motion.button
            layoutId={`active-file-${activeFile.name}`}
            onClick={() => {
              reset();
            }}
            className='before:-inset-x-(--external-padding-horizontal) before:-inset-y-(--external-padding-vertical) ease active:scale-98 relative
       flex w-full items-center justify-between transition-transform duration-200 before:absolute before:z-0
       before:h-[calc(100%+var(--external-padding-vertical)*2)] before:w-[calc(100%+var(--external-padding-horizontal)*2)] before:rounded-md before:border before:border-gray-300 before:opacity-0 before:transition-opacity
       before:ease-linear hover:before:opacity-100 active:before:bg-[rgba(0,0,0,0.05)]'
          >
            <div className='z-1 relative flex items-center justify-start gap-2'>
              <div className='relative aspect-square w-6 overflow-hidden rounded-sm'>
                <Image
                  className='object-cover object-center '
                  src={`/${activeFile.url}.jpg`}
                  fill={true}
                  alt='File image url'
                />
              </div>

              <span className='z-1 relative text-[14px] font-semibold text-gray-700'>
                {activeFile.name}
              </span>
            </div>
            <div className='h-4 w-4 text-gray-300'>
              <CloseIcon strokeWidth={2} color={'currentColor'} />
            </div>
          </motion.button>
        </div>
      </motion.div>
    </MotionConfig>
  );
}

const actions = [
  {
    icon: <ShareIcon strokeWidth={2} />,
    text: 'Share',
  },
  {
    icon: <CopyIcon strokeWidth={2} />,
    text: 'Copy to clipboard',
  },
  {
    icon: <CommentIcon strokeWidth={2} />,
    text: 'Ask',
  },
  {
    icon: <ListIcon strokeWidth={2} />,
    text: 'Summarize',
  },
  {
    icon: <NewTabIcon strokeWidth={2} />,
    text: 'Open',
  },
];

export default SpotlightActions;
