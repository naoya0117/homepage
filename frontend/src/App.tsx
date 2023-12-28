import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '@/routes';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;