import { SettingsLogo } from "@/components/ui/SettingsLogo";
import { HomeLogo } from "@/components/ui/HomeLogo";
import { UserLogo } from "@/components/ui/UserLogo";
import Link from "next/link";
import { CalendarLogo } from "@/components/ui/CalendarLogo";
import { DogLogo } from "@/components/ui/DogLogo";
import { Calendar2 } from "@/components/ui/Calendar2";
import { AddPetLogo } from "@/components/ui/AddPetLogo";

export const AsideComponent = () => {
  return (
    <aside className="flex flex-col w-[25%] h-[100%] p-2">
      <Link
        href="/dashboard/profile"
        className="flex items-center gap-2 p-4 border-b-2 hover:bg-[#eeeff0] transition duration-300 ease-in-out"
      >
        <UserLogo />
        <span className="font-bold">Alejandra Perez</span>
      </Link>

      {/* Links */}
      <div className="flex flex-col justify-between h-[100%] p-2">
        <div className="flex flex-col gap-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 p-4 bg-[#9fc4f8] rounded-md hover:bg-[#8ca5c7] transition duration-300 ease-in-out"
          >
            <HomeLogo />
            <span className="font-bold">Inicio</span>
          </Link>
          <Link
            href="/dashboard/mis-citas"
            className="flex items-center gap-2 p-4 bg-[#9fc4f8] rounded-md hover:bg-[#8ca5c7] transition duration-300 ease-in-out"
          >
            <CalendarLogo />
            <span className="font-bold">Mis Citas</span>
          </Link>
          <Link
            href="/dashboard/solicitar-cita"
            className="flex items-center gap-2 p-4 bg-[#9fc4f8] rounded-md hover:bg-[#8ca5c7] transition duration-300 ease-in-out"
          >
            <Calendar2 />
            <span className="font-bold">Solicitar Citas</span>
          </Link>
          <Link
            href="/dashboard/mis-mascotas"
            className="flex items-center gap-2 p-4 bg-[#9fc4f8] rounded-md hover:bg-[#8ca5c7] transition duration-300 ease-in-out"
          >
            <DogLogo />
            <span className="font-bold">Mis Mascotas</span>
          </Link>
          <Link
            href="/dashboard/registrar-mascota"
            className="flex items-center gap-2 p-4 bg-[#9fc4f8] rounded-md hover:bg-[#8ca5c7] transition duration-300 ease-in-out"
          >
            <AddPetLogo />
            <span className="font-bold">Registrar Mascota</span>
          </Link>
        </div>

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-2 p-4 bg-[#9fc4f8] rounded-md hover:bg-[#8ca5c7] transition duration-300 ease-in-out"
        >
          <SettingsLogo />
          <span className="font-bold">Ajustes</span>
        </Link>
      </div>
    </aside>
  );
};
