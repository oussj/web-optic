import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-between bg-black h-[75px]">
        <div className="flex items-center px-6">
          <Image
            src="https://uploads-ssl.webflow.com/627bba3678374bf89ac91338/627bbccdf71f9d003314bab7_opticaldistrict.fr-logo-v2.png"
            width={200}
            height={75}
            alt="Optical District"
          />
        </div>
        <div className="flex flex-row">
          <div className="flex items-center border border-zinc-700 px-1 lg:px-6">
            <EnvelopeIcon className="h-8 w-8 text-white" />
          </div>
          <div className="flex items-center border border-zinc-700 px-1 lg:px-6">
            <PhoneIcon className="h-8 w-8 text-white" />
          </div>
          <div className="flex items-center border border-zinc-700 px-1 lg:px-6">
            <MapPinIcon className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-between items-center h-[64px] shadow-lg px-16">
        <nav className="flex flex-row space-x-16">
          <div>Lunettes de vue</div>
          <div>Lunettes de soleil</div>
          <div>Lentilles</div>
          <div>Sport</div>
          <div>News</div>
        </nav>
      </div>
    </header>
  );
};
