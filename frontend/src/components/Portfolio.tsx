import type React from "react";

import { motion } from "framer-motion"
import PrismaticBurst from "./Viel";

// const images = [
//     "https://picsum.photos/id/1011/400/500",
//     "https://picsum.photos/id/1012/400/500",
//     "https://picsum.photos/id/1013/400/500",
//     "https://picsum.photos/id/1014/400/500",
//     "https://picsum.photos/id/1015/400/500",
//     "https://picsum.photos/id/1016/400/500",
//     "https://picsum.photos/id/1018/400/500",
// ];
const PortFolio: React.FC = () => {
    return (
        <div className="w-[80%] m-auto bg-transparent relative overflow-hidden py-20 px-10 rounded-lg mt-10 mb-10">
            {/* Services Tag (stays above rays) */}
            <div className="flex items-center justify-center relative z-20 mb-10">
                <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full">
                    <span className="bg-violet-600 text-white text-sm w-[15px] h-[15px] rounded-full"></span>
                    <span className="text-white text-sm">24/7 Support</span>
                </div>
            </div>


            {/* Background Light Rays */}
            <div className="absolute inset-0 z-0">
                <PrismaticBurst
                    animationType="rotate3d"
                    intensity={2}
                    speed={0.5}
                    distort={1.0}
                    paused={false}
                    offset={{ x: 0, y: 0 }}
                    hoverDampness={0.25}
                    rayCount={24}
                    mixBlendMode="lighten"
                    colors={['#6800b3', '#4d3dff',]}
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-[90%] mx-auto text-center flex flex-col items-center gap-8">
                {/* Heading */}
                <motion.h1
                    className="text-4xl md:text-6xl font-semibild text-white"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    What Our Clients Say <br />
                    About Reboot’s Excellence
                </motion.h1>

                {/* Subtext */}
                <p className="text-slate-200 max-w-2xl">
                    Hear from our happy clients! See how we’ve helped them achieve  <br />
                    their goals and create lasting impact.
                </p>


                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-gradient-to-t from-blue-700 to-purple-600 backdrop-blur-xl text-white p-2 px-6 rounded-lg cursor-pointer">
                        Book an appointement
                    </button>
                </div>
                <div className="w-full m-auto flex items-center justify-center">
                    <ThreeDMarqueeDemo />
                </div>



            </div>
        </div>
    )
}

export default PortFolio

"use client";
import { ThreeDMarquee } from "./Marquee";

function ThreeDMarqueeDemo() {
    const images = [
        "https://yavuzceliker.github.io/sample-images/image-1021.jpg",
        "https://yavuzceliker.github.io/sample-images/image-1.jpg",
        "https://yavuzceliker.github.io/sample-images/image-19.jpg",
        "https://yavuzceliker.github.io/sample-images/image-101.jpg",
        "https://yavuzceliker.github.io/sample-images/image-191.jpg",
        "https://yavuzceliker.github.io/sample-images/image-48.jpg",
        "https://yavuzceliker.github.io/sample-images/image-92.jpg",
        "https://yavuzceliker.github.io/sample-images/image-3.jpg",
        "https://yavuzceliker.github.io/sample-images/image-2.jpg",
        "https://yavuzceliker.github.io/sample-images/image-6.jpg",
        "https://yavuzceliker.github.io/sample-images/image-8.jpg",
        "https://yavuzceliker.github.io/sample-images/image-10.jpg",
        "https://yavuzceliker.github.io/sample-images/image-17.jpg",
        "https://yavuzceliker.github.io/sample-images/image-31.jpg",
        "https://yavuzceliker.github.io/sample-images/image-18.jpg",
        "https://yavuzceliker.github.io/sample-images/image-14.jpg",
        "https://yavuzceliker.github.io/sample-images/image-23.jpg",
        "https://yavuzceliker.github.io/sample-images/image-999.jpg",
        "https://yavuzceliker.github.io/sample-images/image-78.jpg",
        "https://yavuzceliker.github.io/sample-images/image-14.jpg",
        "https://yavuzceliker.github.io/sample-images/image-16.jpg",
        "https://yavuzceliker.github.io/sample-images/image-87.jpg",
        "https://yavuzceliker.github.io/sample-images/image-90.jpg",
        "https://yavuzceliker.github.io/sample-images/image-141.jpg",
        "https://yavuzceliker.github.io/sample-images/image-7.jpg",
        "https://yavuzceliker.github.io/sample-images/image-1011.jpg",
        "https://yavuzceliker.github.io/sample-images/image-1023.jpg",
        "https://yavuzceliker.github.io/sample-images/image-156.jpg",
        "https://yavuzceliker.github.io/sample-images/image-1018.jpg",
        "https://yavuzceliker.github.io/sample-images/image-1019.jpg",
        "https://yavuzceliker.github.io/sample-images/image-23.jpg",
    ];
    return (
        <div className="w-full">
            <ThreeDMarquee images={images} />
        </div>
    );
}




