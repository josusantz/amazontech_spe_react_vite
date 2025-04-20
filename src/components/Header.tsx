import { TiInfoLargeOutline } from "react-icons/ti";
import { TiCalendar } from "react-icons/ti";
import { TiContacts } from "react-icons/ti";
import { TiTicket } from "react-icons/ti";
import { TiGroup } from "react-icons/ti";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="top-0 left-0 w-full bg-gray-900 bg-opacity-50 p-0">
      <div className="mx-auto flex justify-between items-center h-20">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="Icons/speufpa.PNG"
              alt="SPE-UFPA Event Logo"
              className="w-24 h-24 md:w-40 md:h-40"
            />
          </Link>
          <Link to="/">
            <img
              src="Icons/imagem-semfundo.png"
              alt="spe-macae"
              className="w-20 h-20 md:w-28 md:h-28"
            />
          </Link>
        </div>

        <nav>
          <ul className="flex space-x-4 pr-4">
            <li>
              <Link 
                to="/about"
                className={`hover:text-gray-300 ${currentPath === '/about' ? 'text-green-800 font-bold' : 'text-white'}`}
              >
                <span
                  className={`hidden sm:inline border-b-2 uppercase ${currentPath === '/about' ? 'border-green-800' : 'border-white'}`}
                >
                  Sobre o Evento
                </span>
                <span className="sm:hidden">
                  <TiInfoLargeOutline size={24}/> 
                </span>
              </Link>
            </li>

            <li>
              <Link 
                to="/programacao"
                className={`hover:text-gray-300 ${currentPath === '/programacao' ? 'text-green-800 font-bold' : 'text-white'}`}
              >
                <span
                  className={`hidden sm:inline border-b-2 uppercase ${currentPath === '/programacao' ? 'border-green-800' : 'border-white'}`}
                >
                  Programação
                </span>
                <span className="sm:hidden">
                  <TiCalendar size={24}/> 
                </span>
              </Link>
            </li>

            <li>
              <Link 
                to="/palestrantes"
                className={`hover:text-gray-300 ${currentPath === '/palestrantes' ? 'text-green-800 font-bold' : 'text-white'}`}
              >
                <span
                  className={`hidden sm:inline border-b-2 uppercase ${currentPath === '/palestrantes' ? 'border-green-800' : 'border-white'}`}
                >
                  Palestrantes
                </span>
                <span className="sm:hidden">
                  <TiGroup size={24}/>
                </span>
              </Link>
            </li>

            <li>
              <a 
                href="https://www.sympla.com.br/evento/1-amazon-techenergy-conexoes-para-o-futuro/2914779" 
                className="text-white hover:text-gray-300"
              >
                <span className="hidden sm:inline border-b-2 border-white uppercase font-bold">Inscrições</span>
                <span className="sm:hidden">
                  <TiTicket size={24}/>
                </span>
              </a>
            </li>

            <li>
              <a 
                href="mailto:ufpaspe@gmail.com" 
                className="text-white hover:text-gray-300"
              >
                <span className="hidden sm:inline border-b-2 border-white uppercase font-bold">Contatos</span>
                <span className="sm:hidden">
                  <TiContacts size={24}/>
                </span>
              </a>
            </li>

            <div className="hidden sm:w-full sm:border-t-2 sm:border-gray-300 sm:mt-20"></div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
