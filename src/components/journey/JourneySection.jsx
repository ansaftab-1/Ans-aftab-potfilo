import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  School,
  Code2,
  Container,
  Cloud,
  Rocket,
  Laptop,
  Server,
} from "lucide-react";

// ============================================================
// JOURNEY DATA
// ============================================================

const journey = [
  {
    id: 1,
    year: "2020 — 2022",
    title: "Kips College",
    text: "Completed Higher Secondary education at Kips College with focus on science, mathematics, and computing fundamentals.",
    icon: GraduationCap,
    tags: ["Kips College", "Science", "Computer Science"],
    position: "left",
  },

  {
    id: 2,
    year: "2022 — 2026",
    title: "Building With Code",
    text: "Pursuing Bachelor of Computer Science at Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), Islamabad.",
    icon: Code2,
    tags: ["BSCS", "SZABIST", "Web Development"],
    position: "right",
  },

  {
    id: 3,
    year: "DURING COLLEGE",
    title: "Learning & Building",
    text: "Alongside academics, I explored React.js, JavaScript and Node.js while working on practical full stack projects.",
    icon: Laptop,
    tags: ["React.js", "JavaScript", "Node.js"],
    position: "left",
  },

  {
    id: 4,
    year: "FULL STACK & CLOUD",
    title: "Full Stack Development",
    text: "Building modern full stack applications using React, Node.js, and cloud technologies with containerization and continuous integration.",
    icon: Container,
    tags: ["Full Stack", "React.js", "Node.js", "Cloud"],
    position: "right",
  },

  {
    id: 5,
    year: "CURRENTLY",
    title: "Still Building 🚀",
    text: "My journey is still going. I continue learning, building scalable web applications and expanding my software development expertise.",
    icon: Rocket,
    tags: ["Full Stack", "Cloud", "Software Engineering"],
    position: "left",
  },
];

// ============================================================
// JOURNEY SECTION
// ============================================================

const JourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ==========================================================
  // CONTINUOUS JOURNEY ANIMATION
  // ==========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= journey.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#020617] py-24 sm:py-28 lg:py-32"
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Cyan Glow */}

        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />

        {/* Blue Glow */}

        <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-blue-600/[0.06] blur-[140px]" />

        {/* Violet Glow */}

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.025] blur-[120px]" />

        {/* Technical Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.7) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ====================================================
            HEADING
        ==================================================== */}

        <div className="mb-16 text-center sm:mb-20">

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400 sm:w-12" />

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400 sm:text-xs">
              My Journey
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400 sm:w-12" />

          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">

            From Learning{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              To Building
            </span>

          </h2>

        </div>

        {/* ====================================================
            JOURNEY WRAPPER
        ==================================================== */}

        <div className="relative mx-auto max-w-6xl">

          {/* ==================================================
              DESKTOP CENTRAL LINE
          ================================================== */}

          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 md:block">

            {/* Static Line */}

            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-blue-400/30 to-violet-400/10" />

            {/* Moving Energy */}

            <div className="journey-energy absolute left-0 top-0 w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-violet-400" />

          </div>

          {/* ==================================================
              MOBILE LINE
          ================================================== */}

          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-400/20 via-blue-400/20 to-violet-400/10 md:hidden" />

          {/* ==================================================
              JOURNEY ITEMS
          ================================================== */}

          <div className="relative space-y-12 sm:space-y-16 md:space-y-0">

            {journey.map((item, index) => {

              const Icon = item.icon;

              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className={`
                    relative
                    flex
                    min-h-[220px]
                    items-center
                    md:w-full
                    ${
                      item.position === "left"
                        ? "md:justify-start"
                        : "md:justify-end"
                    }
                  `}
                >

                  {/* ==================================================
                      CENTER NODE
                  ================================================== */}

                  <div
                    className={`
                      journey-node
                      absolute
                      left-5
                      top-1/2
                      z-20
                      flex
                      h-9
                      w-9
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-500
                      md:left-1/2
                      ${
                        isActive
                          ? "active border-cyan-300 bg-cyan-400/20 shadow-[0_0_35px_rgba(34,211,238,0.65)]"
                          : "border-slate-700 bg-[#020617]"
                      }
                    `}
                  >

                    <span
                      className={`
                        h-2.5
                        w-2.5
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]"
                            : "bg-slate-700"
                        }
                      `}
                    />

                    {/* Active Ring */}

                    {isActive && (
                      <span className="absolute inset-[-7px] rounded-full border border-cyan-400/30 journey-ring" />
                    )}

                  </div>

                  {/* ==================================================
                      ACTIVE MOVING PARTICLE
                  ================================================== */}

                  {isActive && (
                    <div className="journey-particle absolute left-5 top-1/2 z-30 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_15px_5px_rgba(34,211,238,0.8)] md:left-1/2" />
                  )}

                  {/* ==================================================
                      CARD CONTAINER
                  ================================================== */}

                  <div
                    className={`
                      relative
                      ml-14
                      w-full
                      max-w-xl
                      transition-all
                      duration-500
                      md:ml-0
                      md:w-[44%]
                      ${
                        item.position === "left"
                          ? "md:mr-auto"
                          : "md:ml-auto"
                      }

                      ${
                        isActive
                          ? "translate-y-0 scale-[1.01] opacity-100"
                          : "translate-y-0 scale-100 opacity-100"
                      }
                    `}
                  >

                    {/* ==================================================
                        DESKTOP CONNECTOR
                    ================================================== */}

                    <div
                      className={`
                        absolute
                        top-1/2
                        hidden
                        h-px
                        w-10
                        -translate-y-1/2
                        md:block

                        ${
                          item.position === "left"
                            ? "-right-10"
                            : "-left-10"
                        }

                        ${
                          isActive
                            ? "bg-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                            : "bg-slate-800"
                        }
                      `}
                    />

                    {/* ==================================================
                        CARD
                    ================================================== */}

                    <div
                      className={`
                        journey-card
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        p-5
                        backdrop-blur-xl
                        sm:p-6

                        ${
                          isActive
                            ? "border-cyan-400/35 bg-[#071525]/95 shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_35px_rgba(34,211,238,0.08)]"
                            : "border-slate-800/80 bg-[#050d1b]/90 shadow-lg"
                        }
                      `}
                    >

                      {/* ==================================================
                          TOP GLOW LINE
                      ================================================== */}

                      <div
                        className={`
                          absolute
                          left-0
                          right-0
                          top-0
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-cyan-400
                          to-transparent
                          transition-opacity
                          duration-500

                          ${
                            isActive
                              ? "opacity-80"
                              : "opacity-0"
                          }
                        `}
                      />

                      {/* ==================================================
                          CARD HEADER
                      ================================================== */}

                      <div className="mb-5 flex items-start justify-between gap-4">

                        <div className="flex items-center gap-4">

                          {/* ICON */}

                          <div
                            className={`
                              flex
                              h-12
                              w-12
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              transition-all
                              duration-500

                              ${
                                isActive
                                  ? "border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                                  : "border-slate-800 bg-slate-900/70"
                              }
                            `}
                          >

                            <Icon
                              size={22}
                              strokeWidth={1.6}
                              className={
                                isActive
                                  ? "text-cyan-300"
                                  : "text-slate-500"
                              }
                            />

                          </div>

                          {/* TITLE */}

                          <div>

                            <div
                              className={`
                                mb-1
                                font-mono
                                text-[9px]
                                tracking-[0.18em]

                                ${
                                  isActive
                                    ? "text-cyan-400"
                                    : "text-slate-600"
                                }
                              `}
                            >
                              {item.year}
                            </div>

                            <h3 className="text-lg font-bold text-white sm:text-xl">
                              {item.title}
                            </h3>

                          </div>

                        </div>

                        {/* STATUS */}

                        <span
                          className={`
                            hidden
                            font-mono
                            text-[8px]
                            tracking-widest
                            sm:block

                            ${
                              isActive
                                ? "text-emerald-400"
                                : "text-slate-700"
                            }
                          `}
                        >
                          {isActive ? "ACTIVE" : `0${item.id}`}
                        </span>

                      </div>

                      {/* ==================================================
                          DESCRIPTION
                      ================================================== */}

                      <p className="text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>

                      {/* ==================================================
                          TAGS
                      ================================================== */}

                      <div className="mt-5 flex flex-wrap gap-2">

                        {item.tags.map((tag) => (

                          <span
                            key={tag}
                            className={`
                              rounded-full
                              border
                              px-2.5
                              py-1
                              font-mono
                              text-[9px]
                              transition-all

                              ${
                                isActive
                                  ? "border-cyan-400/15 bg-cyan-400/[0.04] text-cyan-300"
                                  : "border-slate-800 bg-slate-900/70 text-slate-500"
                              }
                            `}
                          >
                            {tag}
                          </span>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* ====================================================
            CURRENT STATUS
        ==================================================== */}

        <div className="mt-14 flex justify-center sm:mt-16">

          <div className="flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/[0.03] px-4 py-2.5">

            <span className="relative flex h-2 w-2">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />

            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500 sm:text-[10px]">
              Journey in progress
            </span>

            <Rocket
              size={12}
              className="text-emerald-400"
            />

          </div>

        </div>

      </div>

      {/* ======================================================
          CUSTOM CSS
      ====================================================== */}

      <style>{`

        /* ====================================================
           MOVING ENERGY
        ==================================================== */

        .journey-energy {
          height: 90px;

          box-shadow:
            0 0 12px rgba(34,211,238,0.7),
            0 0 25px rgba(59,130,246,0.3);

          animation:
            energyTravel
            2.2s
            linear
            infinite;
        }


        @keyframes energyTravel {

          0% {
            transform: translateY(-100px);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            transform: translateY(900px);
            opacity: 0;
          }

        }


        /* ====================================================
           ACTIVE PARTICLE
        ==================================================== */

        .journey-particle {
          animation:
            particlePulse
            0.8s
            ease-in-out
            infinite;
        }


        @keyframes particlePulse {

          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(0.7);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.4);
          }

        }


        /* ====================================================
           NODE RING
        ==================================================== */

        .journey-ring {
          animation:
            nodeRing
            1.2s
            ease-out
            infinite;
        }


        @keyframes nodeRing {

          0% {
            transform: scale(0.8);
            opacity: 0.9;
          }

          100% {
            transform: scale(1.5);
            opacity: 0;
          }

        }


        /* ====================================================
           CARD TRANSITION
        ==================================================== */

        .journey-card {
          transition:
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.5s ease,
            box-shadow 0.5s ease;
        }


        .journey-card:hover {
          transform: translateY(-5px);

          border-color:
            rgba(34,211,238,0.35);

          box-shadow:
            0 20px 50px rgba(0,0,0,0.35),
            0 0 30px rgba(34,211,238,0.06);
        }


        /* ====================================================
           MOBILE
        ==================================================== */

        @media (max-width: 767px) {

          .journey-energy {
            display: none;
          }

          .journey-card {
            min-height: 0;
          }

        }


        /* ====================================================
           REDUCED MOTION
        ==================================================== */

        @media (prefers-reduced-motion: reduce) {

          .journey-energy,
          .journey-particle,
          .journey-ring {
            animation: none !important;
          }

        }

      `}</style>

    </section>
  );
};

export default JourneySection;