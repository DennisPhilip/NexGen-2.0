"use client";
import devfolioLogo from "@/assets/images/devfolio_logo.svg";
import polygonLogo from "@/assets/images/Polygon_Logo.svg";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import { Fragment } from "react";
import {motion} from "framer-motion";

const logos = [
    { name: "Devfolio", image: devfolioLogo },
    { name: "Polygon", image: polygonLogo },
    { name: "ETHIndia", image: quantumLogo },
    { name: "Aptos", image: acmeLogo },
    { name: "Balsamiq", image: echoValleyLogo },
    { name: "GraduVation", image: pulseLogo },
    { name: "Interview Buddy", image: outsideLogo },
    { name: ".XYZ", image: apexLogo },
    { name: "Onesta", image: celestialLogo },
    { name: "Soda Terrain", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">Sponsored and Partnered by </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{x: "-50%"}}
                        transition={{duration: 30, repeat: Infinity, ease: "linear"}}
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({length: 2}).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map((logo, index) => (
                                    <p key={index} className="text-blue-200 w-auto h-auto text-bold text-3xl hover:text-indigo-600 hover:scale-110">{logo.name}</p>
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}