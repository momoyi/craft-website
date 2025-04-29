import { projects } from '@/app/data/projects';
//import SandboxComponent from '../../sandboxes/SandboxComponent';

export default async function ProjectDetails({ params }) {
  const slug = params.slug;
  console.log('slug', slug);

  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className='project-details'>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>Date: {project.date}</p>
      {/* <SandboxComponent /> */}
    </div>
  );
}
