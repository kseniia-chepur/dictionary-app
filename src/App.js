import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="text-center">Dictionary</h1>
        </header>
        <Dictionary />
      </div>
      <footer className="text-center">
        <a
          href="https://github.com/kseniia-chepur/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> by Kseniia Chepur</span>
      </footer>
    </div>
  );
}
