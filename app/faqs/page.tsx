"use client";
import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import { faqs } from "@/dummyData";

const Faqs = () => {
  const [active, setActive] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  //   Filtered FAQs
  const filteredFaqs = faqs.filter((faq) => {
    const query = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query);
  });
  return (
    <>
      <div className="bg-tertiary h-[596px] font-poppins">
        <Wrapper>
          <p className="text-xl pt-44 text-primary mb-4">We&apos;re here to help you</p>
          <h1 className="text-primary font-semibold text-6xl mb-4">How can we assist?</h1>
          <div className="flex items-center gap-5 bg-white py-2 lg:py-5 px-5 lg:px-10 w-[400px] md:w-[500px] lg:w-[800px]">
            <Image src="/search.svg" alt="search" width={32} height={32} />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs here"
              className="text-primary w-[700px] outline-none border-none"
            />
          </div>
        </Wrapper>
      </div>

      <div className="mt-10 md:mt-[70px] mb-20">
        <Wrapper>
          <div className="grid grid-cols-4 items-start">
            <div className="col-span-4 md:col-span-1">
              <p className="font-bold text-primary text-lg mb-10">Sleepstiq Product</p>
              <p className="text-primary text-lg mb-10">Order</p>
              <p className="text-primary text-lg mb-10">Melantonin</p>
            </div>

            <div className="col-span-4 md:col-span-3">
              <div className="border-b border-[#BDBDBD]"></div>
              {filteredFaqs.length === 0 ? (
                <p className="mt-5 text-center text-primary text-3xl">Nothing found</p>
              ) : (
                filteredFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#BDBDBD] cursor-pointer">
                    <p
                      onClick={() => setActive(active === index ? null : index)}
                      className={`text-lg text-primary py-5 ${
                        active === index ? "font-semibold" : ""
                      }`}
                    >
                      {faq.question}
                    </p>
                    <div
                      className={`transition-all duration-300 ${
                        active === index ? "max-h-screen" : "max-h-0"
                      } overflow-hidden`}
                    >
                      <p className="pb-5">{faq.answer}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Faqs;
