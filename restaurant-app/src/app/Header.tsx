"use client";
import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import MenuIcon from "./../../assets/icons/menu.svg";
import XIcon from "./../../assets/icons/x.svg";
import ButtonLink from "./button-link";
import Image from "next/image";

interface NavLinksItem {
  name: string;
  link: string;
  bgName: string;
}

const navLinks: NavLinksItem[] = [
  {
    name: "home",
    link: "/",
    bgName: "Ресторант",
  },
  {
    name: "menu",
    link: "menu",
    bgName: "Mеню",
  },
  {
    name: "neverland",
    link: "neverland",
    bgName: "neverland",
  },
  {
    name: "reservation",
    link: "reservation",
    bgName: "Резервации",
  },
];

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <header className="relative z-50">
      <div className="relative z-10 container">
        <nav className="relative flex items-center justify-between pt-6 lg:pt-8">
          <Link href="/" className="flex md:flex-1" aria-label="Home page">
            <div className="w-[60px] md:w-[101px]">
              <Image alt="logo" src={"/l-olivo.png"} width={101} height={44} />
            </div>
          </Link>
          <ul
            className={classNames(
              "flex flex-col gap-4 max-md:absolute max-md:left-0 max-md:-bottom-9 max-md:translate-y-full max-md:w-full md:flex-row md:flex-1 md:justify-center lg:gap-8",
              {
                "flex flex-co": showMobileMenu,
                "max-md:hidden": !showMobileMenu,
              }
            )}
          >
            {navLinks.map((item: NavLinksItem, index: number) => (
              <li key={index}>
                <Link
                  href={item.name === "home" ? `/` : `/${item.link}`}
                  className="text-lg leading-none tracking-[-0.41px] uppercase md:text-sm text-[#808000]"
                >
                  {item.bgName}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-lg leading-none tracking-[-0.41px] uppercase md:hidden text-[#808000]"
              >
                Контакти
              </Link>
            </li>
          </ul>
          <div className="flex justify-end max-md:hidden md:flex-1 text-[#808000]">
            <ButtonLink to="/contact" className="uppercase">
              <span>Контакти</span>
            </ButtonLink>
          </div>
          <button
            className="flex md:hidden"
            aria-label="Toggle mobile menu"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? (
              <Image src={XIcon} className="w-6 h-6" alt="x-icon" />
            ) : (
              <Image src={MenuIcon} className="w-6 h-6" alt="menu-icon" />
            )}
          </button>
        </nav>
      </div>
      {showMobileMenu && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-appAccent md:hidden" />
      )}
    </header>
  );
};

export default Header;
