// import type React from "react";
// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
// import LogoLoop from "./Logo";
// import { motion } from "framer-motion"

// const techLogos = [
//     { node: <SiReact color="white" />, title: "React", href: "https://react.dev" },
//     { node: <SiNextdotjs color="white" />, title: "Next.js", href: "https://nextjs.org" },
//     { node: <SiTypescript color="white" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//     { node: <SiTailwindcss color="white" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
// ];


// const Hero: React.FC = () => {
//     return (
//         <div className="w-[70%] h-[650px] flex flex-col items-center" style={{ backgroundImage: 'url(/assets/globe.png)', backgroundPositionY: '200px', backgroundPositionX: "-50%", backgroundSize: '100%', backgroundRepeat: "no-repeat" }}>
//             <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-4 py-3 rounded-full mb-14">
//                 <span className="bg-violet-600 text-white text-sm px-3 py-0.5 rounded-full">2025</span>
//                 <span className="text-white text-sm">Next–Gen AI Studio</span>
//             </div>
//             <div className="flex flex-col items-center gap-6 mb-10">
//                 <motion.h1

//                     className="text-8xl font-bold text-white text-center">AI-Driven Success <br></br> Redefining the Future.</motion.h1>
//                 <p className="text-slate-200 text-center">Creating latest solutions that redefine innovation. <br />
//                     Stay ahead with AI-powered technology for the future.
//                 </p>
//                 <div className="flex items-center gap-4 justify-center">
//                     <button className="bg-white text-black p-2 px-6 rounded-lg cursor-pointer">Connect with us</button>
//                     <button className="bg-white/30 bg-blur-xl text-white p-2 px-6 rounded-lg cursor-pointer">What is Agency?</button>
//                 </div>
//                 <div style={{ height: '200px', position: 'relative', overflow: 'hidden', width: '70%' }}>
//                     <div className="w-[80%] m-auto border-[0.05px] border-slate-300 mb-8"></div>
//                     <LogoLoop
//                         logos={techLogos}
//                         speed={50}
//                         direction="left"
//                         logoHeight={48} gap={40}
//                         pauseOnHover
//                         scaleOnHover
//                         fadeOut
//                         fadeOutColor="#ffffff"
//                         ariaLabel="Technology partners"
//                     />
//                 </div>





//             </div>
//         </div>
//     )
// }

// export default Hero;

import type React from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from "./Logo";
import { motion } from "framer-motion"

const techLogos = [
    { node: <SiReact color="white" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs color="white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript color="white" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss color="white" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const Hero: React.FC = () => {
    return (
        <div
            className="w-full max-w-7xl mx-auto min-h-[70vh] flex flex-col items-center px-4 md:px-8 lg:px-12"
            style={{
                backgroundImage: 'url(/assets/globe.png)',
                backgroundPositionY: '200px',
                backgroundPositionX: "-50%",
                backgroundSize: '100%',
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full mb-8 md:mb-14">
                <span className="bg-violet-600 text-white text-xs md:text-sm px-2 md:px-3 py-0.5 rounded-full">2025</span>
                <span className="text-white text-xs md:text-sm">Next–Gen AI Studio</span>
            </div>

            {/* Headline + Text */}
            <div className="flex flex-col items-center gap-6 mb-8 md:mb-10 text-center">
                <motion.h1
                    className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
                >
                    AI-Driven Success <br /> Redefining the Future.
                </motion.h1>
                <p className="text-slate-200 text-sm sm:text-base md:text-lg">
                    Creating latest solutions that redefine innovation. <br />
                    Stay ahead with AI-powered technology for the future.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <button className="bg-white text-black px-6 py-2 rounded-lg cursor-pointer text-sm sm:text-base">
                        Connect with us
                    </button>
                    <button className="bg-white/30 backdrop-blur-md text-white px-6 py-2 rounded-lg cursor-pointer text-sm sm:text-base">
                        What is Agency?
                    </button>
                </div>
            </div>

            {/* Logo Loop */}
            <div className="relative w-full max-w-4xl h-[150px] sm:h-[180px] md:h-[200px] overflow-hidden">
                <div className="w-[90%] mx-auto border-[0.05px] border-slate-300 mb-6"></div>
                <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="left"
                    logoHeight={40} // reduced for small screens
                    gap={32}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
            </div>
        </div>
    )
}

export default Hero;
