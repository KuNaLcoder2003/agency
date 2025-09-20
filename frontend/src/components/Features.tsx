import React from "react"

import { motion } from "framer-motion"
import { SiAndroidstudio, SiCapacitor, SiDocker, SiExpress, SiFigma, SiFramer, SiKotlin, SiNextdotjs, SiNodedotjs, SiReact, SiShadcnui, SiTailwindcss, SiThreedotjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { DiSwift } from "react-icons/di";
import { IoLogoIonic } from "react-icons/io"
import Card from "./Card";
import Lightning from "./Gaalaxy";
const CardsData = [
    {
        title: 'Webiste with modern aesthetics',
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
        desc: 'We build amazing custom componets and templates',
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
    },
    {
        title: 'Webiste with modern aesthetics',
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
        desc: 'We build amazing custom componets and templates',
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


]
const Features: React.FC = () => {
    return (
        <div className="relative z-10 w-[80%] mx-auto text-center flex flex-col items-center gap-8">
            <div className="absolute inset-0 z-0">
                <Lightning />
            </div>
            <div className="relative z-10 w-[90%] mx-auto text-center flex flex-col items-center gap-8 mt-15">
                <div className="flex items-center justify-center relative z-20 mb-10">
                    <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full">
                        <span className="bg-violet-600 text-white text-sm w-[15px] h-[15px] rounded-full"></span>
                        <span className="text-white text-sm">Features</span>
                    </div>
                </div>

                <motion.h1
                    className="text-4xl md:text-6xl font-bold  bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    AI-Powered Services for
                    <br />
                    Future-Driven Businesses
                </motion.h1>


                <p className="max-w-2xl bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
                    Our cutting-edge AI solutions are designed to transform businesses,  <br />
                    enhance efficiency, and drive innovation.
                </p>


                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-gradient-to-t from-blue-700 to-purple-600 backdrop-blur-xl text-white p-2 px-6 rounded-lg cursor-pointer">
                        Book a 15 min call
                    </button>
                </div>

                <div className="w-full flex-row items-center gap-4 h-full">
                    <div className="w-full flex flex-wrap lg:flex-nowrap md:flex-row items-center gap-6 justify-center mt-10 px-10">
                        {
                            CardsData.splice(0, 3).map((data, index) => {
                                return (
                                    <Card key={index} title={data.title} description={data.desc} icons={data.icons} img={data.img} />
                                )
                            })
                        }
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center gap-6 justify-center mt-10 px-10">
                        {
                            CardsData.splice(3, CardsData.length - 1).map((data, index) => {
                                return (
                                    <Card key={index} title={data.title} description={data.desc} icons={data.icons} img={data.img} />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="flex items-center justify-center relative z-20 mb-10 w-[70%] m-auto gap-8 flex-wrap">
                    {
                        ["AI Apps", "Webistes", "UI/UX Designs", "Mobile Apps", "Logo Design", "Custom UI Components"].map(text => {
                            return (
                                <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-3 rounded-full 
                w-[90%] sm:w-[45%] md:w-[45%] lg:w-[30%]">
                                    <span className="bg-violet-600 w-5 h-5 rounded-full"></span>
                                    <span className="text-white text-sm sm:text-base md:text-lg w-full flex-1">{text}</span>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Features;

