import { styles } from "@/styles/common";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import Close from "@/assets/close.svg";
import Menu from "@/assets/menu.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        styles.paddingX,
        scrolled ? " bg-primary" : "bg-transparent",
        "w-full flex items-center py-5 fixed top-0 z-20"
      )}
    >
      <div
        className={clsx(
          "w-full flex justify-between",
          "items-center max-w-7xl",
          "mx-auto"
        )}
      >
        {/**title */}
        <Link
          href="/"
          scroll={false}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-lg font-bold">Sera &nbsp;</p>
        </Link>

        {/**pc navigation */}
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={clsx(
                active === link.title ? "text-white" : "text-secondary",
                "hover:text-white text-lg font-medium "
              )}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`} scroll={false}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/**mobile navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            className="w-7 h-7"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            {toggle ? (
              <Close className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

          <div
            className={clsx(
              toggle ? "flex" : "hidden",
              "black-gradient rounded-xl",
              "absolute z-10 top-20 right-0 ",
              "min-w-[140px] mx-4 my-2 p-6"
            )}
          >
            <ul className="flex justify-end flex-col flex-1 gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={clsx(
                    active === link.title ? "text-white" : "text-secondary",
                    "font-medium text-base"
                  )}
                  onClick={() => {
                    setToggle((prev) => !prev);
                    setActive(link.title);
                  }}
                >
                  <Link href={`#${link.id}`} scroll={false}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
