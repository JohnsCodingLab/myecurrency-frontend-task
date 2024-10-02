"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageProps {
  src: StaticImageData;
  alt: string;
}

const BrandImage = ({ src, alt }: ImageProps) => {
  return (
    <>
      <div>
        <Image
          src={src}
          alt={alt}
          width={src.width}
          height={src.height}
          className="max-md:hidden"
        />
      </div>
      <Image src={src} alt={alt} width={40} height={40} className="md:hidden" />
    </>
  );
};

export default BrandImage;
