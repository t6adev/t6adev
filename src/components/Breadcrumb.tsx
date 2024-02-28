'use client';
import Link from 'next/link';
import Trail from './Trail';

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <Trail>
      <div className="py-8">
        <Link href="/" className="text-2xl italic mr-2">
          Top
        </Link>
        <span className="text-2xl italic">
          {`>`} {title}
        </span>
      </div>
    </Trail>
  );
};

export default Breadcrumb;
