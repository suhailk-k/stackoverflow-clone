import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Navbar />
          <AllRoutes/>
        </Router>
      </header>
    </div>
  );
}

export default App;
