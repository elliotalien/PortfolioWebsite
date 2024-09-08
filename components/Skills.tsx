import { imageData } from '@/data'
import React from 'react'

const Skills = () => {
  return (
    <section>
      <div className='text-4xl text-center'>Skills & Tools</div>
      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          {imageData.map((image, index) => (
            <img
              key={index}
              className="mx-4 inline h-16"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          {imageData.map((image, index) => (
            <img
              key={index}
              className="mx-4 inline h-16"
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills