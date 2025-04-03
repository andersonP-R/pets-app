export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <p className="text-lg">Welcome to the dashboard!</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 p-4 rounded">Widget 1</div>
        <div className="bg-green-500 p-4 rounded">Widget 2</div>
        <div className="bg-red-500 p-4 rounded">Widget 3</div>
        <div className="bg-yellow-500 p-4 rounded">Widget 4</div>
      </div>
    </div>
  );
}
