import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import React from "react";
import Prism from "./Prism";

interface CardProps {
    title: string,
    description: string,
    img: string,
    icons: TechStack[]
}
interface TechStack {
    icon: ReactNode,
    label: string

}


const PrimsCard: React.FC<CardProps> = ({ icons, title, description, img }) => {
    return (
        <div className="w-full bg-transparent relative flex items-center justify-center py-10">
            {/* Card Container */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="relative w-[380px] md:w-[450px] bg-black/70 border border-white/10 rounded-3xl shadow-xl overflow-hidden">
                {/* Background Dots */}
                <div className="absolute inset-0">
                    <Prism glow={0.1} noise={0} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center px-6 py-10">
                    {/* Top Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg mb-6"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            className="w-8 h-8 text-white fill-current"
                        >
                            <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
                        </svg>
                    </motion.div>

                    {/* Title + Text */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                        {
                            title
                        }
                    </h2>
                    <p className="text-slate-300 text-center mt-3 mb-10">
                        {description}
                    </p>

                    {/* Integration Icons Row */}
                    <div className="relative w-full flex flex-col items-center">
                        {/* Top Row of Icons */}
                        <div className="flex justify-center gap-4 mb-8">
                            {icons.map(({ icon, label }, i) => (
                                <Tooltip key={i} label={label}>
                                    <div className="w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-2xl text-white cursor-pointer hover:scale-110 transition-transform duration-200">
                                        {icon}
                                    </div>
                                </Tooltip>
                            ))}
                        </div>


                        {/* <img
                            src={img}
                            alt="integration flow"
                            className="w-[90%] h-auto -mt-4 mb-4 pointer-events-none select-none rounded-lg"
                        /> */}
                        {/* <div className="relative w-[90%] h-auto -mt-4 mb-4 pointer-events-none select-none rounded-lg p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-gradient border-2 border-transparent">
                            <img
                                src={img}
                                alt="integration flow"
                                className="relative w-full h-full object-cover rounded-lg"
                            />
                        </div> */}
                        <div className="relative w-[90%] h-auto -mt-4 mb-4 pointer-events-none select-none rounded-lg">
                            <div className="absolute inset-0 rounded-lg shadow-[0_0_20px_5px_rgba(130,50,250,0.6)] animate-pulse"></div>
                            <img
                                src={img}
                                alt="integration flow"
                                className="relative w-full h-full object-cover rounded-lg"
                            />
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};


const Tooltip: React.FC<{ label: string; children: React.ReactNode }> = ({
    label,
    children,
}) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -top-10 bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg"
                    >
                        {label}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PrimsCard