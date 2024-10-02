import Hero from "@/components/Hero";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { productReview } from "@/dummyData";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-20 md:mt-44">
        <Wrapper>
          <div className="grid lg:grid-cols-2 items-center gap-16 md:gap-40">
            <div className="font-poppins">
              <p className="text-sm text-primary mb-7">Our Amazing Story</p>
              <h1 className="font-bold text-primary text-4xl mb-14">10k+Happy Customers</h1>
              <p className="text-text_tertiary mb-7 opacity-60">
                There’s no secret sauce, no wizard behind the curtain. What
                <br /> makes Aerolab tick is an interdisciplinary team with a<br /> framework that
                fosters candid collaboration.
              </p>
              <a href="#" className="border-b border-primary text-primary font-bold">
                More know About us
              </a>
            </div>
            <div className="bg-tertiary px-10 py-14 font-poppins shadow-2xl">
              <p className="text-2xl italic mb-[53px]">
                I’m a very anxious person but use this and feel so relaxed and sleep way better now
                with the aid of sleepstiq.{" "}
              </p>
              <div className="flex items-center gap-9">
                <div className="rounded-full overflow-hidden">
                  <Image src="/person.png" alt="person" width={84} height={84} />
                </div>
                <div>
                  <p className="text-[22px] font-bold text-text_secondary mb-2">James Miller</p>
                  <p className="text-text_tertiary">CEO, Techbias</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 mt-6">
                <div className="p-2 bg-[#C4C4C4] rounded-full"></div>
                <div className="p-2 bg-[#C4C4C4] rounded-full"></div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="mt-24 md:mt-[152px]">
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
                I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank
                you Sleepstiq.
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
      </div>

      <div className="mt-16">
        <Wrapper>
          <hr />
        </Wrapper>
      </div>

      <Wrapper>
        <div className="grid lg:grid-cols-2 items-center gap-20 md:gap-40 pt-16 pb-20 md:pb-40">
          <div className="font-poppins relative">
            <Image src="/vapePen.svg" alt="pen" width={775} height={580} />
            <div className="hidden absolute bottom-[-48px] right-[-130px] rounded-md bg-white shadow-2xl p-6">
              <p className="italic text-text_secondary">
                😊 Promotes calm and relaxation.
                <br />
                💤 Inhalation allows for a rapid effect.
                <br />
                ✅ 100% drug-free, plant-based ingredients.
                <br />
                ‍⚕️ 3rd-party lab tested.
              </p>
            </div>
          </div>
          <div className="font-poppins mx-auto">
            <h1 className="text-primary font-bold text-4xl mb-7">Shop Now</h1>
            <p className="text-text_tertiary mb-7 opacity-60">
              Our Personal Diffuser is an aromatherapy device
              <br /> that contains a blend of melatonin, lavender, and
              <br /> chamomile. A few breaths of our plant-based
              <br /> essential oil mist will mellow you out, quiet the mind,
              <br /> and lull you to bed.
            </p>
            <Link href="/shop">
              <button className="font-sans text-white bg-secondary py-4 px-20 rounded-md">
                Visit Shop
              </button>
            </Link>
          </div>
        </div>
      </Wrapper>

      {/* Our mission section */}
      <div className="pl-4 md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-64">
        <div className="grid lg:grid-cols-2 gap-14 font-poppins">
          <div>
            <h1 className="font-bold text-4xl text-primary mb-7">Our Mission</h1>
            <p className="text-text_tertiary opacity-60 mb-6">
              We started Sleepstiq with 1 simple goal: to be your
              <br /> best friend at bedtime. We, just like you, deal with
              <br /> stress, unease, and trouble sleeping from a number
              <br /> of silly things like school, work, screens, numbers, and
              <br /> people. That&apos;s why we created products that aim to -
            </p>

            <ul className="text-text_tertiary opacity-60">
              <li>✓ Promote Calm</li>
              <li>✓ Support Sleep</li>
              <li>✓ Reduce Stress</li>
              <li>✓ Aid Relaxation</li>
            </ul>
          </div>

          <Image src="/sleeping.png" alt="sleeping person" width={735} height={550} />
        </div>
      </div>

      {/* Visit our shop section */}
      <div className="my-20 md:my-40 flex flex-col items-center font-poppins">
        <h1 className="text-4xl text-primary font-bold mb-5">Visit Our Shop</h1>
        <p className="text-text_tertiary opacity-60 text-center mb-7">
          Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin,
          lavender, and chamomile. A<br /> few breaths of our plant-based essential oil mist will
          mellow you out, quiet the mind, and lull you to bed.
        </p>
        <Link href="/shop">
          <button className="bg-secondary rounded-md text-white text-sm font-sans px-20 py-4">
            Visit Shop
          </button>
        </Link>
      </div>
      <Wrapper>
        <hr />
      </Wrapper>

      {/* Product reviews */}
      <div className="mt-[92px] pl-4 md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-64">
        <h1 className="font-bold text-4xl mb-14">Product Reviews</h1>
        <div className="flex overflow-x-auto items-center gap-7 custom-scrollbar">
          {productReview.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg w-[306px] max-w-[306px] h-[420px] flex-shrink-0 mb-5"
            >
              <Image src={product.img} alt="" width={306} height={210} />
              <div className="ml-7 mr-2 flex flex-col h-[50%]">
                <p className="flex-grow italic text-text_secondary mt-4">{product.desc}</p>
                <h1 className="font-bold text-text_secondary mb-2">{product.name}</h1>
                <Image
                  src="/stars.svg"
                  alt="star rating"
                  width={100}
                  height={12}
                  className="mb-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
