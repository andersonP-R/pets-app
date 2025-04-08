import HomePage from "@/app/home/inicio/page";
import Encabezado from "@/components/homeStatic/headerMenu";
import PiePagina from "@/components/homeStatic/footer";
export default function Home() {
  return (
    <div >
      <Encabezado />
      <HomePage/>
      <PiePagina />
    </div>
  );
}
