import nexusWebLogo from '@/assets/images/nexus_website_logo.png';
import Image from 'next/image';
import Contact from "@/components/Contact";


export default function Footer() {
    return (
        <footer className="w-full bottom-0">
            <section className='py-16'>
                <Contact />
                <div className="container">
                    <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
                        <div>
                            <Image src={nexusWebLogo} alt="Logo" className="h-9 md:h-auto w-auto" />
                        </div>
                        <div>
                            <nav className='flex gap-6'>
                                <a href="mailto:nexus_cse@pes.edu" className='text-white/50 text-sm'>Contact</a>
                                <p className='text-white/50 text-sm'>Made with <span className='text-red-500'>❤️</span> by Nexus</p>
                                <p className='text-white/50 text-sm'>© 2025 Nexus. All rights reserved.</p>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
