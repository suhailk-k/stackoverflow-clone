import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import { fetcAllQuestions } from './actions/question';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';

function App() {
const dispatch=useDispatch()


  useEffect(() => {
dispatch(fetcAllQuestions())
   dispatch(fetchAllUsers())
  }, [dispatch])
  
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
