import Tag from "@/components/Tag";
import TracksColumn from "@/components/TracksColumn";

const tracks = [
    { name: "EdTech", icon: "logo.svg", description: "Make education more accessible and enhance learning experiences." },
    { name: "Dev Tools", icon: "logo.svg", description: "Streamline development, improve productivity, and simplify workflows. " },
    { name: "Cyber Security", icon: "logo.svg", description: "Protect against cyber threats and enhance data security." },
    { name: "Open Innovation", icon: "logo.svg", description: "Innovate your own creative solution to an existing problem." },
    { name: "FinTech", icon: "logo.svg", description: "Enable Digital payments, personal finance, or cryptocurrency." },
    { name: "Gen AI", icon: "logo.svg", description: "Harness the power of generative AI to solve real-world problems." },
    { name: "Sponsored Track: Caze Labs", icon: "logo.svg", description: "Develop an AI-powered system to monitor and flag weak, reused, or compromised passwords based on enterprise directory data and custom password policies." },
];

export type TracksType = typeof tracks;

export default function Tracks() {
    return(
        <section className="py-24 overflow-hidden" id="tracks">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Tracks</Tag>
                        <h2 className="text-6xl font-medium mt-6">Think outside the <span className="text-indigo-600">Box</span> </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Six different domain specific tracks. Come up with an unique solution to real-world problem in this domain.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <TracksColumn tracks={tracks} />
                            <TracksColumn tracks={tracks.slice().reverse()} className="hidden md:flex" reverse/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
