import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MoveUpRight, Star, Hexagon, X, Pin } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { FEATURED_PROJECTS, CURRENT_PROJECTS, PAST_PROJECTS, ProjectData } from './data/projects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Shared Assets & Components ---

const GrainTexture = () => (
  <div className="fixed inset-0 pointer-events-none z-[90] mix-blend-overlay opacity-40 overflow-hidden">
    <svg className="absolute inset-0 w-full h-full opacity-50">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

const GlobalStyles = () => (
  <style>{`
    body {
      overflow-x: hidden;
      background: #1A1A1A;
    }
    ::selection {
      background: #EB5939;
      color: #F2F0E9;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #1A1A1A; 
        border-left: 1px solid #333;
    }
    ::-webkit-scrollbar-thumb {
        background: #EB5939; 
    }
    html { scroll-behavior: smooth; }
    .text-stroke-1 { -webkit-text-stroke: 1px currentColor; }
    .text-stroke-2 { -webkit-text-stroke: 2px currentColor; }
    .animate-spin-slow { animation: spin 20s linear infinite; }
    @keyframes spin { 100% { transform: rotate(360deg); } }
  `}</style>
);

// --- SECTIONS ---

const CinematicIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    });
    
    gsap.from(".hero-line", {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1.5,
      ease: "power4.inOut",
      delay: 0.5
    });
  }, { scope: containerRef });

  // Seamless GSAP ticker
  useGSAP(() => {
    if (!tickerRef.current) return;
    const inner = tickerRef.current.querySelector<HTMLElement>(".ticker-inner");
    if (!inner) return;

    // Duplicate the content for seamless loop
    const clone = inner.cloneNode(true) as HTMLElement;
    clone.setAttribute("aria-hidden", "true");
    tickerRef.current.appendChild(clone);

    const totalWidth = inner.offsetWidth;

    gsap.to(tickerRef.current, {
      x: -totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => parseFloat(String(x)) % totalWidth)
      }
    });
  }, { scope: tickerRef });

  return (
    <section className="relative min-h-[95vh] bg-[#F2F0E9] text-[#1A1A1A] flex flex-col justify-between pt-12 md:pt-16 pb-0 border-b-[16px] border-[#1A1A1A]">
      <div ref={containerRef} className="flex-1 px-6 md:px-12 flex flex-col justify-between">
        
        {/* Top bar */}
        <div className="flex justify-between w-full font-mono text-sm md:text-base uppercase tracking-widest border-b-2 border-[#1A1A1A] pb-6 font-bold hero-line">
          <span className="hero-text">Vrushal Modh</span>
          <span className="hero-text hidden md:block text-[#EB5939]">System Index</span>
          <span className="hero-text">2026©</span>
        </div>

        {/* Main title — full width, no grid overlap */}
        <div className="flex flex-col justify-center flex-1 py-8 md:py-0">
          <h1 className="hero-text font-serif text-[clamp(4rem,16vw,14rem)] leading-[0.85] tracking-tighter uppercase font-black">
             PROJECT
          </h1>
          <h1 className="hero-text font-serif text-[clamp(4rem,16vw,14rem)] leading-[0.85] tracking-tighter uppercase font-black text-[#EB5939]">
             INDEX
          </h1>
        </div>

        {/* Bottom descriptor bar — sits below the title, no overlap */}
        <div className="hero-text flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-8 border-t-2 border-[#1A1A1A] pt-8">
          <div className="border-l-[4px] border-[#EB5939] pl-6 md:pl-8 py-1">
            <p className="font-mono text-sm md:text-base font-bold leading-relaxed tracking-widest uppercase text-[#EB5939] mb-2">
              Cracked Vibe Coder
            </p>
            <p className="font-mono text-sm md:text-base font-bold leading-relaxed tracking-widest uppercase">
              A rigorous catalog of interactive <br className="hidden md:block" />
              mechanics and digital engineering.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-3">
               <div className="w-3 h-3 bg-[#1A1A1A]" />
               <div className="w-3 h-3 bg-[#EB5939]" />
               <div className="w-3 h-3 border-2 border-[#1A1A1A]" />
            </div>
            <span className="font-mono text-sm font-bold uppercase tracking-widest opacity-50">11 Projects</span>
          </div>
        </div>

      </div>

      {/* Ticker bar — GSAP driven */}
      <div className="w-full border-t-[4px] border-[#1A1A1A] bg-[#1A1A1A] text-[#F2F0E9] py-4 overflow-hidden whitespace-nowrap hero-line">
        <div ref={tickerRef} className="flex will-change-transform whitespace-nowrap">
          <div className="ticker-inner flex">
            <span className="mx-6 font-mono text-base font-bold uppercase tracking-[0.2em]">✦ DIGITAL EXPERIMENTS</span>
            <span className="mx-6 font-mono text-base font-bold uppercase tracking-[0.2em]">✦ ENGINEERING</span>
            <span className="mx-6 font-mono text-base font-bold uppercase tracking-[0.2em]">✦ AI SYSTEMS</span>
            <span className="mx-6 font-mono text-base font-bold uppercase tracking-[0.2em]">✦ MOBILE</span>
            <span className="mx-6 font-mono text-base font-bold uppercase tracking-[0.2em]">✦ IOT HARDWARE</span>
            <span className="mx-6 font-mono text-base font-bold uppercase tracking-[0.2em]">✦ APPLIED PHYSICS</span>
            <span className="mx-6 font-mono text-base font-bold uppercase tracking-[0.2em]">✦ WEB DESIGN</span>
            <span className="mx-6 font-mono text-base font-bold uppercase tracking-[0.2em]">✦ OPEN SOURCE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const HorizontalScroller = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const getScrollAmount = () => {
      if (!containerRef.current || !sectionRef.current) return 0;
      return -(containerRef.current.scrollWidth - window.innerWidth);
    };

    gsap.to(containerRef.current, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 0.8,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        invalidateOnRefresh: true,
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen bg-[#F2F0E9] flex items-center overflow-hidden border-b-[16px] border-[#1A1A1A]">
      
      {/* Background watermark */}
      <div className="absolute inset-0 flex flex-col justify-center overflow-hidden pointer-events-none opacity-[0.03]">
         <h2 className="font-serif text-[30vw] leading-[0.8] tracking-tighter uppercase font-black whitespace-nowrap -ml-[10vw]">
           COLLECTION
         </h2>
         <h2 className="font-serif text-[30vw] leading-[0.8] tracking-tighter uppercase font-black whitespace-nowrap text-[#EB5939]">
           ARCHIVES
         </h2>
      </div>

      <div ref={containerRef} className="flex h-full w-max will-change-transform">

        {/* Panel 1: Title */}
        <div className="w-[100vw] h-full flex flex-col justify-center px-12 md:px-24 flex-shrink-0 relative">
          <div className="font-mono text-xl uppercase tracking-widest font-bold text-[#EB5939] mb-8 flex items-center gap-4">
             <div className="w-12 h-1 bg-[#EB5939]" /> 01
          </div>
          <h2 className="font-serif text-[12vw] leading-none font-black tracking-tighter text-[#1A1A1A]">
            SELECTED
          </h2>
          <h2 className="font-serif text-[12vw] leading-none font-black tracking-tighter text-transparent text-stroke-2 text-[#1A1A1A]">
            WORKS
          </h2>
          <p className="font-mono text-lg md:text-xl font-bold mt-12 max-w-md opacity-60 tracking-wide uppercase">
            A curated collection of engineering, design, and research.
          </p>
        </div>

        {/* Panel 2: Stats */}
        <div className="w-[80vw] md:w-[50vw] h-full bg-[#1A1A1A] text-[#F2F0E9] border-x-[16px] border-[#1A1A1A] flex flex-col justify-center p-12 md:p-20 flex-shrink-0 relative overflow-hidden">
          <div className="flex flex-col gap-16">
            <div>
              <span className="font-mono text-[8vw] md:text-[6vw] font-black text-[#EB5939] leading-none">11+</span>
              <p className="font-mono text-lg md:text-xl font-bold uppercase tracking-widest mt-2 opacity-70">Shipped Projects</p>
            </div>
            <div>
              <span className="font-mono text-[8vw] md:text-[6vw] font-black text-[#F2F0E9] leading-none">5</span>
              <p className="font-mono text-lg md:text-xl font-bold uppercase tracking-widest mt-2 opacity-70">Domains Covered</p>
            </div>
            <div className="flex gap-4 mt-4">
              {["ANDROID", "IOT", "WEB", "AI", "PHYSICS"].map(d => (
                <span key={d} className="border-[2px] border-[#F2F0E9]/30 px-4 py-2 font-mono text-sm font-black uppercase tracking-wider">{d}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Panel 3: Accent Block */}
        <div className="w-[70vw] md:w-[50vw] h-full bg-[#EB5939] border-x-[16px] border-[#1A1A1A] flex items-center justify-center p-12 flex-shrink-0 relative overflow-hidden">
           <div className="absolute top-12 left-12 right-12 bottom-12 border-[4px] border-[#1A1A1A] border-dashed pointer-events-none" />
           <div className="z-10 text-center">
             <p className="font-mono text-2xl md:text-5xl uppercase tracking-widest font-black leading-tight text-[#1A1A1A]">
               PRECISION <br/> MEETS <br/> CHAOS
             </p>
             <div className="mt-8 flex justify-center gap-3">
               <div className="w-4 h-4 bg-[#1A1A1A]" />
               <div className="w-4 h-4 bg-[#1A1A1A] rotate-45" />
               <div className="w-4 h-4 bg-[#1A1A1A] rounded-full" />
             </div>
           </div>
           <Hexagon className="absolute -bottom-24 -right-24 w-96 h-96 text-[#1A1A1A] opacity-10 animate-spin-slow" />
           <Star className="absolute top-16 left-16 w-24 h-24 text-[#1A1A1A] opacity-10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>

        {/* Panel 4: Philosophy */}
        <div className="w-[90vw] md:w-[60vw] h-full flex flex-col justify-center px-12 md:px-24 flex-shrink-0 relative">
           <div className="border-l-[8px] border-[#EB5939] pl-8 md:pl-12">
             <p className="font-serif text-3xl md:text-5xl font-black italic leading-snug text-[#1A1A1A] mb-8">
               "The best interface is the one that dissolves into the experience."
             </p>
             <span className="font-mono text-lg font-bold uppercase tracking-widest text-[#EB5939]">— Design Philosophy</span>
           </div>
        </div>

        {/* Panel 5: Since */}
        <div className="w-[100vw] h-full flex flex-col items-end text-right justify-center px-12 md:px-24 flex-shrink-0">
          <div className="font-mono text-xl uppercase tracking-widest font-bold text-[#EB5939] mb-8 flex items-center gap-4">
             ACTIVE <div className="w-12 h-1 bg-[#EB5939]" />
          </div>
          <h2 className="font-serif text-[12vw] leading-none font-black tracking-tighter text-[#1A1A1A]">
            SINCE
          </h2>
          <h2 className="font-serif text-[12vw] leading-none font-black tracking-tighter italic text-[#EB5939]">
            2024
          </h2>
          <p className="font-mono text-lg md:text-xl font-bold mt-12 max-w-md opacity-60 tracking-wide uppercase text-right">
            Building at the intersection of AI, hardware, and design.
          </p>
        </div>

      </div>
    </section>
  );
};

// ─── SECTION 1: FEATURED / PINNED ──────────────────────────────────────
const FeaturedProjects = ({ onSelect }: { onSelect: (proj: ProjectData) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".featured-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="featured" className="py-32 px-6 md:px-12 bg-[#F2F0E9] text-[#1A1A1A] border-b-[16px] border-[#1A1A1A]">
      <div className="mb-20 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b-[4px] border-[#1A1A1A]">
        <div>
          <div className="font-mono text-base uppercase tracking-widest font-bold text-[#EB5939] mb-4 flex items-center gap-3">
            <Pin className="w-5 h-5" /> PINNED
          </div>
          <h2 className="font-serif text-[12vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none">
            Featured
          </h2>
        </div>
        <div className="font-mono text-lg md:text-2xl border-[3px] border-[#1A1A1A] px-8 py-3 bg-[#1A1A1A] text-[#F2F0E9] font-black tracking-widest uppercase mt-6 md:mt-0">
          {FEATURED_PROJECTS.length} Projects
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {FEATURED_PROJECTS.map((proj, i) => {
          const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-12"];
          const colSpanClass = spans[i % spans.length];
          return (
          <button 
            key={proj.id} 
            onClick={() => onSelect(proj)}
            className={cn("featured-card group relative bg-[#1A1A1A] text-[#F2F0E9] border-[8px] border-[#1A1A1A] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_#EB5939] flex flex-col justify-between min-h-[420px] text-left overflow-hidden cursor-pointer", colSpanClass)}
          >
            {/* Background image bloom */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-0">
               <img src={proj.img} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="p-8 md:p-12 border-b-[4px] border-[#F2F0E9]/20 flex justify-between items-start z-10 w-full relative">
              <div className="font-mono text-base uppercase tracking-widest font-bold flex items-center gap-3">
                <Star className="w-5 h-5 text-[#EB5939] fill-current" />
                {proj.status}
              </div>
              <span className="font-mono text-base font-bold bg-[#EB5939] text-[#1A1A1A] px-3 py-1">
                {proj.year}
              </span>
            </div>
            
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-end z-10 relative w-full">
              <h3 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 transition-colors duration-300 group-hover:text-[#EB5939]">
                {proj.title}
              </h3>
              <p className="font-mono text-base md:text-lg font-bold opacity-70 mb-10 max-w-xl leading-relaxed">
                {proj.desc}
              </p>
              
              <div className="flex flex-wrap gap-3 text-sm uppercase font-mono font-black">
                {proj.tags.map(tag => (
                  <span key={tag} className="border-[2px] border-[#F2F0E9]/30 px-4 py-2 hover:bg-[#EB5939] hover:text-[#1A1A1A] hover:border-[#EB5939] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        )})}
      </div>
    </section>
  );
};

// ─── SECTION 2: CURRENTLY WORKING ON ────────────────────────────────────
const CurrentlyWorkingOn = ({ onSelect }: { onSelect: (proj: ProjectData) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".current-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  if (CURRENT_PROJECTS.length === 0) {
    return (
      <section ref={containerRef} className="py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#F2F0E9] border-b-[16px] border-[#1A1A1A]">
        <div className="mb-12 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b-[4px] border-[#F2F0E9]">
          <h2 className="font-serif text-[12vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none mb-6 md:mb-0">
            Currently
          </h2>
          <div className="font-mono text-lg md:text-2xl border-[3px] border-[#EB5939] px-8 py-3 bg-[#EB5939] text-[#1A1A1A] font-black tracking-widest uppercase">
            Brewing
          </div>
        </div>
        <div className="border-[4px] border-dashed border-[#F2F0E9]/20 p-16 md:p-24 flex items-center justify-center">
          <p className="font-mono text-xl md:text-2xl font-bold opacity-40 uppercase tracking-widest text-center">
            Projects loading into the pipeline...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} id="current" className="py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#F2F0E9] border-b-[16px] border-[#1A1A1A]">
      <div className="mb-20 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b-[4px] border-[#F2F0E9]">
        <h2 className="font-serif text-[12vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none mb-6 md:mb-0">
          Currently
        </h2>
        <div className="font-mono text-lg md:text-2xl border-[3px] border-[#EB5939] px-8 py-3 bg-[#EB5939] text-[#1A1A1A] font-black tracking-widest uppercase">
          Brewing
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {CURRENT_PROJECTS.map((proj, i) => {
          const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-12"];
          const colSpanClass = spans[i % spans.length];
          return (
          <button 
            key={proj.id} 
            onClick={() => onSelect(proj)}
            className={cn("current-card group relative bg-[#F2F0E9] text-[#1A1A1A] border-[8px] border-[#1A1A1A] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_#EB5939] flex flex-col justify-between min-h-[400px] text-left overflow-hidden cursor-pointer", colSpanClass)}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-0">
               <img src={proj.img} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="p-8 md:p-12 border-b-[4px] border-[#1A1A1A] flex justify-between items-start bg-[#1A1A1A] text-[#F2F0E9] z-10 w-full relative">
              <div className="font-mono text-base uppercase tracking-widest font-bold flex items-center gap-3">
                <Star className="w-5 h-5 text-[#EB5939] fill-current" />
                {proj.status}
              </div>
              <span className="font-mono text-base font-bold bg-[#EB5939] text-[#1A1A1A] px-3 py-1">
                {proj.year}
              </span>
            </div>
            
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-end z-10 relative w-full">
              <h3 className="font-serif text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 transition-colors duration-300 group-hover:text-[#EB5939]">
                {proj.title}
              </h3>
              <p className="font-mono text-base md:text-lg font-bold opacity-80 mb-10 max-w-lg leading-relaxed">
                {proj.desc}
              </p>
              
              <div className="flex flex-wrap gap-3 text-sm uppercase font-mono font-black">
                {proj.tags.map(tag => (
                  <span key={tag} className="border-[2px] border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-[#F2F0E9] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        )})}
      </div>
    </section>
  );
};

// ─── SECTION 3: PAST PROJECTS ───────────────────────────────────────────
const PastProjectsList = ({ onSelect }: { onSelect: (proj: ProjectData) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rows = gsap.utils.toArray<HTMLElement>(".past-row", containerRef.current);
    
    rows.forEach((row) => {
      gsap.set(row, { opacity: 0, y: 30 });
      
      ScrollTrigger.create({
        trigger: row,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(row, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
          });
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-[#1A1A1A] text-[#F2F0E9] relative border-b-[16px] border-[#F2F0E9]">
      <div className="px-6 md:px-12 mb-20 flex items-center gap-8">
         <h2 className="font-serif text-[12vw] md:text-[8vw] leading-none font-black uppercase tracking-tighter">
           Past
         </h2>
         <div className="h-[4px] w-full bg-[#EB5939] flex-1 mt-4" />
      </div>

      <div className="relative flex flex-col w-full">
        <div className="border-t-[4px] border-[#F2F0E9]/20 w-full" />
        {PAST_PROJECTS.map((proj) => (
          <button
            key={proj.id}
            onClick={() => onSelect(proj)}
            className="past-row group relative w-full flex flex-col md:flex-row items-start md:items-center justify-between py-12 md:py-16 px-6 md:px-12 border-b-[4px] border-[#F2F0E9]/20 transition-all duration-300 hover:bg-[#F2F0E9] hover:text-[#1A1A1A] text-left cursor-pointer"
          >
            <div className="flex items-center gap-6 md:gap-16 w-full z-10">
              <span className="font-mono text-2xl font-black w-12">{proj.id}</span>
              <h3 className="font-serif text-5xl md:text-7xl font-black uppercase tracking-tighter transition-transform duration-300 group-hover:translate-x-4">
                {proj.title}
              </h3>
            </div>
            
            <div className="flex items-center gap-8 md:gap-16 z-10 mt-8 md:mt-0 ml-18 md:ml-0">
              <span className="font-mono text-sm md:text-lg uppercase tracking-widest font-black border-[2px] border-current px-6 py-2">
                {proj.category}
              </span>
              <span className="font-mono text-xl font-bold">{proj.year}</span>
              <div className="w-12 h-12 bg-[#EB5939] text-[#1A1A1A] flex items-center justify-center rounded-full opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden md:flex">
                 <MoveUpRight className="w-6 h-6" />
              </div>
            </div>

            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[350px] aspect-video border-[8px] border-[#1A1A1A] bg-[#1A1A1A] opacity-0 scale-50 pointer-events-none transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-3 z-20 hidden lg:block overflow-hidden shadow-2xl">
               <img src={proj.img} alt={proj.title} className="w-full h-full object-cover grayscale opacity-80" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

const Capabilities = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F2F0E9] text-[#1A1A1A] border-b-[16px] border-[#EB5939]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-12">
          <h2 className="font-serif text-[8vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none mb-4">
            Capabilities <span className="text-transparent text-stroke-2 opacity-50">& Trajectory</span>
          </h2>
          <div className="h-[4px] w-full max-w-sm bg-[#1A1A1A] mb-12" />
        </div>

        <div className="lg:col-span-6 border-t-[4px] border-[#1A1A1A] pt-8">
          <h3 className="font-mono text-xl font-black uppercase tracking-widest mb-6">Recent Explorations</h3>
          <ul className="flex flex-col gap-6 font-mono text-sm md:text-base font-bold leading-relaxed list-disc list-inside">
            <li>Developing sophisticated agent skills for autonomous AI assistants.</li>
            <li>Engineering high-performance Android mobile architectures.</li>
            <li>Constructing low-level minimalist operating systems.</li>
            <li>Advancing contemporary front-end website design and UI/UX dynamics.</li>
          </ul>
        </div>

        <div className="lg:col-span-6 border-t-[4px] border-[#1A1A1A] pt-8">
          <h3 className="font-mono text-xl font-black uppercase tracking-widest mb-6">Current Horizon</h3>
          <ul className="flex flex-col gap-6 font-mono text-sm md:text-base font-bold leading-relaxed list-disc list-inside text-[#EB5939]">
            <li>Deepening foundational research in Artificial Intelligence paradigms.</li>
            <li>Architecting complex integrations for large-scale AI applications.</li>
            <li>Laying theoretical and practical groundwork to train proprietary AI models.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#1A1A1A] text-[#F2F0E9] py-24 px-6 md:px-12">
    <div className="flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="flex-1">
        <h2 className="font-serif text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.85] mb-8">
          ARCHITECTING <br /> THE <span className="text-[#EB5939]">FUTURE</span>
        </h2>
        <p className="font-mono text-sm md:text-lg font-bold opacity-80 max-w-xl mb-12 leading-relaxed">
          The developers who wield Artificial Intelligence will profoundly shape the next iteration of the Web. Let us build solutions that carry impact.
        </p>
        <a href='mailto:vrn7712@gmail.com' className="relative inline-flex border-[4px] border-[#F2F0E9] px-12 py-6 font-mono text-xl md:text-3xl font-black uppercase hover:bg-[#EB5939] hover:border-[#EB5939] hover:text-[#1A1A1A] transition-colors items-center gap-6 group">
          Contact Me <MoveUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
        </a>
      </div>
      <div className="text-left md:text-right flex flex-col items-start md:items-end gap-16 w-full md:w-1/3">
         <div className="p-8 border-[4px] border-[#F2F0E9] w-full flex flex-col gap-6 font-bold">
            <span className="font-mono text-sm opacity-50 uppercase tracking-widest border-b-[2px] border-[#F2F0E9]/20 pb-4">Network</span>
            <a href="https://github.com/vrn7712" target="_blank" rel="noopener noreferrer" className="font-mono text-xl md:text-3xl hover:text-[#EB5939] transition-colors flex items-center gap-3">GITHUB <MoveUpRight className="w-5 h-5 opacity-50" /></a>
            <a href="https://www.linkedin.com/in/vrushal-modh-641a5627b/" target="_blank" rel="noopener noreferrer" className="font-mono text-xl md:text-3xl hover:text-[#EB5939] transition-colors flex items-center gap-3">LINKEDIN <MoveUpRight className="w-5 h-5 opacity-50" /></a>
         </div>
         <div className="font-mono text-sm opacity-60 flex flex-col gap-4">
           <p className="leading-relaxed text-left md:text-right">
             <span className="text-[#EB5939]">Fluent Tooling</span> <br/>
             Antigravity, Claude Code, Codex, Gemini CLI, <br/>
             GitHub Copilot, Android Studio, VS Code, Linux.
           </p>
           <p className="uppercase tracking-widest font-bold">
             Copyright © 2026<br/>Vrushal Modh Index.
           </p>
         </div>
      </div>
    </div>
  </footer>
);

// ─── PROJECT DETAIL MODAL ───────────────────────────────────────────────
const ProjectModal = ({ project, onClose }: { project: ProjectData; onClose: () => void }) => (
  <motion.div 
    initial={{ y: "100%", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: "100%", opacity: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="fixed inset-0 z-[100] bg-[#F2F0E9] overflow-y-auto overflow-x-hidden text-[#1A1A1A]"
  >
    {/* Sticky close bar */}
    <div className="sticky top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 pointer-events-none bg-gradient-to-b from-[#F2F0E9] via-[#F2F0E9]/90 to-transparent pb-16">
       <button 
          onClick={onClose} 
          className="pointer-events-auto font-mono text-sm md:text-base uppercase tracking-widest font-black bg-[#1A1A1A] text-[#F2F0E9] px-6 py-4 hover:bg-[#EB5939] hover:text-[#1A1A1A] transition-colors flex items-center gap-4 border-[4px] border-[#1A1A1A]"
       >
          <X className="w-6 h-6" />
          RETURN TO INDEX
       </button>
    </div>

    <div className="min-h-screen pt-4 pb-32 px-6 md:px-12 flex flex-col items-center">
       <div className="max-w-5xl w-full">
          
          {/* Header cluster */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 font-mono text-sm uppercase tracking-widest font-bold mb-6 opacity-60">
              <span>{project.year}</span>
              <span className="w-1.5 h-1.5 bg-[#EB5939] rounded-full" />
              <span>{project.category}</span>
              {project.role && (
                <>
                  <span className="w-1.5 h-1.5 bg-[#EB5939] rounded-full" />
                  <span>{project.role}</span>
                </>
              )}
            </div>

            <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.85] font-black uppercase tracking-tighter break-words text-[#1A1A1A]">
              {project.title}
            </h1>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-16">
            {project.tags.map((tag, i) => (
              <span key={i} className="font-mono text-xs md:text-sm uppercase tracking-widest font-black border-[3px] border-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A] hover:text-[#F2F0E9] transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>

          {/* Hero image */}
          <div className="w-full aspect-video border-[12px] border-[#1A1A1A] mb-20 overflow-hidden bg-[#1A1A1A] relative shadow-[24px_24px_0_0_rgba(235,89,57,1)]">
             <img src={project.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-90" alt="Project Hero" />
          </div>

          {/* Pitch section */}
          <div className="mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-[#1A1A1A]">
              The Pitch
            </h2>
            <p className="font-mono text-xl md:text-3xl font-bold leading-snug px-6 md:px-8 border-l-[8px] border-[#EB5939] text-[#1A1A1A]">
              {project.details.pitch}
            </p>
          </div>

          {/* Detail sections */}
          <div className="flex flex-col gap-16">
            {project.details.sections.map((sec, idx) => (
              <div key={idx} className="border-t-[4px] border-[#1A1A1A] pt-8">
                <div className="flex items-start gap-4 md:gap-6 mb-8">
                  <span className="font-mono text-4xl md:text-5xl font-black text-[#EB5939] leading-none mt-1 select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-mono text-xl md:text-2xl font-black uppercase tracking-widest text-[#1A1A1A] pt-2">
                    {sec.title}
                  </h3>
                </div>
                {Array.isArray(sec.content) ? (
                  <div className="flex flex-col gap-5 pl-2 md:pl-16">
                    {sec.content.map((c, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="w-2.5 h-2.5 bg-[#EB5939] flex-shrink-0 mt-2.5" />
                        <p className="font-mono text-base md:text-lg font-bold leading-relaxed opacity-85">{c}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-mono text-base md:text-lg font-bold leading-relaxed opacity-85 pl-2 md:pl-16">{sec.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* Bottom link */}
          {project.link && project.link !== "#" && (
            <div className="mt-20 pt-12 border-t-[4px] border-[#1A1A1A]">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex border-[4px] border-[#1A1A1A] px-10 py-5 font-mono text-lg md:text-2xl font-black uppercase hover:bg-[#EB5939] hover:border-[#EB5939] hover:text-[#1A1A1A] transition-colors items-center gap-4 group"
              >
                View Project <MoveUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          )}

       </div>
    </div>
  </motion.div>
);

// ─── MAIN PAGE ──────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Lock body scroll when modal is open
  if (typeof window !== 'undefined') {
     document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
  }

  return (
    <>
      <GlobalStyles />
      <GrainTexture />
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <main className="min-h-screen">
        <CinematicIntro />
        <HorizontalScroller />
        <FeaturedProjects onSelect={setSelectedProject} />
        <CurrentlyWorkingOn onSelect={setSelectedProject} />
        <PastProjectsList onSelect={setSelectedProject} />
        <Capabilities />
        <Footer />
      </main>
    </>
  );
}
