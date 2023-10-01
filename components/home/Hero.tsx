import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col relative py-40 h-[70vh]">
      <div className="z-20 px-20 bg-transparent">
        <h1 className="text-[70px] text-white font-bold">
          Découvrez nos collections
        </h1>
        <h2 className="text-xl text-white font-semibol mb-10">
          Montures de créateurs, des lunettes de marques et des lunettes de
          sport.
        </h2>
        <button className="border border-yellow-500 rounded-full bg-stone-100 px-6 py-4 w-2/5">
          <div className="uppercase text-2xl font-bold">Découvrir</div>
        </button>
      </div>
      <div className="absolute top-0 bg-black h-[70vh] z-10 w-full opacity-30">
        {" "}
      </div>
      <div className="absolute top-0 h-[70vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1534078477103-9f6a18b3a5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
          fill
          className="object-cover"
          alt="Optical District"
        />
      </div>
    </div>
  );
};
