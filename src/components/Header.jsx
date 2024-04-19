"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logo from "@/assets/images/logo.png";
import Icons from "./Icons";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section>
      <div className="bg-primary">
        <div className="max-w-5xl mx-auto md:flex hidden justify-between items-center">
          <div className="flex items-center gap-6 py-2">
            <Link href="tel:+918100127001">
              <div className="flex gap-2 items-center font-medium text-white">
                <Icons.Mobile />
                <p>+91 81001 27001</p>
              </div>
            </Link>

            <Link href="tel:03346003418">
              <div className="flex gap-2 items-center font-medium text-white">
                <Icons.Phone />
                <p>+033 4600 3418</p>
              </div>
            </Link>

            <Link href="mailto:taxyug007@gmail.com">
              <div className="flex gap-2 items-center font-medium text-white">
                <Icons.Mail />
                <p>taxyug007@gmail.com</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/">
              <Icons.Twitter />
            </Link>

            <div className="h-4 w-[1px] bg-white" />

            <Link href="/">
              <Icons.LinkedIn />
            </Link>

            <div className="h-4 w-[1px] bg-white" />

            <Link href="/">
              <Icons.Facebook />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:px-10 px-6 py-4 flex justify-between relative">
        <Image src={logo} alt="Taxyug - Accounting Solutions" />

        <div
          className="w-10 h-10 cursor-pointer absolute z-40 right-10 top-1/2 -translate-y-1/2 md:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Icons.Cross /> : <Icons.Menu />}
        </div>

        <div
          className={`flex gap-4 items-center md:static fixed md:w-auto md:h-auto w-screen h-screen md:flex-row flex-col justify-center z-20 md:bg-transparent bg-primary md:text-black text-white top-0 left-0 md:translate-x-0 transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link
            className="font-medium hover:text-primary transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="font-medium hover:text-primary transition-colors"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="font-medium hover:text-primary transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="font-medium hover:text-primary transition-colors"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            href="/book-an-appointment"
            className="border md:hover:border-primary px-4 py-2 transition-colors md:hover:text-primary font-medium"
          >
            <div className="flex items-center gap-3">
              <p>Book an appointment</p>
              <Icons.RightArrow />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
