import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full opacity-80">
      <Image
        src="https://images.unsplash.com/photo-1534078477103-9f6a18b3a5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
        layout="fill"
        objectFit="cover"
        alt="Optical District"
      />
    </div>
  );
};
