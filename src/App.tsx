import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/tamaguchiFooter';
import Header from './components/Header';
import Palestrantes from './pages/Participantes';
import ComingSoon from './pages/Programacao';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/palestrantes" element={<Palestrantes />} />
          <Route path="/programacao" element={<ComingSoon />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}