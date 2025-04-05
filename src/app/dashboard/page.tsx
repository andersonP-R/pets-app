export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 gap-1">
      <h1 className="font-bold text-2xl">¡Bienvenido a Mundo Bigotes!</h1>
      <p className="text-base">
        Estamos encantados de tenerte aqui, ahora podras gestionar las citas de
        tus peluditos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Citas Pendientes</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Mascotas Registradas</h3>
          <p className="text-3xl font-bold text-green-600">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Citas Completadas</h3>
          <p className="text-3xl font-bold text-purple-600">24</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Servicios Favoritos</h3>
          <p className="text-3xl font-bold text-orange-600">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Próxima Cita</h3>
          <p className="text-3xl font-bold text-red-600">2d</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg">Gastos Mensuales</h3>
          <p className="text-3xl font-bold text-emerald-600">$150</p>
        </div>
      </div>
    </div>
  );
}
