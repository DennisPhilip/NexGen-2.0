import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Features from "@/sections/Features";
import Tracks from "@/sections/Tracks";
import Faqs from "@/sections/Faqs";
import Footer from "@/sections/Footer";
import DevfolioBrandLogos from "@/sections/DevfolioBrandLogos";
import cursorYouImage from "@/assets/images/cursor-you.svg";
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col"
        //  style={{cursor: `url(${cursorYouImage.src}), auto`}}
         >
            <main className="flex-grow">
                <Navbar />
                <Hero />
                <DevfolioBrandLogos />
                <LogoTicker />
                <Features />
                <Tracks />
                <Faqs />
            </main>
            <Footer />
        </div>
    );
}
