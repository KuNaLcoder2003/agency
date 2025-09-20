import React, { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealParagraphProps {
    children: ReactNode;
    className?: string;
}

const ScrollRevealParagraph: React.FC<ScrollRevealParagraphProps> = ({
    children,
    className = "text-white",
}) => {
    const paraRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const el = paraRef.current;
        if (!el) return;

        gsap.fromTo(
            el,
            { opacity: 0, y: 40, filter: "blur(8px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "top 40%",
                    toggleActions: "play none none reverse",
                    markers: false, // set true for debugging
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <p ref={paraRef} className={className}>
            {children}
        </p>
    );
};

export default ScrollRevealParagraph;
