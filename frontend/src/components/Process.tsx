// import type React from "react"
// import { motion } from "framer-motion"

// import LightRays from "./Lighning"
// import DotGrid from "./DotGrid"


// const Cards = [
//     {
//         title: 'Discover Insights',
//         description: 'We analyze your goals, challenges, and vision to craft a tailored AI strategy.'
//     },
//     {
//         title: 'Develop Solutions',
//         description: 'Our experts design and build cutting-edge AI solutions that drive results.',
//     },
//     {
//         title: 'Deploy Success',
//         description: 'We implement, optimize, and scale your AI-powered success for long-term impact.'
//     }
// ]

// const Process: React.FC = () => {
//     return (
//         <div className="w-[80%] m-auto bg-transparent relative overflow-hidden py-20 px-10 rounded-lg mt-10 mb-10">
//             <div className="absolute inset-0 z-0">
//                 <LightRays rayLength={2} raysColor="#7700cc" raysSpeed={2.5} pulsating={true} />
//             </div>
//             <div className="relative z-10 w-[90%] mx-auto text-center flex flex-col items-center gap-8 mt-15">
//                 <div className="flex items-center justify-center relative z-20 mb-10">
//                     <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full">
//                         <span className="bg-violet-600 text-white text-sm w-[15px] h-[15px] rounded-full"></span>
//                         <span className="text-white text-sm">Features</span>
//                     </div>
//                 </div>

//                 <motion.h1
//                     className="text-4xl md:text-6xl font-semibold  text-white"
//                     initial={{ y: 40, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     AI-Powered Services for
//                     <br />
//                     for AI-Driven Success
//                 </motion.h1>


//                 <p className="max-w-2xl bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
//                     With a focus on innovation and efficiency, we help you stay ahead in an   <br />
//                     ever-evolving digital landscape.
//                 </p>


//                 <div className="flex flex-wrap gap-4 justify-center">
//                     <button className="bg-gradient-to-t from-blue-700 to-purple-600 backdrop-blur-xl text-white p-2 px-6 rounded-lg cursor-pointer">
//                         Book a 15 min call
//                     </button>
//                 </div>
//                 <div className="w-full flex items-center gap-4 justify-center p-2">
//                     {
//                         Cards.map((card) => {
//                             return (
//                                 <RippleCard title={card.description} description={card.description} />
//                             )
//                         })
//                     }
//                 </div>

//                 <div className="w-full max-w-5xl mx-auto relative rounded-2xl p-6 sm:p-10 shadow-lg border border-white/10 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6">
//                     <div className="absolute inset-0">
//                         <DotGrid
//                             dotSize={3}
//                             gap={14}
//                             baseColor="#1e1e2e"
//                             activeColor="#5227FF"
//                             proximity={120}
//                             shockRadius={250}
//                             shockStrength={5}
//                             resistance={750}
//                             returnDuration={1.5}
//                         />
//                     </div>

//                     {/* Left Image Section */}
//                     <div className="relative w-full h-[300px] sm:w-1/2 rounded-xl flex">
//                         <img
//                             src="/assets/ss3.png"
//                             alt="Susan"
//                             className="w-full h-[100`5] object-cover"
//                         />

//                     </div>


//                     {/* Right Content Section */}
//                     <div className="flex flex-col justify-center w-full sm:w-1/2 text-left z-100">
//                         {/* Badge */}
//                         <span className="inline-flex items-center gap-2 text-xs font-medium text-white/90 bg-white/10 px-3 py-1 rounded-full w-fit mb-4">
//                             <span className="w-2 h-2 rounded-full bg-purple-500"></span>
//                             Launch Your Site
//                         </span>

//                         {/* Heading */}
//                         <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
//                             Launch Your Site with Us
//                         </h2>
//                         <p className="text-lg text-gray-400 mb-4">
//                             In a Minutes of Time!
//                         </p>

//                         {/* Subtext */}
//                         <p className="text-sm text-gray-300 leading-relaxed mb-6">
//                             Build your site effortlessly and showcase your work with confidence.
//                             Ready to stand out? Get started today!
//                         </p>

//                         {/* Bottom Actions */}
//                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                             <button className="cursor-pointer bg-white/50 bg-blur-xl text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition">
//                                 Book an Appointment
//                             </button>

//                             <div className="flex items-center gap-2 text-sm text-gray-300">
//                                 <span className="text-yellow-400 text-lg">★★★★★</span>
//                                 <span>200+ Agencies Rated</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Process





// const RippleCard: React.FC<{ title: string, description: string }> = ({ title, description }) => {
//     return (
//         <div className="w-full bg-transparent relative flex items-center justify-center py-10">
//             <motion.div
//                 initial={{ opacity: 0, y: -100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 100 }}
//                 viewport={{ once: false }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//                 className="relative w-[420px]  bg-black/70 border border-white/10 rounded-3xl shadow-xl overflow-hidden">

//                 <div className="absolute inset-0">
//                     <DotGrid
//                         dotSize={2}
//                         gap={14}
//                         baseColor="#1e1e2e"
//                         activeColor="#5227FF"
//                         proximity={120}
//                         shockRadius={250}
//                         shockStrength={5}
//                         resistance={750}
//                         returnDuration={1.5}
//                     />
//                 </div>


//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col items-center px-6 py-10">
//                     {/* Top Icon */}
//                     <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ type: "spring", stiffness: 200, damping: 10 }}
//                         className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg mb-6"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 256 256"
//                             className="w-8 h-8 text-white fill-current"
//                         >
//                             <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
//                         </svg>
//                     </motion.div>

//                     {/* Title + Text */}
//                     <h2 className="text-lg md:text-lg font-bold text-white text-center w-full">
//                         {
//                             title
//                         }
//                     </h2>
//                     <p className="text-slate-300 text-center mt-3 mb-10">
//                         {description}
//                     </p>
//                 </div>

//             </motion.div >
//         </div >
//     )
// }

import type React from "react";
import { motion } from "framer-motion";
import LightRays from "./Lighning";
import DotGrid from "./DotGrid";

const Cards = [
    {
        title: 'Discover Insights',
        description: 'We analyze your goals, challenges, and vision to craft a tailored AI strategy.'
    },
    {
        title: 'Develop Solutions',
        description: 'Our experts design and build cutting-edge AI solutions that drive results.',
    },
    {
        title: 'Deploy Success',
        description: 'We implement, optimize, and scale your AI-powered success for long-term impact.'
    }
];

const Process: React.FC = () => {
    return (
        <div className="w-full max-w-[80%] mx-auto bg-transparent relative overflow-hidden py-16 px-4 sm:px-10 rounded-lg mt-10 mb-10">

            <div className="absolute inset-0 z-0">
                <LightRays rayLength={2} raysColor="#7700cc" raysSpeed={2.5} pulsating />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8">

                <div className="flex items-center justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full">
                        <span className="bg-violet-600 w-3 h-3 rounded-full"></span>
                        <span className="text-white text-sm">Features</span>
                    </div>
                </div>


                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    AI-Powered Services for <br /> AI-Driven Success
                </motion.h1>


                <p className="max-w-2xl text-sm sm:text-base md:text-lg bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent text-center">
                    With a focus on innovation and efficiency, we help you stay ahead in an <br />
                    ever-evolving digital landscape.
                </p>


                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-gradient-to-t from-blue-700 to-purple-600 backdrop-blur-xl text-white p-2 px-6 rounded-lg cursor-pointer text-sm sm:text-base">
                        Book a 15 min call
                    </button>
                </div>


                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-10 flex-wrap">
                    {Cards.map((card, index) => (
                        <RippleCard key={index} title={card.title} description={card.description} />
                    ))}
                </div>


                <div className="w-full max-w-5xl mx-auto relative rounded-2xl p-4 sm:p-6 md:p-10 shadow-lg border border-white/10 flex flex-col sm:flex-row items-stretch gap-4 mt-10 overflow-hidden">
                    {/* DotGrid Background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <DotGrid
                            dotSize={3}
                            gap={14}
                            baseColor="#1e1e2e"
                            activeColor="#5227FF"
                            proximity={120}
                            shockRadius={250}
                            shockStrength={5}
                            resistance={750}
                            returnDuration={1.5}
                        />
                    </div>

                    {/* Left Image */}
                    <div className="relative w-full sm:w-1/2 h-48 sm:h-auto rounded-xl overflow-hidden flex-shrink-0">
                        <img
                            src="/assets/ss3.png"
                            alt="Launch"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col justify-center w-full sm:w-1/2 text-left z-10 px-2 sm:px-6 py-4 sm:py-0">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/90 bg-white/10 px-3 py-1 rounded-full w-fit mb-4">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            Launch Your Site
                        </span>

                        {/* Heading */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Launch Your Site with Us
                        </h2>

                        {/* Subheading */}
                        <p className="text-base sm:text-lg text-gray-400 mb-4">In Minutes of Time!</p>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                            Build your site effortlessly and showcase your work with confidence.
                            Ready to stand out? Get started today!
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <button className="cursor-pointer bg-white/50 backdrop-blur-xl text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition w-full sm:w-auto text-center">
                                Book an Appointment
                            </button>
                            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-300 justify-center sm:justify-start">
                                <span className="text-yellow-400 text-lg">★★★★★</span>
                                <span>200+ Agencies Rated</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Process;

const RippleCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
        <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[420px] bg-transparent relative flex items-center justify-center py-6">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="relative w-full bg-black/70 border border-white/10 rounded-3xl shadow-xl overflow-hidden"
            >
                <div className="absolute inset-0">
                    <DotGrid
                        dotSize={2}
                        gap={14}
                        baseColor="#1e1e2e"
                        activeColor="#5227FF"
                        proximity={120}
                        shockRadius={250}
                        shockStrength={5}
                        resistance={750}
                        returnDuration={1.5}
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center px-6 py-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg mb-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            className="w-8 h-8 text-white fill-current"
                        >
                            <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
                        </svg>
                    </motion.div>

                    <h2 className="text-lg md:text-lg font-bold text-white text-center w-full">{title}</h2>
                    <p className="text-slate-300 text-center mt-2">{description}</p>
                </div>
            </motion.div>
        </div>
    );
};
