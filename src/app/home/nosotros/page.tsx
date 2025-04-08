"use client";
import { useState } from "react";

const slides = [
  {
    img: "/images/Nosotros/Mision.jpg",
    titulo: "Misión",
    texto:
      "Proporcionar atención veterinaria de alta calidad personalizada, que satisfaga las necesidades de los animales y sus dueños.",
  },
  {
    img: "/images/Nosotros/Vision.png",
    titulo: "Visión",
    texto:
      "Crear un entorno de atención veterinaria integral, donde los animales y sus dueños se sientan valorados, respetados y cuidados.",
  },
];

export default function NosotrosPage() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="p-6 text-center" style={{ backgroundColor: "#9fc5f8" }}>
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Nosotros</h1>
      <div className="relative max-w-2xl mx-auto">
        <img
          src={slides[current].img}
          alt={slides[current].titulo}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />
        <div className="mt-4 p-4 bg-white rounded-lg shadow text-left">
          <h2 className="text-xl font-semibold">{slides[current].titulo}</h2>
          <p>{slides[current].texto}</p>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}