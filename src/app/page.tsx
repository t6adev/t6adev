import { Tweet } from 'react-tweet';

import MyCard from '../components/MyCard.js';
import TopBanner from '../components/TopBanner.js';
import MenuList from '../components/MenuList.js';

import { tweetIds } from '../tweets.js';

const Index = () => {
  return (
    <div>
      <TopBanner />
      <MyCard />
      <MenuList />
      <h3 className="text-xl mb-2">My tweets</h3>
      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>div:first-child]:mt-0">
        {tweetIds.map((id) => (
          <Tweet id={id} key={id} />
        ))}
      </div>
    </div>
  );
};
export default Index;
