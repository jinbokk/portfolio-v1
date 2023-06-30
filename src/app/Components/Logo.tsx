import Image from "next/image";
import Link from "next/link";

import LogoTop from "public/icons/jb-logo.svg";
import LogoMiddle from "public/icons/jb-logo-middle.svg";
import LogoBottom from "public/icons/jb-logo-background.svg";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/icons/jb-logo.svg"
        width={50}
        height={50}
        alt=""
        className="nav_logo_top"
      />
      <Image
        src="/icons/jb-logo-middle.svg"
        width={50}
        height={50}
        alt=""
        className="nav_logo_middle"
      />
      <Image
        src="/icons/jb-logo-background.svg"
        width={50}
        height={50}
        alt=""
        className="nav_logo_bottom"
      />
    </Link>
  );
};

export default Logo;
