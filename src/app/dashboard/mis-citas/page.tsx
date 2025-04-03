import { SearchLogo } from "@/components/ui/logos/SearchLogo";

export default function MisCitasPage() {
  return (
    <>
      <div className="flex justify-center items-center p-4 gap-2 mb-5">
        <h1 className="font-bold text-xl">Consultar Citas</h1>
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
      <div className="relative overflow-x-auto rounded-2xl w-[90%]">
        <table className="w-full text-left rtl:text-right text-black">
          <thead className="text-[16px] border-b-2 border-black text-black bg-[#ffffff8a] ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre de la mascota
              </th>
              <th scope="col" className="px-6 py-3">
                Especialidad
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo de mascota
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Hora
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#ffffff8a] border-b-2 border-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                Alana Rodriguez
              </th>
              <td className="px-6 py-4">Consulta general</td>
              <td className="px-6 py-4">Perro</td>
              <td className="px-6 py-4">02/04/2025</td>
              <td className="px-6 py-4">2:30 pm</td>
            </tr>
            <tr className="bg-[#ffffff8a] border-b-2 border-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                Yuki Rodriguez
              </th>
              <td className="px-6 py-4">Estetica</td>
              <td className="px-6 py-4">Gato</td>
              <td className="px-6 py-4">31/03/2025</td>
              <td className="px-6 py-4">10:00 am</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
