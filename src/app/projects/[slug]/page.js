import { projects } from '@/app/data/projects';
import { renderDescription } from '@/app/utils/renderDescription';
import SpotlightInput from '../sandboxes/spotlightInput/SpotlightInput';

export default async function ProjectDetails(props) {
  const params = await props.params;
  const slug = params.slug;
  const project = projects.find((p) => p.route === slug);
  const SandboxComponent = project.component;

  if (!project) {
    return (
      <div className='container tracking-tight'>
        <h1 className='text-base'>404 - Not found</h1>
        <p className='pt-10 text-gray-400'>
          While you're here, let me tell you a random fact about me, I LOVE
          league of legends and have never ranked past bronze, sigh.
        </p>

        <p className='pt-6 text-gray-400'>
          Don't care about my fun fact? Fine, check the url, there's probably a
          mistake there.
        </p>
      </div>
    );
  }

  return (
    <div className=''>
      <div className='md:px-4'>
        <div className='flex w-full flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-0 '>
          <h1 className='text-base'>{project.title}</h1>
          <p className='text-gray-400'>{project.date}</p>
        </div>
        <p className=' pt-10 text-gray-400'>
          {renderDescription(project.description, project.links)}
        </p>
        <p className='pt-4 text-gray-400'>
          Built with Framer motion & tailwind.
        </p>
      </div>

      {SandboxComponent ? <SandboxComponent /> : null}
    </div>
  );
}
