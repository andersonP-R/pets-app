"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="rounded-2xl overflow-hidden shadow-lg"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="bg-gradient-to-r from-purple-300 to-blue-300 p-6 text-white text-center">
          <h2 className="text-4xl font-extrabold">¡Solo por esta semana!</h2>
          <p className="text-6xl font-black my-2">40% de descuento</p>
          <p className="text-lg mb-4">Snacks, juguetes y más para perros y gatos</p>
          <div className="flex justify-center space-x-4 mb-4">
            <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Juguetes</span>
            <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Correas</span>
            <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Snacks</span>
            <span className="bg-white text-purple-700 px-4 py-2 rounded-full">¡Y más!</span>
          </div>
          <div className="flex justify-center space-x-2">
            <img src="/images/perroJuguete.png" alt="Perro" className="h-24 rounded-xl" />
            <img src="/images/correaGato.png" alt="Gato" className="h-24 rounded-xl" />
            <img src="/images/PerroSnak.png" alt="Perro" className="h-24 rounded-xl" />
            <img src="/images/gatoComida.png" alt="Gato" className="h-24 rounded-xl" />
          </div>
        </div>
      </SwiperSlide>

      {/* Agrega más slides si quieres */}
    </Swiper>
  );
}