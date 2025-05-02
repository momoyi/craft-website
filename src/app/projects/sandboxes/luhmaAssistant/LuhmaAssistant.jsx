'use client';
import { useState, useEffect } from 'react';
import { delay, easeOut, motion, MotionConfig } from 'motion/react';
import { useAnimate } from 'motion/react';

function LuhmaAssistant() {
  const [animated, setAnimated] = useState(false);

  const cp1Duration = 1.5;
  const cp2Duration = 0.5;
  const cp3Duration = 0.5;

  return (
    <div className='sandbox h-80'>
      <div className=''>
        <button
          onClick={() => {
            console.log('clicked');
            setAnimated(!animated);
          }}
          className='mb-10 cursor-pointer'
        >
          Toggle animated: {animated.toString()}
        </button>
        <div className='w-25 h-25 flex items-center justify-center'>
          <MotionConfig
            transition={{
              pathLength: { ease: 'linear' },
              opacity: { ease: 'easeOut' },
            }}
          >
            <motion.svg
              width='320'
              height='320'
              viewBox='0 0 320 320'
              fill='none'
              key={animated}
              xmlns='http://www.w3.org/2000/svg'
              className='pointer-events-none absolute'
            >
              <path
                d='M161.963 158.107C157.5 157.5 152.122 157.585 148.791 153.097C146.063 149.422 147.07 142.072 147.737 137.798L150 119.5C150.42 116.662 153.432 106.283 151.915 104.233C151.378 103.506 150.483 103.152 149.612 103.042C148.47 102.899 148.722 105.699 148.5 106.5C147.241 111.052 146.578 114.635 142.5 117C137.804 119.724 131.762 119.095 126.25 117.64C123.991 117.044 121.816 115.845 120.001 114.38C117.541 112.395 115 110 115 110'
                stroke='#757475'
                strokeWidth='6'
                strokeLinecap='round'
              />
              <path
                d='M208 110.433C206.5 113.5 202.037 116.571 202.037 116.571C197.178 119.849 191.517 120.801 185.882 119.5C179.358 117.994 176.5 116 173 110'
                stroke='#757475'
                strokeWidth='7'
                strokeLinecap='round'
              />
              <motion.path
                d='M162.638 157.492C160.578 155.671 152.893 156.078 149.098 156.314C148.504 156.351 148.015 155.864 148.035 155.269C148.145 152.007 147.948 148.431 145.67 145.929C144.918 145.104 144.011 144.462 142.853 144.414C141.373 144.354 139.934 145.42 138.923 146.393C136.612 148.618 135.03 151.861 133.557 154.857C133.18 155.623 132.077 155.584 131.709 154.814C129.57 150.334 126.249 145.72 121.724 143.79C121.191 143.563 120.731 143.415 120.083 143.207C118.938 142.838 118.606 142.61 117.106 142.421V142.421C114.971 142.151 112.835 142.742 110.824 143.509C108.147 144.529 105.717 145.708 103.321 147.678L99.8236 150.735C99.8236 150.735 98.6796 151.88 97.5784 152.981C96.4772 154.083 95.3333 155.228 95.3333 155.228C89.8356 162.419 85.2574 172.009 86.4685 181.335C86.8767 184.479 88.2825 187.307 90.8304 189.252C93.2858 191.127 96.1386 191.795 99.185 191.372C104.382 190.653 108.731 187.617 111.824 183.494C119.106 173.788 119.01 161.121 120.355 149.659L120.606 143.88'
                stroke='#018CFE'
                strokeWidth='7'
                strokeLinecap='round'
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
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
                animate={{ pathLength: 1, opacity: 1 }}
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
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: {
                    duration: cp3Duration,
                    delay: cp1Duration + cp2Duration,
                  },
                  opacity: { delay: cp1Duration + cp2Duration },
                }}
                strokeDasharray='0 1'
              />
            </motion.svg>
          </MotionConfig>
        </div>
      </div>
    </div>
  );
}

export default LuhmaAssistant;
