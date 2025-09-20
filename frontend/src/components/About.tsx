// import type React from "react";
// import DomeGallery from "./GlobeGallery";



// const About: React.FC = () => {
//     return (
//         <div className="w-full">
//             <div className="flex justify-center">
//                 <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full mb-14">
//                     <span className="bg-violet-600 text-white text-sm w-[15px] h-[15px] rounded-full"></span>
//                     <span className="text-white text-sm">About Us</span>
//                 </div>
//             </div>
//             <div className="flex justify-center">
//                 <p className="w-[60%] text-white text-center text-3xl "> {"Built on creativity, collaboration, and top excellence, SYNC is a dynamic team of industry experts committed to achieving exceptional great results..."}</p>
//             </div>
//             <div className="" style={{ width: '100vw', height: '100vh' }}>
//                 <DomeGallery />
//             </div>

//         </div>
//     )
// }
// export default About

import type React from "react";
import DomeGallery from "./GlobeGallery";

const About: React.FC = () => {
    return (
        <div className="w-full px-4 md:px-10 lg:px-20 py-16">
            {/* Section Label */}
            <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full mb-10">
                    <span className="bg-violet-600 text-white text-sm w-[15px] h-[15px] rounded-full"></span>
                    <span className="text-white text-sm">About Us</span>
                </div>
            </div>

            {/* Text */}
            <div className="flex justify-center mb-12">
                <p className="w-full md:w-[80%] lg:w-[60%] text-white text-center text-lg md:text-2xl lg:text-3xl leading-relaxed">
                    Built on creativity, collaboration, and top excellence, SYNC is a
                    dynamic team of industry experts committed to achieving exceptional
                    great results...
                </p>
            </div>

            {/* Globe Gallery */}
            <div className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh]">
                <DomeGallery />
            </div>
        </div>
    );
};

export default About;
