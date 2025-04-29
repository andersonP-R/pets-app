import Image from "next/image";
import { HomeLogo } from "../logos/HomeLogo";
import Link from "next/link";

export const NavComponent = () => {
  return (
    <div className="flex items-center justify-between py-2 px-4 bg-[#cfe2fc]">
      <Image
        src={"/images/logo-noBG.png"}
        alt={"logo"}
        width={200}
        height={160}
      />
      <Link href="/">
        <HomeLogo />
      </Link>
    </div>
  );
};
