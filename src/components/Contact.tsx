import { Phone } from 'lucide-react';

interface ContactProps {
  name: string;
  phone: string;
}

const ContactCard = ({ name, phone }: ContactProps) => {
  return (
    <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto mb-4">
      <div className="relative overflow-hidden">
        <div className="p-4 bg-black rounded-lg border border-gray-800 hover:border-indigo-600 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-gray-100 text-lg font-medium">{name}</span>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">{phone}</span>
              <div className="p-2 hover:bg-indigo-600/20 rounded-full transition-colors">
                <Phone className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-lg bg-indigo-600/20 blur-xl" />
        </div>
      </div>
    </div>
  );
};

export default function ContactList() {
  const contacts = [
    { name: "Dennis Philip", phone: "+91 8618860602" },
    { name: "Vineet Sharma", phone: "+91 8660282426" }
  ];

  return (
    <div className=" flex flex-col items-center">
      {contacts.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}
    </div>
  );
}