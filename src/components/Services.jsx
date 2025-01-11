import React from "react";
import Uiux from "../assets/uiux.png";
import ThreeD from "../assets/3d-design.png";
import Branding from "../assets/branding.png";
import Marketing from "../assets/marketing.png";
import Seo from "../assets/seo.png";

const Services = () => {
  return (
    <div className="mx-auto p-8 tracking-widest">
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col justify-between gap-6">
          {/* UI/UX Card */}
          <div className="rounded-2xl p-12 border border-black shadow-[0_8px_0_0_black]">
            <div className="space-y-4">
              <div className="flex flex-col space-y-3 items-center justify-between">
                <h2 className="text-4xl font-bold text-gray-800">UI/UX</h2>
                <img src={Uiux} alt="UI/UX" />
              </div>
              <p className="text-gray-600 text-sm text-justify">
                Enhance user experiences with intuitive UI/UX design. We focus
                on crafting visually appealing websites and apps that engage and
                retain users.
              </p>
            </div>
          </div>
          {/* 3D Design Card */}
          <div className="rounded-2xl px-10 py-7 border border-black shadow-[0_8px_0_0_black]">
            <div className="space-y-4">
              <div className="flex flex-col space-y-3 items-center justify-between">
                <h2 className="text-4xl font-extrabold text-gray-800">
                  3D Design
                </h2>
                <img src={ThreeD} alt="3D Design" />
              </div>
              <p className="text-gray-600 text-sm text-justify">
                Bring your concepts to life with our 3D design services. From
                realistic modeling to engaging animations, we create immersive
                visuals that captivate audiences.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {/* 40+ Trusted Clients Card */}
          <div className="rounded-2xl px-10 py-7 border border-black shadow-[0_8px_0_0_black]">
            <div className="space-y-5">
              <h2 className="text-4xl font-extrabold text-gray-800">40+</h2>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Trusted Clients
                </h3>
                <p className="text-gray-600 text-sm text-justify">
                  In Tech, Lifestyle, And Beyond
                </p>
              </div>
            </div>
          </div>
          {/* 12+ Experts Card */}
          <div className="rounded-2xl px-10 py-6 border border-black shadow-[0_8px_0_0_black]">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold text-gray-800">12+</h2>
              <h3 className="text-xl font-semibold text-gray-700">Experts</h3>
              <p className="text-gray-600 text-sm text-justify">
                A talented team turning creative ideas into reality
              </p>
            </div>
          </div>
          {/* Branding Card */}
          <div className="rounded-2xl px-10 py-8 border border-black shadow-[0_8px_0_0_black]">
            <div className="space-y-4">
              <div className="flex space-y-5 flex-col items-center justify-between">
                <h2 className="text-4xl font-extrabold text-gray-800">
                  Branding
                </h2>
                <img src={Branding} alt="Branding" />
              </div>
              <p className="text-gray-600 text-sm text-justify">
                Create a unique brand identity that stands out. We offer logo
                design and brand strategy to ensure consistency and connection
                with your audience.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {/* Marketing Card */}
          <div className="rounded-2xl p-10 border border-black shadow-[0_8px_0_0_black]">
            <div className="space-y-4">
              <div className="flex flex-col space-y-3 items-center justify-between">
                <h2 className="text-4xl tracking-widest font-extrabold text-gray-800">
                  Marketing
                </h2>
                <img src={Marketing} alt="Marketing" />
              </div>
              <p className="text-gray-600 text-sm text-justify">
                Unlock your brand's potential with tailored digital marketing
                strategies. From SEO and social media to email marketing, we
                drive traffic and engagement that converts.
              </p>
            </div>
          </div>

          {/* SEO Card */}
          <div className="rounded-2xl px-10 py-6 border border-black shadow-[0_8px_0_0_black]">
            <div className="space-y-4">
              <div className="flex flex-col space-y-3 items-center justify-between">
                <h2 className="text-4xl font-extrabold text-gray-800">SEO</h2>
                <img src={Seo} alt="SEO" />
              </div>
              <p className="text-gray-600 text-sm text-justify">
                Tell your brand story through compelling content. Our services
                include copywriting and visual content creation that resonate
                with your target audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
