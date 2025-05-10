import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Palestrantes from './pages/Palestrantes';
export default function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/palestrantes" element={<Palestrantes />} /> {/* Nova rota adicionada */}
        </Routes>
      <Footer />
    </>
  );
}
