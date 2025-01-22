"use client";

import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { span } from "framer-motion/client";
import { useRef } from "react";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],});
    
    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing NexGen 2.0</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>National Level Flagship Hackathon.</span>{" "}
                        <span className="text-white/15">
                            {words.map((word, wordInex )=> (
                                <span key={wordInex}>{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-indigo-400 block">Be ready for competitive 24 hours of Intense Developing</span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
