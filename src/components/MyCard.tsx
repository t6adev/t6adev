'use client';
import { useSpring, animated, config } from '@react-spring/web';
import { FaTwitter, FaYoutube, FaGithub, FaDiscord } from 'react-icons/fa';
import SizumeLogo from './sizume-logo.svg';
import { iconLink } from '../introduction.js';

const MyCard = () => {
  const props = useSpring({
    from: { opacity: 0, y: -10 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
  });
  return (
    <animated.div style={props} className="flex flex-col md:flex-row">
      <div className="px-4 flex flex-col justify-center items-center">
        <img
          className="inline-block h-24 w-24 rounded-full"
          src={iconLink}
          alt="Teruhisa Yamamoto"
        />
      </div>
      <div>
        <p className="text-md md:text-lg text-center sm:text-start">Teruhisa Yamamoto</p>
        <p className="text-sm md:text-md leading-relaxed">
          Software Developer / Father / Enthusiast of fishing and beer
        </p>
        <div className="flex space-x-2 leading-relaxed">
          <a href="https://twitter.com/t6adev" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/@t6adev" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://discord.com/invite/zPhh4KeBm5" target="_blank" rel="noreferrer">
            <FaDiscord />
          </a>
          <a href="https://github.com/t6adev" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://sizu.me/t6adev"
            target="_blank"
            rel="noreferrer"
            className="rounded-full h-4 w-4 bg-white flex justify-center items-center"
          >
            <img src={SizumeLogo} alt="sizu.me" width={14} height={14} />
          </a>
        </div>
        <p className="text-sm md:text-md leading-relaxed">Let's say Hi, in Tokyo or Discord.</p>
        <p className="text-sm md:text-md leading-relaxed">What's your dev style?</p>
      </div>
    </animated.div>
  );
};

export default MyCard;
