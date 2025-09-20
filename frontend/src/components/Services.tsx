// import type React from "react";
// import { motion } from "framer-motion";
// import LightRays from "./Lighning";
// import { SiAndroidstudio, SiCapacitor, SiDocker, SiExpress, SiFigma, SiFramer, SiKotlin, SiNextdotjs, SiNodedotjs, SiReact, SiShadcnui, SiTailwindcss, SiThreedotjs } from "react-icons/si";
// import { FaAws } from "react-icons/fa";
// import { TbBrandReactNative } from "react-icons/tb";
// import { DiSwift } from "react-icons/di";
// import { IoLogoIonic } from "react-icons/io";
// import SplitText from "./SplitText";
// import { Clock, Eye, Layers, TrendingUp } from 'lucide-react';
// import PrimsCard from "./PrismCrad";

// const CardsData = [
//     {
//         title: 'Webiste with modern aesthetics',
//         desc: 'We build beautiful websites with backend integration',
//         icons: [
//             { icon: <SiNextdotjs />, label: "Next.js" },
//             { icon: <SiExpress />, label: "Express.js" },
//             { icon: <SiTailwindcss />, label: "TailwindCSS" },
//             { icon: <SiNodedotjs />, label: "Node.js" },
//             { icon: <FaAws />, label: "AWS" },
//             { icon: <SiDocker />, label: "Docker" },
//         ],
//         img: '/assets/ss1.png'
//     },
//     {
//         title: 'Custom components and templates',
//         desc: 'We build amazing custom componets and templates',
//         icons: [
//             { icon: <SiFramer />, label: "Framer" },
//             { icon: <SiShadcnui />, label: "ShadCN" },
//             { icon: <SiTailwindcss />, label: "TailwindCSS" },
//             { icon: <SiReact />, label: "React" },
//             { icon: <SiThreedotjs />, label: "Three.js" },
//             { icon: <SiFigma />, label: "Figma" },
//         ],
//         img: '/assets/ss3.png'
//     },
//     {
//         title: 'Mobile Apps',
//         desc: 'End-to-End mobile apps with AI integration',
//         icons: [
//             { icon: <SiAndroidstudio />, label: "Android Studio" },
//             { icon: <TbBrandReactNative />, label: "React Native" },
//             { icon: <SiKotlin />, label: "Kotlin" },
//             { icon: <DiSwift />, label: "Swift" },
//             { icon: <IoLogoIonic />, label: "Ionic" },
//             { icon: <SiCapacitor />, label: "Capacitor" },
//         ],
//         img: 'https://framerusercontent.com/images/Le7PeOz3D7n0uV3GIgttGnZjJY.png?scale-down-to=512'
//     }


// ]

// const features = [
//     {
//         icon: Clock,
//         title: "Real-Time Data",
//         description: "Instant insights for faster decision-making."
//     },
//     {
//         icon: Eye,
//         title: "Vision Capabilities",
//         description: "AI-powered image and video recognition."
//     },
//     {
//         icon: Layers,
//         title: "Optimized UX/UI",
//         description: "Smart design that enhances user experience."
//     },
//     {
//         icon: TrendingUp,
//         title: "Predictive Analytics",
//         description: "Make data-driven decisions with AI insights."
//     }
// ];

// const Services: React.FC = () => {
//     return (
//         <div className="w-[80%] m-auto bg-transparent relative overflow-hidden py-20 px-10 rounded-lg">
//             {/* Services Tag (stays above rays) */}
//             <div className="flex items-center justify-center relative z-20 mb-10">
//                 <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full">
//                     <span className="bg-violet-600 text-white text-sm w-[15px] h-[15px] rounded-full"></span>
//                     <span className="text-white text-sm">Services</span>
//                 </div>
//             </div>
//             <SplitText
//                 text="Hello, GSAP!"
//                 className="text-2xl font-semibold text-center text-white"
//                 delay={100}
//                 duration={0.6}
//                 ease="power3.out"
//                 splitType="chars"
//                 from={{ opacity: 0, y: 40 }}
//                 to={{ opacity: 1, y: 0 }}
//                 threshold={0.1}
//                 rootMargin="-100px"
//                 textAlign="center" />

//             {/* Background Light Rays */}
//             <div className="\">
//                 <LightRays
//                     raysOrigin="top-center"
//                     raysColor="#6800b3"
//                     raysSpeed={1.5}
//                     lightSpread={0.8}
//                     rayLength={1.2}
//                     followMouse={true}
//                     mouseInfluence={0.1}
//                     noiseAmount={0.1}
//                     distortion={0.05}
//                     className="w-full h-full"
//                 />
//             </div>

//             {/* Foreground Content */}
//             <div className="relative z-10 w-[90%] mx-auto text-center flex flex-col items-center gap-8">
//                 {/* Heading */}
//                 <motion.h1
//                     className="text-4xl md:text-6xl font-bold text-white"
//                     initial={{ y: 40, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     Packed with Innovation
//                 </motion.h1>

//                 {/* Subtext */}
//                 <p className="text-slate-200 max-w-2xl">
//                     Nubien is packed with cutting-edge features <br />
//                     designed to elevate your agency or portfolio.
//                 </p>

//                 {/* CTA */}
//                 <div className="flex flex-wrap gap-4 justify-center">
//                     <button className="bg-gradient-to-t from-blue-700 to-purple-600 backdrop-blur-xl text-white p-2 px-6 rounded-lg cursor-pointer">
//                         Book an appointment
//                     </button>
//                 </div>

//                 {/* Cards Section */}
//                 <div className="w-full flex flex-col md:flex-row items-center gap-6 justify-center mt-10">
//                     {
//                         CardsData.map((data, index) => {
//                             return (
//                                 <PrimsCard key={index} title={data.title} description={data.desc} icons={data.icons} img={data.img} />
//                             )
//                         })
//                     }
//                 </div>
//                 <div className="border-[0.1px] border-b-stone-50 w-[50%] m-auto">

//                 </div>
//                 <div className="bg-transparent py-16 px-4">
//                     <div className="max-w-7xl mx-auto">
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {features.map((feature, index) => {
//                                 const IconComponent = feature.icon;
//                                 return (
//                                     <div key={index} className="text-center">
//                                         <div className="mb-4 flex justify-center">
//                                             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
//                                                 <IconComponent className="w-6 h-6 text-gray-800" />
//                                             </div>
//                                         </div>
//                                         <h3 className="text-white text-lg font-semibold mb-2">
//                                             {feature.title}
//                                         </h3>
//                                         <p className="text-gray-300 text-sm leading-relaxed">
//                                             {feature.description}
//                                         </p>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;

import type React from "react";
import { motion } from "framer-motion";
import LightRays from "./Lighning";
import {
    SiAndroidstudio,
    SiCapacitor,
    SiDocker,
    SiExpress,
    SiFigma,
    SiFramer,
    SiKotlin,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiShadcnui,
    SiTailwindcss,
    SiThreedotjs
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { DiSwift } from "react-icons/di";
import { IoLogoIonic } from "react-icons/io";

import { Clock, Eye, Layers, TrendingUp } from 'lucide-react';
import PrimsCard from "./PrismCrad";

const CardsData = [
    {
        title: 'Website with modern aesthetics',
        desc: 'We build beautiful websites with backend integration',
        icons: [
            { icon: <SiNextdotjs />, label: "Next.js" },
            { icon: <SiExpress />, label: "Express.js" },
            { icon: <SiTailwindcss />, label: "TailwindCSS" },
            { icon: <SiNodedotjs />, label: "Node.js" },
            { icon: <FaAws />, label: "AWS" },
            { icon: <SiDocker />, label: "Docker" },
        ],
        img: '/assets/ss1.png'
    },
    {
        title: 'Custom components and templates',
        desc: 'We build amazing custom components and templates',
        icons: [
            { icon: <SiFramer />, label: "Framer" },
            { icon: <SiShadcnui />, label: "ShadCN" },
            { icon: <SiTailwindcss />, label: "TailwindCSS" },
            { icon: <SiReact />, label: "React" },
            { icon: <SiThreedotjs />, label: "Three.js" },
            { icon: <SiFigma />, label: "Figma" },
        ],
        img: '/assets/ss3.png'
    },
    {
        title: 'Mobile Apps',
        desc: 'End-to-End mobile apps with AI integration',
        icons: [
            { icon: <SiAndroidstudio />, label: "Android Studio" },
            { icon: <TbBrandReactNative />, label: "React Native" },
            { icon: <SiKotlin />, label: "Kotlin" },
            { icon: <DiSwift />, label: "Swift" },
            { icon: <IoLogoIonic />, label: "Ionic" },
            { icon: <SiCapacitor />, label: "Capacitor" },
        ],
        img: 'https://framerusercontent.com/images/Le7PeOz3D7n0uV3GIgttGnZjJY.png?scale-down-to=512'
    }
];

const features = [
    { icon: Clock, title: "Real-Time Data", description: "Instant insights for faster decision-making." },
    { icon: Eye, title: "Vision Capabilities", description: "AI-powered image and video recognition." },
    { icon: Layers, title: "Optimized UX/UI", description: "Smart design that enhances user experience." },
    { icon: TrendingUp, title: "Predictive Analytics", description: "Make data-driven decisions with AI insights." }
];

const Services: React.FC = () => {
    return (
        <div className="w-full max-w-[80%] mx-auto bg-transparent relative overflow-hidden py-16 px-4 md:px-10 rounded-lg">
            {/* Services Tag */}
            <div className="flex items-center justify-center relative z-20 mb-8">
                <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full">
                    <span className="bg-violet-600 text-white text-sm w-3 h-3 rounded-full"></span>
                    <span className="text-white text-sm">Services</span>
                </div>
            </div>




            <div className="absolute inset-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#6800b3"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="w-full h-full"
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full text-center flex flex-col items-center gap-6 md:gap-10">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Packed with Innovation
                </motion.h1>

                <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-xl">
                    Nubien is packed with cutting-edge features <br />
                    designed to elevate your agency or portfolio.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mt-2">
                    <button className="bg-gradient-to-t from-blue-700 to-purple-600 backdrop-blur-xl text-white p-2 px-6 rounded-lg cursor-pointer text-sm sm:text-base">
                        Book an appointment
                    </button>
                </div>

                {/* Cards Section */}
                <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mt-10">
                    {CardsData.map((data, index) => (
                        <PrimsCard key={index} title={data.title} description={data.desc} icons={data.icons} img={data.img} />
                    ))}
                </div>

                <div className="border-b border-stone-50 w-1/2 my-8"></div>

                {/* Features Grid */}
                <div className="bg-transparent py-8 px-2 w-full">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div key={index} className="text-center">
                                        <div className="mb-3 flex justify-center">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800" />
                                            </div>
                                        </div>
                                        <h3 className="text-white text-base sm:text-lg font-semibold mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

