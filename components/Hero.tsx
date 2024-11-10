import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/Text-generate-effect'
import MagicButton from './ui/MagicButton'
import { MdFileDownload } from 'react-icons/md'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className="pb-32 pt-36" id='home'>
            <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
            />
            <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

            <div
                className="h-screen w-full dark:bg-grid-white/[0.03]  absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center dark:text-blue-100 max-w-80">
                        Hey,there
                    </p>

                    <TextGenerateEffect
                        words="I'm Abhijith P"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl uppercase"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Full-stack Developer And Cyber Security Enthusiast
                    </p>

                    <div className='flex gap-x-5'>
                        <a href="#contact"><MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" /> </a>
                        <a href="/Abhijith.pdf" download><MagicButton title="Download CV"  icon={<MdFileDownload />} position="right" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero