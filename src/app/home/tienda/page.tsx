"use client";
import { useCarrito } from "@/components/carrito/carritoContext";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";


// Categorías
const categorias = [
  { nombre: "Alimento", icono: "/images/tienda/categoriasProductos/Alimento.png" },
  { nombre: "Cachorros", icono: "/images/tienda/categoriasProductos/Cachorros.png" },
  { nombre: "Snacks", icono: "/images/tienda/categoriasProductos/Snack.png" },
  { nombre: "Juguetes", icono: "/images/tienda/categoriasProductos/Juguetes.png" },
  { nombre: "Farmapet", icono: "/images/tienda/categoriasProductos/Farmacos.png" },
  { nombre: "Accesorios", icono: "/images/tienda/categoriasProductos/Accesorios.png" },
  { nombre: "Cuidado e Higiene", icono: "/images/tienda/categoriasProductos/Aseo.png" },
  { nombre: "Arenas", icono: "/images/tienda/categoriasProductos/Arenas.png" }
];

// Productos separados por la categoria
const productos = [
  { id: 1, nombre: "Teste of the Wild $400.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Alimento1.png" },
  { id: 2, nombre: "Hill's $380.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Alimento2.png" },
  { id: 3, nombre: "Nutriss $320.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Alimento3.png" },
  { id: 4, nombre: "Purina Pro Plan $410.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Alimento4.png" },
  { id: 5, nombre: "True Nature Pollo $340.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Alimento5.png" },
  { id: 6, nombre: "True Nature Gatos $330.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/AlimentoCat1.png" },
  { id: 7, nombre: "Max Cat Croquetas $280.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/AlimentoCat2.png" },
  { id: 8, nombre: "Test of The Wild Gatos $380.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/AlimentoCat3.png" },
  { id: 9, nombre: "Purina Pro Plan Gatos $295.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/AlimentoCat4.png" },
  { id: 10, nombre: "Hill's Pollo Gato $284.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/AlimentoCat5.png" },
  { id: 11, nombre: "Royal Canin, Humeda $60.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Humedo1.png" },
  { id: 12, nombre: "Hill's, Humeda $80.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Humedo2.png" },
  { id: 13, nombre: "BR for Dog Salmon, Humedo $70.000 ", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Humedo3.png" },
  { id: 14, nombre: "Envolve Pollo, humedo $14.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Humedo4.png" },
  { id: 15, nombre: "Test of the Wild, humeda $40.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Humedo5.png" },
  { id: 16, nombre: "Royal Cannin, humeda $25.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/HumedoCat1.png" },
  { id: 17, nombre: "BR for CAT, humeda $80.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/HumedoCat2.png" },
  { id: 19, nombre: "Envolve, Plollo humedo $18.600", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/HumedoCat3.png" },
  { id: 20, nombre: "Purina Pro Plan, Humedo $20.900", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/HumedoCat4.png" },
  { id: 21, nombre: "Purina Francy Feast, humedo $25.950", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/HumedoCat5.png" },
  { id: 22, nombre: "Whole Barf, Natural $5.000", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Natural1.png" },
  { id: 23, nombre: "Nautural Salvaje $5.850", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Natural2.png" },
  { id: 24, nombre: "Petmeal, Natural $10.950", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Natural3.png" },
  { id: 25, nombre: "Chunky, Natural $12.500", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Natural4.png" },
  { id: 26, nombre: "Happy Barf, Natural $5.850", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/Natural5.png" },
  { id: 27, nombre: "Origenes, Natural $4.600",categoria: "Alimento", img: "/images/tienda/Productos/Alimento/NaturalCat1.png" },
  { id: 28, nombre: "Wow Cat, Natural $3.300", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/NaturalCat2.png" },
  { id: 29, nombre: "Fiel Barf, Natural $6.100", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/NaturalCat3.png" },
  { id: 30, nombre: "Alnut, Natural $5.400", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/NaturalCat4.png" },
  { id: 31, nombre: "Alnut, Natural $5.400", categoria: "Alimento", img: "/images/tienda/Productos/Alimento/NaturalCat5.png" },
  { id: 32, nombre: "Test of the Wild $390.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Alimento1.png" },
  { id: 33, nombre: "Hills $320.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Alimento2.png" },
  { id: 34, nombre: "Equilibrio $78.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Alimento3.png" },
  { id: 35, nombre: "Gradvita, $120.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Alimento4.png" },
  { id: 36, nombre: "Monello, $80.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Alimento5.png" },
  { id: 37, nombre: "Purina Pro Plan, $150.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Gatito1.png" },
  { id: 38, nombre: "Royal Cannin $110.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Gatito2.png" },
  { id: 39, nombre: "Agility Good $98.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Gatito3.png" },
  { id: 40, nombre: "Hills $150.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Gatito4.png" },
  { id: 41, nombre: "Dal cat $180.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humeda1.png" },
  { id: 42, nombre: "Tommy for Dog, Humeda, $16.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humeda2.png" },
  { id: 43, nombre: "Rayal Cannin, Humeda, $14.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humeda3.png" },
  { id: 44, nombre: "Dog Chow, Humeda, $9.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humeda4.png" },
  { id: 45, nombre: "Agility Gold, Humeda $8.500", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humeda5.png" },
  { id: 46, nombre: "Royal Cannin, Humeda $10.650", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humedocat1.png" },
  { id: 47, nombre: "Rayal Cannin, Humeda $11.000", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humedocat2.png" },
  { id: 48, nombre: "Agility, Humeda $6.500", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humedocat3.png" },
  { id: 49, nombre: "Purina Pro Plan, humeda $5.700", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humedocat4.png" },
  { id: 50, nombre: "Optimum, Humeda $4.800", categoria: "Cachorros", img: "/images/tienda/Productos/Cachorros/Humedocat5.png" },
  { id: 51, nombre: "fruitables salmon, $16.850 ", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack1.png" },
  { id: 52, nombre: "Tiritas Ahumdas $11.000", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack2.png" },
  { id: 53, nombre: "Puree Kiss $12.000", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack3.png" },
  { id: 54, nombre: "Helados gatos $8.000", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack4.png" },
  { id: 55, nombre: "Churu pops $5.000", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack5.png" },
  { id: 56, nombre: "Galleta para Gatos $6.800", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack6.png" },
  { id: 57, nombre: "Hueso de Cerdo $6.000", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack7.png" },
  { id: 58, nombre: "Traquea Desidratada $8.000", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack8.png" },
  { id: 59, nombre: "DoWolf Galletas $7.000", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack9.png" },
  { id: 60, nombre: "Dog Yurt $4.000", categoria: "Snacks", img: "/images/tienda/Productos/Snacks/Snack10.png" },
  { id: 61, nombre: "Bola Interactiva $10.000", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/Juguete1.png" },
  { id: 62, nombre: "Juguete Automatico $193.000", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/Juguete2.png" },
  { id: 63, nombre: "Pelota de Mimbre $2.800", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/Juguete3.png" },
  { id: 64, nombre: "Rueda para Gatos $420.000", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/Juguete4.png" },
  { id: 65, nombre: "Piramide Interactiva $25.900", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/Juguete5.png" },
  { id: 66, nombre: "Wobble Bowl $143.500", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/JugueteDog1.png" },
  { id: 67, nombre: "Hot Dog Entrenamiento $56.000", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/JugueteDog2.png" },
  { id: 68, nombre: "Juguete Masticable $127.000", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/JugueteDog3.png" },
  { id: 69, nombre: "Peluche de Pulpo $80.000", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/JugueteDog4.png" },
  { id: 70, nombre: "Piscina $50.000", categoria: "Juguetes", img: "/images/tienda/Productos/Juguetes/JugueteDog5.png" },
  { id: 71, nombre: "Huacal $70.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesorio1.png" },
  { id: 72, nombre: "Arnes $65.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesorio2.png" },
  { id: 73, nombre: "Bebedero Portatil $62.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesorio3.png" },
  { id: 74, nombre: "Toalla de Pato $42.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesorio4.png" },
  { id: 75, nombre: "Cama $290.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesorio5.png" },
  { id: 76, nombre: "Pala $8.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesoriocat1.png" },
  { id: 77, nombre: "Collar placa gato $119.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesoriocat2.png" },
  { id: 78, nombre: "Fuente para gatos $57.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesoriocat3.png" },
  { id: 79, nombre: "Morral Astronauta $65.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesoriocat4.png" },
  { id: 80, nombre: "Cama tipo nido  $180.000", categoria: "Accesorios", img: "/images/tienda/Productos/Accesorios/Accesoriocat5.png" },
  { id: 81, nombre: "Deslanador $70.000", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoCat1.png" },
  { id: 82, nombre: "Shampoo Arbol de Te $30.000", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoCat2.png" },
  { id: 83, nombre: "Pañitos Humedos $12.000", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoCat3.png" },
  { id: 84, nombre: "Gel dental $76.000", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoCat4.png" },
  { id: 85, nombre: "Perfume $64.000", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoCat5.png" },
  { id: 86, nombre: "Deslanador Perro $88.000", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoDog1.png" },
  { id: 87, nombre: "Bolsas Biodegradables $12.000", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoDog2.png" },
  { id: 88, nombre: "Shampoo Hydra odr $85.000", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoDog3.png" },
  { id: 89, nombre: "Kit dental $104.000", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoDog4.png" },
  { id: 90, nombre: "Toaliitas Humedas $4.900", categoria: "Cuidado e Higiene", img: "/images/tienda/Productos/Higiene/AseoDog5.png" },
  { id: 91, nombre: "Suplemento Alimenticio $40.900", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaCat1.png" },
  { id: 92, nombre: "Antiparasitario Interno $27.800", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaCat2.png" },
  { id: 93, nombre: "Pipeta solucion topica $44.900", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaCat3.png" },
  { id: 94, nombre: "Suplemento Intestinal $147.000", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaCat4.png" },
  { id: 95, nombre: "Antiestaminico $53.900", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaCat5.png" },
  { id: 96, nombre: "Antiparasitante $51.000", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaDog1.png" },
  { id: 97, nombre: "Suplemento Vitaminico $71.900", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaDog2.png" },
  { id: 98, nombre: "Suplemento Alimenticio $121.000", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaDog3.png" },
  { id: 99, nombre: "Antibiotico $19.400", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaDog4.png" },
  { id: 100, nombre: "Antiparasitario Interno $53.000", categoria: "Farmapet", img: "/images/tienda/Productos/FarmaPet/FarmaDog5.png" },
  { id: 101, nombre: "Hakuna Arena Aglomerante $32.000", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita1.png" },
  { id: 102, nombre: "Furry Aglomerada $50.000", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita2.png" },
  { id: 103, nombre: "Premium Furry $19.400", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita3.png" },
  { id: 104, nombre: "Petys Familia $40.000", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita4.png" },
  { id: 105, nombre: "Free Miau $27.000", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita5.png" },
  { id: 106, nombre: "Cats Aroma Blue Berry $102.000", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita6.png" },
  { id: 107, nombre: "Michiko aroma Limon $37.000", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita7.png" },
  { id: 108, nombre: "Arena de Maiz cat $59.000", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita8.png" },
  { id: 109, nombre: "Multi Cat $112.000", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita9.png" },
  { id: 110, nombre: "Canada Litter Arena Lavanda $109.000", categoria: "Arenas", img: "/images/tienda/Productos/Arenas/Arenita10.png" }
  
];

export default function TiendaPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const { agregarAlCarrito } = useCarrito();

  const productosFiltrados = categoriaSeleccionada
  ? productos.filter((p) => p.categoria === categoriaSeleccionada)
  : [];

  const tamañoPorCategoria: Record<string, string> = {
    Alimento: 'h-90',
    Cachorros: 'h-90',
    Snacks: 'h-100',
    Juguetes: 'h-100',
    Farmapet: 'h-100',
    Accesorios: 'h-100',
    'Cuidado e Higiene': 'h-100',
    Arenas: 'h-100',
  };

  return (
    <div className="p-4 bg-[#fffbea] min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4">Tienda</h1>

      {/* Categorías */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {categorias.map((cat) => (
          <button
            key={cat.nombre}
            onClick={() => setCategoriaSeleccionada(cat.nombre)}
            className="flex flex-col items-center text-sm hover:scale-105 transition"
          >
            <img src={cat.icono} alt={cat.nombre} className="w-14 h-14 object-contain rounded-full border" />
            <span className="mt-1 text-center">{cat.nombre}</span>
          </button>
        ))}
      </div>

      {/* Imagen destacada */}
      {!categoriaSeleccionada && (
        <div className="mb-6">
          <img
            src="/images/tienda/DeShopping.jpg"
            alt="Tienda Mundo Bigotes"
            className="w-full max-h-[600px] object-cover rounded shadow"
          />
        </div>
      )}

      {/* Productos */}
      {categoriaSeleccionada && productosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productosFiltrados.map((p) => (
            <div key={p.id} className="border rounded shadow p-3 bg-white">
              <img
               src={p.img}
               alt={p.nombre}
               className={`w-full object-cover rounded mb-2 transform transition-transform duration-300 hover:scale-105 ${tamañoPorCategoria[p.categoria] || 'h-48'}`}
              />
              <h3 className="text-lg font-semibold">{p.nombre}</h3>
              <button
                 onClick={() => agregarAlCarrito(p)}
                className="mt-2 px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded flex items-center gap-1"
            >Agregar al carrito <TiShoppingCart />
      </button>
            </div>
          ))}
        </div>
      ) : categoriaSeleccionada ? (
        <p className="text-gray-500">No hay productos en esta categoría.</p>
      ) : (
        <p className="text-gray-500 text-center text-lg">Selecciona una categoría para ver productos 🐾</p>
      )}
    </div>
  );
}