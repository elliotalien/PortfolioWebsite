"use client";
import { IconName, techIconMapper } from "@/lib/techIconMapper";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { GoTerminal } from "react-icons/go";



export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    imageurl: string;
    title: string;
    description: string;
    link: string;
    techIcons: IconName[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <ProjectImage imageurl={item.imageurl} />
            <div className="p-4">
              <CardTitle className="text-black dark:text-gray-400">{item.title}</CardTitle>
              <CardDescription className="text-black dark:text-gray-400">{item.description}</CardDescription>
              <Technologies className="text-black dark:text-gray-400" techIcons={item.techIcons} />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};



export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full  overflow-hidden border border-zinc-500 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export const ProjectImage = ({
  className,
  imageurl,
}: {
  className?: string;
  imageurl: string;
}) => {
  return (
    <div>
      <img
        src={imageurl}
        alt="Project"
        className={cn("", className)}
      />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};


export const Technologies = ({
  techIcons,
  className,
}: {
  techIcons: IconName[];
  className?: string;
}) => {
  return (
    <>
      <div className={cn("flex flex-row flex-wrap mt-8", className)}>
        {techIcons.map((iconName, index) => {
          const Icon = techIconMapper[iconName as IconName];
          return (
            <span key={index} className={cn("text-gray-500 mr-4 inline-block stroke-1", className)}>
              <Icon />
            </span>
          );
        })}
      </div>
      <div className="flex flex-row space-x-2 mt-4 items-center px-0.5">
        <GoTerminal className="h-3 w-3 stroke-1.5 text-zinc-500 group-hover:text-cyan-500" />
        <p className="text-black dark:text-zinc-500 group-hover:text-cyan-500 text-xs">View Preview</p>
      </div>
    </>
  );
};






