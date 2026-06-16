import UserPanel from "./components/userHub/UserPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-blue-600">UserHub Panel</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-2 py-1 sm:py-4">
        <UserPanel/>
      </main>
    </div>
  );
}