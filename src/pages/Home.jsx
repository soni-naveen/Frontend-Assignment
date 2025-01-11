import React from "react";
import Button from "../components/ui/button";
import ServiceGrid from "../components/ServiceGrid";
import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import image from "../assets/image.png";

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
        <div className="flex flex-col gap-10 xl:gap-0 xl:flex-row justify-evenly items-center">
          <div className="bg-laptop1 bg-cover rounded-xl p-5 h-[400px] flex flex-col justify-between">
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
        <div className="tracking-widest flex flex-col items-center xl:flex-row max-w-[1260px] mx-auto gap-36 py-16">
          <div className="flex flex-col gap-16 xl:gap-32 xl:justify-between w-fit">
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
      <section className="max-w-[1260px] mx-auto mb-12">
        <ServiceGrid />
      </section>
      {/* Our Work  */}
      <section className="bg-[#2b2b2b] tracking-wider rounded-[30px] p-16">
        <div className="flex justify-between max-w-[1460px] mx-auto">
          <h1 className="text-5xl tracking-widest text-white font-extrabold">
            Our Work
          </h1>
          <button className="bg-white rounded-full px-7">
            Explore more of our work
          </button>
        </div>
        <div className="flex flex-col items-center xl:flex-row gap-14 max-w-[1460px] my-10 mx-auto">
          <div className="flex flex-col gap-6">
            <div>
              <img src={laptop1} className="h-[350px]" alt="haze productions" />
            </div>
            <div>
              <h1 className="text-3xl text-white mb-1 tracking-widest">
                Haze Productions
              </h1>
              <div className="text-white flex gap-5 font-extralight text-sm">
                <p>Web Design</p>
                <p>Web Development</p>
                <p>SSM</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <img
                src={image}
                className="h-[350px] w-[500px]"
                alt="tharavadu"
              />
            </div>
            <div>
              <h1 className="text-3xl text-white mb-1 tracking-widest">
                Tharavadu
              </h1>
              <div className="text-white flex gap-5 font-extralight text-sm">
                <p>Web Design</p>
                <p>Branding</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <img src={laptop2} className="h-[350px]" alt="haze productions" />
            </div>
            <div>
              <h1 className="text-3xl text-white mb-1 tracking-widest">
                SmartWealth
              </h1>
              <div className="text-white flex gap-5 font-extralight text-sm">
                <p>Web Design</p>
                <p>Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Plans  */}
      <section className="p-16">
        <h1 className="font-extrabold text-5xl mb-4">Pricing Plans</h1>
        <p className="mb-10">
          Tailored solutions to fit your business needs and budget.
        </p>
        <div className="flex flex-wrap gap-10 justify-around">
          <div className="flex flex-col justify-between h-[600px] rounded-2xl border border-black shadow-[0_8px_0_0_black]">
            <div>
              <h1 className="text-5xl font-extrabold p-12">₹17,999/m</h1>
              <ul className="list-disc space-y-5 px-12 max-w-[350px]">
                <li className="text-lg tracking-widest">
                  8 Posts + 4 Stories/m
                </li>
                <li className="text-lg tracking-widest">SMM (2 Platforms)</li>
                <li className="text-lg tracking-widest">
                  Basic SEO Optimization
                </li>
              </ul>
            </div>
            <div className="border w-fit border-black rounded-full m-7">
              <Button text={"I like this"} />
            </div>
          </div>
          <div className="flex flex-col justify-between h-[600px] rounded-2xl border border-black shadow-[0_8px_0_0_black]">
            <div>
              <h1 className="text-5xl font-extrabold p-12">₹27,999/m</h1>
              <ul className="list-disc space-y-5 px-12 max-w-[350px]">
                <li className="text-lg tracking-widest">SMM 4 platforms</li>
                <li className="text-lg tracking-widest">
                  12 Posts + 8 Stories/m
                </li>
                <li className="text-lg tracking-widest">
                  Advanced SMM Strategy with Analytics
                </li>
                <li className="text-lg tracking-widest">
                  Advanced SEO + Analytics
                </li>
                <li className="text-lg tracking-widest">Ad Campaign Setup </li>
              </ul>
            </div>
            <div className="border w-fit border-black rounded-full m-7">
              <Button text={"I like this"} />
            </div>
          </div>
          <div className="flex flex-col justify-between h-[600px] rounded-2xl border border-black shadow-[0_8px_0_0_black]">
            <h1 className="text-3xl font-extrabold p-12 tracking-wider">
              Tailored for you
            </h1>
            <div>
              <p className="list-disc space-y-5 px-7 text-lg max-w-[330px] tracking-widest">
                A personalized solution to fit your unique business needs.
                Contact us for a custom quote.
              </p>
              <div className="border w-fit border-black rounded-full m-7">
                <Button text={"Schedule A Call"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
