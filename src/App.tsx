import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/tamaguchiFooter';
import Header from './components/Header';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}