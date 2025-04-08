import { MdOutlineLocationOn } from "react-icons/md";
export default function ContactoPage() {
    return (
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6" >
        {/* Formulario */}
        <div className="bg-white p-6 rounded-lg shadow-md" style={{backgroundColor: "#F5F5F5"}} >
          <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">Déjanos tu comentario</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre Completo"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full border p-2 rounded"
            />
            <textarea
              placeholder="Comentario"
              rows={4}
              className="w-full border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Enviar
            </button>
          </form>
        </div>
  
        {/* Sedes */}
        <div className="bg-white p-6 rounded-lg shadow-md" style={{backgroundColor: "#F5F5F5"}}>
        <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">SEDES</h2>
        <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
             <MdOutlineLocationOn />Ciudad Jardín (Cali) - Calle 18 #101 A-14 - Tel: 602-8940568
            </li>
            <li className="flex items-center gap-2">
             <MdOutlineLocationOn />Norte (Cali) - Av. 3N # 47 N-16 - Tel: 602-6714279
            </li>
            <li className="flex items-center gap-2">
             <MdOutlineLocationOn />Usaquén (Bogotá) - Calle 117 # 25-136 - Tel: 601-6208952
           </li>
           <li className="flex items-center gap-2">
            <MdOutlineLocationOn />Suba (Bogotá) - Calle 60 # 10-20 - Tel: 601-6714850
           </li>
           <li className="flex items-center gap-2">
            <MdOutlineLocationOn />El Poblado (Medellín) - Cra 6 # 130-33 - Tel: 604-6981236
           </li>
           <li className="flex items-center gap-2">
            <MdOutlineLocationOn />Copacabana (Medellín) - Calle 50 # 47-79 - Tel: 604-6784590
           </li>
         </ul>
        </div>
      </div>
    );
  }