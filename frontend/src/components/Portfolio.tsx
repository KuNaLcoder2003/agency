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
        "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
        "https://assets.aceternity.com/animated-modal.png",
        "https://assets.aceternity.com/animated-testimonials.webp",
        "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
        "https://assets.aceternity.com/github-globe.png",
        "https://assets.aceternity.com/glare-card.png",
        "https://assets.aceternity.com/layout-grid.png",
        "https://assets.aceternity.com/flip-text.png",
        "https://assets.aceternity.com/hero-highlight.png",
        "https://assets.aceternity.com/carousel.webp",
        "https://assets.aceternity.com/placeholders-and-vanish-input.png",
        "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
        "https://assets.aceternity.com/signup-form.png",
        "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
        "https://assets.aceternity.com/spotlight-new.webp",
        "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
        "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
        "https://assets.aceternity.com/tabs.png",
        "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
        "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
        "https://assets.aceternity.com/glowing-effect.webp",
        "https://assets.aceternity.com/hover-border-gradient.png",
        "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
        "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
        "https://assets.aceternity.com/macbook-scroll.png",
        "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
        "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
        "https://assets.aceternity.com/multi-step-loader.png",
        "https://assets.aceternity.com/vortex.png",
        "https://assets.aceternity.com/wobble-card.png",
        "https://assets.aceternity.com/world-map.webp",
    ];
    return (
        <div className="w-full">
            <ThreeDMarquee images={images} />
        </div>
    );
}




