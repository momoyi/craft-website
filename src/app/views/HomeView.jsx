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
      <main className='py-15 container min-h-[calc(100svh-56px-70px)] tracking-tight md:py-20'>
        <section className='md:gap-35 flex w-full flex-col gap-20'>
          {projects.map((project, index) => (
            <div
              ref={ref}
              key={index}
              className='flex flex-col-reverse gap-3 md:grid md:grid-cols-2 md:gap-16'
            >
              <div className='flex flex-col items-start gap-8 py-1 pt-5 no-underline sm:justify-start md:justify-between md:gap-2'>
                <div>
                  <h3 className='font-medium'>{project.title}</h3>
                  <p className='pt-1 text-base text-gray-300'>
                    {renderDescription(
                      project.shortdDescription,
                      project.links
                    )}
                  </p>
                </div>

                <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center'>
                  <p className='pt-1 text-sm italic text-gray-400'>
                    {project.date}
                  </p>

                  <Link href={'/projects/' + project.route} className='btn'>
                    Interactive implementation
                  </Link>
                </div>
              </div>

              <div className=' relative aspect-[16/9] overflow-hidden md:aspect-[16/12]'>
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
                    className='aspect-[16/9] h-auto w-full rounded-md object-cover md:aspect-[16/12]'
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
