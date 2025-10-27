import Image from "next/image";
import logo from "@/assets/images/logo3.png";

const Logo = ({ width, height }) => {
  return (
    <Image src={logo} alt="Logo" width={width} height={height} />
  );
};

export default Logo;
