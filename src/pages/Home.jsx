import React from "react";
import Button from "../components/ui/button";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-9xl font-extrabold tracking-wide">
          Intentional Impact
        </h1>
        <div className="text-sm flex w-fit justify-evenly">
          <p className="text-left">
            Digital strategy.
            <br />
            Creative impact.
            <br />
            Real results
          </p>
          <p className="w-[34%] text-left tracking-wider">
            From campaigns to design, we create strategies that engage and
            visuals that captivate. Elevate your brand with a complete digital
            experience.
          </p>
        </div>
      </section>
      {/* Our Latest Work  */}
      <section className="bg-[#2b2b2b] tracking-widest rounded-[30px] py-7">
        <h3 className="text-white ml-10">Our Latest Work</h3>
        <div className="flex justify-evenly gap-10 items-center">
          <div className="bg-laptop1 bg-cover p-5 h-[400px] flex flex-col justify-between">
            <div className="flex gap-10 top-6">
              <span className="text-white">Website Design</span>
              <span className="text-white">Website Development</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-white text-4xl w-1/2">
                HAZE PRODUCTIONS
              </span>
              <div>
                <Button text={"View Work"} />
              </div>
            </div>
          </div>
          <div className="bg-laptop2 bg-cover p-5 h-[430px] flex flex-col justify-between">
            <div className="flex gap-10">
              <span className="text-white">Website Design</span>
              <span className="text-white">Website Development</span>
            </div>
            <div className="flex justify-between gap-16 items-center">
              <span className="text-white text-4xl w-1/2">SMART WEALTH.AI</span>
              <div>
                <Button text={"View Work"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do  */}
      <section className="bg-bgdot ">
        <div className="tracking-widest flex max-w-[1260px] mx-auto gap-36 py-16">
          <div className="flex flex-col justify-between w-fit">
            <h1 className="text-6xl font-extrabold">What do we do?</h1>
            <div>
              <h1 className="text-6xl font-extrabold tracking-widest">
                Who are we?
              </h1>
              <p className="text-sm w-[450px] text-justify">
                We're a digital marketing agency focused on delivering creative,
                data-driven solutions that help brands grow. We specialize in
                social media, SEO, and web design, creating strategies that
                drive results and make your brand stand out.
              </p>
            </div>
          </div>
          <div className="text-white space-y-7 w-fit">
            <div className="bg-[#2b2b2b] px-16 py-5 rounded-[40px]">
              <h1 className="text-3xl">We Design</h1>
              <p className="text-sm">
                We create it all. Sit back, relax, and watch your vision come to
                life. Stunning design, clear messaging, and flawless execution.
              </p>
            </div>
            <div className="bg-[#2b2b2b] px-16 py-5 rounded-[40px]">
              <h1 className="text-3xl">We Build</h1>
              <p className="text-sm">
                Built for the future. We turn complex ideas into seamless,
                scalable digital experiences.
              </p>
            </div>
            <div className="bg-[#2b2b2b] px-16 py-5 rounded-[40px]">
              <h1 className="text-3xl">We Grow</h1>
              <p className="text-sm">
                Marketing that works. We connect your brand with the right
                audience through strategy, creativity, and impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className=" max-w-[1260px] mx-auto">
        <Services />
      </section>
    </>
  );
}
