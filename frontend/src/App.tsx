import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from './routes';

function App() {
  return (
    <Router>
      <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
        <Navbar />
        <RootRouter />
      </div>
    </Router>
  );
}

export default App;