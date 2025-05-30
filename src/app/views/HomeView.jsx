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
          {[...projects].reverse().map((project, index) => (
            <div
              ref={ref}
              key={index}
              className='flex flex-col-reverse gap-3 md:grid md:grid-cols-2 md:gap-16'
            >
              <div className='no-underline! flex flex-col items-start gap-8 py-1 pt-5 sm:justify-start md:justify-between md:gap-2'>
                <div>
                  <h3 className='font-medium'>{project.title}</h3>
                  <p className='pt-3 text-base text-gray-300'>
                    {renderDescription(
                      project.shortdDescription,
                      project.links
                    )}{' '}
                    Built with Framer motion & tailwind.
                  </p>
                </div>

                <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center'>
                  <p className='pt-1 text-sm italic text-gray-400'>
                    {project.date}
                  </p>

                  <Link
                    prefetch={true}
                    href={'/projects/' + project.route}
                    className='btn'
                  >
                    Interactive implementation
                  </Link>
                </div>
              </div>

              <ProjectMedia
                placeholder={project.placeholder}
                videoSrc={project.videoSrc}
              />
            </div>
          ))}
        </section>
      </main>{' '}
      <RootFooter></RootFooter>
    </>
  );
}

function ProjectMedia({ placeholder, videoSrc }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className='relative aspect-[16/9] overflow-hidden md:aspect-[16/12]'
    >
      <Image
        src={placeholder}
        fill
        alt='Project placeholder blurred image'
        priority
        className={`z-2 absolute inset-0 rounded-md object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {inView && (
        <video
          className='aspect-[16/9] h-auto w-full rounded-md object-cover md:aspect-[16/12]'
          muted
          autoPlay
          loop
          playsInline
          preload='none'
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={videoSrc} type='video/mp4' />
        </video>
      )}
    </div>
  );
}

export default HomeView;
