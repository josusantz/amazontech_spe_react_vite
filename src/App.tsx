import { TiInfoLargeOutline } from "react-icons/ti";
import { TiContacts } from "react-icons/ti";
import { TiTicket } from "react-icons/ti";
import { TiGroup } from "react-icons/ti";


export default function App() {
  return (
  
    <main className="min-h-screen bg-gray-900 flex-row justify-center">


      <header className="top-0 left-0 w-full bg-opacity-50 p-0">
        <div className="mx-auto flex justify-between items-center h-20">
          <img 
            src="Icons/speufpa.PNG"
            alt="SPE-UFPA Event Logo"
            className="w-40 h-40"
          />
          <nav >
            <ul className="flex space-x-4 pr-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  <span className="hidden sm:inline">Sobre o Evento</span>
                  <span className = "sm:hidden">
                  <TiInfoLargeOutline size={24}/> 
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  <span className ="hidden sm:inline">Palestrantes</span>
                  <span className="sm:hidden">
                    <TiGroup size={24}/>
                  </span>
                </a>
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
                <a href="#" className="text-white hover:text-gray-300">
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


     {/*} <div className="h-64 w-full flex justify-center items-center">
        <img 
          src="Icons/amazontech.PNG"
          alt="Amazon Tech Energy Logo"
          className="w-2xl h-2xl"
        />
      </div>
      
      <section className="bg-[url('./media/rioDaAmazonia.jpeg')] bg-fixed bg-center bg-no-repeat  flex flex-col  ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-8 h-auto itens-center w-full bg-green-700/60">
          <div className="text-left text-gray-300 p-5">
            <h1 className="text-white text-4xl text-center flex font-bold mb-4">
              Nos dias 03 a 05 de Junho de 2025, em Salinópolis -PA, Brasil
            </h1>
            <p className=" text-gray-300 bg-green-950/70 text-justify rounded-2xl p-4">
              Com grande satisfação, o <strong className= "text-gray-100">Capítulo Estudantil da SPE-UFPA</strong> tem a honra de apresentar o
              <strong className= "text-gray-100"> I° Amazon TECHENERGY: Conexões para o Futuro.</strong> Este será realizado de forma presencial,
              entre os dias <strong className= "text-gray-100">03 a 05 de junho de 2025</strong>, na <strong className= "text-gray-100">Casa de Cultura Fonte do Caranã</strong>.
              Realizado em <strong>Salinópolis</strong>, no coração da Amazônia, o evento destaca o 
              imenso potencial da margem equatorial.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/media/9.png"
              alt="belezasdesalinas"
              className="h-screen w-screen md:w-2xl md:h-wxl"
            />
          </div>
        </div>
        <div className="items-center h-screen w-full bg-green-700/60">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl text-center font-bold mb-0">
              Patrocinadores
            </h1>
            <div className="flex justify-center py-2">
              <img 
              src="/media/patrocinadores.png"
              alt="patrocinadores"
              className="h-auto w-auto md:h-96 md:w-96 mb-[-200px]"
            />
            </div>
          </div>
        </div>
            </section>*/}
      <div className="h-64 w-full flex justify-center items-center">
      <img 
        src="Icons/amazontech.PNG"
        alt="Amazon Tech Energy Logo"
        className="max-w-xs sm:max-w-md md:max-w-lg"
      />
      </div>

      <section className="bg-[url('Media/rioDaAmazonia.jpeg')] bg-fixed bg-center flex flex-col">

        {/* Seção Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-auto w-full bg-green-700/60 p-5">
          <div className="text-left text-gray-300">
            <h1 className="text-white text-3xl md:text-4xl text-center font-bold mb-4">
              Nos dias 03 a 05 de Junho de 2025, em Salinópolis - PA, Brasil
            </h1>
            <p className="text-gray-300 bg-green-950/70 text-justify rounded-2xl p-4">
              Com grande satisfação, o <strong className="text-gray-100">Capítulo Estudantil da SPE-UFPA</strong> tem a honra de apresentar o
              <strong className="text-gray-100"> I° Amazon TECHENERGY: Conexões para o Futuro.</strong> Este será realizado de forma presencial,
              entre os dias <strong className="text-gray-100">03 a 05 de junho de 2025</strong>, na <strong className="text-gray-100">Casa de Cultura Fonte do Caranã</strong>.
              Realizado em <strong>Salinópolis</strong>, no coração da Amazônia, o evento destaca o 
              imenso potencial da margem equatorial.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="Media/9.png"
              alt="Belezas de Salinas"
              className="w-full max-w-md md:max-w-lg rounded-lg"
            />
          </div>
        </div>

        {/* Seção de Patrocinadores */}
        <div className="flex flex-col justify-center items-center h-auto w-full bg-green-700/60 py-10">
          <h1 className="text-white text-3xl md:text-4xl text-center font-bold mb-6">
            Patrocinadores
          </h1>
          <div className="flex justify-center">
            <img 
              src="Media/patrocinadores.png"
              alt="Patrocinadores"
              className="max-w-xs sm:max-w-md md:max-w-lg"
            />
          </div>
        </div>

      </section>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 flex flex-row justify-between gap-6">

          {/* Sobre Nós */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold border-b-2 border-yellow-400 pb-2">Sobre Nós</h3>
            <p className="mt-2 text-gray-400">Seu site incrível com informações relevantes.</p>
          </div>

          {/* Links Úteis */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold border-b-2 border-yellow-400 pb-2">Links Úteis</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Início</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Serviços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400">Contato</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold border-b-2 border-yellow-400 pb-2">Redes Sociais</h3>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">Twitter</a>
            </div>
          </div>

        </div>

        {/* Direitos Autorais */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; 2025 Josue Dias. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}