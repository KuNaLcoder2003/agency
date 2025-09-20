import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import Navbar from "../components/Navbar";
import PortFolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Services from "../components/Services";



const LandingPage: React.FC = () => {
    return (
        <div className="w-screen h-screen overflow-x-hidden bg-black relative">
            <div className="bg-black h-full w-full relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 
                        bg-[radial-gradient(ellipse_at_center,rgba(120,119,255,0.6),transparent_70%)] 
                        blur-3xl z-[-1]">
                </div>
                <div className="w-full h-full ">
                    <Navbar />
                    <div className="w-full h-[80%] flex items-center justify-center mt-14">
                        <Hero />
                    </div>
                    <About />
                    <Services />
                    <Features />
                    <Process />
                    <Pricing />
                    <PortFolio />
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default LandingPage;