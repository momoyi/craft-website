import BackIcon from '@/app/icons/back';
import RootFooter from '../../layouts/root/components/RootFooter';
import Link from 'next/link';

export default function ProjectLayout({ children }) {
  return (
    <>
      <Link href='/' className='no-underline'>
        <BackIcon color='var(--color-gray-500)' />
        Back
      </Link>
      <section>{children}</section>
      <RootFooter></RootFooter>
    </>
  );
}
