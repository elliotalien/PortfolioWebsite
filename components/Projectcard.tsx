import { projects } from "@/data";
import { HoverEffect } from "./ui/card-hover-effect";

export function Projectcard() {
  return (

    <div className=" max-w-5xl mx-auto py-24" id='projects'>
      <div className='text-4xl max-md:text-center'>I&apos;ve been building a lot of things</div>
      <div className="max-w-5xl mx-auto ">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
