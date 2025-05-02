import LuhmaAssistant from '../projects/sandboxes/luhmaAssistant/LuhmaAssistant';
import SpotlightInput from '../projects/sandboxes/spotlightInput/SpotlightInput';

export const projects = [
  {
    title: 'AI spotlight concept',
    shortdDescription:
      'Animated interactive AI chat input that scales size based on content. Original interaction was designed by {designer}',
    description: `Here's an animated interactive AI chat input that scales size based on content. Type anything into the input
       and submit to see interaction. Original interaction was designed by the amazing {designer}`,
    date: 'May 1st, 2025',
    videoSrc:
      'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/ssstwitter.com_1745777758504-oNwPyqnQwA9XBiec7yhIh1lKdA91T6.mp4',
    links: {
      designer: {
        href: 'https://x.com/DamianSkotzke/status/1891887991389360220/video/1',
        text: 'Damian Skotzke',
      },
    },
    route: 'ai-spotlight-input',
    component: SpotlightInput,
  },
  {
    title: 'Luhma AI path animation',
    shortdDescription:
      'A small animated AI assistant notification. interactive AI chat input that scales size based on content. Original interaction was designed by {designer}',
    description: `Here's a small animated AI assistant notificiation AI. I found the path animation pretty interesting. Original interaction was designed by {designer}`,
    date: 'May 3rd, 2025',
    videoSrc:
      'https://layers-uploads-prod.s3.eu-west-2.amazonaws.com/bba4b29a-e7aa-4576-8ce9-146a6638787a-L2.mp4',
    links: {
      designer: {
        href: 'https://layers.to/layers/cm94kqbff0011jr0cmtbgrom9',
        text: 'Marco Koenig',
      },
    },
    route: 'luhma-ai-assistant',
    component: LuhmaAssistant,
  },
];
