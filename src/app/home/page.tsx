// app/page.jsx (o tu ruta principal)
import Carrusel from "@/components/carrusel/carrusel";
import Encabezado from "@/components/homeStatic/headerMenu";
import PiePagina from "@/components/homeStatic/footer";


export default function HomePage() {
  return (
    
    <div className="min-h-screen font-sans text-black" style={{ backgroundColor: '#9fc5f8' }}>
      {/* Encabezado y menu */}
    <Encabezado />
      {/* Carrusel */}
      <section className="mt-6 mx-4">
        <Carrusel />
      </section>
     
      {/* Contacto pie pagina*/}
      <PiePagina />
    </div>
  );
}