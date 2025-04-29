"use client";
import Image from "next/image";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const servicios = [
  {
    nombre: "Clinica Veterina",
    imagen: "/images/ClinicaVeterinaria.jpg",
    descripcion:
      "En nuestra clinica tenemos atencion médica general, urgencias, vacunación y desparasitación.",
  },
  {
    nombre: "Pet Shop",
    imagen: "/images/PetShop.jpg",
    descripcion: "Gran variedad de productos y accesorios para tus mascotas.",
  },
  {
    nombre: "Estetica canina y felina",
    imagen: "/images/Estetica.jpg",
    descripcion:
      "Baño, corte de pelo y grooming especializado para perros y gatos.",
  },
  {
    nombre: "Farmapet",
    imagen: "/images/Medicamentos.jpg",
    descripcion:
      "Medicamentos y suplementos especializados para el cuidado animal.",
  },
  {
    nombre: "Imagenes diagnosticas",
    imagen: "/images/Radiografia.jpg",
    descripcion:
      "Ecografías, radiografías y otros exámenes para diagnóstico avanzado.",
  },
  {
    nombre: "Laboratorio",
    imagen: "/images/Laboratorio.jpg",
    descripcion: "Análisis clínicos y pruebas para un diagnóstico completo.",
  },
];

export default function PaginaServicios() {
  const [seleccionado, setSeleccionado] = useState<string | null>(null);

  const servicioActivo = servicios.find((s) => s.nombre === seleccionado);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Filtros */}
      <aside className="md:w-1/4">
        <h2 className="text-lg font-semibold mb-4">Listado de servicios</h2>
        <button
          className="text-blue-600 text-sm mb-3 hover:underline flex items-center gap-1"
          onClick={() => setSeleccionado(null)}
        >
          Limpiar filtros <RiDeleteBin6Line />
        </button>
        <ul className="space-y-2">
          {servicios.map((servicio) => (
            <li key={servicio.nombre}>
              <button
                className={`text-left w-full text-blue-700 hover:underline ${
                  seleccionado === servicio.nombre ? "font-bold" : ""
                }`}
                onClick={() => setSeleccionado(servicio.nombre)}
              >
                🐾 {servicio.nombre}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Detalle */}
      <section className="md:w-3/4 bg-white p-4 rounded shadow">
        {servicioActivo ? (
          <div>
            <Image
              width={500}
              height={300}
              src={servicioActivo.imagen}
              alt={servicioActivo.nombre}
              className="w-full h-100 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {servicioActivo.nombre}
            </h3>
            <p className="text-gray-600">{servicioActivo.descripcion}</p>
          </div>
        ) : (
          <div className="text-center">
            <Image
              width={500}
              height={300}
              src="/images/Servicios.jpg"
              alt="Servicios"
              className="w-full h-80 object-cover rounded-lg"
            />

            <p className="text-gray-500">
              Selecciona un servicio de la lista para ver más detalles.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
