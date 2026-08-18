import React from "react";
import {
  GraduationCap,
  BookOpen,
  School,
  CalendarDays,
  Code2,
  Cloud,
  Cpu,
  CheckCircle2,
  Terminal,
} from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      icon: <GraduationCap size={22} />,
      level: "Bachelor's Degree",
      title: "Bachelor of Computer Science",
      institute: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology, Islamabad",
      duration: "2022 – 2026",
      description:
        "Bachelor of Computer Science at SZABIST Islamabad, 2022–2026. Focusing on Software Engineering, Web Development, Computer Science, and modern technology practices.",
      tags: ["Computer Science", "Web Development", "Software Engineering"],
      current: true,
    },
    {
      id: 2,
      icon: <BookOpen size={21} />,
      level: "Kips College",
      title: "Intermediate / Higher Secondary",
      institute: "Kips College",
      duration: "2020 – 2022",
      description:
        "Completed Higher Secondary education at Kips College with focus on science, mathematics, and computing fundamentals.",
      tags: ["Intermediate", "Science", "Computer Science"],
      current: false,
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#020617] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Blue glow */}
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Purple glow */}
        <div className="absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[150px]" />

        {/* Center glow */}
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

        <span className="absolute left-[10%] top-[18%] h-1 w-1 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_3px_rgba(59,130,246,0.5)]" />

        <span className="absolute right-[12%] top-[35%] h-1 w-1 animate-pulse rounded-full bg-violet-400 shadow-[0_0_12px_3px_rgba(139,92,246,0.5)]" />

        <span className="absolute bottom-[20%] left-[25%] h-1 w-1 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.5)]" />

        <span className="absolute bottom-[15%] right-[25%] h-1 w-1 animate-pulse rounded-full bg-purple-400 shadow-[0_0_12px_3px_rgba(168,85,247,0.5)]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1150px] px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            SECTION HEADING
        =================================================== */}

        <div className="mb-12">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500 sm:w-10" />

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">

              My{" "}

              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Education
              </span>

            </h2>

            <span className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />

          </div>

          <div className="mt-4 flex items-center gap-2 pl-11 font-mono text-xs text-slate-500 sm:pl-13">

            <Terminal size={13} className="text-blue-400" />

            <span>
              education.status
            </span>

            <span className="text-slate-700">
              →
            </span>

            <span className="text-emerald-400">
              completed
            </span>

          </div>

        </div>

        {/* ===================================================
            EDUCATION TIMELINE
        =================================================== */}

        <div className="relative">

          {/* Timeline vertical line */}

          <div className="absolute left-[22px] top-7 bottom-7 hidden w-px bg-gradient-to-b from-blue-500/70 via-violet-500/40 to-transparent md:block" />

          {/* Animated timeline glow */}

          <div className="absolute left-[21px] top-7 hidden h-16 w-[3px] animate-[timelineMove_4s_linear_infinite] rounded-full bg-gradient-to-b from-transparent via-blue-400 to-transparent blur-[1px] md:block" />

          <div className="space-y-7">

            {educationData.map((education, index) => (
              <EducationCard
                key={education.id}
                education={education}
                index={index}
              />
            ))}

          </div>
        </div>

        {/* ===================================================
            EDUCATION SUMMARY
        =================================================== */}

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800/80 bg-[#050b18]/70 shadow-xl backdrop-blur-xl">

          <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">

                <Code2 size={20} />

              </div>

              <div>

                <p className="text-sm font-semibold text-slate-200">
                  Academic Foundation
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Building the foundation for a career in technology and DevOps.
                </p>

              </div>

            </div>

            <div className="flex flex-wrap gap-2">

              <SummaryTag
                icon={<Cloud size={13} />}
                text="Cloud"
              />

              <SummaryTag
                icon={<Cpu size={13} />}
                text="Technology"
              />

              <SummaryTag
                icon={<Code2 size={13} />}
                text="Development"
              />

            </div>

          </div>

          {/* Bottom animated line */}

          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`

        /* Timeline moving light */

        @keyframes timelineMove {

          0% {
            transform: translateY(-20px);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(480px);
            opacity: 0;
          }

        }

        /* Card entrance */

        @keyframes educationAppear {

          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }

        }

        /* Floating icon */

        @keyframes iconFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }

        }

      `}</style>
    </section>
  );
};

/* ============================================================
   EDUCATION CARD
============================================================ */

const EducationCard = ({ education, index }) => {
  return (
    <article
      className="group relative pl-0 md:pl-[62px]"
      style={{
        animation: `educationAppear 0.7s ease-out ${
          index * 0.15
        }s both`,
      }}
    >

      {/* =====================================================
          TIMELINE DOT
      ===================================================== */}

      <div className="absolute left-0 top-7 hidden md:flex">

        {/* Outer glow */}

        <div className="absolute -inset-2 animate-pulse rounded-full bg-blue-500/10 blur-md" />

        {/* Dot */}

        <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/30 bg-[#020617] text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.12)] transition-all duration-500 group-hover:border-violet-400/50 group-hover:text-violet-400 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]">

          {education.icon}

        </div>
      </div>

      {/* =====================================================
          CARD
      ===================================================== */}

      <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#050b18]/80 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-500/30 group-hover:shadow-blue-950/20">

        {/* Top gradient */}

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-violet-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="p-5 sm:p-6 lg:p-7">

          {/* =================================================
              CARD HEADER
          ================================================= */}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

            <div className="flex gap-4">

              {/* Mobile icon */}

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 md:hidden">

                {education.icon}

              </div>

              <div>

                {/* Level */}

                <div className="mb-2 flex items-center gap-2">

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                    {education.level}
                  </span>

                  {education.current && (
                    <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[9px] font-medium text-emerald-400">

                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                      Completed

                    </span>
                  )}

                </div>

                {/* Degree */}

                <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">

                  {education.title}

                </h3>

              </div>

            </div>

            {/* =================================================
                DATE
            ================================================= */}

            <div className="flex shrink-0 items-center gap-2 self-start rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-2">

              <CalendarDays
                size={14}
                className="text-violet-400"
              />

              <span className="font-mono text-xs text-slate-300">
                {education.duration}
              </span>

            </div>

          </div>

          {/* =================================================
              INSTITUTE
          ================================================= */}

          <div className="mt-5 flex items-start gap-2.5">

            <div className="mt-0.5 h-5 w-5 shrink-0 text-blue-400">
              <School size={17} />
            </div>

            <p className="text-sm font-medium leading-6 text-slate-300">
              {education.institute}
            </p>

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            {education.description}
          </p>

          {/* =================================================
              TAGS
          ================================================= */}

          <div className="mt-5 flex flex-wrap gap-2">

            {education.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-1.5 text-[10px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-blue-500/20 group-hover:text-blue-400"
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

        {/* =================================================
            BOTTOM STATUS
        ================================================= */}

        <div className="flex items-center gap-2 border-t border-slate-800/70 bg-slate-950/30 px-5 py-3 sm:px-6">

          <CheckCircle2
            size={13}
            className="text-emerald-400"
          />

          <span className="font-mono text-[10px] text-slate-500">
            academic.record.verified
          </span>

          {/* Animated status */}

          <span className="ml-auto h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

        </div>

      </div>
    </article>
  );
};

/* ============================================================
   SUMMARY TAG
============================================================ */

const SummaryTag = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-1.5 text-[10px] text-slate-400">

      <span className="text-blue-400">
        {icon}
      </span>

      {text}

    </div>
  );
};

export default Education;