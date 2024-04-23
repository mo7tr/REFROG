import Image from "next/image";

export const Footer = () => {
  return (
    <footer className=" flex flex-col items-center bg-gradient-to-r from-custom-green">
      <Image
        src="/refrogtagban.jpg"
        alt="footerban"
        width={500}
        height={500}
        className="h-auto w-full"
        priority={true}
      />
      <p className="w-full bg-primary py-1 text-center text-xs text-background">
        Copyright © 2024 – Resistance Frog - All rights reserved.
      </p>
    </footer>
  );
};
