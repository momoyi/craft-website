import Link from 'next/link';
import { projects } from '@/app/data/projects';
import RootHeader from '../layouts/root/components/RootHeader';
import RootFooter from '../layouts/root/components/RootFooter';
import { renderDescription } from '@/app/utils/renderDescription';

function HomeView() {
  return (
    <>
      <RootHeader></RootHeader>
      <main className='min-h-[calc(100svh-56px-70px)] pt-20 tracking-tight container'>
        <section className='w-full flex flex-col gap-5'>
          {projects.map((project, index) => (
            <div key={index} className='grid grid-cols-2 gap-16'>
              <div className='no-underline flex flex-col justify-between items-start py-1'>
                <div>
                  <h3 className='font-medium'>{project.title}</h3>
                  <p className='text-base pt-1 text-gray-300'>
                    {renderDescription(
                      project.shortdDescription,
                      project.links
                    )}
                  </p>
                </div>

                <div className='flex items-center gap-4'>
                  <p className='text-sm pt-1 italic text-gray-400'>
                    {project.date}
                  </p>
                  <Link href={'/projects/' + project.route} className='btn'>
                    Interactive implementation
                  </Link>
                </div>
              </div>

              <div>
                <video
                  width={'100%'}
                  height='auto'
                  className='w-full h-auto rounded-md aspect-[16/12]'
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload='none'
                >
                  <source src={project.videoSrc} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
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
