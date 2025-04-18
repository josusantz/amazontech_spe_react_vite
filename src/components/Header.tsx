import { TiInfoLargeOutline } from "react-icons/ti";
import { TiContacts } from "react-icons/ti";
import { TiTicket } from "react-icons/ti";
import { TiGroup } from "react-icons/ti";
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header className="top-0 left-0 w-full bg-gray-900 bg-opacity-50 p-0">
        <div className="mx-auto flex justify-between items-center h-20">
          <Link to="/ ">
            <img 
              src="Icons/speufpa.PNG"
              alt="SPE-UFPA Event Logo"
              className="w-40 h-40"
          /></Link>

          <nav >
            <ul className="flex space-x-4 pr-4">
              <li>
                  <Link to="/about" className="text-white hover:text-gray-300">
                    <span className="hidden sm:inline">Sobre o Evento</span>
                    <span className = "sm:hidden">
                      <TiInfoLargeOutline size={24}/> 
                    </span>
                  </Link>
              </li>
              <li>
                <Link to="/ " className="text-white hover:text-gray-300">
                  <span className ="hidden sm:inline">Palestrantes</span>
                  <span className="sm:hidden">
                    <TiGroup size={24}/>
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  <span className="hidden sm:inline">Incrições</span>
                  <span className="sm:hidden">
                    <TiTicket size={24}/>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:ufpaspe@gmail.com" className="text-white hover:text-gray-300">
                  <span className="hidden sm:inline">Contato</span>
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
    )
}
