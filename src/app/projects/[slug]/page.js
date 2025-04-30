import { projects } from '@/app/data/projects';
import { renderDescription } from '@/app/utils/renderDescription';
import SpotlightInput from '../sandboxes/spotlightInput/SpotlightInput';

export default async function ProjectDetails(props) {
  const params = await props.params;
  const slug = params.slug;

  const project = projects.find((p) => p.route === slug);

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
      <div className='px-4'>
        <div className='flex w-full items-center justify-between'>
          <h1 className='text-base'>{project.title}</h1>
          <p className='text-gray-400'>{project.date}</p>
        </div>
        <p className=' pt-10 text-gray-400'>
          {renderDescription(project.description, project.links)}
        </p>
      </div>

      <div className='sandbox mt-10 h-[860px]'>
        <SpotlightInput />
      </div>
    </div>
  );
}
