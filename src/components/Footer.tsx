import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-center md:gap-6">
        
        {/* Localização */}
        <div className="w-full md:w-1/4 text-center md:flex md:flex-col md:items-center">
          <div className="border-t-4 border-yellow-400 w-full mb-2 md:mb-0 md:border-none"></div>
          <h3 className="text-lg font-semibold pb-2">Localização</h3>
          <address className="mt-2 not-italic text-gray-400">
            Casa de Cultura Fonte do Caranã <br /> R. Carana, Salinópolis - PA, 68721-000
          </address>
        </div>

        {/* Linha vertical */}
        <div className="hidden md:block border-r-2 border-yellow-400 h-24 mx-4 flex-shrink-0"></div>

        {/* Redes Sociais */}
        <div className="w-full md:w-1/4 text-center md:flex md:flex-col md:items-center">
          <div className="border-t-4 border-yellow-400 w-full mb-2 md:mb-0 md:border-none"></div>
          <h3 className="text-lg font-semibold pb-2">Redes Sociais</h3>
          <div className="mt-2 flex flex-col items-center gap-2">
            <a
              href="https://www.linkedin.com/company/spe-ufpa-student-chapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 flex items-center gap-2 hover:text-yellow-400"
              aria-label="LinkedIn da SPE UFPA"
            >
              <CiLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/spe.ufpa?igsh=N3p3NTc3OWRiY3Fw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 flex items-center gap-2 hover:text-yellow-400"
              aria-label="Instagram da SPE UFPA"
            >
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>


        {/* Linha vertical */}
        <div className="hidden md:block border-r-2 border-yellow-400 h-24 mx-4 flex-shrink-0"></div>

        {/* Contate-nos */}
        <div className="w-full md:w-1/4 text-center md:flex md:flex-col md:items-center">
          <div className="border-t-4 border-yellow-400 w-full mb-2 md:mb-0 md:border-none"></div>
          <h3 className="text-lg font-semibold pb-2">Contate-nos</h3>
          <ul className="mt-2 flex justify-center items-center gap-4 flex-wrap">
            <li>
              <span className="text-gray-400">Andressa Valente</span>
              {/* Você pode adicionar um link real se quiser */}
              {/* <a href="https://..." className="text-gray-400 hover:text-yellow-400">Andressa Valente</a> */}
            </li>
            <li>
              <a
                href="mailto:ufpaspe@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 flex items-center gap-2 hover:text-yellow-400"
                aria-label="Enviar email para ufpaspe@gmail.com"
              >
                <FaEnvelope size={20} />
                <span>ufpaspe@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Linha vertical */}
        <div className="hidden md:block border-r-2 border-yellow-400 h-24 mx-4 flex-shrink-0"></div>

        {/* Inscrição do Evento */}
        <div className="w-full md:w-1/4 text-center md:flex md:flex-col md:items-center">
          <div className="border-t-4 border-yellow-400 w-full mb-2 md:mb-0 md:border-none"></div>
          <h3 className="text-lg font-semibold pb-2">Inscrição do Evento</h3>
          <a
            href="https://www.sympla.com.br/preview/3dc437b7b109dc8a56ae431d13be9ede"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 md:w-auto w-full text-center"
            aria-label="Link para inscrição do evento via Sympla"
          >
            Inscreva-se
          </a>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; 2025 Josue Dias, DevGodYeshua. Todos os direitos reservados.
      </div>
    </footer>
  );
}
