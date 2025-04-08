// app/page.jsx (o tu ruta principal)

import Encabezado from "@/components/homeStatic/headerMenu";
import PiePagina from "@/components/homeStatic/footer";
import { CarritoProvider } from "@/components/carrito/carritoContext";
import React from "react";

export const metadata = {
  title: "Mundo Bigotes",
  description: "Veterinaria y tienda para tus mascotas",
};

export default function HomePageLayout({ children,}:
{children: React.ReactNode}
) {
  return (
    <>
    <CarritoProvider>
    <Encabezado />
   
    <main className="flex-grow">{children}</main>
    <PiePagina />
    </CarritoProvider>
  </>

  );
}