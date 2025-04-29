import { FaCat, FaDog } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";

export default function RegistraMascotaPage() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full">
      <h1 className="text-2xl">REGISTRO DE MASCOTA</h1>
      <div className="flex flex-col gap-4 w-full bg-[#ffffffc5] p-4 border-2 border-black rounded-lg">
        <h2 className="font-bold text-xl">Datos principales</h2>
        <div className="flex gap-2">
          <button className="flex gap-1 items-center border-2 p-2 cursor-pointer rounded-xl border-purple-950 hover:bg-purple-950 hover:text-white transition-colors">
            <span>Perros</span>
            <FaDog size={22} className="mb-2" />
          </button>
          <button className="flex gap-1 items-center border-2 p-2 cursor-pointer rounded-xl border-purple-950 hover:bg-purple-950 hover:text-white transition-colors">
            <span>Gatos</span>
            <FaCat size={22} className="mb-2" />
          </button>
        </div>

        {/* Upload Image box */}
        <div className="flex items-center justify-center w-full">
          <button className="flex flex-col items-center justify-center cursor-pointer overflow-hidden rounded-full w-[120px] h-[120px] bg-gray-300">
            <IoPaw className="text-gray-400" size={50} />
            <span>Subir foto</span>
          </button>
        </div>

        {/* FORM BOX*/}
        <div className="flex w-full gap-10 mb-6">
          {/* COL 1 */}
          <div className="flex flex-col gap-3 w-1/2">
            <div className="flex flex-col w-full gap-1">
              <span className="pt-[2px]">Nombre de tu mascota</span>

              <input
                type="text"
                placeholder="Escriba el nombre"
                className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col w-full gap-1">
              <span className="pt-[2px]">Raza</span>

              <select className="bg-amber-50 border-2 pl-2 border-black py-2 rounded-md">
                <option value="">Seleccione la raza</option>
                <option value="pastor-aleman">Pastor Alemán</option>
                <option value="labrador">Labrador</option>
                <option value="golden-retriever">Golden Retriever</option>
                <option value="bulldog">Bulldog</option>
                <option value="husky">Husky Siberiano</option>
                <option value="poodle">Poodle</option>
                <option value="chihuahua">Chihuahua</option>
                <option value="pitbull">Pitbull</option>
                <option value="rottweiler">Rottweiler</option>
                <option value="boxer">Boxer</option>
              </select>
            </div>
          </div>

          {/* COL 2 */}
          <div className="flex flex-col gap-3 w-1/2">
            <div className="flex flex-col w-full gap-1">
              <span className="pt-[2px]">Fecha de nacimiento</span>

              <input
                type="date"
                className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col w-full gap-1">
              <span className="pt-[2px]">Género</span>

              <select className="bg-amber-50 border-2 pl-2 border-black py-2 rounded-md">
                <option value="">Seleccione el género</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
                <option value="desconocido">Desconocido</option>
                <option value="neutro">Neutro</option>
              </select>
            </div>

            <div className="flex flex-col w-full gap-1">
              <span className="pt-[2px]">Peso aproximado (Kg)</span>

              <input
                type="number"
                placeholder="0 Kg"
                min={0}
                className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-center w-full">
          <button className="bg-purple-950 cursor-pointer text-white p-2 rounded-lg hover:bg-purple-800 transition-colors">
            Registrar mascota
          </button>
        </div>
      </div>
    </div>
  );
}
