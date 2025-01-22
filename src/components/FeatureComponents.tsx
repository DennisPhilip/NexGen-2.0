import { LucideIcon, UserPlus, Book, Users, ArrowLeftRight, Wallet, Coffee, RefreshCcw, Building } from 'lucide-react';

interface FeatureIconProps {
  Icon: LucideIcon;
  color: string;
  bgColor: string;
}

export const FeatureIcon = ({ Icon, color, bgColor }: FeatureIconProps) => (
  <div className={`p-1.5 rounded-lg ${bgColor} transition-all duration-300 group-hover:scale-110`}>
    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${color} transition-transform duration-300 group-hover:rotate-12`} />
  </div>
);
interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
}

export const FeatureCards = ({ icon, title, description, bgColor }: FeatureCardProps) => (
  <div className={`group p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl ${bgColor} backdrop-blur-sm border border-gray-800 
    transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-${bgColor}/20 
    hover:border-gray-600 cursor-pointer transform-gpu`}>
    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
      {icon}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-0.5 sm:mb-1 md:mb-2 line-clamp-2
          transition-colors duration-300 group-hover:text-opacity-90">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 line-clamp-4 sm:line-clamp-none
          transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);


export const FeatureGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full px-2 py-3 sm:p-4 md:p-6 lg:p-8"> {/* Removed bg-black */}
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {children}
      </div>
    </div>
  </div>
);

export const featureData = [
  {
    Icon: UserPlus,
    title: "Register with Ease",
    description: "Registration starts 24th January, just one click away!",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    Icon: Book,
    title: "No Prerequisites",
    description: "Anyone can join, no prerequisites—just bring your creativity!",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    Icon: Users,
    title: "Form Team",
    description: "team up with 3-4 members; Follow our Instagram to know more details.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    Icon: ArrowLeftRight,
    title: "Flexible Tracks",
    description: "Choose from a wide range of tracks and build your product to solve a problem in that domain.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    Icon: Wallet,
    title: "Exciting Benefits",
    description: "Better & more tech goodies than before.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    Icon: Coffee,
    title: "Free Food",
    description: "Enjoy complimentary meals, water, and coffee throughout the event.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    Icon: RefreshCcw,
    title: "In-person Event",
    description: "NexGen 2.0 is an in-person / offline hackathon event.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    Icon: Building,
    title: "Engaging Activities",
    description: "Fun & interactive sessions & activities to keep you engaged.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];