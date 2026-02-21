import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, MoveUpRight, ArrowDown } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { FIRM_INFO, PRACTICE_AREAS } from "../constants";

const HeroMediaSlider: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200",
    "/images/hero_1.png",
    "/images/legal_hero_3.png",
    "/images/legal_hero_4.png",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-sm">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[2000ms] ease-in-out ${
            idx === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
          } hover:grayscale-0 cursor-crosshair`}
        />
      ))}
    </div>
  );
};

const FullBackgroundSlider: React.FC = () => {
  const images = [
    "/images/hero_1.png",
    "/images/legal_hero_3.png",
    "/images/legal_hero_4.png",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-navy">
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            idx === current ? "opacity-30" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="Background"
            className="w-full h-full object-cover grayscale scale-105"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/40 to-transparent"></div>
      <div className="absolute inset-0 bg-navy/10"></div>
    </div>
  );
};

const GlobalBackground: React.FC = () => {
  return (
    <>
      <div className="mesh-glow">
        <div className="flare w-[800px] h-[800px] bg-gold/20 top-[-20%] left-[-10%] animation-delay-0"></div>
        <div className="flare w-[700px] h-[700px] bg-navy/10 bottom-[0%] right-[-10%] animation-delay-2000"></div>
        <div className="flare w-[600px] h-[600px] bg-gold/15 top-[30%] right-[0%] animation-delay-4000"></div>
        <div className="flare w-[500px] h-[500px] bg-beige/30 middle-center opacity-40 blur-[150px]"></div>
      </div>
      <div className="grain"></div>
    </>
  );
};

// Reusable transition configuration
const transitionConfig = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };

const AnimatedCounter = ({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (inView && ref.current) {
      // Use framer-motion's native animate function which is already optimized
      // for requestAnimationFrame and avoids React state updates during animation
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.floor(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  // Render purely a span without any reactive state to avoid React re-render overhead.
  return <span ref={ref}>{from}</span>;
};

const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative overflow-hidden bg-beige/50 dark:bg-navy-dark">
      <GlobalBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch">
        <FullBackgroundSlider />

        {/* Left Content Column */}
        <div className="lg:w-7/12 flex items-center px-4 sm:px-12 lg:px-20 py-20 lg:py-0 z-10 pt-32 lg:pt-0">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...transitionConfig }}
              className="inline-flex items-center space-x-3 mb-8"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-12 h-[1px] bg-gold origin-left"
              ></motion.span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
                Est. {FIRM_INFO.established} — {FIRM_INFO.membership}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ...transitionConfig }}
              className="text-6xl md:text-8xl lg:text-[110px] font-serif font-medium leading-[0.95] mb-8 text-white relative"
            >
              Bespoke <br />
              <span className="italic">Legal</span> Counsel <br />
              for the{" "}
              <span className="text-gold relative inline-block group cursor-default">
                Elite.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, ...transitionConfig }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
            >
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Strategic representation and proven results for high-stakes
                corporate and commercial litigation across global markets.
              </p>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/contact"
                  className="group relative flex items-center justify-between bg-white text-navy px-8 py-6 text-xs font-bold tracking-widest uppercase overflow-hidden shadow-xl"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                    Schedule Consultation
                  </span>
                  <MoveUpRight
                    size={18}
                    className="relative z-10 text-navy group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>
                </Link>
                <Link
                  to="/practice"
                  className="group relative flex items-center justify-between border border-white/20 text-white px-8 py-6 text-xs font-bold tracking-widest uppercase overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-navy transition-colors duration-500 delay-100">
                    Our Expertise
                  </span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 transition-all duration-500 group-hover:text-navy group-hover:translate-x-2 delay-100"
                  />
                  <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Media Column */}
        <div className="lg:w-5/12 relative hidden lg:block overflow-hidden">
          <motion.div
            style={{ y }}
            className="h-[120%] -mt-[10%] flex flex-col justify-center items-center px-12 lg:px-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, ...transitionConfig }}
              className="relative w-full aspect-[4/5] max-w-sm group"
            >
              <div className="absolute -inset-10 bg-gold/5 blur-3xl rounded-full scale-150 group-hover:bg-gold/10 transition-colors duration-1000"></div>
              <div className="absolute -top-6 -right-6 w-full h-full border border-gold/20 -z-10 group-hover:-top-8 group-hover:-right-8 transition-all duration-700"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full"
              >
                <HeroMediaSlider />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, ...transitionConfig }}
                className="absolute -bottom-6 -left-6 bg-navy text-white px-6 py-4 text-[8px] font-bold tracking-[0.4em] uppercase shadow-2xl backdrop-blur-sm"
              >
                Lagos Office
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gold/40 cursor-pointer hover:text-gold transition-colors group"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown
              size={14}
              className="group-hover:scale-125 transition-transform"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Highlights */}
      <section className="relative py-32 bg-transparent border-t border-navy/5 dark:border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000"
            alt="Courtroom"
            className="w-full h-full object-cover opacity-[0.15] contrast-125 brightness-75 sepia-[0.3] mix-blend-multiply dark:mix-blend-screen transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 via-gold/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transitionConfig}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-medium dark:text-white leading-tight">
                Architecting <br />{" "}
                <span className="italic text-gold">Certainty</span> in Chaos.
              </h2>
            </div>
            <p className="text-navy/50 dark:text-gray-400 max-w-sm mb-2 text-sm uppercase tracking-widest font-bold">
              Providing rigorous legal analysis and strategic counsel across
              specialized sectors.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-navy/10 dark:border-white/10 rounded-2xl overflow-hidden bg-white/30 dark:bg-navy/30 backdrop-blur-xl shadow-2xl"
          >
            {PRACTICE_AREAS.slice(0, 3).map((area, idx) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: transitionConfig },
                }}
                key={area.id}
                viewport={{ once: true }}
                className={`relative p-10 md:p-14 group transition-all duration-700 hover:bg-white/50 dark:hover:bg-white/5 border-navy/5 dark:border-white/5 cursor-pointer ${
                  idx === 0 ? "lg:border-r" : idx === 1 ? "lg:border-r" : ""
                } ${idx < 2 ? "border-b lg:border-b-0" : "border-b md:border-b-0"}`}
              >
                <div className="flex items-center space-x-4 mb-12">
                  <span className="text-3xl font-serif italic text-gold/30 group-hover:text-gold transition-colors duration-500">
                    {idx === 0 ? "" : `0${idx}`}
                  </span>
                  <div className="h-[1px] w-12 bg-gold/20 group-hover:w-20 group-hover:bg-gold transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                </div>

                <div className="relative z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <h3 className="text-3xl md:text-4xl font-serif font-medium mb-8 dark:text-white leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-navy/60 dark:text-gray-400 mb-12 font-light leading-relaxed text-lg">
                    {area.description}
                  </p>

                  <Link
                    to="/practice"
                    className="inline-flex items-center group/btn"
                  >
                    <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] relative overflow-hidden pb-1">
                      <span className="relative z-10">Explore Excellence</span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
                    </span>
                    <div className="ml-4 w-10 h-10 rounded-full border border-gold/10 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:text-navy group-active/btn:scale-95 transition-all duration-500">
                      <MoveUpRight
                        size={16}
                        className="group-hover/btn:translate-x-[1px] group-hover/btn:-translate-y-[1px] transition-transform"
                      />
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-tl-full translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 ease-out pointer-events-none"></div>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
              className="md:col-span-2 lg:col-span-3 bg-navy text-white p-12 md:p-20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000')] opacity-10 grayscale group-hover:scale-110 transition-transform duration-[3s] ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center lg:text-left">
                  <span className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">
                    Strategic Collaboration
                  </span>
                  <h3 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
                    Seeking Global{" "}
                    <span className="italic text-gold">Partners?</span>
                  </h3>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-0">
                    Our desk is open for strategic international collaborations,
                    cross-border advisory, and institutional legal support.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="bg-gold text-navy px-12 py-8 text-[10px] font-bold uppercase tracking-[0.4em] overflow-hidden relative shadow-[0_4px_30px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_40px_rgba(212,175,55,0.3)] transition-all duration-500 flex items-center space-x-6 shrink-0 group/cta hover:-translate-y-1 active:translate-y-0"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>
                  <span className="relative z-10 group-hover/cta:text-navy transition-colors">
                    Inquire Locally
                  </span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover/cta:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-40 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -z-10 translate-x-1/2 skew-x-12"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transitionConfig}
              className="lg:col-span-6"
            >
              <div className="relative">
                <div className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center">
                  <span className="w-12 h-[1px] bg-gold mr-4"></span>
                  Our Legacy
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-medium mb-10 dark:text-white leading-tight">
                  A Decade of <br />{" "}
                  <motion.span
                    whileHover={{ color: "#d4af37" }}
                    className="italic text-gold inline-block transition-colors cursor-default"
                  >
                    Unwavering
                  </motion.span>{" "}
                  <br /> Focus.
                </h2>
                <p className="text-lg text-navy/60 dark:text-gray-400 font-light leading-relaxed max-w-lg mb-12">
                  Established in 2014, we have navigated the complexities of
                  Nigerian corporate law with a commitment to excellence that
                  remains unrivaled in the region.
                </p>
                <div className="grid grid-cols-2 gap-12 cursor-default">
                  <motion.div
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <span className="block text-5xl font-serif text-gold font-bold mb-2">
                      <AnimatedCounter from={0} to={1000} />+
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy/40 dark:text-gray-500">
                      Cases Resolved
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <span className="block text-5xl font-serif text-gold font-bold mb-2">
                      NBA
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-navy/40 dark:text-gray-500">
                      Certified Elite
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transitionConfig}
              className="lg:col-span-6 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden group cursor-crosshair">
                <div className="absolute inset-0 border-[20px] border-beige dark:border-navy z-20 group-hover:border-[0px] transition-all duration-700 ease-out pointer-events-none"></div>
                <img
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1200"
                  alt="Senior Partners"
                  className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute bottom-10 left-10 z-30 bg-gold p-8 text-navy shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-transform group-hover:-translate-y-4 duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                  <span className="block text-[8px] font-bold uppercase tracking-widest mb-2 opacity-80">
                    The Partners
                  </span>
                  <p className="font-serif italic text-lg leading-tight p-0 m-0">
                    Leading with vision, <br />
                    serving with honor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 bg-navy dark:bg-[#001a35] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Law detail"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/90 to-transparent"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="inline-flex items-center justify-center p-3 rounded-full bg-gold/10 mb-12 border border-gold/20"
          >
            <Award size={24} className="text-gold" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...transitionConfig }}
            className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] mb-12 block"
          >
            Client Retrospective
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, ...transitionConfig }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-16 leading-[1.2] selection:bg-gold selection:text-navy"
          >
            "Conrad & Xavi provided the strategic foresight that protected our
            assets when the market was most volatile. They are the definitive
            legal choice."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-[1px] bg-gold mb-8"></div>
            <div className="font-bold text-[10px] uppercase tracking-[0.4em] mb-2 text-white/80">
              Chief Dr. Emeka A.
            </div>
            <div className="text-[8px] uppercase tracking-widest text-gold font-bold">
              Real Estate Magnate
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 bg-beige dark:bg-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transitionConfig}
            className="text-gold font-bold text-[8px] uppercase tracking-[0.6em] mb-12 block"
          >
            Your Security is Our Priority
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...transitionConfig }}
            className="text-7xl md:text-9xl font-serif font-medium mb-16 dark:text-white leading-tight cursor-default group"
          >
            Secure Your <br />
            <span className="italic text-gold inline-block group-hover:scale-105 transition-transform duration-500">
              Representation.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, ...transitionConfig }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center overflow-hidden bg-navy text-white px-12 py-8 text-[10px] font-bold tracking-[0.4em] uppercase shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gold translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>
              <span className="relative z-10 group-hover:text-navy transition-colors duration-500 delay-100">
                Schedule Private Consultation
              </span>
              <MoveUpRight
                size={18}
                className="relative z-10 ml-6 group-hover:text-navy transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 delay-100"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
