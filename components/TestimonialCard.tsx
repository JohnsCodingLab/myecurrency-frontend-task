import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="pl-4 md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-64">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[26px] font-poppins">
        <div className="bg-tertiary py-6 pl-7 pr-2">
          <p className="italic mb-6">
            Love it! I have trouble falling asleep and this knocked me right out. Will be buying
            more.
          </p>
          <h2 className="font-bold text-text_secondary mb-1">John Matthews</h2>
          <Image src="/stars.svg" alt="stars" width={100} height={12} />
        </div>

        <div className="bg-tertiary py-6 pl-[30px] pr-2">
          <p className="italic mb-6">
            I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you
            Sleepstiq.
          </p>
          <h2 className="font-bold text-text_secondary mb-1">Eunice Oliver</h2>
          <Image src="/stars.svg" alt="stars" width={100} height={12} />
        </div>

        <div className="bg-tertiary py-6 pl-[30px] pr-2">
          <p className="italic mb-6">
            It’s a really good product and helps me sleep better at night!
          </p>
          <h2 className="font-bold text-text_secondary mb-1">Laura Davies</h2>
          <Image src="/stars.svg" alt="stars" width={100} height={12} />
        </div>

        <div className="bg-tertiary py-6 pl-[30px] pr-2">
          <p className="italic mb-6">
            Helps me relax and remember to breathe. Stress level definitely goes down
          </p>
          <h2 className="font-bold text-text_secondary mb-1">Jane Bocks</h2>
          <Image src="/stars.svg" alt="stars" width={100} height={12} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
