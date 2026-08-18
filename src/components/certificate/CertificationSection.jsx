import React, { useState } from "react";
import {
  Award,
  CalendarDays,
  Hash,
  Maximize2,
  X,
  ShieldCheck,
} from "lucide-react";

import claude101Certificate from "../../assets/Claude101.png";
import aiFluencyCertificate from "../../assets/AIFluency.png";

const certificates = [
  {
    id: 1,
    title: "Claude 101",
    issuer: "Anthropic",
    date: "Completed 2026",
    certificateCode: "ANTH-C101",
    image: claude101Certificate,
    description:
      "Certificate of Completion for Claude 101 awarded to Muhammad Ans by Anthropic, covering prompt engineering, AI development, and Claude model integration.",
  },
  {
    id: 2,
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "Completed 2026",
    certificateCode: "ANTH-AIF-01",
    image: aiFluencyCertificate,
    description:
      "Certificate of Completion for AI Fluency: Framework & Foundations awarded to Muhammad Ans by Anthropic, covering AI frameworks, LLM capabilities, and foundational AI principles.",
  },
];

const CertificationSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#020617] py-16 sm:py-20 lg:py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-cyan-500/[0.04] blur-[110px]" />

        <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-600/[0.05] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADING ================= */}

        <div className="mb-9 text-center sm:mb-10">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400 sm:w-10" />

            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-400">
              Certifications
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400 sm:w-10" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </div>

        {/* ================= CARDS ================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onPreview={() => setSelectedCertificate(certificate)}
            />
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}

      {/* ================= CSS ================= */}

      <style>{`
        .certificate-card {
          position: relative;
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.45s ease,
            box-shadow 0.45s ease;
        }

        .certificate-card:hover {
          transform: translateY(-6px);
          border-color: rgba(34, 211, 238, 0.28);
          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.4),
            0 0 28px rgba(34, 211, 238, 0.06);
        }

        .certificate-image {
          transition:
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.5s ease;
        }

        .certificate-card:hover .certificate-image {
          transform: scale(1.025);
          filter: brightness(1.04) contrast(1.02);
        }

        .certificate-scan-line {
          position: absolute;
          left: 0;
          top: -2px;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(34, 211, 238, 0.8),
            transparent
          );
          opacity: 0;
          pointer-events: none;
        }

        .certificate-card:hover .certificate-scan-line {
          opacity: 1;
          animation: certificateScan 2.5s linear infinite;
        }

        @keyframes certificateScan {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(280px);
          }
        }

        .certificate-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          opacity: 0.5;
          pointer-events: none;
        }

        .certificate-corner.top-left {
          left: 9px;
          top: 9px;
          border-left: 1px solid rgba(34, 211, 238, 0.5);
          border-top: 1px solid rgba(34, 211, 238, 0.5);
        }

        .certificate-corner.top-right {
          right: 9px;
          top: 9px;
          border-right: 1px solid rgba(34, 211, 238, 0.5);
          border-top: 1px solid rgba(34, 211, 238, 0.5);
        }

        .certificate-corner.bottom-left {
          left: 9px;
          bottom: 9px;
          border-left: 1px solid rgba(34, 211, 238, 0.5);
          border-bottom: 1px solid rgba(34, 211, 238, 0.5);
        }

        .certificate-corner.bottom-right {
          right: 9px;
          bottom: 9px;
          border-right: 1px solid rgba(34, 211, 238, 0.5);
          border-bottom: 1px solid rgba(34, 211, 238, 0.5);
        }

        .certificate-modal {
          animation: modalFade 0.2s ease-out;
        }

        @keyframes modalFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .certificate-modal-content {
          animation: modalScale 0.25s ease-out;
        }

        @keyframes modalScale {
          from {
            opacity: 0;
            transform: scale(0.97) translateY(8px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 640px) {
          .certificate-card:hover {
            transform: translateY(-4px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .certificate-card,
          .certificate-image {
            transition: none !important;
          }

          .certificate-scan-line {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ============================================================
   CERTIFICATE CARD
============================================================ */

const CertificateCard = ({ certificate, onPreview }) => {
  return (
    <article
      className="
        certificate-card
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-800/80
        bg-[#050b18]/95
        shadow-lg
        backdrop-blur-xl
      "
    >
      {/* ================= IMAGE ================= */}

      <div
        className="
          relative
          h-44
          cursor-pointer
          overflow-hidden
          border-b
          border-slate-800/80
          bg-[#020617]
          sm:h-48
        "
        onClick={onPreview}
      >
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          className="certificate-image h-full w-full object-contain p-2.5 sm:p-3"
        />

        {/* Dark Gradient */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />

        {/* Scan */}

        <div className="certificate-scan-line" />

        {/* Corners */}

        <span className="certificate-corner top-left" />
        <span className="certificate-corner top-right" />
        <span className="certificate-corner bottom-left" />
        <span className="certificate-corner bottom-right" />

        {/* Badge */}

        <div className="absolute left-3 top-3 rounded-full border border-cyan-400/20 bg-[#020617]/85 px-2.5 py-1 font-mono text-[8px] tracking-[0.14em] text-cyan-300 backdrop-blur-md">
          CERTIFICATE
        </div>

        {/* Hover Preview */}

        <div className="absolute inset-0 flex items-center justify-center bg-[#020617]/55 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#020617]/90 px-3.5 py-2 text-[11px] font-medium text-cyan-300">
            <Maximize2 size={13} />
            View Certificate
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-4 sm:p-5">

        {/* Title */}

        <div className="mb-4 flex items-start gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.05]">
            <Award
              size={18}
              strokeWidth={1.6}
              className="text-cyan-300 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="min-w-0">

            <h3 className="text-base font-semibold leading-5 text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg">
              {certificate.title}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {certificate.issuer}
            </p>

          </div>
        </div>

        {/* Description */}

        <p className="mb-4 min-h-[42px] text-xs leading-5 text-slate-400 sm:text-sm">
          {certificate.description}
        </p>

        {/* Details */}

        <div className="grid grid-cols-2 gap-3 border-t border-slate-800/70 pt-3">

          {/* Date */}

          <div className="flex items-center gap-2">

            <CalendarDays
              size={14}
              className="shrink-0 text-cyan-400/70"
            />

            <div>

              <p className="font-mono text-[7px] uppercase tracking-wider text-slate-600">
                Issued
              </p>

              <p className="mt-0.5 text-[11px] text-slate-400">
                {certificate.date}
              </p>

            </div>
          </div>

          {/* Code */}

          <div className="flex items-center gap-2">

            <Hash
              size={14}
              className="shrink-0 text-blue-400/70"
            />

            <div className="min-w-0">

              <p className="font-mono text-[7px] uppercase tracking-wider text-slate-600">
                Certificate Code
              </p>

              <p className="mt-0.5 truncate font-mono text-[11px] text-slate-400">
                {certificate.certificateCode}
              </p>

            </div>
          </div>
        </div>

        {/* View Button */}

        <div className="mt-4 border-t border-slate-800/70 pt-3">

          <button
            type="button"
            onClick={onPreview}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-cyan-400/20
              bg-cyan-400/[0.04]
              py-2
              text-[11px]
              font-medium
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-400/[0.08]
            "
          >
            <Maximize2 size={13} />
            View Certificate
          </button>

        </div>
      </div>
    </article>
  );
};

/* ============================================================
   MODAL
============================================================ */

const CertificateModal = ({ certificate, onClose }) => {
  return (
    <div
      className="
        certificate-modal
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/85
        p-4
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        className="
          certificate-modal-content
          relative
          max-h-[92vh]
          w-full
          max-w-4xl
          overflow-hidden
          rounded-2xl
          border
          border-cyan-400/20
          bg-[#020617]
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 bg-[#050b18] px-4 py-3">

          <div className="flex items-center gap-3">

            <ShieldCheck
              size={17}
              className="text-cyan-400"
            />

            <div>

              <p className="text-sm font-medium text-white">
                {certificate.title}
              </p>

              <p className="font-mono text-[8px] uppercase tracking-wider text-slate-600">
                Certificate Preview
              </p>

            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition hover:border-red-400/30 hover:text-red-300"
          >
            <X size={17} />
          </button>
        </div>

        {/* Image */}

        <div className="max-h-[calc(92vh-60px)] overflow-auto bg-[#020617] p-3 sm:p-5">

          <img
            src={certificate.image}
            alt={`${certificate.title} certificate preview`}
            className="mx-auto h-auto max-h-[calc(92vh-100px)] w-auto max-w-full rounded-lg object-contain"
          />

        </div>
      </div>
    </div>
  );
};

export default CertificationSection;