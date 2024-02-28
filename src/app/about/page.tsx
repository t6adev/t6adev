import Breadcrumb from '../../components/Breadcrumb.js';
import MyCard from '../../components/MyCard.js';
import Trail from '../../components/Trail.js';
import { list } from '../../introduction.js';

const About = () => {
  return (
    <div>
      <Breadcrumb title="About" />
      <MyCard />
      <Trail>
        {list.map((i) => (
          <div key={i.title}>
            <h3 className="italic text-xl my-8 text-center">{i.title}</h3>
            <div>
              {i.subs.map((sub) => (
                <div key={sub.title}>
                  <h4 className="text-md mb-4">{sub.title}</h4>
                  <p className="my-4">{sub.message}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Trail>
    </div>
  );
};
export default About;
