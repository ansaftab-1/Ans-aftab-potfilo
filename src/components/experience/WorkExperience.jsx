import React from "react";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Terminal,
  Code2,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer & DevOps Engineer",
    company: "TrinodeAI",
    duration: "Present",
    isPresent: true,
    description:
      "Developing and scaling modern full stack web applications using React.js, Node.js, and cloud services. Building responsive frontends, resilient backend APIs, and automated DevOps deployment pipelines.",
    tags: ["React.js", "Node.js", "DevOps", "Express.js", "MongoDB", "Cloud"],
  },
  {
    id: 2,
    role: "Web Developer",
    company: "POA Solutions",
    duration: "1 year",
    isPresent: false,
    description:
      "Building full-stack web applications using React.js and Node.js. Developed clean UIs, integrated RESTful APIs, and maintained database schema logic.",
    tags: ["React.js", "Node.js", "REST APIs", "TypeScript", "SQL"],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020617] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-[1150px] px-5 sm:px-8 lg:px-10">

        {/* ================= SECTION HEADING ================= */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500 sm:w-10" />
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Work{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>

          <div className="mt-4 flex items-center gap-2 pl-11 font-mono text-xs text-slate-500 sm:pl-13">
            <Terminal size={13} className="text-blue-400" />
            <span>experience.log</span>
            <span className="text-slate-700">→</span>
            <span className="text-emerald-400">loaded</span>
          </div>
        </div>

        {/* ================= EXPERIENCE LIST ================= */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#050b18]/80 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-blue-950/20 sm:p-7"
            >
              {/* Top border highlight */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                
                {/* Company & Role */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-violet-400">
                    <Building2 size={22} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-bold text-white sm:text-xl">
                        {exp.role}
                      </h3>
                      {exp.isPresent && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.4)]" />
                          Present
                        </span>
                      )}
                    </div>

                    <p className="mt-1 font-medium text-slate-300">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 self-start rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1.5 font-mono text-xs text-slate-300">
                  <Calendar size={14} className="text-violet-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                {exp.description}
              </p>

              {/* Tech Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-colors group-hover:border-blue-500/20 group-hover:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
