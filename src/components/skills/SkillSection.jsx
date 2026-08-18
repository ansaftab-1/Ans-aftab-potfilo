import React from "react";

import {
  SiDocker,
  SiGit,
  SiNodedotjs,
  SiReact,
  SiJavascript,
} from "react-icons/si";

import {
  FaMicrosoft,
  FaServer,
  FaNetworkWired,
} from "react-icons/fa";

const SkillSection = () => {
  const skillGroups = [
    {
      title: "DevOps",
      subtitle: "Containerization & Version Control",
      groupIcon: <SiDocker />,
      skills: [
        {
          name: "Docker",
          icon: <SiDocker />,
          iconColor: "text-[#2496ED]",
        },
        {
          name: "Docker Compose",
          icon: <SiDocker />,
          iconColor: "text-[#2496ED]",
        },
        {
          name: "Docker Swarm",
          icon: <SiDocker />,
          iconColor: "text-[#2496ED]",
        },
        {
          name: "Git",
          icon: <SiGit />,
          iconColor: "text-[#F05032]",
        },
      ],
    },

    {
      title: "Cloud",
      subtitle: "Cloud Infrastructure & Networking",
      groupIcon: <FaMicrosoft />,
      skills: [
        {
          name: "Microsoft Azure",
          icon: <FaMicrosoft />,
          iconColor: "text-[#0078D4]",
        },
        {
          name: "Virtual Machines",
          icon: <FaServer />,
          iconColor: "text-blue-400",
        },
        {
          name: "Networking",
          icon: <FaNetworkWired />,
          iconColor: "text-violet-400",
        },
      ],
    },

    {
      title: "Development",
      subtitle: "Development & Web Technologies",
      groupIcon: <SiReact />,
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
          iconColor: "text-[#5FA04E]",
        },
        {
          name: "React.js",
          icon: <SiReact />,
          iconColor: "text-[#61DAFB]",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          iconColor: "text-[#F7DF1E]",
        },
      ],
    },

    {
      title: "AI Tools",
      subtitle: "AI-assisted Development",
      groupIcon: (
        <span className="text-xs font-black tracking-tight">
          AI
        </span>
      ),
      skills: [
        {
          name: "Claude Code",
          icon: (
            <span className="text-sm font-black tracking-tight">
              CC
            </span>
          ),
          iconColor: "text-[#D97706]",
        },
        {
          name: "AI-assisted Development",
          icon: (
            <span className="text-sm font-black tracking-tight">
              AI
            </span>
          ),
          iconColor: "text-violet-400",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020617] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Blue glow */}
        <div className="absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Purple glow */}
        <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[150px]" />

        {/* Cyan center glow */}
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating particles */}
        <span className="skill-particle particle-one" />
        <span className="skill-particle particle-two" />
        <span className="skill-particle particle-three" />
        <span className="skill-particle particle-four" />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1150px] px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            HEADING
        =================================================== */}

        <div className="mb-10 sm:mb-12">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500 sm:w-10" />

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <span className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />

          </div>

          {/* Terminal line */}

          <div className="mt-4 flex items-center gap-2 pl-11 font-mono text-[10px] text-slate-500 sm:pl-13 sm:text-xs">

            <span className="text-blue-400">$</span>

            <span>
              skills --load
            </span>

            <span className="text-slate-700">
              //
            </span>

            <span className="text-emerald-400">
              ready
            </span>

            <span className="skill-cursor" />

          </div>

        </div>

        {/* ===================================================
            SKILL GROUPS
        =================================================== */}

        <div className="space-y-6">

          {skillGroups.map((group, groupIndex) => (

            <div
              key={group.title}
              className="skill-group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#050b18]/75 p-5 backdrop-blur-xl sm:p-6"
            >

              {/* Moving top light */}

              <div className="skill-line absolute left-0 top-0 h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

              {/* Group heading */}

              <div className="mb-5 flex items-center gap-3">

                <div className="skill-group-icon relative flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">

                  <span className="relative z-10 text-lg">
                    {group.groupIcon}
                  </span>

                </div>

                <div>

                  <h3 className="text-sm font-bold text-slate-200 sm:text-base">
                    {group.title}
                  </h3>

                  <p className="mt-0.5 text-[10px] text-slate-600">
                    {group.subtitle}
                  </p>

                </div>

              </div>

              {/* =================================================
                  SKILLS GRID
              ================================================= */}

              <div
                className={`grid gap-3 ${
                  group.skills.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                }`}
              >

                {group.skills.map((skill, index) => (

                  <div
                    key={skill.name}
                    className="skill-card group relative overflow-hidden rounded-xl border border-slate-800/80 bg-[#020617]/80 p-4"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >

                    {/* Card glow */}

                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/5 blur-2xl transition-all duration-500 group-hover:bg-blue-500/15" />

                    {/* Content */}

                    <div className="relative flex items-center gap-3">

                      {/* Brand icon */}

                      <div
                        className={`skill-brand-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-[#030712] text-[25px] ${skill.iconColor}`}
                      >
                        {skill.icon}
                      </div>

                      {/* Text */}

                      <div className="min-w-0">

                        <p className="truncate text-xs font-semibold text-slate-200 sm:text-sm">
                          {skill.name}
                        </p>

                        <div className="mt-1.5 flex items-center gap-1.5">

                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                          <span className="font-mono text-[9px] text-slate-600">
                            active
                          </span>

                        </div>

                      </div>

                    </div>

                    {/* Bottom light */}

                    <div className="skill-bottom-line absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* ===================================================
            FULL STACK DEVELOPER
        =================================================== */}

        <div className="relative mt-7 overflow-hidden rounded-2xl border border-slate-800/80 bg-[#050b18]/75 p-5 backdrop-blur-xl sm:p-7">

          {/* Moving line */}

          <div className="skill-flow-line absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

          <div className="mb-6">

            <h3 className="text-sm font-semibold text-slate-200 sm:text-base">
              Full Stack Developer
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Learning • Building • Automating
            </p>

          </div>

          {/* Flow */}

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">

            <FlowItem
              icon={<SiGit />}
              name="Git"
              color="text-[#F05032]"
            />

            <FlowArrow />

            <FlowItem
              icon={<SiDocker />}
              name="Docker"
              color="text-[#2496ED]"
            />

            <FlowArrow />

            <FlowItem
              icon={<FaMicrosoft />}
              name="Azure"
              color="text-[#0078D4]"
            />

            <FlowArrow />

            <FlowItem
              icon={<SiNodedotjs />}
              name="Node.js"
              color="text-[#5FA04E]"
            />

            <FlowArrow />

            <FlowItem
              icon={
                <span className="text-[10px] font-black">
                  AI
                </span>
              }
              name="AI"
              color="text-[#10A37F]"
            />

          </div>

        </div>

        {/* ===================================================
            STATUS
        =================================================== */}

        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[10px] text-slate-600">

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

          continuously.learning()

          <span className="text-slate-800">
            //
          </span>

          improving.everyday

        </div>

      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`

        /* ==========================================
           FLOATING PARTICLES
        ========================================== */

        .skill-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 9999px;
          background: #60a5fa;
          box-shadow:
            0 0 12px 3px rgba(59, 130, 246, 0.35);
          animation:
            particleMove 5s ease-in-out infinite;
        }

        .particle-one {
          left: 8%;
          top: 18%;
        }

        .particle-two {
          right: 10%;
          top: 30%;
          background: #a78bfa;
          box-shadow:
            0 0 12px 3px rgba(139, 92, 246, 0.35);
          animation-delay: 1s;
        }

        .particle-three {
          left: 20%;
          bottom: 20%;
          background: #22d3ee;
          box-shadow:
            0 0 12px 3px rgba(34, 211, 238, 0.35);
          animation-delay: 2s;
        }

        .particle-four {
          right: 25%;
          bottom: 30%;
          background: #c084fc;
          box-shadow:
            0 0 12px 3px rgba(192, 132, 252, 0.35);
          animation-delay: 3s;
        }

        @keyframes particleMove {

          0%,
          100% {
            transform:
              translate(0, 0);
            opacity: 0.2;
          }

          50% {
            transform:
              translate(15px, -20px);
            opacity: 0.9;
          }

        }


        /* ==========================================
           GROUP
        ========================================== */

        .skill-group {
          transition:
            transform 0.5s ease,
            border-color 0.5s ease,
            box-shadow 0.5s ease;
        }

        .skill-group:hover {
          transform: translateY(-2px);

          border-color:
            rgba(59, 130, 246, 0.22);

          box-shadow:
            0 20px 50px
            rgba(15, 23, 42, 0.35);
        }


        /* ==========================================
           MOVING TOP LINE
        ========================================== */

        .skill-line {
          animation:
            skillLineMove 5s linear infinite;
        }

        @keyframes skillLineMove {

          0% {
            transform: translateX(-180px);
          }

          100% {
            transform: translateX(1200px);
          }

        }


        /* ==========================================
           GROUP ICON
        ========================================== */

        .skill-group-icon {
          animation:
            groupIconFloat 3.5s ease-in-out infinite;

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .skill-group:hover .skill-group-icon {
          transform:
            translateY(-3px)
            scale(1.05);

          box-shadow:
            0 0 25px
            rgba(59, 130, 246, 0.12);
        }

        @keyframes groupIconFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }

        }


        /* ==========================================
           SKILL CARD
        ========================================== */

        .skill-card {
          animation:
            cardFloat 4s ease-in-out infinite;

          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            background 0.4s ease,
            box-shadow 0.4s ease;
        }

        .skill-card:hover {

          transform:
            translateY(-7px)
            scale(1.015);

          border-color:
            rgba(96, 165, 250, 0.3);

          background:
            rgba(15, 23, 42, 0.9);

          box-shadow:
            0 15px 35px
            rgba(2, 6, 23, 0.5),

            0 0 25px
            rgba(59, 130, 246, 0.06);
        }

        @keyframes cardFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-2px);
          }

        }


        /* ==========================================
           BRAND ICON
        ========================================== */

        .skill-brand-icon {

          animation:
            brandFloat 3.2s ease-in-out infinite;

          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease,
            border-color 0.5s ease;
        }

        .skill-card:nth-child(2)
        .skill-brand-icon {
          animation-delay: 0.5s;
        }

        .skill-card:nth-child(3)
        .skill-brand-icon {
          animation-delay: 1s;
        }

        .skill-card:nth-child(4)
        .skill-brand-icon {
          animation-delay: 1.5s;
        }

        .skill-card:hover
        .skill-brand-icon {

          transform:
            scale(1.12)
            rotate(5deg);

          border-color:
            rgba(96, 165, 250, 0.3);

          box-shadow:
            0 0 25px
            rgba(59, 130, 246, 0.12);
        }

        @keyframes brandFloat {

          0%,
          100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          50% {
            transform:
              translateY(-4px)
              rotate(2deg);
          }

        }


        /* ==========================================
           BOTTOM CARD LINE
        ========================================== */

        .skill-card:hover
        .skill-bottom-line {

          width: 80%;

          transition:
            width 0.6s ease;
        }


        /* ==========================================
           TERMINAL CURSOR
        ========================================== */

        .skill-cursor {

          display: inline-block;

          width: 5px;

          height: 12px;

          margin-left: 3px;

          background:
            #60a5fa;

          animation:
            cursorBlink 1s infinite;
        }

        @keyframes cursorBlink {

          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }

        }


        /* ==========================================
           WORKFLOW LINE
        ========================================== */

        .skill-flow-line {

          animation:
            workflowLine 3.5s
            linear infinite;
        }

        @keyframes workflowLine {

          0% {
            transform:
              translateX(-150px);
          }

          100% {
            transform:
              translateX(1200px);
          }

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 640px) {

          .skill-card {
            animation-duration: 5s;
          }

          .skill-card:hover {
            transform:
              translateY(-4px)
              scale(1.01);
          }

          .skill-brand-icon {
            animation-duration: 4s;
          }

          .skill-group:hover {
            transform: none;
          }

        }


        /* ==========================================
           REDUCE MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .skill-card,
          .skill-brand-icon,
          .skill-group-icon,
          .skill-particle,
          .skill-line,
          .skill-flow-line,
          .skill-cursor {
            animation: none !important;
          }

        }

      `}</style>
    </section>
  );
};


/* ============================================================
   FLOW ITEM
============================================================ */

const FlowItem = ({
  icon,
  name,
  color,
}) => {

  return (
    <div
      className="
        group
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-slate-800
        bg-slate-950/80
        px-3
        py-2.5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-600
        hover:bg-slate-900
      "
    >

      <span
        className={`
          text-lg
          transition-all
          duration-500
          group-hover:scale-125
          group-hover:rotate-6
          ${color}
        `}
      >
        {icon}
      </span>

      <span
        className="
          text-xs
          font-medium
          text-slate-400
          transition-colors
          group-hover:text-slate-200
        "
      >
        {name}
      </span>

    </div>
  );
};


/* ============================================================
   FLOW ARROW
============================================================ */

const FlowArrow = () => {

  return (
    <span
      className="
        hidden
        animate-pulse
        text-blue-500/50
        sm:block
      "
    >
      →
    </span>
  );
};


export default SkillSection;