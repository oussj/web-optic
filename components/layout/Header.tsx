import {
  BuildingStorefrontIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
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
          <button className="bg-black hover:bg-blue-900 flex items-center border border-zinc-700 px-1 lg:px-6">
            <EnvelopeIcon className="h-8 w-8 text-white" />
          </button>
          <button className="bg-black hover:bg-blue-900 flex items-center border border-zinc-700 px-1 lg:px-6">
            <PhoneIcon className="h-8 w-8 text-white" />
          </button>
          <button className="bg-black hover:bg-blue-900 flex items-center border border-zinc-700 px-1 lg:px-6">
            <MapPinIcon className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
      <div className="bg-white flex justify-between items-center h-[64px] shadow-lg px-16">
        <nav className="flex flex-row space-x-16">
          <div className="cursor-pointer hover:underline">Lunettes de vue</div>
          <div className="cursor-pointer hover:underline">Lunettes de soleil</div>
          <div className="cursor-pointer hover:underline">Lentilles</div>
          <div className="cursor-pointer hover:underline">Sport</div>
          <div className="cursor-pointer hover:underline">News</div>
        </nav>
        <button className="bg-black hover:bg-blue-900 text-white px-4 py-2 flex flex-row justify-between items-center">
          <BuildingStorefrontIcon className="h-8 w-8 text-white mr-2" />
          Prendre RDV
        </button>
      </div>
    </header>
  );
};
