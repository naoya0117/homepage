import './App.css';
import Navbar from './components/Layout/MainLayout/components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '@/routes';
import Footer from './components/Layout/MainLayout/components/Footer';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;