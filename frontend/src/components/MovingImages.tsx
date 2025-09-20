import { motion } from "framer-motion";

const images = [
    "https://source.unsplash.com/random/300x300?face",
    "https://source.unsplash.com/random/300x300?nature",
    "https://source.unsplash.com/random/300x300?tech",
    "https://source.unsplash.com/random/300x300?city",
    "https://source.unsplash.com/random/300x300?car",
    "https://source.unsplash.com/random/300x300?ai",
    "https://source.unsplash.com/random/300x300?art",
    "https://source.unsplash.com/random/300x300?music",
];

export default function SemiCircleGallery() {
    const radius = 250; // semi-circle radius

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-black">
            <motion.div
                className="relative w-[600px] h-[300px] flex items-center justify-center gap-20"
                animate={{ rotate: 180 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {images.map((src, i) => {
                    const angle = (i / (images.length - 1)) * (Math.PI * 1); // narrower arc
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const opacity = Math.cos(angle); // fade edges

                    return (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                transform: `translate(${x}px, ${-y}px)`,
                                opacity: opacity < 0 ? 0 : opacity, // prevent negatives
                            }}
                        >
                            <motion.img
                                src={src}
                                alt={`gallery-${i}`}
                                className="w-28 h-28 object-cover rounded-2xl shadow-xl"
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.2,
                                }}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
