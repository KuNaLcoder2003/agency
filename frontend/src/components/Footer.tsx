import React from "react";


const Footer: React.FC = () => {
    return (
        <div className="w-screen h-screen">
            <Test />
        </div>
    )
}

export default Footer;

import Hyperspeed from "./HyperSpeed";
import { motion } from "framer-motion";

const Test = () => {
    return (
        <div className="relative w-full h-full bg-black overflow-hidden">

            {/* 🔹 Hyperspeed Effect */}
            <div className="absolute inset-0">
                <Hyperspeed
                    effectOptions={{
                        onSpeedUp: () => { },
                        onSlowDown: () => { },
                        distortion: "turbulentDistortion",
                        length: 400,
                        roadWidth: 10,
                        islandWidth: 2,
                        lanesPerRoad: 4,
                        fov: 90,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 20,
                        lightPairsPerRoadWay: 40,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.12, 0.5],
                        lightStickHeight: [1.3, 1.7],
                        movingAwaySpeed: [60, 80],
                        movingCloserSpeed: [-120, -160],
                        carLightsLength: [400 * 0.03, 400 * 0.2],
                        carLightsRadius: [0.05, 0.14],
                        carWidthPercentage: [0.3, 0.5],
                        carShiftX: [-0.8, 0.8],
                        carFloorSeparation: [0, 5],
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xffffff,
                            brokenLines: 0xffffff,
                            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                            sticks: 0x03b3c3,
                        },
                    }}
                />
            </div>



            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 text-white items-center z-10">

                <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full mb-10">
                    <span className="bg-violet-600 text-white text-sm w-[15px] h-[15px] rounded-full"></span>
                    <span className="text-white text-sm">Join Us</span>
                </div>


                <motion.h1
                    className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white text-center"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Ready to Elevate Your Brand <br />
                    vision into reality with expert support.
                </motion.h1>
                <p className="text-slate-200 max-w-2xl text-center">
                    Ready to take the next step? Join us now and start transforming your  <br />
                    their goals and create lasting impact.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-gradient-to-t from-blue-700 to-purple-600 backdrop-blur-xl text-white p-2 px-6 rounded-lg cursor-pointer">
                        Book an appointement
                    </button>
                </div>
            </div>
            <footer className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-md px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo + Tagline */}
                <div className="flex flex-col items-center md:items-start text-white gap-2">
                    <h1 className="text-2xl font-bold">Kunal</h1>
                    <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
                        Futuristic AI & Web Experiences for modern businesses.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-6 text-white font-medium text-center md:text-left">
                    <a href="#" className="hover:text-violet-400 transition">Home</a>
                    <a href="#" className="hover:text-violet-400 transition">Features</a>
                    <a href="#" className="hover:text-violet-400 transition">Pricing</a>
                    <a href="#" className="hover:text-violet-400 transition">Docs</a>
                    <a href="#" className="hover:text-violet-400 transition">Contact</a>
                </div>

                {/* Social + CTA */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center hover:scale-110 transition">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center hover:scale-110 transition">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 110 20 10 10 0 010-20z" /></svg>
                        </a>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transition">
                        Subscribe
                    </button>
                </div>

            </footer>
        </div>
    );
};


