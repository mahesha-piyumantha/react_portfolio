import { HERO_CONTENT } from "./../constants/index";
import profilePic from "../assets/me1.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-14 lg:pb-15 text-3xl md:text-5xl font-thin tracking-tight lg:mt-12 lg:text-7xl">
              Mahesha Piyumantha
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent">
              Software Developer
            </span>
            <p className="my-2 max-w-xl py-6 text-sm lg:text-lg tracking-tighter leading-8 lg:leading-10">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="profilePic"
              className="rounded-2xl w-3/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
