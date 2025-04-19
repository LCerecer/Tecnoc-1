import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeDemo } from '@/components/demo';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDemo />} />
        <Route path="/tecnoslab" element={<div className="p-8">Tecnoslab_MG Page</div>} />
        <Route path="/cogrigespap" element={<div className="p-8">CogriGespap Page</div>} />
        <Route path="/consultorias" element={<div className="p-8">Consultorias Page</div>} />
        <Route path="/contactanos" element={<div className="p-8">Contáctanos Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;