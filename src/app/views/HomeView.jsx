import Link from 'next/link';

function renderDescription(description, links = {}) {
  const parts = description.split(/({.*?})/g); // Split by {...}

  return parts.map((part, index) => {
    const match = part.match(/{(.*?)}/);
    if (match) {
      const key = match[1];
      const link = links[key];
      if (link) {
        return (
          <a
            key={index}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            {link.text}
          </a>
        );
      }
    }
    return <span key={index}>{part}</span>;
  });
}

function HomeView() {
  const projects = [
    {
      title: 'AI spotlight concept.',
      description:
        'Animated interactive AI chat input that scales size based on content. Original interaction was designed by {designer}',
      date: 'May 1st, 2025',
      videoSrc:
        'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/ssstwitter.com_1745777758504-oNwPyqnQwA9XBiec7yhIh1lKdA91T6.mp4',
      links: {
        designer: {
          href: 'https://x.com/DamianSkotzke/status/1891887991389360220/video/1',
          text: 'Damian Skotzke',
        },
      },
    },
  ];

  return (
    <main className='pt-20 tracking-tight container'>
      <section className='w-full flex flex-col gap-5'>
        {projects.map((project, index) => (
          <div key={index} className='grid grid-cols-2 gap-16'>
            <div className='no-underline flex flex-col justify-between items-start py-1'>
              <div>
                <h3 className='font-medium'>{project.title}</h3>
                <p className='text-base pt-1 text-gray-300'>
                  {renderDescription(project.description, project.links)}
                </p>
              </div>

              <div className='flex items-center gap-4'>
                <p className='text-sm pt-1 italic text-gray-400'>
                  {project.date}
                </p>
                <button className='btn'>Interactive implementation</button>
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
    </main>
  );
}

export default HomeView;
