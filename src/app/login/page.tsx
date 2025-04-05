import { IoLockClosed, IoPerson } from "react-icons/io5";
export default function LoginPage() {
  return (
    <div className="bg-[url(/images/background.jpg)] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center p-8 gap-2">

        <img
          src={"/images/logo2.png"}
          alt={"logo"}
          width={500}
          height={200}
        />
        <div className="border p-8 rounded shadow-lg bg-white">
          <h1 className="text-3xl font-bold"> Inicio de Sesión </h1>

          <form className="flex flex-col gap-4">

            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <IoPerson />
              </span>
              <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" />
            </div>

            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <IoLockClosed />
              </span>
              <input type="password" id="" className="icon icon-tabler icons-tabler-outline icon-tabler-home rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contraseña" />
            </div>

            <div className="row flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 shadow-lg">
                Iniciar Sesión
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 shadow-lg">
                Registrarse
              </button>
            </div>
            <p className="text-blue-600 underline text-center">
              ¿Olvidaste tu contraseña?
            </p>
          </form>
        </div>
      </div>
    </div>

  );
}

