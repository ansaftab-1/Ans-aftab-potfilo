import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Sun,
  Download,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      <nav
        className="
          border-b
          border-white/[0.08]
          bg-[#020712]/95
          backdrop-blur-md
        "
      >

        {/* ================= DESKTOP / MOBILE BAR ================= */}

        <div
          className="
            flex
            h-[54px]
            w-full
            items-center
            px-4
            sm:px-6
            lg:px-9
          "
        >

          {/* ================= LOGO ================= */}

          <div className="flex min-w-0 flex-1 items-center lg:flex-none lg:w-[255px]">

            {/* Code Logo */}

            <div className="mr-3 flex items-center sm:mr-[14px]">

              <span
                className="
                  text-[23px]
                  font-bold
                  leading-none
                  tracking-[-3px]
                  text-[#1683ff]
                  drop-shadow-[0_0_7px_rgba(22,131,255,0.35)]
                  sm:text-[25px]
                "
              >
                {"</>"}
              </span>

            </div>


            {/* Name */}

            <span
              className="
                truncate
                whitespace-nowrap
                text-[14px]
                font-semibold
                tracking-[-0.2px]
                text-white
                sm:text-[16px]
              "
            >
              Muhammad Ans
            </span>

          </div>


          {/* ================= DESKTOP NAVIGATION ================= */}

          <div
            className="
              hidden
              h-full
              flex-1
              items-center
              justify-center
              lg:flex
            "
          >

            <div className="flex h-full items-center gap-[20px] xl:gap-[31px]">

              {navItems.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative
                    flex
                    h-full
                    items-center
                    whitespace-nowrap
                    text-[12px]
                    font-medium
                    transition-all
                    duration-200
                    xl:text-[13px]

                    ${
                      item.active
                        ? "text-[#258cff]"
                        : "text-[#f1f3f7] hover:text-[#258cff]"
                    }
                  `}
                >

                  {item.name}

                  {/* Active underline */}

                  {item.active && (
                    <span
                      className="
                        absolute
                        bottom-[-1px]
                        left-0
                        h-[2px]
                        w-full
                        bg-[#2196ff]
                        shadow-[0_0_8px_rgba(33,150,243,0.8)]
                      "
                    />
                  )}

                </a>

              ))}

            </div>

          </div>


          {/* ================= DESKTOP RIGHT SIDE ================= */}

          <div
            className="
              hidden
              min-w-0
              items-center
              justify-end
              gap-[9px]
              lg:flex
              lg:w-[295px]
            "
          >

            {/* Github */}

            <a
              href="https://github.com/ansaftab-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-[30px]
                w-[30px]
                shrink-0
                items-center
                justify-center
                rounded-[6px]
                border
                border-white/[0.10]
                bg-white/[0.015]
                text-white
                transition-all
                duration-200
                hover:border-blue-500/40
                hover:bg-blue-500/[0.08]
                hover:text-blue-400
              "
            >
              <Github size={15} strokeWidth={1.8} />
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/muhammad-ans-365715361/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-[30px]
                w-[30px]
                shrink-0
                items-center
                justify-center
                rounded-[6px]
                border
                border-white/[0.10]
                bg-white/[0.015]
                text-[#3295e9]
                transition-all
                duration-200
                hover:border-blue-500/40
                hover:bg-blue-500/[0.08]
              "
            >
              <Linkedin size={15} strokeWidth={1.9} />
            </a>


            {/* Theme */}

            <button
              type="button"
              aria-label="Toggle theme"
              className="
                flex
                h-[30px]
                w-[30px]
                shrink-0
                items-center
                justify-center
                rounded-[6px]
                border
                border-white/[0.10]
                bg-white/[0.015]
                text-gray-300
                transition-all
                duration-200
                hover:border-blue-500/40
                hover:bg-blue-500/[0.08]
                hover:text-white
              "
            >
              <Sun size={15} strokeWidth={1.8} />
            </button>


            {/* Resume */}

            <a
              href="/resume.pdf"
              download
              className="
                ml-[8px]
                flex
                h-[32px]
                shrink-0
                items-center
                gap-[7px]
                rounded-[5px]
                bg-gradient-to-r
                from-[#176cff]
                to-[#7619e8]
                px-[12px]
                text-[11px]
                font-semibold
                text-white
                shadow-[0_0_18px_rgba(65,54,255,0.22)]
                transition-all
                duration-200
                hover:scale-[1.02]
                hover:shadow-[0_0_22px_rgba(65,54,255,0.35)]
                xl:ml-[14px]
                xl:px-[15px]
                xl:text-[12px]
              "
            >
              <Download size={14} strokeWidth={2} />

              <span className="whitespace-nowrap">
                Download Resume
              </span>
            </a>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              h-[34px]
              w-[34px]
              shrink-0
              items-center
              justify-center
              rounded-[6px]
              border
              border-white/[0.10]
              bg-white/[0.02]
              text-white
              transition
              hover:border-blue-500/50
              hover:bg-blue-500/[0.08]
              lg:hidden
            "
          >

            {isOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}

          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}

        <div
          className={`
            overflow-hidden
            border-t
            border-white/[0.06]
            bg-[#030914]/98
            transition-all
            duration-300
            lg:hidden

            ${
              isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 border-t-0 opacity-0"
            }
          `}
        >

          <div className="px-4 pb-4 pt-2 sm:px-6">

            {/* Navigation Links */}

            <div className="flex flex-col">

              {navItems.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`
                    relative
                    border-b
                    border-white/[0.05]
                    px-2
                    py-[13px]
                    text-[14px]
                    font-medium
                    transition

                    ${
                      item.active
                        ? "text-[#258cff]"
                        : "text-gray-200 hover:text-[#258cff]"
                    }
                  `}
                >
                  {item.name}
                </a>

              ))}

            </div>


            {/* Mobile Actions */}

            <div className="mt-4 flex items-center justify-between">

              <div className="flex items-center gap-2">

                {/* Github */}

                <a
                  href="https://github.com/ansaftab-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-white/[0.10]
                    text-white
                  "
                >
                  <Github size={15} />
                </a>


                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/muhammad-ans-365715361/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-white/[0.10]
                    text-[#3295e9]
                  "
                >
                  <Linkedin size={15} />
                </a>


                {/* Theme */}

                <button
                  type="button"
                  aria-label="Toggle theme"
                  className="
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-[6px]
                    border
                    border-white/[0.10]
                    text-gray-300
                  "
                >
                  <Sun size={15} />
                </button>

              </div>


              {/* Mobile Resume */}

              <a
                href="/resume.pdf"
                download
                onClick={closeMenu}
                className="
                  flex
                  h-[34px]
                  items-center
                  gap-2
                  rounded-[5px]
                  bg-gradient-to-r
                  from-[#176cff]
                  to-[#7619e8]
                  px-3
                  text-[11px]
                  font-semibold
                  text-white
                "
              >
                <Download size={14} />

                Download Resume
              </a>

            </div>

          </div>

        </div>

      </nav>

    </header>
  );
};

export default Navbar;