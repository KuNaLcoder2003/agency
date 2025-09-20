import type React from "react";
import { motion } from "framer-motion";
import DotGrid from "./DotGrid";

const Pricing: React.FC = () => {
    return (
        <div className="w-[80%] max-w-7xl m-auto bg-transparent relative overflow-hidden py-20 px-6 md:px-10 rounded-lg mt-10 mb-10">

            <div className="inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-2 rounded-full mb-10">
                <span className="bg-violet-600 text-white text-sm w-[15px] h-[15px] rounded-full"></span>
                <span className="text-white text-sm">Pricing</span>
            </div>
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Flexible Plans for Every Need
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mb-6">
                    Perfect for Agencies, and Startups.
                </p>
                <p className="text-sm md:text-base text-gray-400 max-w-2xl ">
                    Our pricing plans are designed to make getting started as effortless as possible.
                    With flexible options tailored to suit a variety of needs and budgets.
                </p>
            </div>


            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 items-center ">
                <PricingCard
                    title="Starter"
                    price="$99"
                    period="/Month"
                    description="Perfect for individuals and freelancers starting out."
                    projects="100+ Projects"
                    revisions="75+ Revisions"
                    features={[
                        "All templates unlocked",
                        "Unlimited Licenses",
                        "Lifetime Updates",
                        "Email support",
                        "30-Days Money-back Guarantee",
                    ]}
                    highlight="Most Pick"
                />

                <PricingCard
                    title="Professional"
                    price="$599"
                    period="/Month"
                    description="Ideal for growing agencies and small businesses."
                    projects="150+ Projects"
                    revisions="125+ Revisions"
                    features={[
                        "All templates unlocked",
                        "Unlimited Licenses",
                        "Lifetime Updates",
                        "Email support",
                        "30-Days Money-back Guarantee",
                    ]}
                    highlight="Advanced"
                />

                <PricingCard
                    title="Enterprise"
                    price="$2,599"
                    period="/Month"
                    description="Advanced solutions for large teams and startups."
                    projects="180+ Projects"
                    revisions="140+ Revisions"
                    features={[
                        "All templates unlocked",
                        "Unlimited Licenses",
                        "Lifetime Updates",
                        "Email support",
                        "30-Days Money-back Guarantee",
                    ]}
                    highlight="Recommended"
                />
            </div>
        </div >
    );
};

export default Pricing;

type CardProps = {
    title: string;
    price: string;
    period: string;
    description: string;
    projects: string;
    revisions: string;
    features: string[];
    highlight?: string;
};

const PricingCard: React.FC<CardProps> = ({
    title,
    price,
    period,
    description,
    projects,
    revisions,
    features,
    highlight,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative w-full max-w-sm bg-black/70 border border-white/10 rounded-3xl shadow-xl overflow-hidden"
        >

            <div className="absolute inset-0">
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


            <div className="relative z-10 flex flex-col px-6 py-10 text-center">

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg mx-auto mb-6"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="w-7 h-7 text-white fill-current"
                    >
                        <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
                    </svg>
                </motion.div>

                {/* Highlight Tag */}
                {highlight && (
                    <span className="absolute top-4 right-4 bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                        {highlight}
                    </span>
                )}

                {/* Title & Price */}
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {price}
                    <span className="text-base font-medium text-gray-400">{period}</span>
                </p>
                <p className="text-sm text-gray-400 mb-6">{description}</p>

                {/* Tags */}
                <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
                    <span className="px-3 py-1 text-xs bg-white/10 text-gray-200 rounded-full">
                        {projects}
                    </span>
                    <span className="px-3 py-1 text-xs bg-white/10 text-gray-200 rounded-full">
                        {revisions}
                    </span>
                </div>


                <ul className="text-left text-sm text-gray-300 space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="text-violet-500">✔</span> {feature}
                        </li>
                    ))}
                </ul>


                <button className="bg-gradient-to-r cursror-pointer from-violet-600 to-indigo-500 text-white font-medium py-2.5 rounded-lg shadow-lg hover:opacity-90 transition">
                    Book an Appointment
                </button>
            </div>
        </motion.div>
    );
};
