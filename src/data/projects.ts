export interface ProjectDetailSection {
  title: string;
  content: string | string[];
}

export interface ProjectData {
  id: string;
  status: string;
  year: string;
  title: string;
  desc: string;
  tags: string[];
  category: string;
  img: string;
  link: string;
  details: {
    pitch: string;
    sections: ProjectDetailSection[];
  };
}

// ─── FEATURED / PINNED PROJECTS ─────────────────────────────────────────
// The absolute best — showcased at the top of the page in large bento cards.

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: "01",
    status: "FEATURED",
    year: "2026",
    title: "Zon",
    desc: "Open-source Android Pomodoro suite offering offline task management, deep-work soundscapes, and GitHub-style analytics.",
    tags: ["ANDROID", "KOTLIN", "MATERIAL 3", "OPEN SOURCE"],
    category: "Android Application",
    img: "https://images.unsplash.com/photo-1596522521199-ab48b8863aa9?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/vrn7712/Zon",
    details: {
      pitch: "A digital sanctuary that helps users access their flow state. Zero ads. Zero tracking. Zero subscriptions. Just pure, beautiful productivity.",
      sections: [
        {
          title: "Defiance by Design",
          content: "The mobile market is flooded with focus apps that contradict their own purpose—cluttered with ads, mandatory sign-ups, and paywalled essentials. Zon was built as the antidote: a completely free, 100% offline-first application that respects the user's intelligence, time, and data privacy."
        },
        {
          title: "Feature Density",
          content: [
            "Fully customizable Pomodoro sprints overriding the standard 25-minute dogma, with automated work-break transitions and saveable presets.",
            "A rich analytics dashboard featuring GitHub-style yearly heatmaps, daily/weekly/monthly charts, and time-of-day breakdowns revealing peak productivity windows.",
            "Unified contextual task management with categorized subjects and priority tiers, eliminating the need to switch between apps.",
            "Curated offline ambient soundscapes integrated directly into the notification panel for an insulated acoustic environment."
          ]
        },
        {
          title: "Design Philosophy",
          content: "Built on Google's Material 3 Expressive design language with dynamic color theming. Full Light, Dark, and deep AMOLED theme support ensures it feels like a native, premium extension of the operating system."
        }
      ]
    }
  },
  {
    id: "02",
    status: "FEATURED",
    year: "2025",
    title: "AlertDrive",
    desc: "Award-winning IoT smart helmet ecosystem monitoring drowsiness, distraction, and impairment in real-time.",
    tags: ["ESP32", "IOT", "SENSORS", "MOBILE APP"],
    category: "Hardware & IoT",
    img: "https://images.unsplash.com/photo-1582215707736-235e236599cc?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "A proactive, three-tiered IoT safety net intercepting the three fatal vectors of road accidents before they become fatal.",
      sections: [
        {
          title: "The Crisis",
          content: "India faces over 415 traffic-related deaths daily. The core issue isn't mechanical—it's human. AlertDrive targets the three primary vectors: microsleep at highway speeds, mobile distraction causing 25% of urban crashes, and pre-ignition alcohol impairment involved in 30% of all fatalities."
        },
        {
          title: "Hardware Integration",
          content: [
            "The Guardian: An MPU6050 6-Axis Sensor coupled with an ESP32 Dual Core calculates head pitch/roll using a complementary filter with sub-50ms latency.",
            "The Dashboard: An MQ-3 interlocking alcohol sensor prevents ignition upon detecting impairment. DHT11 monitors cabin conditions to forecast fatigue.",
            "Command Center: Companion mobile application deploying real-time telemetry graphs, GPS geo-logging of alert events, and hands-free voice prompts."
          ]
        },
        {
          title: "Recognition",
          content: "National Finalist at the Rashtriya Bal Vaigyanik Pradarshani (RBVP) 2025 in Bhopal, validating extreme sensor-fusion reliability under rigorous institutional testing across District and State levels."
        }
      ]
    }
  },
  {
    id: "03",
    status: "FEATURED",
    year: "2025",
    title: "Non-Newtonian Speedbump",
    desc: "Adaptive traffic calming device using shear-thickening fluids — soft for lawful drivers, rigid against speeders.",
    tags: ["MATERIALS SCIENCE", "FLUID DYNAMICS", "ENGINEERING"],
    category: "Applied Physics",
    img: "https://images.unsplash.com/photo-1541888079-22a0a256aee0?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "Ending static infrastructural hazards. An adaptive kinetic barrier that transitions from liquid to solid exclusively upon violent impact — punishing speeders, yielding to ambulances.",
      sections: [
        {
          title: "The Failure of Concrete",
          content: "Traditional humps delay ambulances by critical seconds, damage vehicle suspension, waste fuel through forced stop-and-go cycles, and generate intense acoustic pollution indiscriminately across residential zones, hospitals, and school campuses."
        },
        {
          title: "Fluid Dynamics Engineering",
          content: "Harnesses shear-thickening non-Newtonian fluids (amylopectin colloid suspended in a PEG 400 matrix). At low shear (lawful speeds), particles slide freely — the bump stays liquid, compressing gently. At high shear (speeding impact), rapid hydroclustering triggers particle jamming, instantly solidifying the mass into a punishing rigid barrier."
        },
        {
          title: "Viability & Data",
          content: [
            "Achieved a mathematically proven 65.15% reduction in speeding vs. concrete's 52.6%.",
            "Vertical G-force jolt reduced from 1.2g (concrete) to 0.3–0.5g for lawful drivers.",
            "40–50% drop in perceived noise pollution in acoustic comparisons.",
            "Contained within extreme-pressure Kevlar hosing coated in industrial PVC. Awarded District Winner by INSPIRE Awards - MANAK, advanced to State Qualification."
          ]
        }
      ]
    }
  }
];

// ─── CURRENTLY WORKING ON ───────────────────────────────────────────────
// Projects actively in development. User will populate this next.

export const CURRENT_PROJECTS: ProjectData[] = [];

// ─── PAST PROJECTS ──────────────────────────────────────────────────────
// All completed works — the full archive.

export const PAST_PROJECTS: ProjectData[] = [
  {
    id: "01",
    status: "COMPLETED",
    year: "2026",
    title: "Zon",
    desc: "Open-source Android Pomodoro suite offering offline task management, deep-work soundscapes, and GitHub-style analytics.",
    tags: ["ANDROID", "KOTLIN", "MATERIAL 3", "OPEN SOURCE"],
    category: "Android Application",
    img: "https://images.unsplash.com/photo-1596522521199-ab48b8863aa9?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/vrn7712/Zon",
    details: {
      pitch: "A digital sanctuary that helps users access their flow state. Zero ads. Zero tracking. Zero subscriptions. Just pure, beautiful productivity.",
      sections: [
        {
          title: "Defiance by Design",
          content: "The mobile market is flooded with focus apps that contradict their own purpose—cluttered with ads, mandatory sign-ups, and paywalled essentials. Zon was built as the antidote: a completely free, 100% offline-first application that respects the user's intelligence, time, and data privacy."
        },
        {
          title: "Feature Density",
          content: [
            "Fully customizable Pomodoro sprints overriding the standard 25-minute dogma, with automated work-break transitions and saveable presets.",
            "A rich analytics dashboard featuring GitHub-style yearly heatmaps, daily/weekly/monthly charts, and time-of-day breakdowns revealing peak productivity windows.",
            "Unified contextual task management with categorized subjects and priority tiers, eliminating the need to switch between apps.",
            "Curated offline ambient soundscapes integrated directly into the notification panel for an insulated acoustic environment."
          ]
        },
        {
          title: "Design Philosophy",
          content: "Built on Google's Material 3 Expressive design language with dynamic color theming. Full Light, Dark, and deep AMOLED theme support ensures it feels like a native, premium extension of the operating system."
        }
      ]
    }
  },
  {
    id: "02",
    status: "COMPLETED",
    year: "2025",
    title: "AlertDrive",
    desc: "Award-winning IoT smart helmet ecosystem monitoring drowsiness, distraction, and impairment in real-time.",
    tags: ["ESP32", "IOT", "SENSORS", "MOBILE APP"],
    category: "Hardware & IoT",
    img: "https://images.unsplash.com/photo-1582215707736-235e236599cc?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "A proactive, three-tiered IoT safety net intercepting the three fatal vectors of road accidents before they become fatal.",
      sections: [
        {
          title: "The Crisis",
          content: "India faces over 415 traffic-related deaths daily. The core issue isn't mechanical—it's human. AlertDrive targets the three primary vectors: microsleep at highway speeds, mobile distraction causing 25% of urban crashes, and pre-ignition alcohol impairment involved in 30% of all fatalities."
        },
        {
          title: "Hardware Integration",
          content: [
            "The Guardian: An MPU6050 6-Axis Sensor coupled with an ESP32 Dual Core calculates head pitch/roll using a complementary filter with sub-50ms latency.",
            "The Dashboard: An MQ-3 interlocking alcohol sensor prevents ignition upon detecting impairment. DHT11 monitors cabin conditions to forecast fatigue.",
            "Command Center: Companion mobile application deploying real-time telemetry graphs, GPS geo-logging of alert events, and hands-free voice prompts."
          ]
        },
        {
          title: "Recognition",
          content: "National Finalist at the Rashtriya Bal Vaigyanik Pradarshani (RBVP) 2025 in Bhopal, validating extreme sensor-fusion reliability under rigorous institutional testing across District and State levels."
        }
      ]
    }
  },
  {
    id: "03",
    status: "COMPLETED",
    year: "2025",
    title: "Non-Newtonian Speedbump",
    desc: "Adaptive traffic calming device using shear-thickening fluids — soft for lawful drivers, rigid against speeders.",
    tags: ["MATERIALS SCIENCE", "FLUID DYNAMICS", "ENGINEERING"],
    category: "Applied Physics",
    img: "https://images.unsplash.com/photo-1541888079-22a0a256aee0?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "Ending static infrastructural hazards. An adaptive kinetic barrier that transitions from liquid to solid exclusively upon violent impact — punishing speeders, yielding to ambulances.",
      sections: [
        {
          title: "The Failure of Concrete",
          content: "Traditional humps delay ambulances by critical seconds, damage vehicle suspension, waste fuel through forced stop-and-go cycles, and generate intense acoustic pollution indiscriminately across residential zones, hospitals, and school campuses."
        },
        {
          title: "Fluid Dynamics Engineering",
          content: "Harnesses shear-thickening non-Newtonian fluids (amylopectin colloid suspended in a PEG 400 matrix). At low shear (lawful speeds), particles slide freely — the bump stays liquid, compressing gently. At high shear (speeding impact), rapid hydroclustering triggers particle jamming, instantly solidifying the mass into a punishing rigid barrier."
        },
        {
          title: "Viability & Data",
          content: [
            "Achieved a mathematically proven 65.15% reduction in speeding vs. concrete's 52.6%.",
            "Vertical G-force jolt reduced from 1.2g (concrete) to 0.3–0.5g for lawful drivers.",
            "40–50% drop in perceived noise pollution in acoustic comparisons.",
            "Contained within extreme-pressure Kevlar hosing coated in industrial PVC. Awarded District Winner by INSPIRE Awards - MANAK, advanced to State Qualification."
          ]
        }
      ]
    }
  },
  {
    id: "04",
    status: "COMPLETED",
    year: "2025",
    title: "Multiverse Explorer",
    desc: "Privacy-first desktop application generating branching life-simulations via local LLMs and Directed Multigraphs.",
    tags: ["PYTHON", "LLMS", "NETWORKX", "CHROMADB"],
    category: "AI Desktop Application",
    img: "https://images.unsplash.com/photo-1544256718-3baf237f39ca?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "Private Intelligence: Synthesizing scattered thoughts, chats, and calendars into a unified Life Graph to forecast future timelines without data leaving your local machine.",
      sections: [
        {
          title: "The Problem",
          content: "Human decisions rely on fragmented data—journals, WhatsApp chats, and calendars—trapped in silos. Generic AI advice lacks deep context, leading to decision paralysis."
        },
        {
          title: "The Graph Engine",
          content: [
            "Transforms unstructured text into a Directed Multigraph using NetworkX and ChromaDB.",
            "Uses a high-speed keyword-based extraction layer for emotion and entity mapping to avoid expensive LLM calls.",
            "Establishes topological relationships between chronological events and emotional states."
          ]
        },
        {
          title: "Multiverse Simulation",
          content: "Concurrently generates multiple future timelines utilizing RAG and local models (phi4-mini). Each projected future carries a narrative arc, quantifiably projected emotional profiles (Stress/Burnout), and longitudinal financial curves."
        }
      ]
    }
  },
  {
    id: "05",
    status: "COMPLETED",
    year: "2025",
    title: "MindFlow",
    desc: "AI-powered spatial learning platform that parses dense textbooks into interactive, infinite knowledge graphs.",
    tags: ["WEB", "GSAP", "LLM", "SPATIAL UI"],
    category: "Web Platform",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "Stop reading. Start perceiving. MindFlow transforms chaotic, static educational documents into a structured, visual universe.",
      sections: [
        {
          title: "Information Fragmentation",
          content: "Students drown in dense text and chaotic lecture notes. The cognitive load of manually organizing thoughts often exceeds the energy required to actually learn the material."
        },
        {
          title: "Neural Synthesis",
          content: "The proprietary engine consumes raw PDFs or audio and standardizes them into clean data nodes. It then harnesses AI to cross-reference latent relationships and automatically builds an infinite interactive canvas."
        },
        {
          title: "Ethereal Architecture",
          content: [
            "Built with an Awwwards-tier 'Ethereal Glass' aesthetic holding OLED-blacks to reduce eye strain.",
            "Utilizes Lenis and GSAP for cinematic, spring-physics motion, turning traditional studying into spatial exploration."
          ]
        }
      ]
    }
  },
  {
    id: "06",
    status: "COMPLETED",
    year: "2026",
    title: "Manim-Craft",
    desc: "A suite of four specialized AI skills injecting spatial awareness into LLMs for professional math animations.",
    tags: ["AI SKILLS", "PYTHON", "MANIM", "AUTOMATION"],
    category: "AI Agent Tooling",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "Elevating AI-generated scripts to professional 3Blue1Brown-quality educational sequences by teaching language models spatial awareness.",
      sections: [
        {
          title: "The Automation Wall",
          content: "When asked to code animations via Manim, standard AIs fail visually. Objects pile up, equations merge into blobs, and the pacing feels inherently robotic due to a lack of visual-spatial understanding."
        },
        {
          title: "A Four-Pillar Studio",
          content: [
            "1. The Director (manim-director): Halts raw output to properly storyboard concepts and plan scene pacing.",
            "2. The Animator (manim-animator): Applies mathematical typesetting (LaTeX) and choreographs camera movements using 24 rigorous syntax rules.",
            "3. The Critic (manim-critic): Functions as an automated visual QA, correcting 14 common rendering artifacts like z-index overlaps.",
            "4. The Editor (manim-editor): Packages the final assets into WebM, MP4, or GIF structures dynamically."
          ]
        }
      ]
    }
  },
  {
    id: "07",
    status: "COMPLETED",
    year: "2025",
    title: "Silo",
    desc: "Android conceptual initiative utilizing deep OS integrations to aggregate fragmented digital bookmarks visually.",
    tags: ["ANDROID", "UX DESIGN", "METADATA", "MOBILE"],
    category: "Android Application",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "A universal gathering tool bridging the gap between discovery and storage, stripping away platform noise for a unified inspiration board.",
      sections: [
        {
          title: "The Digital Graveyard",
          content: "Bookmarks are trapped within the walled gardens of Twitter, YouTube, Instagram, and Chrome. Discovering content is simple; retrieving it hours later is a fragmented nightmare."
        },
        {
          title: "Frictionless Capture",
          content: "By hooking directly into Android's native OS Share Sheet, Silo remains one tap away. Operating silently in the background, it scrapes Open Graph metrics, Twitter metadata, and hero images immediately upon receiving a URL."
        },
        {
          title: "Visual-First Architecture",
          content: "Silo shatters sterile list-views, projecting data onto a dynamic, staggered masonry layout based on content origin (music, articles, social threads), wrapped in a fluid, minimalist UI featuring expansive FAB interactions."
        }
      ]
    }
  },
  {
    id: "08",
    status: "COMPLETED",
    year: "2025",
    title: "Project VYXM",
    desc: "A conceptual 'Apple-tier' digital branding experience utilizing 120-frame high-fidelity canvas sequences.",
    tags: ["NEXT.JS", "CANVAS", "FRAMER MOTION", "BRANDING"],
    category: "Immersive Web",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "Sound is invisible. We made it tangible. Validating a conceptual titanium consumer product through sheer digital storytelling.",
      sections: [
        {
          title: "Concept Into Reality",
          content: "VYXM tests if a digital experience can be compelling enough to make a non-existent hardware product feel commercially ready. It is a masterclass in brand identity, leveraging an 'Industrial-Premium' OLED aesthetic."
        },
        {
          title: "Cinematic Rendering Engine",
          content: [
            "Abandoned standard <img> tags for a custom-built HTML5 Canvas-based rendering engine to process a massive 120-frame rotary sequence.",
            "Ties deep scroll-velocity tracking to 3D product rotations seamlessly at 60fps across mobile and ultra-wide displays."
          ]
        },
        {
          title: "Data Visualization",
          content: "Technical hardware specs dynamically animate into blueprint-style bento grids guided by Framer Motion's spring physics, maximizing user engagement without inducing loading stutters."
        }
      ]
    }
  },
  {
    id: "09",
    status: "COMPLETED",
    year: "2025",
    title: "Coffee-Class",
    desc: "Offline-first Flutter/Django educational LMS prioritizing aesthetic focus for competitive institution cohorts.",
    tags: ["FLUTTER", "DJANGO", "FIREBASE", "MOBILE"],
    category: "Full Stack Mobile",
    img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "A warm, distraction-free learning environment—right in your pocket. Reclaiming student focus from chaotic mass internet delivery.",
      sections: [
        {
          title: "The Fragmentation Dilemma",
          content: "Students preparing for brutal competitive exams lose time sorting disjointed PDFs and unprotected video links. Traditional corporate LMS layouts actively discourage prolonged usage."
        },
        {
          title: "The Architecture",
          content: "A comprehensive Flutter frontend driven by a Django security core. Supports robust 'Offline-First' freedom allowing secure caching of massive video assets and progressive remote syncing utilizing Firebase layers upon reconnection."
        },
        {
          title: "The 'Coffee' Paradigm",
          content: "Curated UI avoiding 'clinical white'. Designed around warm espresso tonal scales and deep Amethyst dark modes to alleviate optical strain during sustained midnight study cycles."
        }
      ]
    }
  },
  {
    id: "10",
    status: "COMPLETED",
    year: "2025",
    title: "Project: Astronaut",
    desc: "A cinematic, immersive web design experiment leveraging Three.js shaders and scroll-bound kinematics.",
    tags: ["THREE.JS", "GLSL", "GSAP", "LENIS"],
    category: "Experimental UI",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "Great design isn't just about how it looks; it's about how it moves. A cinematic voyage through the web.",
      sections: [
        {
          title: "The Experiment",
          content: "A technical playground designed to explore WebGL custom shaders seamlessly bound to multi-axis scroll kinematics, creating an illusion of true depth without overwhelming system memory."
        },
        {
          title: "Execution",
          content: "Utilizing Lenis smooth scrolling tethered to a Three.js Orthographic camera setup. As vertical velocity increases, environmental visual shaders dynamically stretch and warp to provide a literal sense of digital acceleration to the 'Astronaut' sequences."
        }
      ]
    }
  },
  {
    id: "11",
    status: "COMPLETED",
    year: "2025",
    title: "PCM Focus",
    desc: "Gamified STEM tracking companion utilizing psychological XP loops to combat rigorous academic burnout.",
    tags: ["FLUTTER", "HIVE", "RIVERPOD", "GAMIFICATION"],
    category: "Mobile Application",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "Treating competitive STEM preparation as a rewarding, measurable journey rather than a fragmented nightmare.",
      sections: [
        {
          title: "Data Blindness",
          content: "Students don't inherently know if they've neglected Mathematics to over-index on Chemistry until they fail an exam. Tracking needs to be granular and subject-specific."
        },
        {
          title: "The Loop",
          content: [
            "Mandated subject categorization prior to sprint initialization maps all historical data into visual performance charts per discipline.",
            "Combats fatigue via an integrated XP economy and daily streak system, directly mapping effort to satisfying retention mechanics."
          ]
        }
      ]
    }
  }
];
