import { AsideComponent } from "@/components/ui/aside/aside-component";
import { NavComponent } from "@/components/ui/nav/nav-component";
import type { Metadata } from "next";

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
          <NavComponent />

          {/* Main Content */}
          <div
            className="flex flex-col items-center overflow-y-scroll p-2 h-[100%] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:bg-[#9fc5f8] [&::-webkit-scrollbar-thumb]:bg-[#6fa8dc]"
            style={{
              backgroundImage: "url('/images/background.jpg')",
              backgroundSize: "cover",
              opacity: 0.9,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
