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
  role?: string;
  details: {
    pitch: string;
    sections: ProjectDetailSection[];
  };
}

// â”€â”€â”€ FEATURED / PINNED PROJECTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: "01",
    status: "FEATURED",
    year: "2026",
    title: "Zon",
    desc: "Open-source Android Pomodoro suite offering offline task management, deep-work soundscapes, and GitHub-style analytics.",
    tags: ["ANDROID", "KOTLIN", "MATERIAL 3", "OPEN SOURCE"],
    category: "Android Application",
    img: "/thumbnails/Zon_showcase.png",
    link: "https://github.com/vrn7712/Zon",
    role: "Creator / Lead Developer",
    details: {
      pitch: "A digital sanctuary that helps users access their flow state. Zero ads. Zero tracking. Zero subscriptions. Just pure, beautiful productivity.",
      sections: [
        {
          title: "Defiance by Design",
          content: "The mobile market is overwhelmingly saturated with productivity tools that fundamentally contradict their purpose—cluttered with intrusive banner ads, mandatory sign-ups, and paywalled essentials. Zon was architected from the ground up as the definitive antidote: a completely free, 100% open-source, and strictly offline-first application that respects the user's intelligence, time, and data privacy."
        },
        {
          title: "Deep Work, Tailored To You",
          content: [
            "Fully customizable Pomodoro sprints overriding the standard 25-minute dogma, with automated work-break transitions and saveable presets for different workflows.",
            "Curated offline ambient soundscapes—Cozy Lofi, Study Music—integrated directly into the notification panel, creating an insulated acoustic environment without needing a third app.",
            "Smart alerts customizable with specific sounds or vibration-only feedback for quiet environments. Automatic Do Not Disturb integration ensures calls don't break the zone.",
            "Home screen widgets for timer control and daily stats, letting users glance at progress without opening the app."
          ]
        },
        {
          title: "Meaningful Analytics",
          content: "A rich, visually dense analytics dashboard transforms raw data into actionable insights. GitHub-style yearly heatmaps display consistency over time, daily/weekly/monthly charts track progress, and a unique time-of-day breakdown reveals when the user is most naturally productive—allowing optimization of challenging tasks for peak hours."
        },
        {
          title: "Unified Task Management",
          content: "Instead of context-switching between apps, users organize their entire day directly within Zon. The built-in manager supports categorized subjects, tiered priority levels, and intuitive swipe-to-delete gestures—ensuring users always know what to tackle the moment they hit Start."
        },
        {
          title: "Design Philosophy",
          content: "Built utilizing Google's latest Material 3 Expressive design language with dynamic color theming that adapts to the user's wallpaper. Full Light, Dark, and deep AMOLED theme support ensures it feels like a premium, native extension of the operating system. Fluid animations and intuitive swipe gestures make navigation a tactile, satisfying experience."
        }
      ]
    }
  },
  {
    id: "02",
    status: "FEATURED",
    year: "2026",
    title: "Pandora",
    desc: "AI-powered STEM visualization engine transforming abstract physics and math into mathematically precise animations using Manim.",
    tags: ["AI/ML", "PYTHON", "FLUTTER", "STEM"],
    category: "Educational Platform",
    img: "/thumbnails/Project_Pandora_Showcase.png",
    link: "#",
    role: "AI/ML Lead & Infrastructure Architect",
    details: {
      pitch: "Eliminating the 'visual gap' in STEM education. Pandora translates natural language into precise mathematical animations, making complex concepts visible for every student.",
      sections: [
        {
          title: "The Visual Gap in STEM",
          content: "STEM education in India remains heavily theoretical, leaving students struggling to visualize abstract physics and mathematical concepts. Traditional online platforms rely on pre-recorded content that offers no dynamic interactivity or adaptive personalization. Pandora bridges this gap by combining LLMs with a mathematically precise rendering engine."
        },
        {
          title: "Programmatic Precision",
          content: [
            "Utilizes Manim (Mathematical Animation Engine) to guarantee 100% mathematical accuracy, bypassing the 'hallucination' issues of standard generative video AI.",
            "Translates natural language prompts—such as deriving the area under a parabola—into executable Manim scripts via optimized AI pipelines.",
            "Renders flawless LaTeX equations and precise 3D plots to academic standards, removing the programming barrier for students and educators.",
            "Introduces a custom .pandora file format that merges static LaTeX readability with interactive, embedded animations."
          ]
        },
        {
          title: "Hybrid Intelligence Architecture",
          content: [
            "Hybrid cloud architecture: Distributed rendering pipeline balancing heavy compute on Raspberry Pi servers with cloud-based Manim services.",
            "Cross-platform delivery: Unified Flutter client for Android, Desktop, and Web with optimized state management using the Provider package.",
            "Offline-First Strategy: Aggressive edge caching and service workers support playback in rural environments with constrained network resources.",
            "AI Pipeline: Multi-stage inference using OpenRouter APIs with prompt compression and token-efficient formatting."
          ]
        },
        {
          title: "Impact & Roadmap",
          content: [
            "Targets consistency in render times under 1.5 seconds and mapping 90% of the NCERT curriculum.",
            "Engineered for low-literacy accessibility with semantic labels, high-contrast themes, and large tap targets.",
            "Scalable design ready for integration with national digital platforms like SWAYAM and DIKSHA.",
            "Future roadmap includes 3D Manim expansion, AR modules, and regional language support."
          ]
        }
      ]
    }
  },
  {
    id: "03",
    status: "FEATURED",
    year: "2025",
    title: "AlertDrive",
    desc: "Award-winning IoT smart helmet ecosystem monitoring drowsiness, distraction, and impairment in real-time.",
    tags: ["ESP32", "IOT", "SENSORS", "MOBILE APP"],
    category: "Hardware & IoT",
    img: "/thumbnails/AlertDrive_showcase.png",
    link: "#",
    role: "Co-Creator, Research & Data Analysis",
    details: {
      pitch: "A proactive, three-tiered IoT safety net intercepting the three fatal vectors of road accidents before they become fatal. National Finalist at RBVP 2025, Bhopal.",
      sections: [
        {
          title: "The Crisis: A Silent Epidemic",
          content: "India faces over 415 traffic-related deaths daily. The core issue isn't mechanical—it's human. Our team isolated three primary vectors: Drowsiness (~5% of highway fatalities—a microsleep at 80km/h is lethal), Distraction (#1 cause of urban collisions at 25%, mobile use increasing crash risk by 400%), and Impairment (30% of all fatalities, where prevention must happen before ignition)."
        },
        {
          title: "The Guardian — Hardware v1.0",
          content: [
            "MPU6050 6-Axis Sensor constantly calculates the user's head pitch and roll using a complementary filter algorithm.",
            "ESP32 Dual Core processor provides sub-50ms latency for real-time kinematic monitoring.",
            "Custom C++ algorithm utilizing advanced mathematics to correct accelerometer drift and calculate precise angles.",
            "If a critical head tilt exceeding a strict 35-degree threshold indicating microsleep is detected, local buzzers activate instantly and a distress payload is dispatched."
          ]
        },
        {
          title: "The Dashboard Unit",
          content: "An onboard dashboard suite interfaces directly with the driver's environment. An MQ-3 interlocking alcohol sensor physically prevents engine ignition upon detecting impairment. A DHT11 sensor tracks temperature and humidity to preemptively warn of fatigue-inducing cabin conditions. A 16x4 LCD provides constant health checks and visual warnings."
        },
        {
          title: "Mobile Command Center",
          content: [
            "Real-time visual graphing of pitch and roll angles via live telemetry.",
            "GPS geo-logging captures exact latitude and longitude of every alert event for post-drive analysis.",
            "Hands-free audible warnings ensure the driver's eyes never leave the road."
          ]
        },
        {
          title: "Recognition",
          content: "National Finalist at the Rashtriya Bal Vaigyanik Pradarshani (RBVP) 2025 in Bhopal, validating extreme sensor-fusion reliability under rigorous institutional testing. Advanced aggressively through District and State level qualifiers."
        }
      ]
    }
  },
  {
    id: "04",
    status: "FEATURED",
    year: "2025",
    title: "Non-Newtonian Speedbump",
    desc: "Adaptive traffic calming device using shear-thickening fluids — soft for lawful drivers, rigid against speeders.",
    tags: ["MATERIALS SCIENCE", "FLUID DYNAMICS", "ENGINEERING"],
    category: "Applied Physics",
    img: "/thumbnails/Non-newtonian-Speedbump.png",
    link: "https://adaptive-speedbump.netlify.app/",
    role: "Creator / Lead Researcher",
    details: {
      pitch: "Ending static infrastructural hazards. An adaptive kinetic barrier that transitions from liquid to solid exclusively upon violent impact — punishing speeders, yielding to ambulances. District Winner at INSPIRE Awards - MANAK.",
      sections: [
        {
          title: "The Failure of Static Infrastructure",
          content: [
            "Emergency vehicles lose critical seconds decelerating over concrete humps, with patients subjected to dangerous jolts.",
            "Repeated jarring heavily wears down suspension systems, damages shocks, and causes severe undercarriage scraping.",
            "Traditional humps achieve only 52.6% speed reduction and fail to differentiate between a speeder and an ambulance.",
            "Forced stop-and-go cycles increase localized air pollution, fuel waste, and generate intense acoustic pollution in residential zones."
          ]
        },
        {
          title: "The Rheological Foundation",
          content: "Harnesses shear-thickening non-Newtonian fluids (amylopectin colloid suspended in a PEG 400 matrix). At low shear (lawful speeds), particles slide freely — the bump stays liquid, compressing gently. At high shear (speeding impact), rapid hydroclustering triggers aggressive particle jamming, instantly solidifying the mass into a punishing rigid barrier."
        },
        {
          title: "Industrial Engineering",
          content: [
            "PEG 400 integration provides suspension stabilization, thermal anti-freeze for sub-zero winters, and a 5-year inert shelf life.",
            "Kevlar-coated high-pressure industrial hosing manages thousands of violent pressure spikes without structural fatigue.",
            "PVC-coated exterior armor identical to industrial river raft material provides waterproofing and extreme abrasion resistance.",
            "Modular bolt-down rubber chassis allows rapid installation without ground excavation or concrete curing."
          ]
        },
        {
          title: "Proven Efficacy",
          content: [
            "65.15% reduction in speeding traffic vs. concrete's 52.6% — mathematically proven superior governance.",
            "Vertical G-force jolt reduced from 1.2g (concrete) to 0.3–0.5g for lawful drivers — eliminating suspension damage.",
            "40–50% drop in perceived noise pollution in direct head-to-head acoustic comparisons.",
            "Manufacturing costs estimated at merely 60–70% of traditional concrete bump installation."
          ]
        },
        {
          title: "Future Vision",
          content: "Quiet Zones — hospitals, schools, luxury estates. Acoustic sensors tuned to emergency siren frequencies ensure fluid state regardless of ambulance speed."
        }
      ]
    }
  }

];

// â”€â”€â”€ CURRENTLY WORKING ON â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const CURRENT_PROJECTS: ProjectData[] = [
  {
    id: "C1",
    status: "IN PROGRESS",
    year: "2026",
    title: "VoidOS",
    desc: "A minimal, ground-up operating system kernel written in C and Assembly â€” exploring memory management, process scheduling, and bare-metal I/O.",
    tags: ["C", "ASSEMBLY", "OS DEVELOPMENT", "LOW-LEVEL"],
    category: "Operating System",
    img: "https://images.unsplash.com/photo-1629654291663-b91ad427698f?q=80&w=800&auto=format&fit=crop",
    link: "#",
    role: "Creator / Solo Developer",
    details: {
      pitch: "Understanding the machine at its most fundamental layer. VoidOS is a pedagogical kernel built from absolute zero â€” no frameworks, no abstractions, just raw silicon.",
      sections: [
        {
          title: "Why Build an OS?",
          content: "Modern developers operate atop mountains of abstraction. VoidOS strips it all away to understand exactly how a CPU boots, how memory is paged, and how interrupts choreograph multitasking at the hardware level."
        },
        {
          title: "Current Architecture",
          content: [
            "Custom bootloader written in x86 Assembly transitioning from Real Mode to Protected Mode.",
            "Basic kernel in C implementing a flat memory model with rudimentary paging.",
            "Interrupt Descriptor Table (IDT) handling keyboard input and timer ticks.",
            "VGA text-mode terminal driver with cursor management and scrolling."
          ]
        },
        {
          title: "Roadmap",
          content: "Targeting a minimal userspace with a basic shell, a simple FAT16 filesystem driver, and round-robin process scheduling. The long-term vision is a lightweight, auditable microkernel that can run on real x86 hardware."
        }
      ]
    }
  },
  {
    id: "C2",
    status: "IN PROGRESS",
    year: "2026",
    title: "Meridian",
    desc: "A privacy-first search engine leveraging semantic embeddings and local index shards to deliver relevant results without surveillance.",
    tags: ["PYTHON", "RUST", "EMBEDDINGS", "SEARCH"],
    category: "Search Infrastructure",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    link: "#",
    role: "Creator / Architect",
    details: {
      pitch: "Search should serve the user, not profile them. Meridian is an independent search engine built on semantic understanding rather than ad-auction ranking.",
      sections: [
        {
          title: "The Problem With Search",
          content: "Mainstream search engines have devolved into ad-delivery platforms. Results are ranked by revenue potential, not relevance. Meridian re-centers the equation around pure information retrieval."
        },
        {
          title: "Technical Foundation",
          content: [
            "Web crawler built in Rust for high-throughput, memory-safe page fetching and DOM extraction.",
            "Semantic embedding pipeline using lightweight transformer models to index pages by meaning, not just keywords.",
            "Distributed index shards enabling horizontal scaling across commodity hardware.",
            "Zero-tracking query processing â€” no user profiles, no search history retention."
          ]
        },
        {
          title: "Integration Vision",
          content: "Meridian is designed to serve as the default engine for Project Nebula (custom browser), creating a fully sovereign browsing stack from search to rendering."
        }
      ]
    }
  },
  {
    id: "C3",
    status: "IN PROGRESS",
    year: "2026",
    title: "Nebula",
    desc: "A custom-built web browser engineered from scratch â€” integrating Meridian search and prioritizing speed, privacy, and a distraction-free reading experience.",
    tags: ["C++", "WEBVIEW", "UI ENGINE", "PRIVACY"],
    category: "Web Browser",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    link: "#",
    role: "Creator / Architect",
    details: {
      pitch: "The browser is the most used application on the planet, yet every major one is built by an advertising company. Nebula is a browser built by a user, for users.",
      sections: [
        {
          title: "Design Thesis",
          content: "Browsers have become bloated operating systems â€” riddled with telemetry, notification spam, and visual noise. Nebula strips the browser back to its core purpose: rendering the web beautifully and quickly."
        },
        {
          title: "Architecture Goals",
          content: [
            "Lightweight rendering pipeline leveraging a minimal Chromium-based webview core for compatibility.",
            "Native integration with Meridian search engine â€” no Google dependency.",
            "Built-in reader mode with automatic article extraction and typography optimization.",
            "Tab management rethought: spatial tab grouping and session persistence by default."
          ]
        },
        {
          title: "Privacy by Architecture",
          content: "No telemetry. No sync accounts. No sponsored tiles. Local-first bookmarks and history with optional encrypted sync. The browser forgets everything when you close it, unless you explicitly ask it to remember."
        }
      ]
    }
  },
  {
    id: "C4",
    status: "QUEUED",
    year: "2026",
    title: "& Many More",
    desc: "The pipeline is deep. Multiple projects spanning AI agents, embedded systems, and experimental interfaces are in active ideation and early prototyping.",
    tags: ["AI", "EMBEDDED", "EXPERIMENTAL", "TBD"],
    category: "Upcoming",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    link: "#",
    details: {
      pitch: "The best projects haven't been announced yet. This is a living index â€” check back frequently.",
      sections: [
        {
          title: "What's Brewing",
          content: [
            "Advanced AI agent skill systems for autonomous code generation and review.",
            "Embedded hardware prototypes pushing the limits of ESP32 and RISC-V microcontrollers.",
            "Experimental UI paradigms exploring spatial computing and gesture-driven interfaces.",
            "Open-source tooling contributions across the Android and web ecosystems."
          ]
        },
        {
          title: "Philosophy",
          content: "Ship fast, learn faster. Every project in this pipeline exists because it solves a problem that bothered me personally. The best engineering is autobiographical."
        }
      ]
    }
  }
];

// â”€â”€â”€ PAST PROJECTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const PAST_PROJECTS: ProjectData[] = [
  {
    id: "01",
    status: "COMPLETED",
    year: "2025",
    title: "MindFlow",
    desc: "AI-powered spatial learning platform that parses dense textbooks into interactive, infinite knowledge graphs.",
    tags: ["WEB", "GSAP", "LLM", "SPATIAL UI"],
    category: "Web Platform",
    img: "/thumbnails/Mindflow_Showcase.png",
    link: "https://vrn7712.github.io/mindflow/",
    role: "Creator / Designer & Developer",
    details: {
      pitch: "Stop reading. Start perceiving. MindFlow transforms chaotic, static educational documents into a structured, visual universe.",
      sections: [
        {
          title: "The Cognitive Overload Crisis",
          content: "Students drown in static data—chaotic lecture notes, dense 50-page PDFs, fragmented topic relationships. The cognitive load of manually organizing thoughts often exceeds the energy required to actually learn the material. Before MindFlow, studying was a linear chore."
        },
        {
          title: "Neural Synthesis Engine",
          content: [
            "Parses raw PDFs, voice notes, or broad topics into clean standardized data points.",
            "AI cross-references latent relationships and identifies hidden connections between concepts.",
            "Automatically generates an interactive, infinite Knowledge Graph — a 'Vault of Infinite Knowledge.'",
            "Universal exports to High-Res PNG, Clean PDF, and Interactive HTML for shared living mind maps."
          ]
        },
        {
          title: "Ethereal Glass Design",
          content: [
            "OLED-Black Foundation reducing eye strain during prolonged study sessions.",
            "Glassmorphism with Double-Bezel components and frosted glass textures for a premium, futuristic feel.",
            "Cinematic motion powered by GSAP and Lenis Scroll — every interaction feels fluid and alive.",
            "Bento-Grid Architecture making complex features approachable."
          ]
        },
        {
          title: "Impact",
          content: "By visualizing how concepts connect rather than listing them linearly, users report a 40% increase in information retention and significant reduction in time spent organizing notes."
        }
      ]
    }
  },
  {
    id: "02",
    status: "COMPLETED",
    year: "2026",
    title: "Manim-Craft",
    desc: "A suite of four specialized AI skills injecting spatial awareness into LLMs for professional math animations.",
    tags: ["AI SKILLS", "PYTHON", "MANIM", "AUTOMATION"],
    category: "AI Agent Tooling",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/vrn7712/manim-craft",
    role: "Creator / AI Skill Engineer",
    details: {
      pitch: "Elevating AI-generated scripts to professional 3Blue1Brown-quality educational sequences by teaching language models the actual craft of animation.",
      sections: [
        {
          title: "Why AI Fails at Animation",
          content: [
            "Visual Chaos: AI lacks spatial awareness — objects pile up, equations merge into unreadable blobs, z-index errors create visual messes.",
            "Robotic Pacing: Timing is linear and boring, lacking the dynamic 'aha!' moments that make educational videos engaging.",
            "Version Confusion: AI hallucinates syntax, mixing up ManimCE with ManimGL, causing compilation failures.",
            "No Big Picture: AI agents code everything at once without storyboarding, color palette management, or multi-scene structuring."
          ]
        },
        {
          title: "The Four-Pillar Studio",
          content: [
            "The Director (manim-director): Stops to plan. Takes vague concepts and structures scene-by-scene narrative arcs with professional color theory and visual pacing.",
            "The Animator (manim-animator): 24 rigorous rules ensuring correct ManimCE syntax, proper LaTeX typesetting, and advanced camera choreography patterns.",
            "The Critic (manim-critic): Visual QA detecting and fixing 14 common rendering artifacts — overlapping objects, ghost elements, broken transitions.",
            "The Editor (manim-editor): Handles project structure, partial rendering, scene concatenation, and exports to GIF/WebM/MP4 with voiceover sync."
          ]
        },
        {
          title: "Impact",
          content: "Eliminates hours of frustrating prompting loops. Animations now feature consistent design languages, professional color palettes, and fluid transitions out of the box. Compatible with Claude Code, Cursor, GitHub Copilot, and Windsurf via the standard skills format."
        }
      ]
    }
  },
  {
    id: "03",
    status: "COMPLETED",
    year: "2025",
    title: "Multiverse Explorer",
    desc: "Privacy-first desktop application generating branching life-simulations via local LLMs and Directed Multigraphs.",
    tags: ["PYTHON", "LLMS", "NETWORKX", "CHROMADB"],
    category: "AI Desktop Application",
    img: "/thumbnails/Multiverse_showcase.png",
    link: "#",
    role: "Creator / Solo Developer",
    details: {
      pitch: "Private Intelligence: Synthesizing scattered thoughts, chats, and calendars into a unified Life Graph to forecast future timelines without data leaving your local machine.",
      sections: [
        {
          title: "The Fragmentation Problem",
          content: "Human decisions rely on fragmented data—journals, WhatsApp chats, and calendars—trapped in silos. Generic AI advice is too broad, while manual reflection is prone to cognitive biases and decision paralysis. There is no tool that 'knows' the user's history well enough to provide contextualized projections."
        },
        {
          title: "The Life-Graph Engine",
          content: [
            "Transforms unstructured text into a Directed Multigraph using NetworkX and ChromaDB vector store.",
            "High-speed keyword-based extraction for emotion mapping (Stress, Joy, Burnout), entity recognition via capitalized pattern matching, and goal identification.",
            "Every entry connects to TimePoint and Entity nodes, creating a web of topological relationships.",
            "Unified LifeEvent model normalizes data from journals, WhatsApp exports, and iCalendar files."
          ]
        },
        {
          title: "Multiverse Simulation",
          content: "RAG pipeline queries the Knowledge Graph for relevant historical context, then concurrently generates 2–5 distinct future timelines. Each carries a narrative arc, quantifiable emotional profiles (Stress/Burnout gauges), longitudinal financial curves in INR, and actionable micro-steps. A custom Robust JSON Extractor enables the use of smaller local models like phi4-mini."
        },
        {
          title: "Visual Analytics",
          content: [
            "Emotional heatmaps for inter-timeline comparison of well-being trajectories.",
            "Real-time burnout risk gauges for each projected path.",
            "Interactive network visualization of the user's personal knowledge graph."
          ]
        }
      ]
    }
  },
  {
    id: "04",
    status: "COMPLETED",
    year: "2025",
    title: "Silo",
    desc: "Android initiative utilizing deep OS integrations to aggregate fragmented digital bookmarks into a unified visual archive.",
    tags: ["ANDROID", "UX DESIGN", "METADATA", "ARCHIVE"],
    category: "Android Application",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    link: "#",
    role: "Conceptualization, UI/UX Design, Development",
    details: {
      pitch: "A universal gathering tool bridging the gap between discovery and storage, stripping away platform noise for a unified inspiration board.",
      sections: [
        {
          title: "The Fragmented Digital Brain",
          content: "We bookmark articles in Chrome, save videos on YouTube, heart tracks on Spotify, save threads on X, and screenshot inspiration to the camera roll. When we need that brilliant recipe or design reference, we face cognitive overload — 'Where did I save it?' Our bookmarks are trapped in the walled gardens where they were discovered."
        },
        {
          title: "Frictionless Capture",
          content: "By hooking directly into Android's native OS Share Sheet, Silo is always one tap away. Whether in a browser, social media app, or gallery — hit Share, select Silo, done. Under the hood, it automatically scrapes Open Graph and Twitter metadata, pulls high-resolution hero images, and determines source platform for contextual formatting."
        },
        {
          title: "Visual-First Architecture",
          content: [
            "Dynamic, responsive staggered masonry grid displaying items by visual weight — a Pinterest-like inspiration board replacing sterile text lists.",
            "Auto-categorization by content origin (Video, Music, Article, Social, Note) with fluid pill-shaped filter chips.",
            "Immersive lighting with subtle transparent color gradients and animated expandable Floating Action Button.",
            "Unified card design language normalizing disparate platform content into visual harmony."
          ]
        },
        {
          title: "Takeaway",
          content: "Silo proves that by leveraging system-level integrations and automated metadata scraping, we can bridge the gap between discovery and storage. The result is a quiet, personal sanctuary for inspiration, research, and memories."
        }
      ]
    }
  },
  {
    id: "05",
    status: "COMPLETED",
    year: "2026",
    title: "Zon",
    desc: "Open-source Android Pomodoro suite offering offline task management, deep-work soundscapes, and GitHub-style analytics.",
    tags: ["ANDROID", "KOTLIN", "MATERIAL 3", "OPEN SOURCE"],
    category: "Android Application",
    img: "/thumbnails/Zon_showcase.png",
    link: "https://github.com/vrn7712/Zon",
    role: "Creator / Lead Developer",
    details: {
      pitch: "A digital sanctuary that helps users access their flow state. Zero ads. Zero tracking. Zero subscriptions. Just pure, beautiful productivity.",
      sections: [
        {
          title: "Defiance by Design",
          content: "The mobile market is overwhelmingly saturated with productivity tools that fundamentally contradict their purpose—cluttered with intrusive banner ads, mandatory sign-ups, and paywalled essentials. Zon was architected from the ground up as the definitive antidote: a completely free, 100% open-source, and strictly offline-first application that respects the user's intelligence, time, and data privacy."
        },
        {
          title: "Deep Work, Tailored To You",
          content: [
            "Fully customizable Pomodoro sprints with automated work-break transitions and saveable presets.",
            "Curated offline ambient soundscapes integrated directly into the notification panel.",
            "Smart alerts with Do Not Disturb integration. Home screen widgets for at-a-glance progress."
          ]
        },
        {
          title: "Meaningful Analytics",
          content: "GitHub-style yearly heatmaps, daily/weekly/monthly charts, and a unique time-of-day breakdown revealing peak productivity windows."
        },
        {
          title: "Design Philosophy",
          content: "Built on Google's Material 3 Expressive with dynamic color theming. Full Light, Dark, and deep AMOLED theme support."
        }
      ]
    }
  },
  {
    id: "06",
    status: "COMPLETED",
    year: "2025",
    title: "AlertDrive",
    desc: "Award-winning IoT smart helmet ecosystem monitoring drowsiness, distraction, and impairment in real-time.",
    tags: ["ESP32", "IOT", "SENSORS", "MOBILE APP"],
    category: "Hardware & IoT",
    img: "/thumbnails/AlertDrive_showcase.png",
    link: "#",
    role: "Co-Creator, Research & Data Analysis",
    details: {
      pitch: "A proactive, three-tiered IoT safety net intercepting the three fatal vectors of road accidents before they become fatal.",
      sections: [
        {
          title: "The Crisis",
          content: "India faces over 415 traffic-related deaths daily. AlertDrive targets: microsleep at highway speeds, mobile distraction causing 25% of urban crashes, and pre-ignition alcohol impairment."
        },
        {
          title: "The Ecosystem",
          content: [
            "MPU6050 + ESP32 Dual Core: Sub-50ms head tilt detection via complementary filter.",
            "MQ-3 interlocking alcohol sensor prevents ignition. DHT11 monitors cabin fatigue conditions.",
            "Companion app with live telemetry, GPS geo-logging, and hands-free voice prompts."
          ]
        },
        {
          title: "Recognition",
          content: "National Finalist at RBVP 2025 in Bhopal, advancing through District and State levels."
        }
      ]
    }
  },
  {
    id: "07",
    status: "COMPLETED",
    year: "2025",
    title: "Non-Newtonian Speedbump",
    desc: "Adaptive traffic calming device using shear-thickening fluids — soft for lawful drivers, rigid against speeders.",
    tags: ["MATERIALS SCIENCE", "FLUID DYNAMICS", "ENGINEERING"],
    category: "Applied Physics",
    img: "/thumbnails/Non-newtonian-Speedbump.png",
    link: "https://adaptive-speedbump.netlify.app/",
    role: "Creator / Lead Researcher",
    details: {
      pitch: "Ending static infrastructural hazards. District Winner at INSPIRE Awards - MANAK, State Qualifier.",
      sections: [
        {
          title: "Fluid Dynamics",
          content: "Amylopectin colloid in PEG 400. Low shear = liquid. High shear = particle jamming = instant rigid barrier."
        },
        {
          title: "Proven Data",
          content: [
            "65.15% speed reduction vs. concrete's 52.6%.",
            "G-force jolt: 0.3–0.5g vs. concrete's 1.2g.",
            "40–50% noise reduction. 60–70% the installation cost."
          ]
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
    img: "/thumbnails/VYXM_Headphoe_Showcase.png",
    link: "#",
    role: "Creator / Brand & Web Engineer",
    details: {
      pitch: "Sound is invisible. We made it tangible. Can a digital experience be so compelling that it makes a conceptual product feel commercially ready?",
      sections: [
        {
          title: "Beyond 'Fake'",
          content: "Most creative exercises stop at a logo or mockup. VYXM delivers a fully functional, high-performance experience for a non-existent product — a conceptual titanium headphone. The name, visual identity, technical specs, and immersive digital journey were all crafted from scratch to project luxury, precision, and futuristic engineering."
        },
        {
          title: "Cinematic Scroll Engineering",
          content: [
            "Custom-built HTML5 Canvas rendering engine processing a 120-frame rotary product sequence at 60fps.",
            "Deep scroll-velocity tracking tied to 3D product rotation — seamless across mobile and 4K displays.",
            "Custom asset preloader with batch-loading logic preventing stuttering or blank frames.",
            "Responsive Canvas logic mimicking object-fit: cover within the rendering context."
          ]
        },
        {
          title: "Industrial-Premium Aesthetic",
          content: [
            "OLED Black Foundation making the product pop against true blacks.",
            "Micro-animations using Framer Motion spring physics for organic stat reveals and button interactions.",
            "Blueprint-style anatomy graphics visualizing internal 50mm Titanium driver architecture.",
            "Bento grid layouts for clean, readable data presentation at a glance."
          ]
        },
        {
          title: "Result: Total Brand Immersion",
          content: "VYXM demonstrates the ability to conceptualize a brand from zero, visualize the impossible through motion, master complex asset management, and create a 'Ready-to-Buy' psychological state through high-end design patterns."
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
    tags: ["FLUTTER", "DJANGO", "FIREBASE", "ARCHIVE"],
    category: "Full Stack Mobile",
    img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    link: "#",
    role: "Creator / Full-Stack Developer",
    details: {
      pitch: "A warm, distraction-free learning environment—right in your pocket. Reclaiming student focus from chaotic mass internet delivery.",
      sections: [
        {
          title: "The Problem",
          content: "Coaching centers struggle with content fragmentation (loose PDFs and scattered YouTube links), internet dependency in low-connectivity areas, zero insight into student progress, and generic corporate LMS layouts that discourage prolonged engagement."
        },
        {
          title: "Multi-Modal Learning",
          content: [
            "Hierarchical content paths: Subjects → Chapters → Topics ensuring logical syllabus progression.",
            "Rich Video Lectures with resume-where-you-left-off. Audio Podcasts for revision on the go.",
            "Structured PDF Notes for detailed reference.",
            "Offline-First architecture: download manager for lectures, progress syncs automatically on reconnection via Firebase."
          ]
        },
        {
          title: "The 'Coffee' Design Philosophy",
          content: [
            "Light Mode uses warm Espresso, Latte, and Cappuccino tones — a study-cafe atmosphere.",
            "Dark Mode (Amethyst): purple-accented theme minimizing blue light for late-night sessions.",
            "Micro-animations and Lottie-driven feedback making the experience feel alive.",
            "Intelligent Completion Thresholds marking topics as finished only when genuinely consumed."
          ]
        },
        {
          title: "Security & Administration",
          content: "Custom Roll-Number authentication replacing generic emails. Batch management assigns content to specific cohorts. Role-based access separates Student and Admin portals. Django backend handles complex user relations with Firebase powering real-time sync."
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
    role: "Creator / Design Experimentalist",
    details: {
      pitch: "Great design isn't just about how it looks; it's about how it moves. A cinematic voyage through the web — a 'vibe-first' interface where every scroll feels like a slow-motion spacewalk.",
      sections: [
        {
          title: "The Experiment",
          content: "A technical playground designed to push the boundaries of immersive storytelling integrated into web navigation. Inspired by sleek aerospace aesthetics and cinematic sci-fi, this project explores atmospheric WebGL shaders seamlessly bound to multi-axis scroll kinematics."
        },
        {
          title: "Technical Wins",
          content: [
            "Lenis Smooth Scroll provides momentum-based scrolling. Scroll velocity is linked to WebGL background distortion — the page literally stretches and warps as you accelerate.",
            "Three.js Orthographic camera flat-renders distorted textures efficiently, keeping animations at steady 60fps on standard hardware.",
            "Pin-and-slide horizontal gallery via GSAP ScrollTrigger creates lateral exploration breaking traditional vertical flow.",
            "Minimalist corner-weighted UI with split-text animations revealing information only upon interaction."
          ]
        },
        {
          title: "Design Disclaimer",
          content: "This is a Design Experiment & Concept Try-out — a 'fake concept' built as a technical playground for practicing agency-grade web design. It does not represent a commercial product, but demonstrates mastery over motion logic, visual composition, and performance optimization."
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
    tags: ["FLUTTER", "HIVE", "RIVERPOD", "ARCHIVE"],
    category: "Mobile Application",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    link: "#",
    role: "Creator / Lead Developer",
    details: {
      pitch: "Treating competitive STEM preparation as a rewarding, measurable journey rather than a fragmented nightmare.",
      sections: [
        {
          title: "Why Subject-Specific Tracking Matters",
          content: "Generic timers group all study time into one unstructured bucket. A student doesn't inherently know if they spent 80% of the week on Math and completely neglected Chemistry until they fail an exam. PCM Focus mandates subject categorization (Physics, Chemistry, Mathematics) before every session, fundamentally changing the app's analytical utility."
        },
        {
          title: "The Gamification Loop",
          content: [
            "XP System: Completing focus sessions rewards Experience Points, transforming grueling study into a satisfying game loop.",
            "Daily Streaks: Dashboard displays current streak with motivational fire emojis. The fear of breaking the streak powers daily consistency.",
            "Pomodoro Engine with Focus/Short Break/Long Break modes, easy toggling, and fatigue-reducing interval structure."
          ]
        },
        {
          title: "Comprehensive Analytics",
          content: [
            "Focus Hours Chart with visual tracking over Today/Weekly/Monthly filters.",
            "Subject Breakdown showing which disciplines receive most attention — preventing accidental neglect of weak subjects.",
            "Data-driven confidence replacing gut-feeling study assessment."
          ]
        },
        {
          title: "Design",
          content: "Sleek dark mode default reducing eye strain during late-night sessions. Micro-interactions from bouncing buttons to fluid chart rendering make studying feel substantially less dry. The focus interface itself remains minimal — preventing the app from becoming its own distraction."
        }
      ]
    }
  }
];

