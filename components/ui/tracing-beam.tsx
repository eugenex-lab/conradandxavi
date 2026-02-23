import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    // Update SVG height to match content height
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full mx-auto h-full", className)}
    >
      {/* Position right in the middle for desktop, or left for mobile to match the timeline line */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full z-0 opacity-100">
        {/* The glowing dot head */}
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          className="absolute -left-[5px] -top-3 h-3 w-3 rounded-full border border-gold/40 shadow-sm flex items-center justify-center bg-navy z-10"
          style={{ y: y1 }}
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "#C5A021" : "transparent",
              borderColor:
                scrollYProgress.get() > 0 ? "#C5A021" : "transparent",
            }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </motion.div>
        {/* Background track line */}
        <svg
          viewBox={`0 0 2 ${svgHeight}`}
          width="2"
          height={svgHeight}
          className="block absolute top-0"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0 V ${svgHeight}`}
            fill="none"
            stroke="currentColor"
            className="text-navy/5 dark:text-white/5"
            strokeWidth="2"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          {/* Active Gradient Beam */}
          <motion.path
            d={`M 1 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#F9D423" stopOpacity="0"></stop>
              <stop stopColor="#C5A021"></stop>
              <stop offset="0.325" stopColor="#E2B64B"></stop>
              <stop offset="1" stopColor="#F9D423" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
