"use client";

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import {motion, useAnimate} from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftPointerAnimate([
            [leftPointerScope.current, {opacity: 1}, {duration: 0.5}],
            [leftPointerScope.current, {y:0, x:-100}, {duration: 0.5}],
            [leftPointerScope.current, {x:0, y: [0, 16, 0]}, {duration: 0.5, ease: 'easeInOut' }],
        ]);
        
        rightPointerAnimate([
            [rightPointerScope.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
            [rightPointerScope.current, {y:0, x:175}, {duration: 0.5}],
            [rightPointerScope.current, {x:0, y: [0, 20, 0]}, {duration: 0.5, ease: 'easeInOut' }],
        ]);
    }, []);

    return (
        <section className="py-24" style={{
            cursor: `url(${cursorYouImage.src}), auto`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
        }}>
            <div className="container text-center">
                <motion.div ref={leftPointerScope} initial={{opacity: 0, y:100, x: -200}} className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Dennis" />
                </motion.div>
                <motion.div ref={rightPointerScope} initial={{opacity: 0, y:100, x: 275}} className="absolute right-80 -top-30 hidden lg:block ">
                    <Pointer name="Vineet" color="red" />
                </motion.div>
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-indigo-600 to-pink-400 rounded-full text-neutral-950 font-semibold mt-4">✨1.5L+ worth prizes</div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mt-6">Nexus PES presents <span className="text-indigo-600">NexGen 2.0</span></h1>
                <p className="text-xl text-white/50 mt-8 max-w-2xl mx-auto">NexGen ignites curiosity, encouraging students to push boundaries and transform everyday challenges into opportunities for innovation. It’s a playground for fresh ideas, where creativity thrives and the impossible becomes possible.</p>
                <div className="flex justify-center border border-width/15 rounded-full p-2 mt-8 w-32 mx-auto">
                    <Button variant="primary" className="whitespace-nowrap" size="sm">Register</Button>
                </div>
                
            </div>
        </section>
    );
}
