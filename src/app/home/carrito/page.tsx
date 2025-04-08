"use client";
import { useCarrito } from "@/components/carrito/carritoContext";

export default function CarritoPage() {
  const { carrito } = useCarrito();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Carrito de compras</h1>

      {carrito.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {carrito.map((producto, index) => (
            <div key={index} className="border rounded shadow p-4 bg-white">
              <img src={producto.img} alt={producto.nombre} className="w-full h-40 object-cover mb-2 rounded" />
              <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}