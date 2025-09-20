// import React from "react";

// const tags = [
//     {
//         tag: 'Home',
//     },
//     {
//         tag: 'About',
//     },
//     {
//         tag: 'Porfolio',
//     },
//     {
//         tag: 'Contact',
//     },
//     {
//         tag: 'FAQ'
//     }
// ]
// const Navbar: React.FC = () => {
//     return (
//         <div className="w-full bg-black">
//             <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">

//                 <div className="flex items-center">
//                     <img
//                         className="h-10 w-auto"
//                         src="https://framerusercontent.com/images/PDnQxgl1tNjGL6DZbMAh0HAtEU.png"
//                         alt="Logo"
//                     />
//                 </div>


//                 <div className="flex items-center gap-10">
//                     {tags.map((obj, i) => (
//                         <a key={i} className="text-white text-lg cursor-pointer hover:text-violet-400 transition">
//                             {obj.tag}
//                         </a>
//                     ))}
//                 </div>


//                 <div>
//                     <button className="px-6 py-2 bg-gradient-to-t from-blue-700 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition cursor-pointer">
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Navbar

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const tags = [
    { tag: "Home" },
    { tag: "About" },
    { tag: "Portfolio" },
    { tag: "Contact" },
    { tag: "FAQ" },
];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full bg-black fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        className="h-10 w-auto"
                        src="https://framerusercontent.com/images/PDnQxgl1tNjGL6DZbMAh0HAtEU.png"
                        alt="Logo"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {tags.map((obj, i) => (
                        <a
                            key={i}
                            className="text-white text-lg cursor-pointer hover:text-violet-400 transition"
                        >
                            {obj.tag}
                        </a>
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <button className="px-6 py-2 bg-gradient-to-t from-blue-700 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition cursor-pointer">
                        Get Started
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white text-3xl focus:outline-none"
                    >
                        {open ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-black/95 px-6 py-6 flex flex-col gap-6 border-t border-white/10">
                    {tags.map((obj, i) => (
                        <a
                            key={i}
                            className="text-white text-lg cursor-pointer hover:text-violet-400 transition"
                            onClick={() => setOpen(false)}
                        >
                            {obj.tag}
                        </a>
                    ))}
                    <button className="px-6 py-2 bg-gradient-to-t from-blue-700 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition cursor-pointer">
                        Get Started
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
