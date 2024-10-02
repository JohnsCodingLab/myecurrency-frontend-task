import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="mt-40 md:mt-[225px] bg-primary bg-footer-texture px-5 lg:px-12 py-10">
        <div className="flex flex-col items-center mb-12">
          <Image src="/icon2.svg" alt="icon" width={134} height={89} />
        </div>

        <div className="font-poppins grid grid-cols-12 items-start gap-5 lg:gap-14 max-lg:gap-y-9">
          <div className="col-span-12 lg:col-span-4 justify-self-center">
            <div className="flex items-start gap-20 md:gap-14">
              <div>
                <h1 className="font-semibold text-white mb-5">COMPANY</h1>
                <ul>
                  <li className="text-[#ABABAB] mb-3">About</li>
                  <li className="text-[#ABABAB] mb-3">Blog</li>
                  <li className="text-[#ABABAB] mb-3">Contact</li>
                  <li className="text-[#ABABAB] mb-3">Jobs</li>
                </ul>
              </div>

              <div>
                <h1 className="font-semibold text-white mb-5">CONTACT</h1>
                <ul>
                  <li className="text-[#ABABAB] mb-3">Phone</li>
                  <li className="text-white mb-3">+234 708 507 3128</li>
                  <li className="text-[#ABABAB] mb-3">Address</li>
                  <li className="text-white mb-3">16, Ogindipe Close, Upston Close</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 lg:col-span-5">
            <div className="flex items-center gap-5 lg:gap-14">
              <div>
                <h1 className="font-semibold text-white mb-5">CONSUMER ADVISORY</h1>
                <p className="text-white mb-5">
                  These statements have not been evaluated by the Food and Drug Administration. This
                  product is not intended to diagnose, treat, cure, or prevent any disease. This
                  product should be used only as directed on the label. All trademarks and
                  copyrights are property of their respective owners and not affiliated with nor do
                  they endorse this product. Results may vary.
                </p>

                <p className="text-white">
                  By using our website or product, you agree to follow our <br />
                  <span className="text-blue-300">terms of service.</span>
                </p>
              </div>
              <div className="max-md:hidden border-l border-[#5D6544] h-[210px]"></div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <h1 className="font-semibold text-white mb-6">GET IN TOUCH</h1>
            <p className="text-[#ABABAB] mb-6">Feel free to get in touch with us vai email</p>
            <h1 className="font-bold text-2xl text-white mb-6">hello@sleepstiq.com</h1>
            <div className="flex items-center gap-3 mb-14">
              <div className="py-2 px-3 rounded-full bg-[#8FE2FF]">
                <Image src="/facebook.svg" alt="socials" width={9} height={17} />
              </div>

              <div className="py-[10px] px-2 rounded-full bg-[#8FE2FF]">
                <Image src="/twitter.svg" alt="socials" width={16} height={13} />
              </div>

              <div className="py-2 px-1 rounded-full bg-[#8FE2FF]">
                <Image src="/google.svg" alt="socials" width={23} height={15} />
              </div>

              <div className="py-2 px-2 rounded-full bg-[#8FE2FF]">
                <Image src="/linkedin.svg" alt="socials" width={15} height={15} />
              </div>
            </div>

            <p className="text-[#ABABAB] text-sm">
              &copy; {currentYear}@sleepstiq. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
