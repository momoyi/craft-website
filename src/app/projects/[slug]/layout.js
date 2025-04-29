import BackIcon from '@/app/icons/Back';
import RootFooter from '../../layouts/root/components/RootFooter';
import Link from 'next/link';
import { projects } from '@/app/data/projects';

export default async function ProjectLayout(props) {
  const { children } = props;
  const params = await props.params;
  const slug = params.slug;

  return (
    <>
      <section
        style={{ '--top-space': '120px' }}
        className='pt-(--top-space) container grid min-h-[calc(100svh-56px)] grid-cols-12 gap-6 pb-20 tracking-tight'
      >
        <div className='col-span-3'>
          <div className='top-(--top-space) sticky flex flex-col gap-8'>
            <nav>
              <Link
                href='/'
                className='flex text-gray-400 no-underline hover:text-white'
              >
                <BackIcon color='currentColor' />
                Back
              </Link>
            </nav>

            <div className=''>
              <span className='text-gray-500'>Other "projects"</span>
              <nav className='flex flex-col gap-1 pt-2'>
                {projects.map((project, index) => {
                  return project.route === slug ? (
                    <p key={index} className='text-gray-300'>
                      No other projects found
                    </p>
                  ) : (
                    <Link
                      href={'/projects/' + project.route}
                      key={index}
                      className='text-gray-300 no-underline hover:text-white'
                    >
                      {project.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <div className='col-span-7'>
          <div>{children}</div>
        </div>
      </section>

      <RootFooter></RootFooter>
    </>
  );
}
