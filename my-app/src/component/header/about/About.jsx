import React from 'react'
import aboutimg from "/images/about.pic.png"
import { Card } from "flowbite-react";
import  aboutimg1 from "/images/Image (1).png"
import aboutimg2 from "/images/about.pic2.png"
import aboutimg3 from "/images/about.pic3.png"
import aboutimg4 from "/images/about.pic4.png"
export default function AboutComponent() {
  return (
   <>
     <div className="w-full bg-gray-300 flex flex-col md:flex-row justify-center">
           {/* Left Panel */}
           <div className="w-full md:w-1/2 min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center items-center  bg-black text-white p-8 space-y-6 text-center">
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

         {/*--------------------------> about hero section start <-------------- */}
<div className="bg-black h-auto w-full">

 <div className="flex justify-center items-center flex-col ">
  <div>
    <h1 className="text-4xl  text-white font-bold p-10 flex justify-center">How you Buy $XV Token</h1>
  </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 ">
  <Card className="bg-gray-950 text-white p-6 rounded-xl shadow-lg">
    <img src={aboutimg1} alt="Wallet Icon" className="mb-4" />
    <h5 className="text-2xl font-bold mb-2">Create a Wallet</h5>
    <p className="text-gray-400">
      Download Metamask App or any wallet <br />
      Download the Google Chrome extension
    </p>
  </Card>

  <Card className="bg-gray-950 text-white p-6 rounded-xl shadow-lg">
    <img src={aboutimg2} alt="Get ETH/BNB Icon" className="mb-4" />
    <h5 className="text-2xl font-bold mb-2">Get ETH/BNB</h5>
    <p className="text-gray-400">
      Have ETH or BNB in your wallet to swap to $XV <br />
      If you don’t have any ETH, you can buy directly on Metamask <br />
      Transfer from another wallet
    </p>
  </Card>

  <Card className="bg-gray-950 text-white p-6 rounded-xl shadow-lg">
    <img src={aboutimg3} alt="Uniswap or PancakeSwap Icon" className="mb-4" />
    <h5 className="text-2xl font-bold mb-2">Go to Uniswap or PancakeSwap</h5>
    <p className="text-gray-400">
      Connect to Uniswap if you’re buying on ETH side or PancakeSwap <br />
      Paste the $XV token address into Uniswap, select XV, and confirm. <br />
      When Metamask prompts you for a wallet signature, sign.
    </p>
  </Card>

  <Card className="bg-gray-950 text-white p-6 rounded-xl shadow-lg">
    <img src={aboutimg4} alt="Swap Icon" className="mb-4" />
    <h5 className="text-2xl font-bold mb-2">Swap your ETH or BNB for $XV</h5>
    <p className="text-gray-400">
      Swap your ETH/BNB for $XV <br />
      We have a 5% tax so you need to set your slippage a little above 6% <br />
      You may need to use higher slippage during times of market volatility
    </p>
  </Card>
</div>

      </div>
      </div>
      

         
   </>
  )
}
