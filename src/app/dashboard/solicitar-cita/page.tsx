import {
  IoCalendarOutline,
  IoLocationOutline,
  IoPaw,
  IoPawOutline,
  IoPulse,
} from "react-icons/io5";

export default function SolicitarCitaPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-[50%] my-10 bg-[#7ca7e09f] border-2 border-black rounded-lg">
      <h1 className="text-2xl mb-10">SOLICITUD DE CITAS</h1>
      <div className="flex flex-col w-full gap-1 mb-4">
        <div className="flex gap-2 items-center">
          <IoPaw />
          <span className="pt-[2px]">NOMBRE DE TU MASCOTA</span>
        </div>

        <input
          type="text"
          placeholder="Escriba el nombre"
          className="bg-amber-50 border-2 border-black p-1 rounded-md"
        />
      </div>

      <div className="flex flex-col w-full gap-1 mb-4">
        <div className="flex gap-2 items-center">
          <IoPawOutline />
          <span className="pt-[2px]">ESPECIE</span>
        </div>

        <select className="bg-amber-50 border-2 border-black py-2 pl-1 rounded-md">
          <option value="">Seleccione el tipo de mascota</option>
          <option value="">Perro</option>
          <option value="">Gato</option>
        </select>
      </div>

      <div className="flex flex-col w-full gap-1 mb-4">
        <div className="flex gap-2 items-center">
          <IoPulse />
          <span className="pt-[2px]">ESPECIALIDAD</span>
        </div>

        <input
          type="text"
          placeholder="Escriba el nombre"
          className="bg-amber-50 border-2 border-black p-1 rounded-md"
        />
      </div>

      <div className="flex flex-col w-full gap-1 mb-4">
        <div className="flex gap-2 items-center">
          <IoCalendarOutline />

          <span className="pt-[2px]">CALENDARIO</span>
        </div>

        <input
          type="date"
          placeholder="Escriba el nombre"
          className="bg-amber-50 border-2 border-black p-1 rounded-md"
        />
      </div>

      <div className="flex flex-col w-full gap-1 mb-8">
        <div className="flex gap-2 items-center">
          <IoLocationOutline />

          <span className="pt-[2px]">SEDE</span>
        </div>

        <select className="bg-amber-50 border-2 border-black py-2 pl-2 rounded-md">
          <option value="">Seleccione la sede</option>
          <option value="">Cl. 71d Sur #6-94, Bogotá</option>
          <option value="">Cra. 68a #24b-10 torre 2 piso 4, Bogotá</option>
          <option value="">Cl. 42 Sur #78k-30, Bogotá</option>
          <option value="">Cra. 62 #14-41, Bogotá</option>
          <option value="">Cra. 14 #96-22, Bogotá</option>
        </select>
      </div>

      <button className="bg-[#45818e] text-white font-bold py-2 px-4 rounded-xl cursor-pointer border-2 border-black hover:bg-[#2a4b4f] transition duration-300 ease-in-out">
        Confirmar
      </button>
    </div>
  );
}
