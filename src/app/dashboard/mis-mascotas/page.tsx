import { SearchLogo } from "@/components/ui/logos/SearchLogo";
import Image from "next/image";
import Link from "next/link";
import { IoTrashSharp } from "react-icons/io5";

export default function MisMascotasPage() {
  return (
    <>
      <div className="flex justify-center items-center p-4 gap-2 mb-5">
        <h1 className="font-bold text-xl">Mis Peluditos</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-amber-50 border-2 border-black p-1 pl-9 rounded-md"
          />
          <div className="absolute top-1 left-2">
            <SearchLogo />
          </div>
        </div>
      </div>

      {/* ------------------- TABLA --------------------------- */}
      <div className="relative overflow-x-auto rounded-2xl">
        <table className="w-full text-left rtl:text-right text-black">
          <thead className="text-[16px] border-b-2 border-black text-black bg-[#ffffff8a] ">
            <tr>
              <th scope="col" className=""></th>
              <th scope="col" className=""></th>
              <th scope="col" className="pr-6 py-3">
                Nombre de la mascota
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo de mascota
              </th>
              <th scope="col" className="px-6 py-3">
                Edad
              </th>
              <th scope="col" className="px-6 py-3">
                Raza
              </th>
              <th scope="col" className="px-6 py-3">
                Tamaño
              </th>
              <th scope="col" className="px-6 py-3">
                Borrar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#ffffff8a] border-b-2 border-gray-500">
              <th scope="row" className="px-2">
                <input type="checkbox" />
              </th>
              <th scope="row" className="px-2">
                <div className="overflow-hidden rounded-full w-[40px] h-[40px]">
                  <Image
                    src={"/images/dog1.jpg"}
                    alt={"dog-1"}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </th>
              <th
                scope="row"
                className="px-2 py-4 font-medium text-black whitespace-nowrap"
              >
                Akira Rodriguez
              </th>
              <td className="px-6 py-4">Perro</td>
              <td className="px-6 py-4">7 meses</td>
              <td className="px-6 py-4">Criollo</td>
              <td className="px-6 py-4">Mediano</td>
              <td className="flex items-center justify-center h-[80px]">
                <Link href={"#"}>
                  <IoTrashSharp size={25} />
                </Link>
              </td>
            </tr>
            <tr className="bg-[#ffffff8a] border-b-2 border-gray-500">
              <th scope="row" className="px-2">
                <input type="checkbox" />
              </th>
              <th scope="row" className="px-2">
                <div className="overflow-hidden rounded-full w-[40px] h-[40px]">
                  <Image
                    src={"/images/dog2.jpg"}
                    alt={"dog-2"}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </th>
              <th
                scope="row"
                className="px-2 py-4 font-medium text-black whitespace-nowrap"
              >
                Alana Rodriguez
              </th>
              <td className="px-6 py-4">Perro</td>
              <td className="px-6 py-4">3 Años</td>
              <td className="px-6 py-4">Samoyedo</td>
              <td className="px-6 py-4">Mediano</td>
              <td className="flex items-center justify-center h-[80px]">
                <Link href={"#"}>
                  <IoTrashSharp size={25} />
                </Link>
              </td>
            </tr>
            <tr className="bg-[#ffffff8a] border-b-2 border-gray-500">
              <th scope="row" className="px-2">
                <input type="checkbox" />
              </th>
              <th scope="row" className="px-2">
                <div className="overflow-hidden rounded-full w-[40px] h-[40px]">
                  <Image
                    src={"/images/dog3.jpg"}
                    alt={"dog-3"}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </th>
              <th
                scope="row"
                className="px-2 py-4 font-medium text-black whitespace-nowrap"
              >
                Yuki Rodriguez
              </th>
              <td className="px-6 py-4">Gato</td>
              <td className="px-6 py-4">8 Años</td>
              <td className="px-6 py-4">Criollo</td>
              <td className="px-6 py-4">Pequeño</td>
              <td className="flex items-center justify-center h-[80px]">
                <Link href={"#"}>
                  <IoTrashSharp size={25} />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
