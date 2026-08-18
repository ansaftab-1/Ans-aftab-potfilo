import React, { useEffect, useState } from "react";
import {
  Terminal,
  Cloud,
  Container,
  GitBranch,
  Activity,
  Rocket,
  CheckCircle2,
} from "lucide-react";

import profileImg from "../../assets/IMG_6106.jpg";

const roles = ["Full Stack Developer", "DevOps Engineer"];

const TypewriterRole = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center text-blue-400 font-semibold min-h-[1.4em]">
      <span>{currentText}</span>
      <span className="ml-1.5 inline-block h-[0.85em] w-[2px] animate-pulse bg-blue-400 align-middle"></span>
    </span>
  );
};

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  const terminalLines = [
    "whoami",
    "role --current",
    "focus --devops",
    "status --check",
  ];

  /* =========================================================
     TERMINAL TYPING ANIMATION
  ========================================================= */

  useEffect(() => {
    let charIndex = 0;

    const currentLine = terminalLines[lineIndex];

    const typing = setInterval(() => {
      setTypedText(currentLine.substring(0, charIndex + 1));

      charIndex++;

      if (charIndex === currentLine.length) {
        clearInterval(typing);

        setTimeout(() => {
          setTypedText("");

          setLineIndex((prev) =>
            prev === terminalLines.length - 1 ? 0 : prev + 1
          );
        }, 1800);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [lineIndex]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020617] py-12 text-white sm:py-16 lg:py-20"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Blue glow */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Purple glow */}
        <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[150px]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating dots */}

        <span className="absolute left-[8%] top-[20%] h-1 w-1 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_3px_rgba(59,130,246,0.6)]" />

        <span className="absolute bottom-[15%] left-[30%] h-1 w-1 animate-pulse rounded-full bg-violet-400 shadow-[0_0_12px_3px_rgba(139,92,246,0.6)]" />

        <span className="absolute right-[15%] top-[25%] h-1 w-1 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.6)]" />

        <span className="absolute bottom-[30%] right-[8%] h-1 w-1 animate-pulse rounded-full bg-purple-400 shadow-[0_0_12px_3px_rgba(168,85,247,0.6)]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            ABOUT ME HEADING
        =================================================== */}

        <div className="mb-8 flex items-center gap-3 sm:mb-10">

          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500 sm:w-10" />

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">

            About{" "}

            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>

          </h2>

          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />

        </div>

        {/* ===================================================
            PROFILE + ABOUT CONTENT
        =================================================== */}

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-[#050b18]/80 shadow-2xl shadow-black/30 backdrop-blur-xl">

          {/* Top animated border */}

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

          <div className="grid items-center gap-10 p-6 sm:p-8 md:p-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14 lg:p-12">

            {/* =================================================
                PROFILE IMAGE
            ================================================= */}

            <div className="flex justify-center">

              <div className="relative">

                {/* Outer animated ring */}

                <div className="absolute -inset-5 rounded-[2rem] border border-blue-500/10 animate-[spin_20s_linear_infinite]" />

                {/* Second animated ring */}

                <div className="absolute -inset-3 rounded-[1.8rem] border border-violet-500/20 animate-[spin_14s_linear_infinite_reverse]" />

                {/* Glow */}

                <div className="absolute inset-0 scale-90 rounded-[2rem] bg-blue-600/20 blur-[70px]" />

                {/* Image container */}

                <div className="relative h-[350px] w-[270px] overflow-hidden rounded-[1.8rem] border border-slate-700/80 bg-[#020617] shadow-2xl shadow-blue-950/40 sm:h-[400px] sm:w-[310px]">

                  {/* Scanning line */}

                  <div className="absolute left-0 right-0 top-0 z-20 h-[2px] animate-[scan_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_3px_rgba(59,130,246,0.5)]" />

                  <img
                    src={profileImg}
                    alt="Muhammad Ans"
                    className="h-full w-full object-cover object-top transition duration-700 hover:scale-[1.03]"
                  />

                  {/* Bottom gradient */}

                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent" />

                  {/* Profile status */}

                  <div className="absolute bottom-5 left-5 right-5 z-20">

                    <div className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-[#020617]/85 px-3 py-3 backdrop-blur-md">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                        <Container size={18} />
                      </div>

                      <div>

                        <p className="text-sm font-semibold text-white">
                          Muhammad Ans
                        </p>

                        <div className="mt-1 flex items-center gap-2">

                          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.4)]" />

                          <span className="text-xs text-slate-400">
                            Full Stack Developer & DevOps Engineer
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>
                </div>

                {/* =================================================
                    FLOATING DOCKER BADGE
                ================================================= */}

                <div className="absolute -right-5 top-12 hidden animate-[float_4s_ease-in-out_infinite] items-center gap-2 rounded-lg border border-blue-500/20 bg-[#050b18]/90 px-3 py-2 text-xs font-medium text-slate-300 shadow-xl backdrop-blur-md sm:flex">

                  <Container
                    size={15}
                    className="text-blue-400"
                  />

                  Docker

                </div>

                {/* =================================================
                    FLOATING CLOUD BADGE
                ================================================= */}

                <div className="absolute -left-6 bottom-24 hidden animate-[float_5s_ease-in-out_infinite_reverse] items-center gap-2 rounded-lg border border-violet-500/20 bg-[#050b18]/90 px-3 py-2 text-xs font-medium text-slate-300 shadow-xl backdrop-blur-md sm:flex">

                  <Cloud
                    size={15}
                    className="text-violet-400"
                  />

                  Cloud

                </div>

              </div>
            </div>

            {/* =================================================
                ABOUT CONTENT
            ================================================= */}

            <div>

              {/* Small label */}

              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">

                <span className="h-px w-7 bg-blue-500" />

                Who I Am

              </div>

              {/* Name */}

              <h3 className="text-3xl font-bold leading-tight sm:text-4xl">

                Hi, I'm{" "}

                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Muhammad Ans
                </span>

              </h3>

              <p className="mt-3 text-base font-medium text-slate-300">
                <TypewriterRole />
              </p>

              {/* About text */}

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-400 sm:text-[15px]">

                <p>
                  I'm a{" "}
                  <span className="font-medium text-slate-200">
                    Full Stack Developer & DevOps Engineer
                  </span>
                  , building responsive web applications and robust software solutions with modern technologies.
                </p>

                <p>
                  My focus is on understanding the complete journey of an
                  application — from{" "}
                  <span className="text-blue-400">
                    code and containers
                  </span>{" "}
                  to{" "}
                  <span className="text-violet-400">
                    deployment, cloud infrastructure and monitoring
                  </span>
                  .
                </p>

                <p>
                  I enjoy troubleshooting real-world infrastructure problems,
                  automating repetitive tasks and continuously improving
                  deployment workflows.
                </p>

              </div>

              {/* =================================================
                  QUICK INFORMATION
              ================================================= */}

              <div className="mt-7 grid gap-3 sm:grid-cols-3">

                <QuickInfo
                  icon={<Cloud size={17} />}
                  title="Cloud"
                  text="Infrastructure"
                />

                <QuickInfo
                  icon={<Container size={17} />}
                  title="Containers"
                  text="Docker"
                />

                <QuickInfo
                  icon={<Activity size={17} />}
                  title="Monitoring"
                  text="Observability"
                />

              </div>

            </div>
          </div>
        </div>

        {/* ===================================================
            WHOAMI TERMINAL
        =================================================== */}

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800/80 bg-[#030712]/90 shadow-2xl shadow-black/20">

          {/* Terminal header */}

          <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-5 py-3">

            <div className="flex items-center gap-2">

              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />

              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />

              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-500">

              <Terminal size={13} />

              ans@devops:~

            </div>

            <div className="w-10" />

          </div>

          {/* Terminal body */}

          <div className="p-5 font-mono text-sm sm:p-6">

            {/* Command */}

            <div className="flex flex-wrap items-center gap-2">

              <span className="text-blue-400">
                ans@devops
              </span>

              <span className="text-slate-600">
                :
              </span>

              <span className="text-violet-400">
                ~
              </span>

              <span className="text-slate-500">
                $
              </span>

              <span className="text-slate-200">
                {typedText}
              </span>

              {/* Cursor */}

              <span className="h-4 w-2 animate-pulse bg-blue-400" />

            </div>

            {/* Dynamic output */}

            <div className="mt-5 min-h-[95px] border-l border-blue-500/20 pl-4">

              {lineIndex === 0 && (
                <p className="animate-pulse text-slate-400">
                  Muhammad Ans
                </p>
              )}

              {lineIndex === 1 && (
                <p className="text-blue-400">
                  Full Stack Developer
                </p>
              )}

              {lineIndex === 2 && (
                <div className="flex flex-wrap gap-2">

                  <TerminalTag text="Docker" />
                  <TerminalTag text="Cloud" />
                  <TerminalTag text="CI/CD" />
                  <TerminalTag text="Node.js" />
                  <TerminalTag text="Monitoring" />

                </div>
              )}

              {lineIndex === 3 && (
                <div className="flex items-center gap-2 text-emerald-400">

                  <CheckCircle2 size={15} />

                  <span>
                    Learning • Building • Automating
                  </span>

                </div>
              )}

            </div>
          </div>
        </div>

        {/* ===================================================
            FULL STACK DEVELOPER
        =================================================== */}

        <div className="mt-8 rounded-2xl border border-slate-800/80 bg-[#050b18]/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">

          {/* Workflow heading */}

          <div className="mb-7 flex items-center justify-between">

            <div>

              <p className="text-sm font-semibold text-slate-200">
                Full Stack Developer
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Code → Build → Deploy → Monitor
              </p>

            </div>

            {/* =================================================
                ANIMATED ROCKET
            ================================================= */}

            <div className="relative flex h-11 w-11 items-center justify-center">

              {/* Rocket glow */}

              <div className="absolute h-9 w-9 animate-pulse rounded-full bg-violet-500/20 blur-md" />

              {/* Rocket */}

              <Rocket
                size={21}
                className="relative z-10 animate-[rocketFloat_2.5s_ease-in-out_infinite] text-violet-400"
              />

              {/* Rocket particle */}

              <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 animate-[rocketParticle_1s_ease-in-out_infinite] rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]" />

              <span className="absolute bottom-1 left-[42%] h-1 w-1 animate-[rocketParticle_1.3s_ease-in-out_infinite_0.2s] rounded-full bg-violet-400 opacity-70" />

            </div>

          </div>

          {/* Workflow cards */}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

            <PipelineItem
              icon={<GitBranch size={18} />}
              title="CODE"
              subtitle="Version Control"
            />

            <PipelineItem
              icon={<Container size={18} />}
              title="BUILD"
              subtitle="Containerize"
            />

            <PipelineItem
              icon={<Cloud size={18} />}
              title="DEPLOY"
              subtitle="Release"
            />

            <PipelineItem
              icon={<Activity size={18} />}
              title="MONITOR"
              subtitle="Observe & Improve"
            />

          </div>
        </div>

        {/* ===================================================
            BOTTOM STATUS
        =================================================== */}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-blue-500/10 bg-blue-500/[0.03] px-5 py-5 text-center sm:flex-row sm:text-left">

          <div>

            <p className="font-mono text-xs text-blue-400">
              system.status
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Building today. Automating tomorrow.
            </p>

          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            Always learning

          </div>

        </div>
      </div>

      {/* =====================================================
          CUSTOM ANIMATIONS
      ===================================================== */}

      <style>{`

        /* Profile scan */

        @keyframes scan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          50% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            transform: translateY(400px);
            opacity: 0;
          }
        }


        /* Floating badges */

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }


        /* Rocket floating animation */

        @keyframes rocketFloat {
          0%,
          100% {
            transform: translateY(3px) rotate(-4deg);
          }

          25% {
            transform: translateY(-2px) rotate(0deg);
          }

          50% {
            transform: translateY(-7px) rotate(4deg);
          }

          75% {
            transform: translateY(-2px) rotate(0deg);
          }
        }


        /* Rocket exhaust particle */

        @keyframes rocketParticle {
          0% {
            transform: translate(-50%, 0) scale(1);
            opacity: 1;
          }

          50% {
            transform: translate(-50%, 5px) scale(0.7);
            opacity: 0.8;
          }

          100% {
            transform: translate(-50%, 11px) scale(0);
            opacity: 0;
          }
        }

      `}</style>
    </section>
  );
};

/* ============================================================
   QUICK INFORMATION
============================================================ */

const QuickInfo = ({ icon, title, text }) => {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">

      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition group-hover:bg-violet-500/10 group-hover:text-violet-400">
        {icon}
      </div>

      <div>

        <p className="text-xs font-semibold text-slate-200">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] text-slate-500">
          {text}
        </p>

      </div>

    </div>
  );
};

/* ============================================================
   PIPELINE ITEM
============================================================ */

const PipelineItem = ({ icon, title, subtitle }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">

      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition group-hover:bg-violet-500/10 group-hover:text-violet-400">
        {icon}
      </div>

      <p className="text-xs font-bold tracking-wider text-slate-200">
        {title}
      </p>

      <p className="mt-1 text-[10px] text-slate-500">
        {subtitle}
      </p>

      {/* Hover line */}

      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

    </div>
  );
};

/* ============================================================
   TERMINAL TAG
============================================================ */

const TerminalTag = ({ text }) => {
  return (
    <span className="rounded-md border border-blue-500/10 bg-blue-500/5 px-2.5 py-1 text-xs text-blue-400">
      {text}
    </span>
  );
};

export default About;