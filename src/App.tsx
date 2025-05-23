import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeDemo } from '@/components/demo';
import TecnoslabMG from '@/pages/TecnoslabMG';
import CogriGespap from '@/pages/CogriGespap';
import PisoIndustrial from '@/pages/PisoIndustrial';
import Contactanos from '@/pages/Contactanos';
import AgendaLlamada from '@/pages/AgendaLlamada';
import ComunicacionCorreo from '@/pages/ComunicacionCorreo';
import PreguntasFrecuentes from '@/pages/PreguntasFrecuentes';
import Productos from '@/pages/Productos';
import Servicios from '@/pages/Servicios';
import Historia from '@/pages/Historia';
import Fundador from '@/pages/Fundador';
import Lista from '@/pages/Lista';
import Layout from '@/components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomeDemo /></Layout>} />
        <Route path="/tecnoslab-mg" element={<Layout><TecnoslabMG /></Layout>} />
        <Route path="/cogrigespap" element={<Layout><CogriGespap /></Layout>} />
        <Route path="/piso-industrial" element={<Layout><PisoIndustrial /></Layout>} />
        <Route path="/contactanos" element={<Layout><Contactanos /></Layout>} />
        <Route path="/agenda-llamada" element={<Layout><AgendaLlamada /></Layout>} />
        <Route path="/comunicacion-correo" element={<Layout><ComunicacionCorreo /></Layout>} />
        <Route path="/preguntas-frecuentes" element={<Layout><PreguntasFrecuentes /></Layout>} />
        <Route path="/productos" element={<Layout><Productos /></Layout>} />
        <Route path="/servicios" element={<Layout><Servicios /></Layout>} />
        <Route path="/historia" element={<Layout><Historia /></Layout>} />
        <Route path="/fundador" element={<Layout><Fundador /></Layout>} />
        <Route path="/lista" element={<Layout><Lista /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;