import Breadcrumb from '../../components/Breadcrumb.js';
import MyCard from '../../components/MyCard.js';
import Trail from '../../components/Trail.js';
import { links } from '../../introduction.js';

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
