import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer(){
return(
  
<footer className="bg-white mt-8 p-6 text-center border-t text-blue-600"  style={{ backgroundColor: "#F8F9F9" }}>
  
  {/*datos de las sedes pirncipalesm implemetacion de icones y ajuste del texto y colores*/}
   
    <h3 className="font-bold text-lg mb-2">Sedes principales</h3>
        <div className="flex justify-center items-ceneter space-x-2 mb-4 text-gray-600 ">
        <IoLocationOutline className="text-xl text-blue-600"/>
        <p>Bogotá: Calle 180 # 20 - 10</p>
        <IoLocationOutline className="text-xl text-blue-600"/>
        <p>Cali: Calle 18 #101 A -14</p> 
          <br />
          <IoLocationOutline className="text-xl text-blue-600"/>
          <p>Medellín: Carrera 6 # 130 - 33</p>
        </div> 
        
        <div className="flex justify-center space-x-4 text-blue-600 text-2xl">
          <a href="https://facebook.com/MundoBigotes" target="_blank" rel="noreferrer">
          <FaFacebook />
          </a>
          <a href="https://instagram.com/MundoBigotes" target="_blank" rel="noreferrer">
          <GrInstagram />
          </a>
          <a href="https://wa.me/573173376918" target="_blank" rel="noreferrer">
          <BsWhatsapp />
          </a>
        </div>
      </footer>

);


}
