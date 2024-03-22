import Image from "next/image";
import Link from "next/link";
import React from "react";

//Assets
import logo from "@/assets/images/logo.png";

export const Footer = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-20 md:px-10 px-6">
        <div className="grid md:grid-cols-8 md:gap-0 gap-6">
          <div className="md:col-span-5">
            <Image src={logo} alt="taxyug - accounting solutions" />
            <address className="mt-4">
              9th Floor, Room No-902
              <br /> 27, Brabourne Road <br /> Kolkata- 700 001
            </address>
          </div>

          <div>
            <p className="text-lg font-medium mb-4">Resources</p>

            <ul>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Link
                </Link>
              </li>

              <li>
                <Link href="/">Link</Link>
              </li>

              <li>
                <Link href="/">Link</Link>
              </li>

              <li>
                <Link href="/">Link</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium mb-4">Services</p>

            <ul>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Link
                </Link>
              </li>

              <li>
                <Link href="/">Link</Link>
              </li>

              <li>
                <Link href="/">Link</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium mb-4">About</p>

            <ul>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Link
                </Link>
              </li>

              <li>
                <Link href="/">Link</Link>
              </li>

              <li>
                <Link href="/">Link</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-2 border-t border-primary text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex md:px-10 px-6 justify-between items-center md:flex-nowrap flex-wrap">
          <p>&copy; Taxyug 2024</p>

          <div className="flex items-center gap-4">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
