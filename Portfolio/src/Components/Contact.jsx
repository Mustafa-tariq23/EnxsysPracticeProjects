import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className="py-8 dark:bg-slate-900">
      {/* Top */}
      <div className="flex flex-col text-center items-center gap-3">
        <h1 className="text-indigo-600 font-bold font-nunito">CONTACT</h1>
        <h1 className="text-3xl  font-nunito dark:text-white">
          Have a Question?
        </h1>
        <p class="w-1/2 text-center text-gray-400">
          Do you have an idea? Let's discuss it and see what we can do together.
        </p>
      </div>
      {/* Bottom */}
      <form className="mt-5 flex flex-col gap-5 items-center">
        <input
          className="p-2 w-[90%] md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
          type="text"
          placeholder="Your Surname"
        />
        <input
          className="p-2 w-[90%] md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className="p-2 w-[90%] md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="w-1/2 bg-indigo-600 text-white font-medium cursor-pointer p-3 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact