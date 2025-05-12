export default function About() {
    return (
      <main className="w-full overflow-x-hidden">
        <section className="bg-[url('/Media/rioDaAmazonia.jpeg')] w-full bg-cover bg-center flex flex-col">
  
          {/* Seção Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8  bg-green-700/60 p-5 2xl:p-30">
            
            {/* Texto - SOBRE O EVENTO */}
            <div className="text-gray-300 bg-green-950/70 text-justify rounded-2xl p-4 flex flex-col justify-center mt-10 mb-10">
              <h1 className="text-white text-3xl md:text-4xl text-center font-bold mb-2">
                <span className="text-green-600">SOBRE </span>O EVENTO
              </h1>
              <p className="mb-5" >
                De <strong>03 a 05 de junho de 2025</strong>, Salinópolis-PA será palco do <strong>I° AMAZON TECHENERGY</strong>, um evento inovador que reunirá especialistas da indústria de petróleo, gás e energia, além de estudantes e profissionais da região Norte e de todo o Brasil.
                </p>
                <p className="mb-5">Promovido pelo <strong>Capítulo Estudantil da SPE-UFPA</strong>, este encontro será uma oportunidade única para debater o futuro do setor energético, explorar os desafios e oportunidades da Margem Equatorial e promover a troca de conhecimento entre academia e indústria.
                </p>
                <p className="mb-5">Mais do que um evento técnico, o I° AMAZON TECHENERGY será um espaço de <strong>networking, aprendizado e desenvolvimento profissional</strong>, onde empresas, pesquisadores e estudantes poderão se conectar e fortalecer o setor energético no Brasil.
              </p>
            </div>
  
            {/* Imagem e título - PATROCINADORES */}
            <div className="flex flex-col items-center">
              <img 
                src="Media/patrocinadoresReduzido.png"
                alt="Patrocinadores"
                className="max-w-md md:max-h-lg md:max-w-lg rounded-lg"
              />
            </div>
  
          </div>
  
          {/* Seção local do evento */}
          <div className="flex flex-col justify-center items-center h-auto w-full bg-green-700/60 py-10 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-auto w-full"> 
              <div className="bg-green-950/70 rounded-2xl p-4">
                <h1 className="text-white text-3xl md:text-4xl text-center font-bold">
                  <span className="text-green-600">LOCAL</span> DO EVENTO 
                </h1>
                <p className="text-gray-300 text-justify">
                  Este será realizado de forma presencial, entre os dias 03 a 05 de junho de 2025, na Casa de Cultura Fonte do Caranã. Realizado em Salinópolis, no coração da Amazônia, o evento destaca o imenso potencial da margem equatorial. 
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <img 
                  src="Media/fontedocaranaeditada.png"
                  alt="Local"
                  className="max-w-xs sm:max-w-md md:max-w-lg"
                />
                <a 
                  href="https://www.google.com/maps/place/Fonte+do+Caran%C3%A3/@-0.6175124,-47.357151,17z/data=!4m14!1m7!3m6!1s0x92a8996c9d94ff41:0x7f8c9987e63679e3!2sFonte+do+Caran%C3%A3!8m2!3d-0.6164865!4d-47.3527875!16s%2Fg%2F11hz6nnxzq!3m5!1s0x92a8996c9d94ff41:0x7f8c9987e63679e3!8m2!3d-0.6164865!4d-47.3527875!16s%2Fg%2F11hz6nnxzq?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-400 text-gray-800 font-bold rounded-lg hover:bg-blue-600 transition-all"
                >
                  Ver Localização no Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>    
    );
  }
  