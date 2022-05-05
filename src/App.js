import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Destination from './components/Destination';
import Technology from './components/Technology';
import Crew from './components/Crew';

function App() {
  return (
    <div >
      <Header />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
