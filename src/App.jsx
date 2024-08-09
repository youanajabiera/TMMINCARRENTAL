import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Cari from './pages/cari';
import Detail from './pages/detail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari" element={<Cari />} />
        <Route path="/cari/detail/:id" element={<Detail />} />

      </Routes>
    </>
  )
}

export default App