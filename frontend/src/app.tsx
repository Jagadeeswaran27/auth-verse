export function App() {
  console.log(import.meta.env.VITE_TEST_VAR);
  return (
    <div>
      <header className="font-bold text-customColor">
        <h1 className="text-red-500">Auth Verse</h1>
      </header>
    </div>
  );
}

export default App;
