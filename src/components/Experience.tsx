import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="p-10  h-auto ">
      <div className=" pl-10 ">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <section className="timeline-area  mb-20 border-l border-l-solid border-l-[#1e293b] dark:border-white pl-4 ">
          <div
            className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl mb-3"
            style={{ position: "relative" }}
          >
            <span className="absolute dark:bg-white top-[70px] left-[-23px] w-[15px] h-[15px] rounded-full bg-[#0F172A] border-2 border-[#1e293b]" />
            <div className="flex  flex-col p-8 bg-[#1e293b]  rounded-lg dark:text-white text-white  ">
              <div className="text-2xl font-bold  pb-6 ">
                SOFTWARE ENGINEERING
              </div>
              <div className="text-lg  text-white">
                Backend Java developer at Teletic.
              </div>
              <h2 className=" text-white">2023 Nov - Present</h2>
            </div>
          </div>

          <div
            className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl mb-3"
            style={{ position: "relative" }}
          >
            <span className="absolute dark:bg-white top-[70px] left-[-23px] w-[15px] h-[15px] rounded-full bg-[#0F172A] border-2 border-[#1e293b]" />
            <div className="flex  flex-col p-8 bg-[#1e293b] rounded-lg   ">
              <div className="text-2xl font-bold text-white pb-6">
                FREELANCER
              </div>
              <div className="text-lg text-white">Java FX/Swing developer.</div>
              <h2 className="text-white">2021 - 2024</h2>
            </div>
          </div>
          <div
            className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl mb-3"
            style={{ position: "relative" }}
          >
            <span className="absolute dark:bg-white top-[70px] left-[-23px] w-[15px] h-[15px] rounded-full bg-[#0F172A] border-2 border-[#1e293b]" />
            <div className="flex  flex-col p-8 bg-[#1e293b] rounded-lg   ">
              <div className="text-2xl font-bold text-white pb-6">
                Generator
              </div>
              <div className="text-lg text-white">
                Leverage a graphical editor to create beautiful web components.
              </div>
            </div>
          </div>
          <div
            className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl mb-3"
            style={{ position: "relative" }}
          >
            <span className="absolute dark:bg-white top-[70px] left-[-23px] w-[15px] h-[15px] rounded-full bg-[#0F172A] border-2 border-[#1e293b]" />
            <div className="flex  flex-col p-8 bg-[#1e293b] rounded-lg   ">
              <div className="text-2xl font-bold text-white pb-6">
                Generator
              </div>
              <div className="text-lg text-white">
                Leverage a graphical editor to create beautiful web components.
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
