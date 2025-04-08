import Link from "next/link";
import { FcSearch } from "react-icons/fc";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

export default function MainHeader() {
  return (
    <div>
      <header className="bg-white p-4 shadow-md flex justify-between items-center" style={{ backgroundColor: "#9fc5f8" }}>
        {/* Logo y saludo */}
        <div className="flex items-center space-x-2">
          <img src="/images/LogoVet.png" alt="Mundo Bigotes" className="h-20" />
          <span className="text-xl font-bold text-blue-600">Bienvenidos</span>
        </div>

        {/* Buscador */}
        <div className="flex items-center space-x-2">
          <input type="text" placeholder="Buscar..." className="border rounded px-3 py-1" />
          <button className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">
            <FcSearch />
          </button>
        </div>

        {/* Botones de sesión y carrito */}
        <div className="space-x-3 flex items-center">
          <Link href="/login" className="flex items-center space-x-2 border px-3 py-1 rounded hover:bg-gray-100">
            <IoPersonCircleSharp className="text-xl text-blue-600" />
            <span>Iniciar Sesión</span>
          </Link>

          <Link href="/home/carrito" className="flex items-center space-x-2 border px-3 py-1 rounded hover:bg-gray-100">
            <FaCartShopping className="text-xl text-blue-600" />
            <span>Carrito</span>
          </Link>
        </div>
      </header>

      {/* Menú de navegación */}
      <nav className="bg-white border-t border-b shadow-sm">
        <ul className="flex justify-center space-x-10 py-2 text-lg font-medium">
          <li><a href="/home/inicio" className="hover:text-blue-600">Inicio</a></li>
          <li><a href="/home/perro" className="hover:text-blue-600">Perro</a></li>
          <li><a href="/home/gato" className="hover:text-blue-600">Gato</a></li>
          <li><a href="/home/servicios" className="hover:text-blue-600">Servicios</a></li>
          <li><a href="/home/tienda" className="hover:text-blue-600">Tienda</a></li>
          <li><a href="/home/nosotros" className="hover:text-blue-600">Nosotros</a></li>
          <li><a href="/home/contacto" className="hover:text-blue-600">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}