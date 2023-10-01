import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col relative py-20 lg:py-40 h-[80vh] lg:h-[70vh]">
      <div className="z-20 px-8 lg:px-20 bg-transparent">
        <h1 className="text-5xl lg:text-7xl text-white font-bold">
          Découvrez nos collections
        </h1>
        <h2 className="text-xl text-white font-semibol mb-10">
          Montures de créateurs, des lunettes de marques et des lunettes de
          sport.
        </h2>
        <button className="border border-yellow-500 rounded-full bg-stone-100 hover:bg-yellow-500 px-10 py-4 lg:w-2/5">
          <div className="uppercase text-2xl font-bold">Découvrir</div>
        </button>
      </div>
      <div className="absolute top-0 bg-black h-[80vh] lg:h-[70vh] z-10 w-full opacity-30">
        {" "}
      </div>
      <div className="absolute top-0 h-[80vh] lg:h-[70vh] w-full">
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
