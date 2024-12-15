import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header>
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer>
          <p className='text-center'>
            <a
              href='https://github.com/kseniia-chepur/dictionary-app'
              target='_blank'
              rel='noreferrer'
            >
              Open-source code
            </a> by Kseniia Chepur
          </p>
        </footer>
      </div>
    </div>
  );
}
