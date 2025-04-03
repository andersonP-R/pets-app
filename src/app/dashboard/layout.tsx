import { AsideComponent } from "@/components/ui/aside/aside-component";
import { HomeLogo } from "@/components/ui/HomeLogo";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App pets - Dashboard",
  description: "Pets app dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 h-screen">
      <div className="flex items-center justify-center h-[100%] border-2 border-black rounded-md">
        {/* Sidebar */}
        <AsideComponent />

        {/* Main Content */}
        <div className="flex flex-col w-[75%] h-[100%]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-[#cfe2fc]">
            <Image
              src={"/images/logo.png"}
              alt={"logo"}
              width={200}
              height={160}
            />
            <HomeLogo />
          </div>

          {/* Main Content */}
          <div className="bg-[#9fc5f8] overflow-y-scroll p-2 h-[100%] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:bg-[#9fc5f8] [&::-webkit-scrollbar-thumb]:bg-[#6fa8dc]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
