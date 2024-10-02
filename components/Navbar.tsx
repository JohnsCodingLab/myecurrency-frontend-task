"use client";
import Image from "next/image";
import Wrapper from "./Wrapper";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute top-0 z-50 ">
      <div className={`fixed p-3 w-full ${scrolled ? "bg-white" : ""}`}>
        <Wrapper>
          <div className="flex items-center gap-[171px] max-md:justify-between">
            <Image src="/icon.svg" alt="icon" width={92} height={62} className="max-md:w-[15%]" />
            <ul className="flex items-center gap-16 font-poppins max-md:hidden">
              <li>
                <a href="/" className="text-[18px] text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[18px] text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="/shop" className="text-[18px] text-primary">
                  Shop
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-[18px] text-primary">
                  FAQs
                </a>
              </li>
            </ul>
            <Image
              src="/menu.png"
              alt="menu"
              width={30}
              height={30}
              className="md:hidden cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />

            {open && (
              <div className="absolute bg-black text-white font-poppins left-0 top-16 w-full h-[calc(100vh-50px)] flex flex-col items-center justify-center gap-8 z-10">
                <ul>
                  <li className="mb-5">
                    <a href="/" className="text-[18px] text-white">
                      Home
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#" className="text-[18px] text-white">
                      About
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="/shop" className="text-[18px] text-white">
                      Shop
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="/faqs" className="text-[18px] text-white">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Navbar;
