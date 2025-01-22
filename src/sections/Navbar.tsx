"use client";

import Image from "next/image";
import nexusWebLogo from '@/assets/images/nexus_website_logo.png';
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Tracks", href: "#tracks" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.section 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="py-2 lg:py-3 fixed w-full top-0 z-50"
            >
                <div className="container max-w-4xl px-4">
                    <div className={twMerge(
                        "border border-blue-500/30 rounded-2xl md:rounded-full",
                        "bg-neutral-950 backdrop-blur-xl",
                        "transition-all duration-300 ease-in-out",
                        scrolled ? "shadow-lg shadow-black/10" : "",
                        "hover:border-white/20 hover:bg-neutral-900/30 "
                    )}>
                        <div className="grid grid-cols-2 lg:grid-cols-3 p-1.5 px-3 md:px-4 items-center">
                            {/* Logo */}
                            <div className="flex items-center">
                                <Image
                                    src={nexusWebLogo}
                                    alt="Logo"
                                    className="w-auto transition-transform duration-300 hover:scale-105"
                                    width={100}
                                    height={55}
                                    style={{
                                        maxHeight: '55px',
                                        objectFit: 'contain',
                                    }}
                                    priority
                                />
                            </div>

                            {/* Desktop Navigation */}
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-7 font-medium">
                                    {navLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            className="relative py-1.5 text-[13px] tracking-wide text-gray-300 transition-colors hover:text-white group"
                                        >
                                            {link.label}
                                            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary-500/80 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Right Section */}
                            <div className="flex justify-end gap-3 items-center">
                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-1.5 -mr-1.5 transition-colors rounded-lg hover:bg-white/10 md:hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition-opacity duration-300", isOpen && "opacity-0")} />
                                        <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition-transform duration-300", isOpen && "rotate-45 translate-y-[6px]")} />
                                        <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition-transform duration-300", isOpen && "-rotate-45 -translate-y-[6px]")} />
                                    </svg>
                                </button>

                                {/* Register Button */}
                                <Button
                                    variant="primary"
                                    className={twMerge(
                                        "hidden md:inline-flex items-center px-5 py-2",
                                        "text-[13px] font-medium tracking-wide",
                                        "transition-all duration-300 ease-out",
                                        "hover:shadow-md hover:shadow-primary-500/20",
                                        "hover:scale-[1.02] active:scale-95",
                                        "bg-primary-500/90 hover:bg-primary-500"
                                    )}
                                >
                                    Register
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="overflow-hidden border-t border-white/10"
                                >
                                    <div className="flex flex-col items-center gap-3 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                className="text-[13px] text-gray-300 hover:text-white transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button
                                            variant="primary"
                                            className="mt-1 px-6 py-2 text-[13px] font-medium tracking-wide bg-primary-500/90 hover:bg-primary-500"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Register
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.section>
            <div className="pb-[64px] md:pb-[76px] lg:pb-[84px]" />
        </>
    );
}