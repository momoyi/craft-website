import ChatFilledIcon from '@/app/icons/ChatFilled';
import CheckIcon from '@/app/icons/Check';
import CloseIcon from '@/app/icons/Close';
import Image from 'next/image';

function CommentReplyComponent() {
  return (
    <div className='sandbox font-inter h-120 md:h-100'>
      <div
        className='w-120 rounded-(--radius) flex flex-col gap-3 bg-gray-100 p-1 pb-3 text-gray-900'
        style={{ '--radius': '1.25rem' }}
      >
        <div className='flex w-full items-center justify-between rounded-[calc(var(--radius)-4px)] bg-gray-200 px-2.5 py-1.5 '>
          <div className='flex items-center gap-1'>
            <div className='h-4 w-4 text-[rgba(0,0,0,0.2)]'>
              <ChatFilledIcon />
            </div>
            <span className='text-sm font-medium text-gray-700'>Comment</span>
          </div>
          <div className='flex items-center gap-1.5 text-[rgba(0,0,0,0.225)]'>
            <button className='h-6 w-6 '>
              <CheckIcon strokeWidth={2} />
            </button>
            <button className='h-6 w-6 '>
              <CloseIcon strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className='flex w-full flex-col gap-4 px-2.5'>
          <div className='flex flex-col items-start gap-2'>
            <div className='flex items-center gap-1.5'>
              <div className='relative h-9 w-9'>
                <Image
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
                <span className='text-xs/1 text-gray-500'>13 hours ago</span>
              </div>
            </div>

            <p className='text-[15px]'>
              Is it just me, or is Amala so overrated? Still better than semo
              tbf.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentReplyComponent;
