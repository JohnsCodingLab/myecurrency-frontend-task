"use client";
import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";

const Shop = () => {
  const originalPrice = 50;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(originalPrice);
  const pricePerUnit = originalPrice;
  return (
    <>
      <div className="bg-shop bg-center bg-cover h-[calc(100vh-200px)]">
        <Wrapper>
          <div className="font-poppins pt-[200px]">
            <h3 className="text-primary text-[18px] mb-4">We&apos;re here to help you</h3>
            <h1 className="font-bold text-6xl text-primary">Relax & Rest</h1>
          </div>
        </Wrapper>
      </div>
      <div className="my-[73px]">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-5 lg:gap-40 pt-5 md:pt-16 mb-32">
            <Image src="/vapePen.svg" alt="pen" width={477} height={519} />
            <div className="font-poppins">
              <h1 className="text-primary font-bold text-4xl mb-7 max-md:text-center">
                About Product
              </h1>
              <p className="text-text_tertiary opacity-60 mb-3">
                Our Personal Diffuser is an aromatherapy device
                <br /> that contains a blend of melatonin, lavender, and
                <br /> chamomile. A few breaths of our plant-based
                <br /> essential oil mist will mellow you out, quiet the mind,
                <br /> and lull you to bed.
              </p>

              <p className="italic text-text_secondary max-sm:mt-10">
                😊 Promotes calm and relaxation.
                <br />
                💤 Inhalation allows for a rapid effect.
                <br />
                ✅ 100% drug-free, plant-based ingredients.
                <br />
                ‍⚕️ 3rd-party lab tested.
              </p>

              <div className="mt-[18px] my-8 flex items-center gap-12 max-md:justify-center">
                <div>
                  <span>Price</span>
                  <h2 className="font-semibold mt-2">USD {price}</h2>
                </div>

                <div>
                  <span>Unit</span>
                  <br />
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    className="w-[63px] py-1 px-2 border mt-2"
                    onChange={(e) => {
                      const newQuantity = Number(e.target.value);
                      setQuantity(newQuantity);
                      setPrice(newQuantity * pricePerUnit);
                    }}
                  />
                </div>
              </div>
              <Link href="#" className="flex justify-center">
                <button className="font-sans text-white bg-secondary py-4 px-20 rounded-md ">
                  Buy
                </button>
              </Link>
            </div>
          </div>
          <hr className="mb-14" />
        </Wrapper>
        <TestimonialCard />
      </div>
    </>
  );
};

export default Shop;
