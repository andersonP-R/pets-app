import { Balsamiq_Sans } from "next/font/google";
import { FaUser, FaEnvelope, FaIdCard, FaKey, FaCity, FaMapMarkerAlt, FaHome, FaUsers } from "react-icons/fa";

const balsamiqSans = Balsamiq_Sans({ subsets: ["latin"], weight: "400" });

export default function RegisterPage() {
  return (
    <div
      className={`flex flex-col items-center min-h-screen bg-cover bg-center ${balsamiqSans.className}`}
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="w-full bg-[#CFE2FC] flex justify-center items-center py-4">
        <img src="/images/logo.jpg" alt="Mundo Bigotes" className="h-16" />
      </div>

      <h2 className="text-center text-lg font-bold mt-4 mb-1">Regístrate</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg mt-6 w-96 opacity-75">
        <form className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <FaUser />
            <input type="text" placeholder="Usuario" className="border p-2 rounded w-full bg-white" />
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope />
            <input type="email" placeholder="Correo electrónico" className="border p-2 rounded w-full bg-white" />
          </div>

          <div className="flex items-center gap-3">
            <FaIdCard />
            <select className="border p-2 rounded w-full bg-white">
              <option>Tipo de documento de identidad</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <FaIdCard />
            <input type="text" placeholder="Número de documento" className="border p-2 rounded w-full bg-white" />
          </div>

          <div className="flex items-center gap-3">
            <FaKey />
            <input type="password" placeholder="Contraseña" className="border p-2 rounded w-full bg-white" />
          </div>

          <div className="flex items-center gap-3">
            <FaCity />
            <select className="border p-2 rounded w-full bg-white">
              <option>Ciudad</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt />
            <select className="border p-2 rounded w-full bg-white">
              <option>Barrio</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <FaHome />
            <input type="text" placeholder="Dirección de domicilio" className="border p-2 rounded w-full bg-white" />
          </div>

          <div className="flex items-center gap-3">
            <FaUsers />
            <select className="border p-2 rounded w-full bg-white">
              <option>Rol</option>
            </select>
          </div>

          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Confirmar
          </button>
        </form>

        <p className="text-center mt-3 text-sm">
          <a href="#" className="text-blue-600">
            ¿Ya tienes cuenta?
          </a>
        </p>
      </div>

      <button className="absolute bottom-5 left-5 bg-[#DDDDDD] px-4 py-2 rounded hover:bg-gray-400">
        {"<"} Volver
      </button>
    </div>
  );
}
