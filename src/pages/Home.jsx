import React from "react";
import img from "../assets/developer.jpeg";
import SmoothFollower from "../SmoothFollower";
import TextType from "./component/TextType";
import { Icon } from "@iconify/react";
import banner from "../assets/pexels.jpg"

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-black">
        <div className="main-div bg-[#000000] text-white flex justify-center mt-10 rounded-t-sm border-[0.7px] border-dashed border-gray-700">
          <div className="w-[90vw] sm:w-[70vw] md:w-[70vw] lg:w-[50vw] p-2">
            <div className="p-4 relative">
              <div className="w-full h-[200px]">
                <div className="shadow-[inset_14px_24px_16px_-21px_rgba(209,217,230,0.34),inset_14px_28px_20px_-21px_rgba(209,217,230,0.4),inset_14px_35px_27px_-21px_rgba(209,217,230,0.48),inset_14px_54px_43px_-21px_rgba(209,217,230,0.67),inset_-36px_-63px_47px_-21px_rgba(255,255,255,0.75),inset_-36px_-36.8341px_24.6719px_-21px_rgba(255,255,255,0.54),inset_-36px_-31.3638px_17.026000000000003px_-21px_rgba(255,255,255,0.45),inset_-36px_-28.4185px_16px_-21px_rgba(255,255,255,0.38)]"></div>
                <img src={banner} alt="" className="w-full h-full" />
              </div>
              <div className="absolute w-36 h-36 border border-black rounded-full top-40">
                <img
                  src={img}
                  alt="Photo"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="flex justify-between pt-26">
                <div className="flex flex-col gap-2">
                  <span className="text-lg md:text-3xl font-semibold tracking-wider hover:text-gray-400">
                    Deepansh Vishwakarma
                  </span>
                  <span className="text-xsm text-gray-400 tracking-wide font-semibold">
                    <span className="text-gray-300">Heyy👋👋 I am a </span>
                    <TextType
                      text={[" Software Engineer", " Full stack developer"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      className=""
                    />
                  </span>
                </div>
                <div className="list-none flex justify-between gap-2 pt-10 cursor-pointer">
                  <li>
                    <a href="https://github.com/codebydeep/" target="_blank">
                      <Icon icon="mdi:github" className="text-lg" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/deepansh-vishwakarma/"
                      target="_blank"
                    >
                      <Icon icon="mdi:linkedin" className="text-lg" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:deepanshvish123@gmail.com">
                      <Icon icon="mdi:gmail" className="text-lg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/deeep_vish" target="_blank">
                      <Icon icon="prime:twitter" className="text-lg" />
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <hr class="border-t border-gray-500 opacity-50" />

            <div className="px-4 py-10">
              <p className="text-justify tracking-wide text-slate-400">
                I build from the ground up — whether it’s frontend, backend,
                full-stack applications, or AI-driven experiences. I handle the
                entire development lifecycle, from intuitive UI/UX design to
                deployment and user feedback. My focus isn’t on tech debates —
                it’s on building products people genuinely love to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
