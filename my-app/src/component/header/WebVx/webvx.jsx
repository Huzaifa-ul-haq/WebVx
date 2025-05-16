import React from 'react'
import { Button, Label, TextInput } from "flowbite-react";

import logo1 from "/src/assets/images/logo (1).png"
import logo2 from "/src/assets/images/logo (2).png"
import logo3 from "/src/assets/images/logo (3).png"
import logo4 from "/src/assets/images/logo (4).png"
import logo5 from "/src/assets/images/logo (5).png"
import logo6 from "/src/assets/images/logo.6.png"
import logo7 from "/src/assets/images/logo.7.png"
import aboutimg from "/src/assets/images/about.pic.png"
import crypto from "/src/assets/images/History.png"


export default function HomeComponent() {
  return (
    <>
      {/* ----------------> hero section start <------------------ */}
      <div className="w-full min-h-fit bg-gray-600 flex flex-col md:flex-row">
        {/* Left Panel (Heading - taller on mobile) */}
        <div className="w-full md:w-[50%] h-[80vh] md:min-h-auto flex flex-col justify-center items-center text-white bg-black ">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-center leading-tight">
            Welcome To <br /> Webvx
          </h1>
          <p className="text-lg md:text-xl max-w-md my-4">
            Meet cool WEB3 projects and connect with <br /> other crypto enthusiasts!
          </p>
          <div>
            <button className='btn1 my-10 rounded-md w-40 bg-blue-600 text-white p-4 cursor-pointer font-bold'>Register Now</button>
          </div>
        </div>

        {/* Right Panel (Form - scrolls into view on mobile) */}
        <div className="w-full md:w-[50%] h-[80vh] md:min-h-auto flex flex-col justify-center items-center text-white bg-black py-2">
          <form className="w-full max-w-md p-6 flex flex-col gap-4 bg-gray-800 rounded-2xl">
            <h1 className="text-2xl md:text-3xl text-center">Welcome Back</h1>

            <div>
              <Label htmlFor="email1" className="mb-1 block">Your email</Label>
              <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>

            <div>
              <Label htmlFor="password1" className="mb-1 block">Your password</Label>
              <TextInput id="password1" type="password" required />
            </div>

            <Button className='cursor-pointer btn1' type="submit">Login</Button>

            <div className="text-center text-sm text-gray-300">
              <p className="mb-1">Forgotten your password?</p>
              <p>Don’t have an account? <a href="#" className="text-blue-600">Register</a></p>
            </div>
          </form>
        </div>
      </div>

      {/* /*------------------> second aection start <------------- */}

      <div className="bg-black text-blue-700 w-full h-80  ">
        <div className="flex justify-center">
          <h1 className="text-4xl font-extrabold pb-10">Our Partner</h1>
        </div>
        <div className="bg-black flex flex-wrap justify-center items-center gap-25 md:gap-6; ">
          <img src={logo1} alt="logo1" className="w-24 sm:w-28 md:w-32" />
          <img src={logo2} alt="logo2" className="w-24 sm:w-28 md:w-32" />
          <img src={logo3} alt="logo3" className="w-24 sm:w-28 md:w-32" />
          <img src={logo4} alt="logo4" className="w-24 sm:w-28 md:w-32" />
          <img src={logo5} alt="logo5" className="w-24 sm:w-28 md:w-32" />
          <img src={logo6} alt="logo6" className="w-24 sm:w-28 md:w-32" />
          <img src={logo7} alt="logo7" className="w-24 sm:w-28 md:w-32 " />
        </div>
      </div>

      {/* /*------------------> second aection end <------------- */}




      {/* -------------------------> about section start<---------------- */}

      <div className="w-full bg-gray-300 flex flex-col md:flex-row border-2 justify-center border-blue-500">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center items-center bg-black text-white p-8 space-y-6 text-center">
          <h2 className="text-lg font-bold font-mono text-blue-600  text-left">ABOUT US</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold font-sans text-white leading-tight">
            Who We Are
          </h1>
          <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed max-w-xl text-left">
            <span className="block mb-4">
              <span className="font-semibold text-white">XV</span> is a community-focused project led by a highly experienced team of Web3 builders and traders. Our founder, A On, made his name in the industry moderating for several early crypto projects before the 2021 bull run.
            </span>
            <span className="block">
              <span className="font-semibold text-white">XV</span> is also supported by several team members that are actively involved in the day-to-day running of the community. Join us on Telegram and Twitter.
            </span>
          </p>
        </div>

        {/* Right Panel (Image) */}
        <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-[80vh] flex justify-center items-center bg-black p-4">
          <img
            src={aboutimg}
            alt="About Us"
            className="w-full max-w-md md:max-w-lg object-contain h-auto"
          />
        </div>
      </div>

      {/* -------------------------> about section end<---------------- */}



      {/* ---------------------------->crypto section start<--------------------- */}
      <div className="bg-black text-blue-700 w-full h-auto pb-6">
        <div className="flex justify-center py-5">
          <h1 className='text-blue-500 pt-5'>cryptocurrencies</h1>
        </div>
        <div className="flex justify-center">

          <h1 className="text-4xl font-extrabold ">Top crypto chart</h1>
        </div>
        <div className="bg-black flex flex-wrap justify-center items-center gap-25 md:gap-6; p-5">
          <img src={crypto} alt="logo1" className="w-auto sm:w-auto md:w-auto p-5" />

        </div>
      </div>

      {/* ---------------------------->crypto section end<--------------------- */}


            {/* --------------------------------->Token section start <-------------- */}

      <div className="bg-black text-white w-full h-auto pt-15 p-5  border-2 border-blue-700">
        <div className="flex justify-center py-5">
          <h1 className='text-white font-extrabold text-4xl pt-5 p-0'>With XV Token the <br /> possibilities are limitless</h1>
        </div>
        <div className="flex justify-center ">
          <h1 className=" p-4">One token for everything. 
            $XV is the utility token for an ecosystem that has <br /> gotten bigger than ever before and is now fully community-oriented.</h1>
        </div>
          <div className='flex justify-center'>
            <button className=' my-10 rounded-md w-50 bg-blue-500 text-white p-4 cursor-pointer btn1'>Register Now</button>
          </div>
                
      </div>


      {/* --------------------------------->Token section end <-------------- */}



    </>
  )
}
