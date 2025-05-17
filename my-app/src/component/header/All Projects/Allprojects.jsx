import React from 'react'
import { Card } from "flowbite-react";
import card1 from "/images/card.1.png"
import card2 from "/images/card.2.png"
import card3 from "/images/axie-infinity-logo 1.png"
import card4 from "/images/IMG_9863-e1660777555411 1.png"

export default function Allprojects() {
  return (

    <>
<div className="bg-black h-auto w-full">

 <div className="flex justify-center items-center flex-col ">
  <div>
    <h1 className="text-4xl  text-white font-bold p-10 flex justify-center">All Projects</h1>
  </div>

      <div className="div">
      <Card className="max-w-2xl bg-gray-800 text-white rounded-xl shadow-lg p-5 px-2">
        <div className="flex items-center gap-4">
          <img src={card1} alt="" className="w-20 h-20 rounded-full" />
          <div>
            <h5 className="text-2xl font-bold tracking-tight">Decentraland</h5>
            <p className="text-sm text-gray-400">3.94 / 5</p>
            <p className="text-sm text-gray-400">Based on 16 votes</p>
            <div className="flex mt-1">
              <span className="text-yellow-400">★★★★☆</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-300">
          Decentraland is a 3D virtual world browser-based platform. Users may buy virtual plots of land in the platform as NFTs via the MANA cryptocurrency, which uses the Ethereum blockchain. Designers can create and sell clothes and accessories for the avatars to be used in the virtual world.
        </p>
        <div className="mt-4 flex justify-between text-sm text-blue-400">
          <a href="#" className="hover:underline">Show less</a>
          <a href="#" className="hover:underline">Go to website</a>
        </div>
      </Card>
      </div>

      <div className="flex justify-center items-center flex-col py-8 px-2">
        <Card className="max-w-2xl bg-gray-800 text-white rounded-xl shadow-lg flex">
        <div className="flex items-center gap-4">
          <img src={card2} alt="" className="w-20 h-20 rounded-full" />
          <div>
            <h5 className="text-2xl font-bold tracking-tight">House of Degenarates</h5>
            <p className="text-sm text-gray-400">3.94 / 5</p>
            <p className="text-sm text-gray-400">Based on 19 votes</p>
            <div className="flex mt-1">
              <span className="text-yellow-400">★★★★☆</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-300">
         Buckle up, fellow degens, because the House of Degenerates ($HOD) is here to redefine the Web3 experience! Embark on the Ultimate Gaming Odyssey...
        </p>
        <div className="mt-4 flex justify-between text-sm text-blue-400">
          <a href="#" className="hover:underline">Show less</a>
          <a href="#" className="hover:underline">Go to website</a>
        </div>
      </Card>
      </div>

       <div className="flex justify-center items-center flex-col  py-8 px-2">
        <Card className="max-w-2xl bg-gray-800 text-white rounded-xl shadow-lg flex">
        <div className="flex items-center gap-4">
          <img src={card3} alt="" className="w-20 h-20 rounded-full" />
          <div>
            <h5 className="text-2xl font-bold tracking-tight">Axie Infinity</h5>
            <p className="text-sm text-gray-400">3.44 / 5</p>
            <p className="text-sm text-gray-400">Based on 16 votes</p>
            <div className="flex mt-1">
              <span className="text-yellow-400">★★★☆☆</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-300">
         Axie Infinity is a non-fungible token-based online video game developed by Vietnamese studio Sky Mavis, known for its in-game economy which uses...
        </p>
        <div className="mt-4 flex justify-between text-sm text-blue-400">
          <a href="#" className="hover:underline">Show less</a>
          <a href="#" className="hover:underline">Go to website</a>
        </div>
      </Card>
      </div>

       <div className="flex justify-center items-center flex-col  py-8 px-2">
        <Card className="max-w-2xl bg-gray-800 text-white rounded-xl shadow-lg flex">
        <div className="flex items-center gap-4">
          <img src={card4} alt="Decentraland Logo" className="w-20 h-20 rounded-full" />
          <div>
            <h5 className="text-2xl font-bold tracking-tight">EVCoin</h5>
            <p className="text-sm text-gray-400">3.65 / 5</p>
            <p className="text-sm text-gray-400">Based on 31 votes</p>
            <div className="flex mt-1">
              <span className="text-yellow-400">★★★☆☆</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-300">
          EverestCoin’s Play to Earn Game, PeakXV is changing the way blockchain games are played, by bringing fun into the picture. Earn while you play, but....
        </p>
        <div className="mt-4 flex justify-between text-sm text-blue-400">
          <a href="#" className="hover:underline">Show less</a>
          <a href="#" className="hover:underline">Go to website</a>
        </div>
      </Card>
      </div>

      
    </div>

    </div>
 



    </>


  )
}
