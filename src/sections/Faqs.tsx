"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "Would it be a hard for beginners to participate?",
        answer: "It's a beginner-friendly hackathon. We encourage you all to participate, regardless of your proficiency level.",
    },
    {
        question: "What if I need help during my hackathon?",
        answer: "Nexus mentors will be there with you throughout to help you and battle any questions you may have.",
    },
    {
        question: "Any restrictions on team size?",
        answer: "You can form a team with 3 to 4 members with any composition.",
    },
    {
        question: "Can I use pre-built projects?",
        answer: "No! All hacks built must be completely on-spot and your own work. No old projects are allowed.",
    },
    {
        question: "How many rounds are there in the hackathon?",
        answer: "1st Round: Submit your ideas to get shortlisted. 2nd Round: battle with 35 teams to win the grand prize.",
    },
    {
        question: "Can multiple teams from the same college participate?",
        answer: "Yes! There are no restrictions on the number of teams from the same college.",
    },
    {
        question: "Can the participants of a team be from different colleges?",
        answer: "No. We encourage team members to be from the same college.",
    },
    {
        question: "Who will own the IP Rights to the product/software?",
        answer: "Respective team members will own the IP Rights to the product/software. However the code needs to be open source so that it can be evaluated by mentors.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);  
    return (
        <section className="py-24" id="faqs">
            <div className="container">
                <div className="flex justify-center"></div>
                <div className="flex justify-center"><Tag>Faqs</Tag></div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">Frequently Asked <span className="text-indigo-600">Questions</span></h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div key ={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6">
                            <div className="flex justify-between items-center" onClick={()=> setSelectedIndex(faqIndex)}>
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={twMerge("feather feather-plus text-indigo-500 flex-shrink-0 transition duration-300", selectedIndex === faqIndex && "rotate-45")}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div initial={{height: 0, marginTop: 0,}} animate={{height: "auto", marginTop: 24}} exit={{height: 0, marginTop: 0}} className={twMerge("overflow-hidden")}>
                                        <p className="text-white/50">{faq.answer}</p>
                                    </motion.div> 
                                )}  
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
