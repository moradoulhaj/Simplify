import NavBar from "./components/NavBar";
import LogChecker from "./components/LogChecker";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <LogChecker />
      </main>
    </div>
  );
}
