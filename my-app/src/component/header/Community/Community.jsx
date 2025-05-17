
import React from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import communityImg from "/images/Users.png"

export default function Community() {
  return (
    <div>
       {/* ----------------> hero section start <------------------ */}
            <div className="w-full min-h-fit bg-gray-600 flex flex-col md:flex-row">
              {/* Left Panel (Heading - taller on mobile) */}
              <div className="w-full md:w-[50%] h-[70vh] md:min-h-auto flex flex-col justify-center items-center p-5 text-white bg-black ">
                <img src={communityImg} alt="" />
              </div>
      
              {/* Right Panel (Form - scrolls into view on mobile) */}
              <div className="w-full md:w-[50%] h-[70vh] md:min-h-aauto flex flex-col justify-center items-center text-white bg-black py-2">
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
      
                  <Button className='cursor-pointer' type="submit">Login</Button>
      
                  <div className="text-center text-sm text-gray-300">
                    <p className="mb-1">Forgotten your password?</p>
                    <p>Don’t have an account? <a href="#" className="text-blue-600">Register</a></p>
                  </div>
                </form>
              </div>
            </div>
    </div>
  )
}
