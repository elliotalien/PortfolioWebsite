import React from 'react';
import { IconCloudDemo } from './ui/cloud';

const About = () => {
  return (
    <section className="max-w-5xl mx-auto py-24 relative" id="about">
      {/* Title */}
      <div className="text-4xl font-bold max-md:text-center">About Me</div>

      {/* Main Content */}
      <div className="columns-1 py-16 md:columns-2 space-y-8 md:space-y-0">
        {/* Text Content */}
        <div className="max-md:text-center">
          I&apos;m <strong>Abhijith</strong>, a full-stack developer and cyber security enthusiast. My focus area for the past few years has been web development and cyber security.
          <br /><br />
          I&apos;ve spent most of my life deeply interested in technology and movies, continuously building things with both. As a teenager, I was a classic computer nerd, spending most of my time messing with my computer and mobile devices, doing one of four things: developing websites, watching movies or series, playing CTF, and, of course, playing games.
          <br /><br />
          Most of that is still true today.
        </div>
        {/* Developer Tools / Icon Cloud */}
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
};

export default About;
