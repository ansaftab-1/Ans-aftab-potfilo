import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Send,
  Code2,
  Cloud,
  Container,
  Activity,
} from "lucide-react";

import heroVideo from "../../assets/devops-globe.mp4";

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
    <span className="role-blue inline-flex items-center min-h-[1.4em]">
      <span>{currentText}</span>
      <span className="ml-1.5 inline-block h-[0.85em] w-[3px] animate-pulse bg-blue-400 align-middle"></span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero-section">

      {/* ================= BACKGROUND ================= */}

      <div className="hero-grid"></div>

      <div className="glow glow-blue"></div>
      <div className="glow glow-purple"></div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="hero-container">

        {/* ==================================================
            LEFT SIDE - TEXT
        ================================================== */}

        <div className="hero-content">

          <div className="available-badge">
            <span className="status-dot"></span>
            Currently Working as Full Stack Developer 
          </div>

          <p className="hello-text">
            Hi, I'm
          </p>

          <h1 className="hero-title">
            Muhammad <span>Ans</span>
          </h1>

          <div className="hero-role">
            <TypewriterRole />
          </div>

          <p className="hero-description">
            Learning and building with DevOps tools & technologies
            to automate, deploy and monitor scalable applications.
            Passionate about cloud infrastructure, containers,
            CI/CD and reliable deployments.
          </p>

          {/* ================= BUTTONS ================= */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              <span>View My Work</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="secondary-button"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              <Send size={17} />
              <span>Contact Me</span>
            </a>

          </div>

          {/* ================= SOCIAL ================= */}

          <div className="social-section">

            <span className="social-label">
              Find me on
            </span>

            <a
              href="https://github.com/ansaftab-1"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-ans-365715361/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:ansaftab68@gmail.com"
              className="social-icon"
            >
              <Mail size={18} />
            </a>

          </div>

          {/* ================= QUICK SKILLS ================= */}

          <div className="quick-skills">

            <div>
              <Code2 size={15} />
              Node.js
            </div>

            <div>
              <Cloud size={15} />
              Azure
            </div>

            <div>
              <Container size={15} />
              Docker
            </div>

            <div>
              <Activity size={15} />
              CI/CD
            </div>

          </div>

        </div>


        {/* ==================================================
            RIGHT SIDE - VIDEO
        ================================================== */}

        <div className="hero-video-section">

          <div className="video-glow"></div>

          <div className="video-frame">

            {/* ================= TOP BAR ================= */}

            <div className="video-topbar">

              <div className="window-dots">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="video-title">

                <span className="terminal-icon">
                  &gt;_
                </span>

                devops@portfolio:~

              </div>

              <div className="live-status">

                <span></span>
                LIVE

              </div>

            </div>


            {/* ================= VIDEO ================= */}

            <div className="video-wrapper">

              <video
                className="hero-video"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />

              <div className="video-overlay"></div>

            </div>


            {/* ================= VIDEO BOTTOM ================= */}

            <div className="video-bottom">

              <div className="video-info">

                <span className="video-label">
                  DEVOPS
                </span>

                <span className="video-subtitle">
                  Automate • Deploy • Monitor
                </span>

              </div>

              <div className="infinity-symbol">
                ∞
              </div>

            </div>

          </div>


          {/* ================= FLOATING CARDS ================= */}

          <div className="floating-card card-top">

            <Code2 size={18} />

            <div>
              <strong>CODE</strong>
              <small>Build & Commit</small>
            </div>

          </div>


          <div className="floating-card card-bottom">

            <Activity size={18} />

            <div>
              <strong>MONITOR</strong>
              <small>Observe & Improve</small>
            </div>

          </div>


          {/* ================= ORBITS ================= */}

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

        </div>

      </div>


      {/* ================= BOTTOM LINE ================= */}

      <div className="bottom-line"></div>


      {/* ================= CSS ================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }


        /* ==================================================
           HERO
        ================================================== */

        .hero-section {

          position: relative;

          min-height: 100vh;

          width: 100%;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 72% 45%,
              rgba(20, 80, 180, 0.14),
              transparent 32%
            ),
            radial-gradient(
              circle at 20% 60%,
              rgba(70, 30, 150, 0.10),
              transparent 32%
            ),
            #020713;

          color: #ffffff;
        }


        /* ==================================================
           GRID BACKGROUND
        ================================================== */

        .hero-grid {

          position: absolute;

          inset: 0;

          opacity: 0.55;

          background-image:
            linear-gradient(
              rgba(45, 120, 220, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(45, 120, 220, 0.055) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          mask-image:
            linear-gradient(
              to bottom,
              black 30%,
              transparent 100%
            );

          pointer-events: none;
        }


        /* ==================================================
           GLOW
        ================================================== */

        .glow {

          position: absolute;

          border-radius: 50%;

          filter: blur(100px);

          pointer-events: none;
        }


        .glow-blue {

          width: 420px;

          height: 420px;

          left: -150px;

          top: 30%;

          background:
            rgba(0, 115, 255, 0.13);
        }


        .glow-purple {

          width: 500px;

          height: 500px;

          right: -170px;

          top: 20%;

          background:
            rgba(125, 40, 255, 0.14);
        }


        /* ==================================================
           MAIN CONTAINER
        ================================================== */

        .hero-container {

          position: relative;

          z-index: 5;

          width: 100%;

          max-width: 1450px;

          min-height: 100vh;

          margin: 0 auto;

          padding:
            120px 35px
            70px;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap: 70px;

          align-items: center;
        }


        /* ==================================================
           LEFT CONTENT
        ================================================== */

        .hero-content {

          max-width: 650px;

          position: relative;

          z-index: 10;
        }


        /* ==================================================
           AVAILABLE BADGE
        ================================================== */

        .available-badge {

          display: inline-flex;

          align-items: center;

          gap: 9px;

          padding:
            8px 13px;

          margin-bottom: 22px;

          border:
            1px solid
            rgba(50, 140, 255, 0.28);

          border-radius: 30px;

          background:
            rgba(8, 30, 65, 0.48);

          color:
            #9fc8ff;

          font-size: 12px;

          backdrop-filter:
            blur(12px);
        }


        .status-dot {

          width: 8px;

          height: 8px;

          border-radius: 50%;

          background:
            #22c55e;

          box-shadow:
            0 0 12px
            rgba(34, 197, 94, 0.8);

          animation:
            pulse 2s infinite;
        }


        /* ==================================================
           TITLE
        ================================================== */

        .hello-text {

          margin:
            0 0 7px;

          font-size: 22px;

          color:
            #e5e7eb;
        }


        .hero-title {

          margin: 0;

          font-size:
            clamp(48px, 5vw, 76px);

          line-height: 1.02;

          letter-spacing:
            -3px;

          font-weight:
            800;
        }


        .hero-title span {

          background:
            linear-gradient(
              90deg,
              #00a2ff,
              #287dff,
              #8b35f5
            );

          background-clip: text;

          -webkit-background-clip: text;

          color: transparent;
        }


        /* ==================================================
           ROLE
        ================================================== */

        .hero-role {

          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 9px;

          margin-top: 20px;

          font-size: 17px;

          font-weight: 600;
        }


        .role-blue {

          color:
            #22aaff;
        }


        .role-purple {

          background:
            linear-gradient(
              90deg,
              #38bdf8,
              #a855f7
            );

          color: transparent;

          background-clip: text;

          -webkit-background-clip: text;
        }


        .role-separator {

          color:
            #64748b;
        }


        /* ==================================================
           DESCRIPTION
        ================================================== */

        .hero-description {

          max-width: 580px;

          margin:
            24px 0 0;

          color:
            #aeb9ca;

          font-size: 16px;

          line-height: 1.8;
        }


        /* ==================================================
           BUTTONS
        ================================================== */

        .hero-buttons {

          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 11px;

          margin-top: 30px;
        }


        .primary-button,
        .secondary-button {

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          min-height: 45px;

          padding:
            0 17px;

          border-radius: 7px;

          text-decoration: none;

          font-size: 13px;

          transition:
            0.25s ease;
        }


        .primary-button {

          color: white;

          background:
            linear-gradient(
              90deg,
              #087fff,
              #126de8
            );

          box-shadow:
            0 0 25px
            rgba(0, 120, 255, 0.22);
        }


        .primary-button:hover {

          transform:
            translateY(-3px);

          box-shadow:
            0 0 35px
            rgba(0, 120, 255, 0.42);
        }


        .secondary-button {

          color:
            #d8e4f5;

          border:
            1px solid
            #334155;

          background:
            rgba(3, 10, 22, 0.45);
        }


        .secondary-button:hover {

          transform:
            translateY(-3px);

          border-color:
            #2196ff;

          color:
            #38bdf8;
        }


        /* ==================================================
           SOCIAL
        ================================================== */

        .social-section {

          display: flex;

          align-items: center;

          gap: 10px;

          margin-top: 28px;
        }


        .social-label {

          color:
            #8996a9;

          font-size: 13px;

          margin-right: 4px;
        }


        .social-icon {

          width: 37px;

          height: 37px;

          display: flex;

          align-items: center;

          justify-content: center;

          color:
            #d9e6f7;

          border:
            1px solid
            #29384d;

          border-radius: 7px;

          transition:
            0.25s ease;
        }


        .social-icon:hover {

          color:
            #35aaff;

          border-color:
            #35aaff;

          transform:
            translateY(-3px);

          box-shadow:
            0 0 15px
            rgba(30, 150, 255, 0.15);
        }


        /* ==================================================
           QUICK SKILLS
        ================================================== */

        .quick-skills {

          display: flex;

          flex-wrap: wrap;

          gap: 8px;

          margin-top: 28px;
        }


        .quick-skills div {

          display: flex;

          align-items: center;

          gap: 6px;

          padding:
            7px 10px;

          color:
            #8fa5c0;

          border:
            1px solid
            rgba(55, 80, 110, 0.45);

          background:
            rgba(8, 18, 35, 0.45);

          border-radius: 6px;

          font-size: 11px;
        }


        .quick-skills svg {

          color:
            #299cff;
        }


        /* ==================================================
           VIDEO SECTION
        ================================================== */

        .hero-video-section {

          position: relative;

          min-height: 570px;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        /* ==================================================
           VIDEO GLOW
        ================================================== */

        .video-glow {

          position: absolute;

          width: 90%;

          height: 80%;

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(0, 120, 255, 0.25),
              rgba(110, 40, 255, 0.13),
              transparent 70%
            );

          filter:
            blur(45px);

          animation:
            videoGlow 4s ease-in-out infinite;
        }


        /* ==================================================
           VIDEO FRAME
        ================================================== */

        .video-frame {

          position: relative;

          z-index: 10;

          width: 100%;

          max-width: 650px;

          border:
            1px solid
            rgba(65, 135, 230, 0.38);

          border-radius: 18px;

          background:
            rgba(3, 11, 25, 0.85);

          padding: 7px;

          box-shadow:
            0 25px 80px
            rgba(0, 0, 0, 0.55),
            0 0 45px
            rgba(0, 100, 255, 0.12);

          backdrop-filter:
            blur(15px);
        }


        /* ==================================================
           VIDEO TOP BAR
        ================================================== */

        .video-topbar {

          height: 42px;

          display: flex;

          align-items: center;

          padding:
            0 12px;

          border-bottom:
            1px solid
            rgba(70, 100, 140, 0.18);

          gap: 12px;
        }


        .window-dots {

          display: flex;

          gap: 5px;
        }


        .window-dots span {

          width: 7px;

          height: 7px;

          border-radius: 50%;

          background:
            #64748b;
        }


        .window-dots span:first-child {
          background: #ff5f57;
        }


        .window-dots span:nth-child(2) {
          background: #ffbd2e;
        }


        .window-dots span:nth-child(3) {
          background: #28c840;
        }


        .video-title {

          flex: 1;

          color:
            #73859e;

          font-size: 10px;

          text-align: center;

          font-family:
            monospace;
        }


        .terminal-icon {

          color:
            #28a9ff;
        }


        .live-status {

          display: flex;

          align-items: center;

          gap: 5px;

          color:
            #6e829c;

          font-size: 9px;
        }


        .live-status span {

          width: 6px;

          height: 6px;

          border-radius: 50%;

          background:
            #22c55e;

          box-shadow:
            0 0 8px
            #22c55e;
        }


        /* ==================================================
           VIDEO
        ================================================== */

        .video-wrapper {

          position: relative;

          width: 100%;

          aspect-ratio:
            16 / 10;

          overflow: hidden;

          border-radius: 12px;
        }


        .hero-video {

          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          background:
            #020617;
        }


        .video-overlay {

          position: absolute;

          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              135deg,
              rgba(0, 110, 255, 0.08),
              transparent 40%,
              rgba(125, 40, 255, 0.10)
            );

          mix-blend-mode:
            screen;
        }


        /* ==================================================
           VIDEO BOTTOM
        ================================================== */

        .video-bottom {

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            12px 15px 9px;
        }


        .video-info {

          display: flex;

          align-items: center;

          gap: 9px;
        }


        .video-label {

          color:
            #35aaff;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 1px;
        }


        .video-subtitle {

          color:
            #64748b;

          font-size: 9px;
        }


        .infinity-symbol {

          font-size: 27px;

          line-height: 1;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #00a2ff,
              #8b35ff
            );

          background-clip: text;

          -webkit-background-clip: text;

          color: transparent;
        }


        /* ==================================================
           FLOATING CARDS
        ================================================== */

        .floating-card {

          position: absolute;

          z-index: 20;

          display: flex;

          align-items: center;

          gap: 9px;

          padding:
            10px 13px;

          border:
            1px solid
            rgba(60, 125, 210, 0.35);

          border-radius: 10px;

          background:
            rgba(4, 14, 31, 0.90);

          backdrop-filter:
            blur(12px);

          box-shadow:
            0 12px 30px
            rgba(0,0,0,.35);

          color:
            #36a9ff;
        }


        .floating-card strong {

          display: block;

          color:
            #e4edf8;

          font-size: 10px;
        }


        .floating-card small {

          display: block;

          margin-top: 2px;

          color:
            #718096;

          font-size: 8px;
        }


        .card-top {

          top: 12%;

          left: -5%;

          animation:
            floatCard 4s ease-in-out infinite;
        }


        .card-bottom {

          right: -4%;

          bottom: 12%;

          color:
            #a855f7;

          animation:
            floatCard 4s ease-in-out infinite reverse;
        }


        /* ==================================================
           ORBITS
        ================================================== */

        .orbit {

          position: absolute;

          z-index: 1;

          border-radius: 50%;

          border:
            1px solid
            rgba(50, 110, 220, 0.12);

          pointer-events: none;
        }


        .orbit-one {

          width: 570px;

          height: 570px;

          animation:
            orbitRotate 18s linear infinite;
        }


        .orbit-two {

          width: 440px;

          height: 440px;

          border-color:
            rgba(145, 65, 255, 0.11);

          animation:
            orbitRotate 12s linear infinite reverse;
        }


        /* ==================================================
           BOTTOM LINE
        ================================================== */

        .bottom-line {

          position: absolute;

          bottom: 0;

          left: 0;

          right: 0;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #087cff,
              #8b35ff,
              transparent
            );

          box-shadow:
            0 0 20px
            rgba(0, 120, 255, 0.4);
        }


        /* ==================================================
           ANIMATIONS
        ================================================== */

        @keyframes pulse {

          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: .45;
          }
        }


        @keyframes videoGlow {

          0%,
          100% {
            transform:
              scale(.96);

            opacity: .7;
          }

          50% {
            transform:
              scale(1.04);

            opacity: 1;
          }
        }


        @keyframes floatCard {

          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-9px);
          }
        }


        @keyframes orbitRotate {

          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }
        }


        /* ==================================================
           TABLET
        ================================================== */

        @media (max-width: 1100px) {

          .hero-container {

            grid-template-columns:
              1fr 0.9fr;

            gap: 35px;

            padding:
              105px 25px
              60px;
          }


          .hero-title {

            font-size:
              clamp(44px, 5vw, 60px);
          }


          .hero-role {

            font-size: 15px;
          }


          .hero-description {

            font-size: 14px;
          }


          .hero-buttons {

            gap: 8px;
          }


          .secondary-button,
          .primary-button {

            padding:
              0 13px;
          }


          .hero-video-section {

            min-height: 470px;
          }


          .card-top {

            left: -2%;
          }


          .card-bottom {

            right: -2%;
          }
        }


        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 800px) {

          .hero-container {

            grid-template-columns:
              1fr;

            min-height: auto;

            padding:
              100px 20px
              60px;

            gap: 55px;
          }


          .hero-content {

            max-width: 100%;

            text-align: center;
          }


          .available-badge {

            margin-left: auto;

            margin-right: auto;
          }


          .hero-title {

            font-size:
              clamp(42px, 12vw, 60px);

            letter-spacing:
              -2px;
          }


          .hero-role {

            justify-content: center;

            font-size: 15px;
          }


          .hero-description {

            margin-left: auto;

            margin-right: auto;

            max-width: 600px;
          }


          .hero-buttons {

            justify-content: center;
          }


          .social-section {

            justify-content: center;
          }


          .quick-skills {

            justify-content: center;
          }


          .hero-video-section {

            min-height:
              auto;

            width: 100%;

            padding:
              10px 0 20px;
          }


          .video-frame {

            max-width:
              100%;
          }


          .card-top {

            left: 0;

            top: 4%;
          }


          .card-bottom {

            right: 0;

            bottom: 4%;
          }


          .orbit-one {

            width: 95%;

            height: 95%;
          }


          .orbit-two {

            width: 75%;

            height: 75%;
          }
        }


        /* ==================================================
           SMALL MOBILE
        ================================================== */

        @media (max-width: 500px) {

          .hero-container {

            padding-left: 14px;

            padding-right: 14px;
          }


          .hello-text {

            font-size: 18px;
          }


          .hero-title {

            font-size: 42px;
          }


          .hero-role {

            gap: 6px;

            font-size: 13px;
          }


          .hero-description {

            font-size: 13px;

            line-height: 1.7;
          }


          .hero-buttons {

            flex-direction: column;

            width: 100%;
          }


          .primary-button,
          .secondary-button {

            width: 100%;

            max-width: 300px;
          }


          .quick-skills {

            gap: 5px;
          }


          .quick-skills div {

            font-size: 9px;

            padding:
              6px 8px;
          }


          .video-topbar {

            height: 36px;
          }


          .video-bottom {

            padding:
              9px 10px;
          }


          .video-subtitle {

            display: none;
          }


          .floating-card {

            transform:
              scale(.82);
          }


          .card-top {

            left: -10px;
          }


          .card-bottom {

            right: -10px;
          }
        }

      `}</style>

    </section>
  );
};

export default Hero;