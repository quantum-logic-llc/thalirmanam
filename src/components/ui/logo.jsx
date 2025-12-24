import Image from "next/image";
import logo from "@/assets/images/logo3.png";

const Logo = ({ width, height }) => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={width}
      height={height}
      sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
      className="w-auto h-auto max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
    />
  );
};

export default Logo;
