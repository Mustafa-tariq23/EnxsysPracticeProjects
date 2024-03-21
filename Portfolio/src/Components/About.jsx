import React from 'react'

const About = () => {
  return (
    <div id='about' className=" bg-white h-full w-full  dark:bg-slate-900">
      <div className="container mx-auto flex-col-reverse lg:flex-row flex py-40 gap-24">

        <div className='w-full flex flex-col items-center lg:w-fit'>
          {/* First */}
          <div className='relative -left-20 top-20 mx-auto w-20 h-20 md:mx-0'>
            <img src="images/dots.png" alt="dots" />
          </div>
          {/* Second section */}
          <div className='h-[20rem] w-[16rem] z-40 bg-pink-300 rounded-full overflow-hidden'>
            <img className='relative top-16' src="images/image.png" alt="" />
        </div>
        </div> 
        {/* section two */}
        <div className=" mx-auto my-auto flex flex-wrap w-[50%] flex-col gap-3">
          <h1 className="text-indigo-600 font-bold font-nunito">About Me</h1>
          <h1 className="text-3xl  font-nunito font-medium dark:text-white">
            Better Design
          </h1>
          <h1 className="text-3xl  font-nunito font-medium dark:text-white">
            Better Experience
          </h1>
          <p class="text-gray-400">
            I design and build digital products. I'm also a multi-disciplinary
            maker with over 10 years of experiences in wide range of design
            disciplines.
          </p>

          <h2 class="text-gray-400 font-medium">HTML</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">JAVASCRIPT</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-[80%] bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">REACT</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-[70%] bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About