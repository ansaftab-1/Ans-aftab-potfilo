import React, { useState } from "react";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import contactImg from "../../assets/IMG_6106.jpg";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const YOUR_EMAIL = "ansaftab68@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");

    const mailSubject = encodeURIComponent(
      subject || `Portfolio Contact from ${name}`
    );

    const mailBody = encodeURIComponent(
      `Hello Muhammad Ans,

Name: ${name}
Email: ${email}

Message:
${message}

Sent from your portfolio website.`
    );

    window.location.href =
      `mailto:${YOUR_EMAIL}?subject=${mailSubject}&body=${mailBody}`;

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden bg-[#020617] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-180px] top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

        <div className="absolute bottom-10 right-[-180px] h-[400px] w-[400px] rounded-full bg-blue-600/[0.05] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* ===================================================
            HEADING
        =================================================== */}

        <div className="mb-12 text-center">

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400 sm:w-12" />

            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-400">
              Contact
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400 sm:w-12" />

          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project, opportunity or just want to talk about
            technology? Feel free to reach out.
          </p>

        </div>

        {/* ===================================================
            MAIN CONTACT CARD
        =================================================== */}

        <div className="contact-main-card grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-800/80 bg-[#050b18]/90 shadow-2xl backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="relative overflow-hidden border-b border-slate-800/80 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">

            {/* Background Glow */}

            <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.07] blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-blue-500/[0.07] blur-3xl" />

            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="relative z-10">

              <div className="contact-photo-card group">

                {/* Image */}

                <img
                  src={contactImg}
                  alt="Muhammad Ans - Full Stack Developer"
                  className="contact-photo"
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />

                {/* Top Badge */}

                <div className="absolute left-4 top-4">

                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#020617]/75 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-cyan-300 backdrop-blur-md">

                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />

                    DEVOPS

                  </span>

                </div>

                {/* Bottom Text */}

                <div className="absolute bottom-4 left-4 right-4">

                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300">
                    Building • Learning • Deploying
                  </p>

                </div>

                {/* Animated Border */}

                <div className="absolute inset-0 rounded-2xl border border-white/[0.06] transition-all duration-500 group-hover:border-cyan-400/30" />

              </div>

            </div>

            {/* =================================================
                PROFILE DETAILS
            ================================================= */}

            <div className="relative z-10 mt-7">

              <h3 className="text-2xl font-semibold text-white">
                Muhammad Ans
              </h3>

              <p className="mt-1 font-mono text-xs tracking-wide text-cyan-400">
                Full Stack Developer
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Passionate about DevOps, cloud infrastructure,
                containerization and modern web technologies.
              </p>

            </div>

            {/* =================================================
                CONTACT INFO
            ================================================= */}

            <div className="relative z-10 mt-7 space-y-3">

              {/* Email */}

              <a
                href={`mailto:${YOUR_EMAIL}`}
                className="contact-info-item group"
              >

                <div className="contact-info-icon">
                  <Mail size={16} />
                </div>

                <div className="min-w-0">

                  <p className="text-[9px] uppercase tracking-wider text-slate-600">
                    Email
                  </p>

                  <p className="mt-0.5 truncate text-xs text-slate-400 transition-colors group-hover:text-cyan-300">
                    {YOUR_EMAIL}
                  </p>

                </div>

                <ArrowUpRight
                  size={14}
                  className="ml-auto text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                />

              </a>

              {/* Location */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <MapPin size={16} />
                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-wider text-slate-600">
                    Location
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    Lahore, Pakistan
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="relative z-10 mt-7 flex gap-3">

              <a
                href="https://www.linkedin.com/in/muhammad-ans-365715361/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-button"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="https://github.com/ansaftab-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-button"
              >
                <Github size={17} />
              </a>

            </div>

          </div>

          {/* =================================================
              RIGHT SIDE - FORM
          ================================================= */}

          <div className="p-6 sm:p-8 lg:p-10">

            <div className="mb-7">

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                  Send a message
                </span>

              </div>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Start a conversation
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill out the form and send me a message directly.
              </p>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name + Email */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label className="contact-label">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="contact-input"
                  />

                </div>

                <div>

                  <label className="contact-label">
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="contact-input"
                  />

                </div>

              </div>

              {/* Subject */}

              <div>

                <label className="contact-label">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project / Opportunity / Query"
                  className="contact-input"
                />

              </div>

              {/* Message */}

              <div>

                <label className="contact-label">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="contact-input resize-none"
                />

              </div>

              {/* =================================================
                  SEND BUTTON
              ================================================= */}

              <button
                type="submit"
                className="send-button group"
              >

                {sent ? (
                  <>
                    <CheckCircle2 size={17} />
                    Opening Mail...
                  </>
                ) : (
                  <>
                    Send Message

                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

              <p className="text-center text-[10px] leading-5 text-slate-600">
                Clicking send will open your email application with
                the message prepared.
              </p>

            </form>

          </div>

        </div>

      </div>

      {/* =====================================================
          CUSTOM CSS
      ===================================================== */}

      <style>{`

        /* ==================================================
           CONTACT CARD
        ================================================== */

        .contact-main-card {
          transition:
            border-color 0.5s ease,
            box-shadow 0.5s ease;
        }

        .contact-main-card:hover {
          border-color: rgba(34, 211, 238, 0.15);
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.35),
            0 0 50px rgba(34, 211, 238, 0.03);
        }


        /* ==================================================
           PROFILE PHOTO
        ================================================== */

        .contact-photo-card {
          position: relative;
          height: 250px;
          overflow: hidden;
          border-radius: 16px;
          background: #020617;
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.35),
            0 0 30px rgba(34, 211, 238, 0.04);
          transform: translateY(0);
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .contact-photo-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.45),
            0 0 35px rgba(34, 211, 238, 0.08);
        }

        .contact-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition:
            transform 0.8s
              cubic-bezier(0.2, 0.8, 0.2, 1),
            filter 0.5s ease;
        }

        .contact-photo-card:hover .contact-photo {
          transform: scale(1.045);
          filter: brightness(1.05);
        }


        /* ==================================================
           CONTACT INFO
        ================================================== */

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 11px;
          width: 100%;
          border: 1px solid rgba(51, 65, 85, 0.55);
          border-radius: 10px;
          padding: 10px 12px;
          background: rgba(15, 23, 42, 0.35);
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .contact-info-item:hover {
          transform: translateX(3px);
          border-color: rgba(34, 211, 238, 0.2);
          background: rgba(34, 211, 238, 0.025);
        }

        .contact-info-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 31px;
          height: 31px;
          flex-shrink: 0;
          border-radius: 8px;
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.06);
        }


        /* ==================================================
           SOCIAL
        ================================================== */

        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(51, 65, 85, 0.8);
          border-radius: 10px;
          color: #64748b;
          background: rgba(15, 23, 42, 0.45);
          transition: all 0.3s ease;
        }

        .social-button:hover {
          color: #22d3ee;
          border-color: rgba(34, 211, 238, 0.35);
          background: rgba(34, 211, 238, 0.06);
          transform: translateY(-3px);
          box-shadow:
            0 8px 20px rgba(34, 211, 238, 0.08);
        }


        /* ==================================================
           FORM LABEL
        ================================================== */

        .contact-label {
          display: block;
          margin-bottom: 7px;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #64748b;
        }


        /* ==================================================
           INPUT
        ================================================== */

        .contact-input {
          width: 100%;
          border: 1px solid rgba(51, 65, 85, 0.75);
          border-radius: 10px;
          outline: none;
          padding: 11px 13px;
          font-size: 13px;
          color: #e2e8f0;
          background: rgba(2, 6, 23, 0.6);
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .contact-input::placeholder {
          color: #334155;
        }

        .contact-input:focus {
          border-color: rgba(34, 211, 238, 0.45);
          background: rgba(2, 6, 23, 0.85);
          box-shadow:
            0 0 0 3px rgba(34, 211, 238, 0.05),
            0 0 20px rgba(34, 211, 238, 0.04);
        }


        /* ==================================================
           SEND BUTTON
        ================================================== */

        .send-button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 1px solid rgba(34, 211, 238, 0.3);
          border-radius: 10px;
          padding: 12px 18px;
          font-size: 13px;
          font-weight: 600;
          color: #020617;
          background: linear-gradient(
            90deg,
            #22d3ee,
            #60a5fa
          );
          box-shadow:
            0 0 25px rgba(34, 211, 238, 0.08);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            filter 0.3s ease;
        }

        .send-button:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
          box-shadow:
            0 10px 30px rgba(34, 211, 238, 0.12),
            0 0 25px rgba(34, 211, 238, 0.08);
        }

        .send-button:active {
          transform: translateY(0);
        }


        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 640px) {

          .contact-photo-card {
            height: 225px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .contact-photo-card,
          .contact-photo,
          .social-button,
          .contact-info-item,
          .send-button {
            transition: none !important;
          }

        }

      `}</style>
    </section>
  );
};

export default Contact;