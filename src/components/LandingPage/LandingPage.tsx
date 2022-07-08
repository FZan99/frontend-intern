import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../img/book3.jpg"
import img2 from "../../img/read.jpg"

function LandingPage() {
  return (
    <div className="w-screen items-center">
      <div className="">
        <div
          className="px-6 w-11/12 rounded-lg flex-none justify-between py-12 items-center md:container mx-auto px-6 
      md:flex md:py-0"
        >
          <h1 className="text-center text-black text-6xl font-bold md:text-3xl">
            LOGO
          </h1>
          <ul className="hidden md:flex">
            <li className="text-black p-4 text-xl">About</li>
            <li className="text-black p-4 text-xl">Policy</li>
            <li className="p-3 items-center">
              <button className="text-base bg-[#116530] w-32 hover:bg-[#DEDDDB] hover:text-[#262121] text-white font-bold py-2 px-4 rounded-2xl">
                LOGIN
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-full items-center justify-center">
        <div
          className="bg-white md:my-2 w-full flex items-center flex-col 
md:flex-row-reverse md:container md:space-x-reverse 
 "
        >
          <div className="w-full items-center h-96 md:h-200 lg:h-52  overflow-hidden relative">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={img1}
            />
            <div className="absolute inset-0 bg-gray-400 bg-opacity-75"></div>

            <div className="flex flex-col gap-y-6 h-full items-center justify-center relative">
              <div>
                <h1 className="text-6xl tracking-wider text-[#A3EBB1] font-bold">
                  E-LIBRARY
                </h1>
              </div>
              <div
                className="flex flex-col
          md:flex-row md:gap-8
          items-center
          lg:gap-10
          xl:gap-12"
              >
                <button
                  className="text-2xl bg-[#116530] w-32 hover:bg-[#DEDDDB] hover:text-[#262121] text-white font-bold py-2 px-4 rounded-2xl
           md:text-xl
           lg:text-2xl"
                >
                  Browse
                </button>
                <Link to="/adminLogin">
                  <button
                    className="text-2xl text-black no-underline hover:underline hover:text-[#18A558] py-2
                md:text-xl
                lg:text-2xl"
                  >
                    Admin? Click Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center ">
        <div
          className=" w-full flex items-center flex-col md:space-x-16 
md:flex-row-reverse md:container md:space-x-reverse 
 "
        >
          <div
            className="hidden md:block flex flex-col w-full h-[22rem]
         "
          >
            <img
              className="w-full h-full object-cover"
              src={img2}
            ></img>
          </div>
          <aside className="flex flex-col bg-split-white-green h-[22rem] items-start w-full mx-auto">
            <h4
              className="text-[#262121] text-6xl  
    sm:text-7xl 
    md:text-5xl
    lg:text-6xl
    xl:text-7xl"
            >
              EXPLORE THE
            </h4>
            <h1
              className="text-6xl text-[#18A558] text-white mb-8 font-bold
    sm:text-8xl      
    md:text-5xl           
    lg:text-7xl
    xl:text-8xl "
            >
              BEST BOOKS
            </h1>
            <h4
              className="text-2xl my-8 bg-[#116530] w-52 text-center rounded-2xl text-white mb-8 font-bold 
    sm:tracking-tighter
    md:text-2xl  
    lg:text-2xl
    xl:text-2xl "
            >
              500+ Members
            </h4>

            <h4
              className="text-2xl bg-[#116530] w-40 text-center rounded-2xl text-white mb-8 font-bold 
    sm:tracking-tighter
    md:text-2xl  
    lg:text-2xl
    xl:text-2xl "
            >
              100K+ Books
            </h4>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
