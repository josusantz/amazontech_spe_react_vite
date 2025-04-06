import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 flex flex-row justify-between gap-6">
  
          {/* Localização */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold border-b-2 text-center border-yellow-400 pb-2">Localização</h3>
            <p className="mt-2 text-gray-400 text-center" >Casa de Cultura Fonte do Caranã  <br />R. Carana, Salinópolis - PA, 68721-000</p>
          </div>
  
          
  
          {/* Redes Sociais */}
          <div className="w-full md:w-1/4 flex-col flex">
            <h3 className="text-lg font-semibold border-b-2 text-center border-yellow-400 pb-2">Redes Sociais</h3>
            <div className="mt-2 w-full space-x-4 flex flex-row justify-center items-center" >
  
              <a href="#" className="text-gray-400 items-center flex gap-2 hover:text-yellow-400">
                <span><CiLinkedin  size={20}/></span>
                <span> Linkedin</span></a>
  
              <a href="#" className="text-gray-400 items-center gap-2 flex hover:text-yellow-400">
                <span><FaInstagram size={20}/></span>
                <span>Instagram</span></a>
            </div>
          </div>
          {/* Contatos*/}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold border-b-2  text-center flex-row border-yellow-400 pb-2">Contate-nos!</h3>
            <ul className="mt-2 space-y-2 flex justify-center gap-4">
              <li><a href="#" className="text-gray-400 flex hover:text-yellow-400 ">Andressa Valente</a></li>
              <li><a href="#" className="text-gray-400 flex gap-2 hover:text-yellow-400">
                <span><FaWhatsapp size={20}/></span>
                <span >(91) 99109-7678</span></a></li>
            </ul>
          </div>
          <div className = "w-full flex justify-between items-center md:w-1/4">
            <img
              src="Icons/ufpa_macae.png"
              alt="Iconesessãomacae_sessaoufpa_SPE"
              className="w-40 h-40"
            />
          </div>
  
        </div>
  
        {/* Direitos Autorais */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; 2025 Josue Dias. Todos os direitos reservados.
        </div>
      </footer>
    )
}