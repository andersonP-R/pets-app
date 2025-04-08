"use client";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";


// Productos de ejemplo
const productos = [
  { id: 1, nombre: "Alimento para cachorro", categoria: "Cachorros" },
  { id: 2, nombre: "Juguete mordedor", categoria: "Juguetes" },
  { id: 3, nombre: "Aseo", categoria: "Cuidado e Higiene" },
  { id: 4, nombre: "Snacks gourmet", categoria: "Snacks" },
  { id: 5, nombre: "Tipos de alimento", categoria: "Alimento" },
   {id: 6, nombre: "Farmacos para perros", categoria:"Farmapet"},
   {id: 7, nombre: "Accesorios para perros", categoria:"Accesorios"}
];

// Filtros disponibles
const filtrosDisponibles = [
  "Alimento",
  "Cachorros",
  "Juguetes",
  "Farmapet",
  "Accesorios",
  "Cuidado e Higiene",
  "Snacks",
];

// Asociamos imágenes a las categorías
const categoriaImagen: { [key: string]: string } = {
  Alimento: "/images/Alimento.jpg",
  Cachorros: "/images/Cachorro.jpg",
  Juguetes: "/images/JuguetesDog.jpg",
  Farmapet: "/images/FarmaDog.jpg",
  Accesorios: "/images/AccesorioDog.jpg",
  "Cuidado e Higiene": "/images/AseoDog.jpg",
  Snacks: "/images/SnackDog.jpg",
};

export default function PaginaPerros() {
  const [filtrosActivos, setFiltrosActivos] = useState<string[]>([]);

  const toggleFiltro = (filtro: string) => {
    setFiltrosActivos((prev) =>
      prev.includes(filtro)
        ? prev.filter((f) => f !== filtro)
        : [...prev, filtro]
    );
  };

  const limpiarFiltros = () => setFiltrosActivos([]);

  const productosFiltrados = filtrosActivos.length
    ? productos.filter((p) => filtrosActivos.includes(p.categoria))
    : productos;

  return (
    <div className="flex" >
      {/* Filtros */}
      <aside className="w-1/4 p-4" style={{backgroundColor: "#F5F5F5"}}>
        <h2 className="font-semibold text-lg mb-4">Filtrar productos</h2>

        <button
          className="text-blue-600 text-sm mb-3 hover:underline"
          onClick={limpiarFiltros}
        ><RiDeleteBin6Line />Limpiar filtros 
        </button>

        <ul>
          {filtrosDisponibles.map((filtro) => (
            <li key={filtro} className="mb-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filtrosActivos.includes(filtro)}
                  onChange={() => toggleFiltro(filtro)}
                />
                {filtro}
              </label>
            </li>
          ))}
        </ul>
      </aside>

      {/* Productos */}
      <section className="w-3/4 p-4" style={{backgroundColor: "#F5F5F5"}}>
        <h2 className="text-xl font-bold mb-4 text-gray-500">Productos para perros mas destacados</h2>
        {productosFiltrados.length > 0 ? (
          <ul className="grid grid-cols-2 gap-6">
            {productosFiltrados.map((producto) => (
               <li
               key={producto.id}
               className="border p-3 rounded-xl bg-white shadow hover:shadow-lg transition"
             >
               <img
                 src={categoriaImagen[producto.categoria]}
                 alt={producto.nombre}
                 className="w-full h-120 md:h-140 object-cover rounded-lg mb-2 transform hover:scale-105 transition duration-300"
               />
               <h3 className="text-md font-semibold mt-2">{producto.nombre}</h3>
               <p className="text-sm text-gray-500">{producto.categoria}</p>
             </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No hay productos para los filtros seleccionados.</p>
        )}
      </section>
    </div>
  );
}