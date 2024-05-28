import React from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <img className="rounded-2xl" src={aboutImg} alt="aboutImg" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="leading-6 text-sm lg:text-lg ">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About