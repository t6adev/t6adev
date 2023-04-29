import Breadcrumb from '../../components/Breadcrumb';
import MyCard from '../../components/MyCard';
import Trail from '../../components/Trail';
import { list } from '../../introduction';

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
