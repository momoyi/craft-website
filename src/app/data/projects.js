import FiltersComponent from '../projects/sandboxes/filters/Filters';
import LuhmaAssistant from '../projects/sandboxes/luhmaAssistant/LuhmaAssistant';
import SpotlightInput from '../projects/sandboxes/spotlightInput/SpotlightInput';
import VoiceNote from '../projects/sandboxes/voiceNote/VoiceNote';

export const projects = [
  {
    title: 'AI spotlight concept',
    shortdDescription:
      'Animated interactive AI chat input that scales size based on content. Original interaction & video was created by {designer}. ',
    description: `Here's an animated interactive AI chat input that scales size based on content. Type anything into the input
       and submit to see interaction. Original interaction & video was created by the amazing {designer}.`,
    date: 'May 1st, 2025',
    videoSrc:
      'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/ssstwitter.com_1745777758504-oNwPyqnQwA9XBiec7yhIh1lKdA91T6.mp4',
    placeholder:
      'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/spotlight%20preview%20%281%29-021Ia2wkzL7cPoSQNmKLM0gbHSDxds.png',
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
      'A small animated AI assistant notification. interactive AI chat input that scales size based on content. Original interaction & video was created by {designer}.',
    description: `Here's a small animated AI assistant notificiation AI. I found the path animation pretty interesting. Original interaction & video was created by {designer}.`,
    date: 'May 3rd, 2025',
    videoSrc:
      'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/signature-ai-anim-EEEdB6zpGZeOf9YtorcwUQOSWfnSSB.mp4',
    placeholder:
      'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/luhma%20preview%20%281%29-BKw24ZwHy3QoFP1vXrhWAQr3m3mCzD.png',
    links: {
      designer: {
        href: 'https://layers.to/layers/cm94kqbff0011jr0cmtbgrom9',
        text: 'Marco Koenig',
      },
    },
    route: 'luhma-ai-assistant',
    component: LuhmaAssistant,
  },
  {
    title: 'Voice note interaction',
    shortdDescription:
      'Animated voice note recording interaction. Original interaction & video was created by {designer}.',
    description: `Here's an animated voice note recording interaction. Once you're ready just click the microphone. Original interaction & video was created by {designer}.`,
    date: 'May 5th, 2025',
    videoSrc:
      'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/voice_note-oTkY0yQSfCILxdTFr5dx16zKbtFoi6.mp4',
    placeholder:
      'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/voice%20preview%20%281%29-6yqXWE3C4HRExxwImUZRe4yynIaYvH.png',
    links: {
      designer: {
        href: 'https://x.com/nitishkmrk/status/1902610054089457684',
        text: 'Nitish Khagwal',
      },
    },
    route: 'voice-note',
    component: VoiceNote,
  },
  {
    title: 'Filtering interaction',
    shortdDescription:
      'Animated filtering and sorting interaction. Inspired by {designer}.',
    description: `An animated filtering & sorting interaction. It's inspired by {designer}. The original interaction was more of a happy path where each filter affected the elements right at the edge of the list. In a more realistic situation, this won't be the case. So I adjusted my version to also animate the sorting animation since the filters can target any of the people in any position (not just the edges).`,
    date: 'May 8th, 2025',
    videoSrc:
      'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/voice_note-oTkY0yQSfCILxdTFr5dx16zKbtFoi6.mp4',
    placeholder:
      'https://srthf9hgxhyzoa7c.public.blob.vercel-storage.com/voice%20preview%20%281%29-6yqXWE3C4HRExxwImUZRe4yynIaYvH.png',
    links: {
      designer: {
        href: 'https://x.com/necatikcl/status/1919342951869694374',
        text: 'Necati & Oğuz',
      },
    },
    route: 'filtering-interaction',
    component: FiltersComponent,
  },
];
