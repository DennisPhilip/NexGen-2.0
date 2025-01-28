"use client";
import DevfolioButton from "@/components/DevfolioButton";

export default function Hero() {

    const goToRegs = () => {
        window.open("https://forms.gle/7WXFniKrjAr9EhWC6", "_blank");
    };  

    return (
        <section
            className="py-24 h-[80vh]"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="container text-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-indigo-600 to-pink-400 rounded-full text-neutral-950 font-semibold mt-4">
                    &#x2728;1.5L+ worth prizes
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mt-6">
                    Nexus presents <br/> <span className="text-indigo-600">NexGen 2.0</span>
                </h1>
                <p className="max-md:hidden text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    NexGen sparks curiosity, empowering students to turn challenges into opportunities. It’s a space where creativity thrives, and possibilities are limitless.
                </p>
                <div className="flex flex-col items-center md:flex-row justify-center gap-12 rounded-full p-2 mt-8 px-[1rem]">
                    <button onClick={goToRegs} className="text-white font-semibold bg-indigo-600 rounded-md py-2 px-16 md:px-24 text-[0.9rem] lg:text-[1.1rem] border border-indigo-600 hover:border-white hover:bg-black transition duration-200"> Register Now </button>
                    <div className="flex justify-center">
                        <DevfolioButton />
                    </div>
                </div>
            </div>
        </section>
    );
}