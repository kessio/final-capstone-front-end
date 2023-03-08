import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ReserveMotorcycle from './components/ReserveMotorcycle';
import MyReservations from './components/MyReservations';
import AddMotorcycle from './components/AddMotorcycle';
import DeleteMotorcycle from './components/DeleteMotorcycle';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reserve" element={<ReserveMotorcycle />} />
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/additem" element={<AddMotorcycle />} />
        <Route path="/deleteitem" element={<DeleteMotorcycle />} />
      </Routes>
    </div>
  );
}

export default App;
