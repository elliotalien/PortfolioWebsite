import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative w-full items-center justify-center overflow-hidden rounded-lg  md:shadow-xl  max-w-5xl mx-auto pt-44">
         <div className="flex flex-col items-center mb-28">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:manuabhijith08@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
        <footer className="footer  text-neutral-content items-center p-4 max-md:justify-center">
  <aside className="grid-flow-col items-center">

    <p>Copyright © {new Date().getFullYear()} AbhijithPrassannan</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end max-md:w-full max-md:justify-center">

    <a href="https://x.com/Elliot_alien" className="text-3xl"><FaSquareXTwitter /></a>
    <a href="https://www.instagram.com/elliot_alien_" className="text-3xl"> <FaInstagram /></a>
    <a href="https://github.com/elliotalien" className="text-3xl"><FaGithubSquare /></a>
    <a href="https://www.linkedin.com/in/abhijith-in" className="text-3xl"><FaLinkedin /></a>

  </nav>
</footer>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
