'use client';
import { projects } from '@/app/data/projects';
import { renderDescription } from '@/app/utils/renderDescription';
import Image from 'next/image';
import Link from 'next/link';
import RootFooter from '../layouts/root/components/RootFooter';
import RootHeader from '../layouts/root/components/RootHeader';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

function HomeView() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <RootHeader></RootHeader>
      <main className='container min-h-[calc(100svh-56px-70px)] py-20 tracking-tight'>
        <section className='gap-35 flex w-full flex-col'>
          {projects.map((project, index) => (
            <div ref={ref} key={index} className='grid grid-cols-2 gap-16'>
              <div className='flex flex-col items-start justify-between py-1 pt-5 no-underline'>
                <div>
                  <h3 className='font-medium'>{project.title}</h3>
                  <p className='pt-1 text-base text-gray-300'>
                    {renderDescription(
                      project.shortdDescription,
                      project.links
                    )}
                  </p>
                </div>

                <div className='flex items-center gap-4'>
                  <p className='pt-1 text-sm italic text-gray-400'>
                    {project.date}
                  </p>

                  <Link href={'/projects/' + project.route} className='btn'>
                    Interactive implementation
                  </Link>
                </div>
              </div>

              <div className=' relative aspect-[16/12] overflow-hidden'>
                <Image
                  src={project.placeholder}
                  fill
                  alt={'Project placeholder blurred image'}
                  priority
                  className={`z-2 absolute inset-0 rounded-md object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Lazy-load video only when in view */}
                {inView && (
                  <video
                    width={'100%'}
                    height='auto'
                    className='aspect-[16/12] h-auto w-full rounded-md object-cover'
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload='none'
                    onLoadedData={() => setIsLoaded(true)}
                  >
                    <source src={project.videoSrc} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>{' '}
      <RootFooter></RootFooter>
    </>
  );
}

export default HomeView;
