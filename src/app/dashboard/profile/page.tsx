import { FaCamera, FaLock, FaUserCheck } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-4 items-center w-full p-4">
      <h2 className="font-bold text-2xl">Informacion de tu cuenta</h2>

      {/* Upload Image box */}
      <div className="flex items-center justify-between w-full">
        <div className="w-[150px]"></div>
        <button className="flex flex-col items-center justify-center cursor-pointer overflow-hidden rounded-full w-[120px] h-[120px] bg-gray-200">
          <FaCamera className="text-gray-400" size={50} />
          <span>Subir foto</span>
        </button>
        <div className="flex items-center gap-2 p-2">
          <FaUserCheck size={25} className="" />
          <div className="relative">
            <input
              type="text"
              defaultValue={"Cliente"}
              disabled
              className="bg-amber-50 border-2 border-black p-1 pl-1 rounded-md w-[100px]"
            />
            <div className="absolute top-1 right-2">
              <FaLock size={25} />
            </div>
          </div>
        </div>
      </div>

      {/* FORM BOX*/}
      <div className="flex w-full gap-20 mb-6 px-20">
        {/* COL 1 */}
        <div className="flex flex-col gap-3 w-1/2">
          <div className="flex flex-col w-full gap-1">
            <span className="pt-[2px]">Nombre</span>

            <input
              type="text"
              defaultValue={"Alejadra Perez"}
              disabled
              className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <span className="pt-[2px]">Correo</span>

            <input
              type="text"
              defaultValue={"aleja32@gmail.com"}
              disabled
              className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <span className="pt-[2px]">Ciudad</span>

            <input
              type="text"
              defaultValue={"Bogotá"}
              disabled
              className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <span className="pt-[2px]">Barrio</span>

            <input
              type="text"
              defaultValue={"Chapinero"}
              disabled
              className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
            />
          </div>
        </div>

        {/* COL 2 */}
        <div className="flex flex-col gap-3 w-1/2">
          <div className="flex flex-col w-full gap-1">
            <span className="pt-[2px]">Tipo de documento</span>

            <input
              type="text"
              defaultValue={"C.C."}
              disabled
              className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <span className="pt-[2px]">Número de documento</span>

            <input
              type="text"
              defaultValue={"123456789"}
              disabled
              className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <span className="pt-[2px]">Domicilio</span>

            <input
              type="text"
              defaultValue={"Calle 123 # 45 - 67"}
              disabled
              className="bg-amber-50 border-2 pl-1 border-black p-1 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div className="flex justify-center w-full">
        <button className="bg-purple-950 cursor-pointer text-white p-2 rounded-lg hover:bg-purple-800 transition-colors">
          Actualizar
        </button>
      </div>
    </div>
  );
}
