"use client";
import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import google2 from "../public/google2.svg";
import forbes from "../public/forbes.svg";
import bloomberg from "../public/bloomberg.svg";
import sleepReview from "../public/sleep-review.svg";
import influence from "../public/influence.svg";
import { StaticImageData } from "next/image";
import BrandImage from "./BrandImage";

const Hero = () => {
  interface ImageData {
    src: StaticImageData;
    alt: string;
  }

  const images: ImageData[] = [
    { src: google2, alt: "brands" },
    { src: forbes, alt: "brands" },
    { src: bloomberg, alt: "brands" },
    { src: sleepReview, alt: "brands" },
    { src: influence, alt: "brands" },
  ];

  return (
    <div className="relative">
      <div className="bg-hero bg-center bg-cover h-[calc(100vh-320px)] md:h-[calc(100vh-510px)] lg:h-[596px]">
        <Wrapper>
          <div className="font-poppins pt-[200px]">
            <h3 className="text-primary text-[18px] mb-4">We&apos;re here to help you</h3>
            <h1 className="font-bold text-6xl text-primary mb-4">Relax & Rest</h1>
            <p className="text-primary mb-6 max-md:hidden">
              With the aid of our Melatonin Sleepstiq, we can assure you that you can <br />
              get quality sleep.
            </p>
            <p className="text-primary mb-6 md:hidden">
              With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality
              sleep.
            </p>
            <Link href="/shop">
              <button className="bg-secondary rounded-md text-white text-sm font-sans px-16 py-3 md:px-20 md:py-4">
                Visit Shop
              </button>
            </Link>
          </div>
        </Wrapper>
      </div>
      <div className="absolute pl-4 md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-64 bottom-[-25px] md:bottom-[-30px] lg:bottom-[-38px] xl:bottom-[-55px] right-0">
        <div className="bg-white px-5 md:px-[72px] py-5 xl:py-10 shadow-lg">
          <div className="flex items-center justify-between gap-5 md:gap-[50px] overflow-hidden">
            {images.map((image) => (
              <BrandImage key={image.src.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
