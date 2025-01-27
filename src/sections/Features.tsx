import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Key from "@/components/Key";
import { FeatureIcon, FeatureCards, FeatureGrid, featureData } from '@/components/FeatureComponents';


export default function Features() {
    return (
        <section className="py-24" id="features">
            <div className="container"> 
                <div className="flex justify-center"><Tag>Features</Tag></div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Where code meets <span className="text-indigo-600">solutions</span></h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard title="Best 35 Teams" description="Get selected and compete against the best 140 developers." className="md:col-span-2 lg:col-span-1 group">
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-while/20 group-hover: text-white/40 transition duration-500 text-center">24 hours of <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">intense</span> developing</p>
                        </div>
                    </FeatureCard>
                    <FeatureCard 
                        title="Prizes worth 1.5L +" 
                        description="Win exciting goodies & prizes" 
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4 ">
                            <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-indigo-500 transition-all duration-500 group-hover:translate-y-1">February</Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-indigo-500 transition-all duration-500 group-hover:translate-y-1 delay-150">15th</Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-indigo-500 transition-all duraiton-500 group-hover:translate-y-1 delay-300">16th</Key>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Industry level judges" description="Expand your network & meet mentors" className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group">
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/40 transition duration-500 text-center">Build <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> Connections </span>unlock new possibilities</p>
                        </div>
                    </FeatureCard>
                </div>
                <div>
                    <FeatureGrid>
                        {featureData.map((feature, index) => (
                            <FeatureCards
                            key={index}
                            icon={
                                <FeatureIcon
                                Icon={feature.Icon}
                                color={feature.color}
                                bgColor={feature.bgColor}
                                />
                            }
                            title={feature.title}
                            description={feature.description}
                            bgColor={feature.bgColor}
                            />
                        ))}
                    </FeatureGrid>
                </div>
            </div>
        </section>
    );
}
