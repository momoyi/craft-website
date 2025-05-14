import BackIcon from '@/app/icons/Back';
import RootFooter from '../../layouts/root/components/RootFooter';
import Link from 'next/link';
import { projects } from '@/app/data/projects';

export default async function ProjectLayout(props) {
  const { children } = props;
  const params = await props.params;
  const slug = params.slug;
  const tempProjects = projects.filter((project) => project.route !== slug);

  return (
    <>
      <section
        style={{ '--top-space': '120px' }}
        className='md:pt-(--top-space) container flex min-h-[calc(100svh-56px)] flex-col gap-8 pb-20 pt-12 tracking-tight md:grid md:grid-cols-12 md:gap-6'
      >
        <div className='md:col-span-3'>
          <div className='top-(--top-space) sticky flex flex-col gap-8'>
            <nav>
              <Link
                prefetch={true}
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
                {tempProjects.length > 0 ? (
                  tempProjects.map((project, index) => {
                    return (
                      <Link
                        prefetch={true}
                        href={'/projects/' + project.route}
                        key={index}
                        className='text-gray-300 no-underline hover:text-white'
                      >
                        {project.title}
                      </Link>
                    );
                  })
                ) : (
                  <p key={index} className='text-gray-300'>
                    No other projects found
                  </p>
                )}
              </nav>
            </div>
          </div>
        </div>
        <div className='md:col-span-7'>
          <div>{children}</div>
        </div>
      </section>

      <RootFooter></RootFooter>
    </>
  );
}
