import React from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

// ============================================================
// PROJECT IMAGES
// ============================================================

import potfolioImg from "../../assets/Potfolio.png";
import linkyImg from "../../assets/Linky.png";
import learnCodeAiImg from "../../assets/LearnCodeAI.png";

// ============================================================
// PROJECT DATA
// ============================================================

const projects = [
  // ==========================================================
  // DEVELOPMENT PROJECTS
  // ==========================================================

  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React and Tailwind CSS with a modern, responsive and interactive interface.",
    image: potfolioImg,
    tags: ["React", "TailwindCSS", "Vite"],
    type: "development",
    githubUrl:
      "https://github.com/ansaftab-1/Devops_Portfolio",
  },

  {
    id: 2,
    title: "LearnCode AI",
    description:
      "An AI-powered coding platform designed to assist developers with code generation, debugging, and interactive learning.",
    image: learnCodeAiImg,
    tags: ["React", "AI", "TailwindCSS", "Node.js"],
    type: "development",
    liveUrl:
      "https://learncodeai-frontend.vercel.app/",
  },

  {
    id: 3,
    title: "Linkfiy",
    description:
      "A modern full-stack link management and URL optimization platform for organizing, tracking, and sharing links.",
    image: linkyImg,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    type: "development",
    liveUrl:
      "https://ai-powered-freelance-platform.vercel.app/",
  },

  // ==========================================================
  // DEVOPS PROJECTS
  // ==========================================================

  {
    id: 4,
    title: "Docker Swarm Web Application",
    description:
      "A containerized web application deployed with Docker Swarm using services, replicas, overlay networking and scalable deployment.",
    tags: [
      "Docker",
      "Docker Swarm",
      "Nginx",
      "Networking",
    ],
    type: "devops",
    devopsType: "swarm",
    githubUrl:
      "https://github.com/ansaftab-1/docker-swarm-web-application",
  },
];

// ============================================================
// DEVOPS VISUAL
// ============================================================

const DevOpsVisual = ({ type }) => {
  // ==========================================================
  // DOCKER SWARM
  // ==========================================================

  if (type === "swarm") {
    return (
      <div className="devops-visual">

        {/* Background Grid */}
        <div className="devops-grid" />

        {/* Heading */}
        <div className="devops-visual-title">
          DOCKER SWARM
        </div>

        {/* Manager */}
        <div className="swarm-manager">

          <div className="manager-box">
            <div className="manager-icon">
              ⚙
            </div>
          </div>

          <span>MANAGER</span>

        </div>

        {/* Connection Lines */}
        <div className="swarm-line swarm-line-left" />
        <div className="swarm-line swarm-line-right" />

        {/* Worker 1 */}
        <div className="swarm-worker worker-left">

          <div className="worker-box">
            <span />
          </div>

          <div>
            <span className="worker-name">
              WORKER
            </span>

            <span className="worker-status">
              ACTIVE
            </span>
          </div>

        </div>

        {/* Worker 2 */}
        <div className="swarm-worker worker-right">

          <div className="worker-box">
            <span />
          </div>

          <div>
            <span className="worker-name">
              WORKER
            </span>

            <span className="worker-status">
              ACTIVE
            </span>
          </div>

        </div>

        {/* Replicas */}
        <div className="replica-container">

          <span className="replica-title">
            REPLICAS
          </span>

          <span className="replica active" />
          <span className="replica active" />
          <span className="replica active" />
          <span className="replica" />

        </div>

        {/* Bottom Label */}
        <div className="visual-label">
          <span className="status-dot purple" />
          SCALABLE DEPLOYMENT
        </div>

      </div>
    );
  }

  // ==========================================================
  // INFRASTRUCTURE MONITOR
  // ==========================================================

  return (
    <div className="devops-visual">

      {/* Background Grid */}
      <div className="devops-grid" />

      {/* Header */}
      <div className="devops-visual-title">
        INFRASTRUCTURE MONITOR
      </div>

      {/* Monitor Panel */}
      <div className="monitor-panel">

        {/* CPU */}
        <div className="monitor-row">

          <div className="monitor-info">
            <span className="monitor-name">
              CPU
            </span>

            <span className="monitor-value">
              42%
            </span>
          </div>

          <div className="progress-track">
            <div className="progress-bar cpu-bar" />
          </div>

        </div>

        {/* Memory */}
        <div className="monitor-row">

          <div className="monitor-info">
            <span className="monitor-name">
              MEMORY
            </span>

            <span className="monitor-value">
              58%
            </span>
          </div>

          <div className="progress-track">
            <div className="progress-bar memory-bar" />
          </div>

        </div>

        {/* Disk */}
        <div className="monitor-row">

          <div className="monitor-info">
            <span className="monitor-name">
              DISK
            </span>

            <span className="monitor-value">
              36%
            </span>
          </div>

          <div className="progress-track">
            <div className="progress-bar disk-bar" />
          </div>

        </div>

        {/* Service */}
        <div className="service-status">

          <span className="status-dot green" />

          <span>
            SERVICES HEALTHY
          </span>

          <span className="service-pulse" />

        </div>

      </div>

      {/* Bottom Label */}
      <div className="visual-label">
        <span className="status-dot green" />
        INFRASTRUCTURE HEALTH
      </div>

    </div>
  );
};

// ============================================================
// PROJECT CARD
// ============================================================

const ProjectCard = ({ project }) => {

  const isDevOps = project.type === "devops";
  const targetUrl = project.liveUrl || project.githubUrl;

  return (
    <div
      className={
        isDevOps
          ? "project-card devops-card group"
          : "project-card group"
      }
    >

      {/* ======================================================
          PROJECT VISUAL / IMAGE
      ====================================================== */}

      {isDevOps ? (

        <DevOpsVisual
          type={project.devopsType}
        />

      ) : (

        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-image-wrapper block"
        >

          {/* Original Image */}
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />

          {/* Dark Gradient */}
          <div className="image-gradient" />

          {/* Technical Grid */}
          <div className="image-grid" />

          {/* Project Badge */}
          <div className="project-badge">
            {project.liveUrl ? "LIVE SITE" : "WEB PROJECT"}
          </div>

          {/* Animated Bottom Line */}
          <div className="image-bottom-line" />

        </a>
      )}

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="project-content">

        {/* Tags */}
        <div className="project-tags">

          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={
                isDevOps
                  ? "project-tag devops-tag"
                  : "project-tag"
              }
            >
              {tag}
            </span>
          ))}

        </div>

        {/* Title */}
        <h3 className="project-title">
          {targetUrl ? (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        {/* Description */}
        <p className="project-description">
          {project.description}
        </p>

        {/* Footer */}
        <div className="project-footer">

          {/* Action Button: Live Site or GitHub */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Site`}
              className="github-button live-button"
            >
              <ExternalLink size={18} />

              <span>
                Live Site
              </span>
            </a>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="github-button"
            >
              <Github size={18} />

              <span>
                GitHub
              </span>
            </a>
          )}

          {/* Project Type */}
          <span className="project-type">

            <span
              className={
                isDevOps
                  ? "type-dot devops-dot"
                  : "type-dot"
              }
            />

            {isDevOps
              ? "DEVOPS"
              : "DEVELOPMENT"}

          </span>

        </div>

      </div>

    </div>
  );
};

// ============================================================
// MAIN PROJECT SECTION
// ============================================================

const ProjectSection = () => {

  const developmentProjects =
    projects.filter(
      (project) =>
        project.type === "development"
    );

  const devopsProjects =
    projects.filter(
      (project) =>
        project.type === "devops"
    );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] py-20 sm:py-24"
    >

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Cyan Glow */}
        <div className="absolute left-[-200px] top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />

        {/* Blue Glow */}
        <div className="absolute bottom-20 right-[-200px] h-[450px] w-[450px] rounded-full bg-blue-600/[0.04] blur-[140px]" />

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ====================================================
            SIMPLE HEADING
        ==================================================== */}

        <div className="mb-12 text-center">

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">

            <span>
              My{" "}
            </span>

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>

        </div>

        {/* ====================================================
            DEVELOPMENT PROJECTS
        ==================================================== */}

        <div className="mb-6 flex items-center gap-3">

          <span className="h-px w-6 bg-cyan-400" />

          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            Development Projects
          </h3>

          <span className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />

        </div>

        <div className="mb-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

          {developmentProjects.map(
            (project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            )
          )}

        </div>

        {/* ====================================================
            DEVOPS PROJECTS
        ==================================================== */}

        <div className="mb-6 flex items-center gap-3">

          <span className="h-px w-6 bg-blue-400" />

          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            DevOps Projects
          </h3>

          <span className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />

          <span className="hidden rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-[9px] text-emerald-400 sm:block">
            BUILDING
          </span>

        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

          {devopsProjects.map(
            (project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            )
          )}

        </div>

        {/* ====================================================
            GITHUB CTA
        ==================================================== */}

        <div className="mt-14 text-center">

          <a
            href="https://github.com/ansaftab-1"
            target="_blank"
            rel="noopener noreferrer"
            className="github-cta group"
          >

            <Github size={17} />

            <span>
              Check My GitHub
            </span>

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </a>

        </div>

      </div>

      {/* ======================================================
          CUSTOM CSS
      ====================================================== */}

      <style>{`

        /* ====================================================
           PROJECT CARD
        ==================================================== */

        .project-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(30, 41, 59, 0.8);
          background: rgba(5, 11, 24, 0.92);
          box-shadow:
            0 10px 35px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(14px);

          transition:
            transform 0.45s ease,
            border-color 0.45s ease,
            box-shadow 0.45s ease;
        }

        .project-card:hover {
          transform: translateY(-7px);

          border-color:
            rgba(34, 211, 238, 0.28);

          box-shadow:
            0 22px 55px rgba(2, 6, 23, 0.6),
            0 0 30px rgba(34, 211, 238, 0.05);
        }


        /* ====================================================
           IMAGE
        ==================================================== */

        .project-image-wrapper {
          position: relative;
          height: 208px;
          overflow: hidden;
          background: #020617;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition:
            transform 0.7s
            cubic-bezier(0.2, 0.8, 0.2, 1),
            filter 0.7s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.07);

          filter:
            brightness(1.08)
            contrast(1.04)
            saturate(1.08);
        }

        .image-gradient {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(2, 6, 23, 0.95),
              rgba(2, 6, 23, 0.1),
              transparent
            );
        }

        .image-grid {
          position: absolute;
          inset: 0;

          opacity: 0.06;

          background-image:
            linear-gradient(
              rgba(34,211,238,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.8) 1px,
              transparent 1px
            );

          background-size: 28px 28px;
        }

        .project-badge {
          position: absolute;
          top: 14px;
          left: 14px;

          padding: 5px 10px;

          border-radius: 999px;

          border:
            1px solid
            rgba(34,211,238,0.2);

          background:
            rgba(2,6,23,0.75);

          color:
            #67e8f9;

          font-family:
            monospace;

          font-size:
            8px;

          letter-spacing:
            0.12em;

          backdrop-filter:
            blur(8px);
        }

        .image-bottom-line {
          position: absolute;

          bottom: 0;
          left: 0;

          width: 0;
          height: 2px;

          background:
            linear-gradient(
              to right,
              #22d3ee,
              #3b82f6,
              #8b5cf6
            );

          transition:
            width 0.5s ease;
        }

        .project-card:hover
        .image-bottom-line {
          width: 100%;
        }


        /* ====================================================
           CONTENT
        ==================================================== */

        .project-content {
          padding: 20px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;

          margin-bottom: 14px;
        }

        .project-tag {
          padding: 5px 9px;

          border-radius: 999px;

          border:
            1px solid
            rgba(51,65,85,0.9);

          background:
            rgba(30,41,59,0.65);

          color:
            #cbd5e1;

          font-size:
            10px;

          font-weight:
            500;
        }

        .devops-tag {
          border-color:
            rgba(59,130,246,0.2);

          background:
            rgba(37,99,235,0.06);

          color:
            #93c5fd;
        }

        .project-title {
          margin-bottom: 8px;

          color: white;

          font-size: 18px;

          font-weight: 600;

          line-height: 1.4;

          transition:
            color 0.3s ease;
        }

        .project-card:hover
        .project-title {
          color:
            #67e8f9;
        }

        .project-description {
          min-height: 72px;

          margin-bottom: 18px;

          color:
            #94a3b8;

          font-size:
            13px;

          line-height:
            1.7;
        }


        /* ====================================================
           FOOTER
        ==================================================== */

        .project-footer {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          padding-top:
            14px;

          border-top:
            1px solid
            rgba(30,41,59,0.8);
        }

        .github-button {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          color:
            #64748b;

          font-size:
            12px;

          font-weight:
            500;

          transition:
            all 0.3s ease;
        }

        .github-button:hover {
          color:
            #22d3ee;

          transform:
            translateY(-1px);
        }

        .project-type {
          display:
            flex;

          align-items:
            center;

          gap:
            6px;

          color:
            #475569;

          font-family:
            monospace;

          font-size:
            8px;

          letter-spacing:
            0.08em;
        }

        .type-dot {
          width:
            6px;

          height:
            6px;

          border-radius:
            50%;

          background:
            #22d3ee;

          box-shadow:
            0 0 8px
            rgba(34,211,238,0.7);

          animation:
            statusPulse 2s
            ease-in-out infinite;
        }

        .devops-dot {
          background:
            #3b82f6;

          box-shadow:
            0 0 8px
            rgba(59,130,246,0.7);
        }

        @keyframes statusPulse {

          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }

        }


        /* ====================================================
           DEVOPS VISUAL
           SAME HEIGHT AS NORMAL PROJECT IMAGE
        ==================================================== */

        .devops-visual {
          position: relative;

          height: 208px;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(37,99,235,0.13),
              transparent 55%
            ),
            #030712;
        }

        .devops-grid {
          position: absolute;

          inset: 0;

          opacity: 0.08;

          background-image:
            linear-gradient(
              rgba(59,130,246,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(59,130,246,0.5) 1px,
              transparent 1px
            );

          background-size:
            30px 30px;

          animation:
            gridMove 12s
            linear infinite;
        }

        @keyframes gridMove {

          from {
            transform:
              translate(0,0);
          }

          to {
            transform:
              translate(30px,30px);
          }

        }


        /* ====================================================
           DEVOPS TITLE
        ==================================================== */

        .devops-visual-title {
          position:
            absolute;

          top:
            18px;

          left:
            0;

          right:
            0;

          text-align:
            center;

          color:
            #64748b;

          font-family:
            monospace;

          font-size:
            8px;

          letter-spacing:
            0.2em;
        }


        /* ====================================================
           SWARM
        ==================================================== */

        .swarm-manager {
          position:
            absolute;

          top:
            45px;

          left:
            50%;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            center;

          gap:
            5px;

          transform:
            translateX(-50%);

          color:
            #60a5fa;

          font-family:
            monospace;

          font-size:
            7px;

          z-index:
            3;
        }

        .manager-box {
          width:
            43px;

          height:
            43px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            1px solid
            rgba(96,165,250,0.35);

          border-radius:
            11px;

          background:
            rgba(30,58,138,0.16);

          box-shadow:
            0 0 20px
            rgba(59,130,246,0.12);

          animation:
            managerPulse 2.8s
            ease-in-out infinite;
        }

        .manager-icon {
          font-size:
            18px;

          animation:
            gearRotate 5s
            linear infinite;
        }

        @keyframes gearRotate {

          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }

        }

        @keyframes managerPulse {

          0%,
          100% {
            box-shadow:
              0 0 15px
              rgba(59,130,246,0.08);
          }

          50% {
            box-shadow:
              0 0 28px
              rgba(59,130,246,0.22);
          }

        }


        /* ====================================================
           SWARM CONNECTION
        ==================================================== */

        .swarm-line {
          position:
            absolute;

          top:
            78px;

          left:
            50%;

          width:
            1px;

          height:
            42px;

          transform-origin:
            top;

          background:
            linear-gradient(
              to bottom,
              rgba(59,130,246,0.65),
              rgba(139,92,246,0.15)
            );
        }

        .swarm-line-left {
          transform:
            translateX(-50%)
            rotate(-58deg);
        }

        .swarm-line-right {
          transform:
            translateX(-50%)
            rotate(58deg);
        }


        /* ====================================================
           WORKERS
        ==================================================== */

        .swarm-worker {
          position:
            absolute;

          top:
            117px;

          display:
            flex;

          align-items:
            center;

          gap:
            7px;

          color:
            #64748b;

          font-family:
            monospace;
        }

        .worker-left {
          left:
            17%;
        }

        .worker-right {
          right:
            17%;
        }

        .worker-box {
          width:
            20px;

          height:
            20px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            1px solid
            rgba(139,92,246,0.35);

          border-radius:
            6px;

          background:
            rgba(139,92,246,0.1);
        }

        .worker-box span {
          width:
            7px;

          height:
            7px;

          border-radius:
            50%;

          background:
            #8b5cf6;

          box-shadow:
            0 0 10px
            rgba(139,92,246,0.8);

          animation:
            workerPulse 1.8s
            ease-in-out infinite;
        }

        .worker-right
        .worker-box span {
          animation-delay:
            0.6s;
        }

        .worker-name {
          display:
            block;

          color:
            #64748b;

          font-size:
            7px;
        }

        .worker-status {
          display:
            block;

          margin-top:
            2px;

          color:
            #475569;

          font-size:
            6px;
        }

        @keyframes workerPulse {

          0%,
          100% {
            transform:
              scale(0.8);

            opacity:
              0.5;
          }

          50% {
            transform:
              scale(1.2);

            opacity:
              1;
          }

        }


        /* ====================================================
           REPLICAS
        ==================================================== */

        .replica-container {
          position:
            absolute;

          bottom:
            34px;

          left:
            50%;

          display:
            flex;

          align-items:
            center;

          gap:
            5px;

          transform:
            translateX(-50%);

          font-family:
            monospace;
        }

        .replica-title {
          margin-right:
            4px;

          color:
            #475569;

          font-size:
            7px;
        }

        .replica {
          width:
            7px;

          height:
            7px;

          border:
            1px solid
            #334155;

          border-radius:
            2px;
        }

        .replica.active {
          border-color:
            #8b5cf6;

          background:
            #8b5cf6;

          box-shadow:
            0 0 8px
            rgba(139,92,246,0.55);

          animation:
            replicaPulse 1.8s
            ease-in-out infinite;
        }

        @keyframes replicaPulse {

          0%,
          100% {
            opacity:
              0.55;
          }

          50% {
            opacity:
              1;
          }

        }


        /* ====================================================
           MONITOR
        ==================================================== */

        .monitor-panel {
          position:
            absolute;

          left:
            9%;

          right:
            9%;

          top:
            49px;

          padding:
            14px;

          border:
            1px solid
            rgba(34,211,238,0.12);

          border-radius:
            10px;

          background:
            rgba(2,6,23,0.75);

          box-shadow:
            0 15px 35px
            rgba(0,0,0,0.35);

          backdrop-filter:
            blur(8px);
        }

        .monitor-row {
          margin-bottom:
            8px;
        }

        .monitor-info {
          display:
            flex;

          justify-content:
            space-between;

          margin-bottom:
            4px;

          font-family:
            monospace;

          font-size:
            7px;
        }

        .monitor-name {
          color:
            #64748b;
        }

        .monitor-value {
          color:
            #67e8f9;
        }

        .progress-track {
          width:
            100%;

          height:
            3px;

          overflow:
            hidden;

          border-radius:
            999px;

          background:
            #1e293b;
        }

        .progress-bar {
          height:
            100%;

          border-radius:
            inherit;

          animation:
            progressMove 3s
            ease-in-out infinite;
        }

        .cpu-bar {
          width:
            42%;

          background:
            linear-gradient(
              to right,
              #06b6d4,
              #22d3ee
            );
        }

        .memory-bar {
          width:
            58%;

          background:
            linear-gradient(
              to right,
              #3b82f6,
              #60a5fa
            );

          animation-delay:
            0.3s;
        }

        .disk-bar {
          width:
            36%;

          background:
            linear-gradient(
              to right,
              #8b5cf6,
              #a78bfa
            );

          animation-delay:
            0.6s;
        }

        @keyframes progressMove {

          0%,
          100% {
            opacity:
              0.65;
          }

          50% {
            opacity:
              1;
          }

        }

        .service-status {
          display:
            flex;

          align-items:
            center;

          gap:
            6px;

          margin-top:
            10px;

          padding-top:
            8px;

          border-top:
            1px solid
            rgba(30,41,59,0.8);

          color:
            #475569;

          font-family:
            monospace;

          font-size:
            7px;
        }

        .service-pulse {
          width:
            5px;

          height:
            5px;

          margin-left:
            auto;

          border-radius:
            50%;

          background:
            #22c55e;

          box-shadow:
            0 0 8px
            rgba(34,197,94,0.8);

          animation:
            statusPulse 1.5s
            infinite;
        }


        /* ====================================================
           VISUAL LABEL
        ==================================================== */

        .visual-label {
          position:
            absolute;

          left:
            14px;

          bottom:
            11px;

          display:
            flex;

          align-items:
            center;

          gap:
            6px;

          color:
            #475569;

          font-family:
            monospace;

          font-size:
            7px;

          letter-spacing:
            0.1em;
        }

        .status-dot {
          width:
            5px;

          height:
            5px;

          border-radius:
            50%;

          background:
            #22d3ee;

          box-shadow:
            0 0 8px
            rgba(34,211,238,0.7);

          animation:
            statusPulse 1.8s
            infinite;
        }

        .status-dot.purple {
          background:
            #8b5cf6;

          box-shadow:
            0 0 8px
            rgba(139,92,246,0.7);
        }

        .status-dot.green {
          background:
            #22c55e;

          box-shadow:
            0 0 8px
            rgba(34,197,94,0.7);
        }


        /* ====================================================
           GITHUB CTA
        ==================================================== */

        .github-cta {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          padding:
            11px 20px;

          border:
            1px solid
            rgba(34,211,238,0.25);

          border-radius:
            999px;

          background:
            rgba(34,211,238,0.07);

          color:
            #67e8f9;

          font-size:
            13px;

          font-weight:
            600;

          transition:
            all 0.3s ease;
        }

        .github-cta:hover {
          transform:
            translateY(-3px);

          border-color:
            rgba(34,211,238,0.55);

          background:
            rgba(34,211,238,0.13);

          box-shadow:
            0 0 30px
            rgba(34,211,238,0.1);
        }


        /* ====================================================
           MOBILE
        ==================================================== */

        @media (max-width: 640px) {

          .project-image-wrapper,
          .devops-visual {
            height:
              200px;
          }

          .project-content {
            padding:
              18px;
          }

          .project-description {
            min-height:
              auto;

            margin-bottom:
              18px;
          }

          .worker-left {
            left:
              8%;
          }

          .worker-right {
            right:
              8%;
          }

          .monitor-panel {
            left:
              6%;

            right:
              6%;
          }

          .project-title {
            font-size:
              17px;
          }

        }


        /* ====================================================
           REDUCED MOTION
        ==================================================== */

        @media (prefers-reduced-motion: reduce) {

          .project-card,
          .project-image,
          .image-bottom-line,
          .manager-icon,
          .manager-box,
          .worker-box span,
          .replica.active,
          .progress-bar,
          .devops-grid,
          .status-dot,
          .type-dot {
            animation:
              none !important;

            transition:
              none !important;
          }

        }

      `}</style>

    </section>
  );
};

export default ProjectSection;