import Breadcrumb from '../../components/Breadcrumb';
import MyCard from '../../components/MyCard';
import Trail from '../../components/Trail';
import { links } from '../../introduction';

const Links = () => (
  <div>
    <Breadcrumb title="Links" />
    <MyCard />
    <div className="py-8">
      <Trail>
        {links.map((l) => (
          <div key={l.title} className="mb-4">
            <a href={l.href} className="text-xl" target="_blank" rel="noreferrer">
              {l.title}
            </a>
          </div>
        ))}
        <p className="text-sm md:text-md">* Tell_y is my old account name.</p>
      </Trail>
    </div>
  </div>
);
export default Links;
