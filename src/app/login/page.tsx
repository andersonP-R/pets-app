export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <div className="border p-8 rounded shadow-lg bg-white">
        <h1 className="text-3xl font-bold underline">Login</h1>
        <p className="text-lg">Please enter your credentials to log in.</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
