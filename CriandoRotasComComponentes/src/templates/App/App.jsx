import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { PostsProvider } from '../../contexts/PostsProvider';
import './App.css';
import reactLogo from './svg/react.svg';
import viteLogo from './svg/vite.svg';

export function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Criando Rotas com COmponentes</h1>
      <div className="card">
        <CounterProvider>
          <PostsProvider>
            <div>
              <Posts />
            </div>
          </PostsProvider>
        </CounterProvider>
      </div>
    </>
  );
}
