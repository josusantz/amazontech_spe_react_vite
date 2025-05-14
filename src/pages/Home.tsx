export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-900 flex flex-col justify-center">
        <div className="h-38 w-full flex justify-center items-center ">
            <img 
                src="Icons/amazontech.png"
                alt="Amazon Tech Energy Logo"
                className="w-90 h-35"
        />
        </div>

        <section className="bg-[url('/Media/rioDaAmazonia.jpeg')] bg-cover bg-center  flex flex-col overflow-x-hidden">
          {/* Seção Principal sm:max-w-md md:max-w-lg*/}
          <div className="grid grid-cols-1 md:grid-cols-2  items-center flex-cols gap-4 h-auto w-full bg-green-700/60 ">
            <div className="text-left flex-cols text-gray-300 md:pl-10 ml-10 mr-10">
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
            <div className="flex-cols justify-center items-center mr-10 mt-15 ml-10">
              <img 
                src="Media/fontedocaranaeditada.png"
                alt="Belezas de Salinas"
                className="w-full max-w-md md:max-w-lg rounded-lg"
              />
            </div>
          </div>

          {/* Seção de Patrocinadores */}
          <div className="flex flex-col justify-center items-center h-auto w-full bg-green-700/60 py-10">
            <h1 className="text-white text-3xl md:text-4xl text-center font-bold mb-6">
              APOIADORES
            </h1>
            <div className="flex justify-center">
              <img 
                src="Media/patrocinadoresReduzido.png"
                alt="Patrocinadores"
                className="max-w-xs sm:max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </section>
  </main>
);
}