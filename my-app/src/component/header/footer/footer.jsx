import React from 'react';
import myImg from '/images/myImg.png';

export default function FooterComponent() {
    return (
        <footer className="w-full bg-gray-300">
            <div className="flex flex-col md:flex-row ">
                {/* Left Panel */}
                <div className="w-full md:w-1/2 min-h-[50vh] flex flex-col justify-center items-center bg-black text-white p-8 space-y-6 text-center">
                    <img src={myImg} alt="Logo" className="h-10" />
                    <p className="text-gray-300">
                        A SocialFi platform for Web3.0 projects to connect with users
                    </p>
                    <p>
                        WebXV is a decentralized social platform for Web3.0 users to meet and connect with one another
                    </p>
                </div>

                {/* Right Panel */}
                <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center items-center p-8">
                    <div className="flex flex-col md:flex-row justify-around gap-8">
                        {/* Company Info */}
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Company</h1>
                            <ul className="space-y-2 cursor-pointer">
                                <li>About Us</li>
                                <li>Projects</li>
                                <li>Community</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Social</h1>
                            <ul className="space-y-2 cursor-pointer">
                                <li>TikTok</li>
                                <li>Twitter</li>
                                <li>YouTube</li>
                                <li>Telegram</li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className=" align-text-bottom mt-20 text-sm text-gray-400 ">
                        © Copyright 2023 XV | All Rights Reserved | WhitePaper
                    </div>
                </div>
            </div>
        </footer>
    );
}

