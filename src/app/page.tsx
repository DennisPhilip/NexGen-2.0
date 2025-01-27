import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Features from "@/sections/Features";
import Tracks from "@/sections/Tracks";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import DevfolioBrandLogos from "@/sections/DevfolioBrandLogos";
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <Navbar />
                <Hero />
                <LogoTicker />
                <DevfolioBrandLogos />
                <Features />
                <Tracks />
                <Faqs />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}
