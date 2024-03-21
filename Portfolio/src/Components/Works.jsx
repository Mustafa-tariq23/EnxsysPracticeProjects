import React from "react";

const Works = () => {
  return (
    <div id="work">
      <div className="container mx-auto  lg:m-auto pt-16 dark:bg-slate-900">
        {/* Top */}
        <div className="flex flex-col  m-10 sm:m-0 text-center items-center gap-3">
          <h1 className="text-indigo-600 font-bold font-nunito">PORTFOLIO</h1>
          <h1 className="text-3xl  font-nunito dark:text-white">
            Works & Projects
          </h1>
          <p class="w-1/2 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by Figma, VS Code and coffee, I turn your requirements
            into a well-designed websites
          </p>
        </div>

        <div class="p-5 sm:p-0 flex flex-wrap justify-between">
          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="images/item.png" alt="img" />
          </div>

          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="images/item.png" alt="img" />
          </div>

          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="images/item.png" alt="img" />
          </div>

          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="images/item.png" alt="img" />
          </div>

          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="images/item.png" alt="img" />
          </div>

          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="images/item.png" alt="img" />
          </div>

          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="images/item.png" alt="img" />
          </div>

          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src="images/item.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
