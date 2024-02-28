'use client';
import { Link } from 'waku';
import Trail from './Trail.js';

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <Trail>
      <div className="py-8">
        <Link to="/" className="text-2xl italic mr-2">
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
