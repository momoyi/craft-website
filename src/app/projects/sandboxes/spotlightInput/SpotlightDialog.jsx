import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, MotionConfig } from 'motion/react';
import ArrowRightIcon from '@/app/icons/ArrowRight';

export default function SpotlightDialog({ open, transitionDelay, reset }) {
  return (
    <>
      {open && (
        <MotionConfig
          transition={{ duration: 0.3, ease: [0.455, 0.03, 0.515, 0.955] }}
        >
          <div
            className='flex w-full flex-col gap-6 bg-white px-4 py-2'
            style={{
              '--external-padding-vertical': '6px',
              '--external-padding-horizontal': '10px',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: transitionDelay + 0.55 }}
              className='flex flex-col gap-3'
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-xs font-semibold text-gray-400'>Images</h3>
                <button className='flex items-center gap-1.5 text-gray-400'>
                  <span className='text-xs font-semibold opacity-80'>
                    Show more
                  </span>
                  <div className='py-0.25 flex h-5 items-center rounded-3xl border border-gray-200 px-2 text-[11px] font-medium'>
                    s
                  </div>
                </button>
              </div>
              <div className='grid grid-cols-4 gap-1'>
                {imageUrls.map((imageUrl) => (
                  <div
                    key={imageUrl}
                    className='relative aspect-square overflow-hidden rounded-sm'
                  >
                    <Image
                      className='object-cover object-center'
                      src={`/${imageUrl}.jpg`}
                      fill={true}
                      alt='Generated image'
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: transitionDelay + 0.5 }}
              className='flex flex-col gap-3'
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-xs font-semibold text-gray-400'>Files</h3>
                <button className='flex items-center gap-1.5 text-gray-400'>
                  <span className='text-xs font-semibold opacity-80'>
                    Show more
                  </span>
                  <div className='py-0.25 flex h-5 items-center rounded-3xl border border-gray-200 px-2 text-[11px] font-medium'>
                    24
                  </div>
                </button>
              </div>
              <div className='flex flex-col gap-2.5'>
                {files.map((file) => (
                  <button
                    key={file.name}
                    onClick={() => {
                      reset();
                    }}
                    className='before:-inset-x-(--external-padding-horizontal) before:-inset-y-(--external-padding-vertical) ease active:scale-98
                 relative flex items-center justify-between transition-transform duration-200 before:absolute before:z-0
                 before:h-[calc(100%+var(--external-padding-vertical)*2)] before:w-[calc(100%+var(--external-padding-horizontal)*2)] before:rounded-md before:border before:border-gray-300 before:opacity-0 before:transition-opacity
                 before:ease-linear hover:before:opacity-100 active:before:bg-[rgba(0,0,0,0.05)]'
                  >
                    <div className='z-1 relative flex items-center justify-start gap-2'>
                      <div className='relative aspect-square w-6 overflow-hidden rounded-sm'>
                        <Image
                          className='object-cover object-center '
                          src={`/${file.url}.jpg`}
                          fill={true}
                          alt='File image url'
                        />
                      </div>

                      <span className='z-1 relative text-[14px] font-semibold text-gray-700'>
                        {file.name}
                      </span>
                    </div>
                    <div className='h-4 w-4 text-gray-300'>
                      <ArrowRightIcon strokeWidth={2} color={'currentColor'} />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: transitionDelay + 0.4 }}
              className='flex flex-col gap-3'
            >
              <div className='flex items-center justify-start'>
                <h3 className='text-xs font-semibold text-gray-400'>Apps</h3>
              </div>
              <div className='flex flex-col gap-2.5'>
                <button
                  className='before:-inset-x-(--external-padding-horizontal) before:-inset-y-(--external-padding-vertical) ease relative
                 flex items-center justify-between transition-transform duration-200 before:absolute before:z-0 before:h-[calc(100%+var(--external-padding-vertical)*2)]
                 before:w-[calc(100%+var(--external-padding-horizontal)*2)] before:rounded-md before:border before:border-gray-200 before:opacity-0 before:transition-opacity before:ease-linear
                 hover:before:opacity-100 active:scale-95 active:before:bg-[rgba(0,0,0,0.05)]'
                >
                  <div className='z-1 relative flex items-center justify-start gap-2'>
                    <span className='z-1 relative text-[14px] font-semibold text-gray-700'>
                      Yesterday
                    </span>
                  </div>
                  <div className='h-4 w-4 text-gray-300'>
                    <ArrowRightIcon strokeWidth={2} color={'currentColor'} />
                  </div>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: transitionDelay + 0.3 }}
              className='flex flex-col gap-3'
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-xs font-semibold text-gray-400'>
                  Recommended
                </h3>
                <button className='flex items-center gap-1.5 text-gray-400'>
                  <span className='text-xs font-semibold opacity-80'>
                    Show more
                  </span>
                  <div className='py-0.25 flex h-5 items-center rounded-3xl border border-gray-200 px-2 text-[11px] font-medium'>
                    3
                  </div>
                </button>
              </div>
              <div className='flex flex-col gap-2.5'>
                {recommended.map((item) => (
                  <button
                    key={item.text}
                    className='before:-inset-x-(--external-padding-horizontal) before:-inset-y-(--external-padding-vertical) ease relative
                 flex items-center justify-between transition-transform duration-200 before:absolute before:z-0 before:h-[calc(100%+var(--external-padding-vertical)*2)]
                 before:w-[calc(100%+var(--external-padding-horizontal)*2)] before:rounded-md before:border before:border-gray-200 before:opacity-0 before:transition-opacity before:ease-linear
                 hover:before:opacity-100 active:scale-95 active:before:bg-[rgba(0,0,0,0.05)]'
                  >
                    <div className='z-1 relative flex items-center justify-start gap-2'>
                      <div className='relative aspect-square w-6 overflow-hidden rounded-sm'>
                        {item.icon}
                      </div>

                      <span className='z-1 relative w-full max-w-[380px] truncate text-[14px] font-semibold text-gray-700'>
                        {item.text}
                      </span>
                    </div>
                    <div className='h-4 w-4 text-gray-300'>
                      <ArrowRightIcon strokeWidth={2} color={'currentColor'} />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </MotionConfig>
      )}
    </>
  );
}

const imageUrls = [
  'grad1',
  'grad2',
  'grad3',
  'grad4',
  'grad5',
  'grad6',
  'grad7',
  'grad8',
];

const files = [
  { name: 'yesterday.gif', url: 'grad9' },
  { name: 'yest.pdf', url: 'grad6' },
  { name: 'yesterdaaaaaay.png', url: 'grad1' },
  { name: 'yester-day-02.fig', url: 'grad10' },
];

const recommended = [
  {
    icon: <ArrowRightIcon />,
    text: "Prepare to-do list from yesterday's calls, messages and no other sources",
  },
  {
    icon: <ArrowRightIcon />,
    text: 'Summarise notes from yesterday',
  },
  {
    icon: <ArrowRightIcon />,
    text: 'Make a diary note from yesterday',
  },
  {
    icon: <ArrowRightIcon />,
    text: 'Show unanswered calls from yesterday',
  },
];
