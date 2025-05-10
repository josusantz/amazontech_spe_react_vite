export default function Home() {
    return (
        <main className="full-h max-w-screen bg-gray-900 flex-row justify-center">
            <div className="h-64 w-full flex justify-center items-center">
                <img 
                    src="Icons/amazontech.PNG"
                    alt="Amazon Tech Energy Logo"
                    className="max-w-2xl md:max-w-3xl rounded-lg -mt-0"
            />
            </div>

            <section className="bg-[url('Media/rioDaAmazonia.jpeg')] bg-fixed bg-cover w-full bg-center flex flex-col mt-29">

              {/* Seção Principal */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-auto w-full bg-green-700/60 p-5 pl-95">
                <div className="text-left text-gray-300">
                  <h1 className="text-white text-3xl md:text-5xl text-center font-bold mb-4 ml-10 -mt-40 mr-22">
                    Nos dias 03 a 05 de Junho de 2025, em Salinópolis - PA, Brasil
                  </h1>
                    <p className="text-gray-300 bg-green-950/70 text-justify rounded-2xl p-4 text-3xl mr-15">
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
                    className="max-w-2xl md:max-w-4xl rounded-lg mr-40 -mt-50"
                  />
                </div>
              </div>

              {/* Seção de Patrocinadores */}
              <div className="flex flex-col justify-center items-center h-auto w-full bg-green-700/60 py-10">
                <h1 className="text-white text-3xl md:text-5xl text-center font-bold mb-6 -mt-45">
                  Patrocinadores
                </h1>
                <div className="flex justify-center">
                  <img 
                    src="Media/patrocinadores.png"
                    alt="Patrocinadores"
                    className="max-w-2xl md:max-w-4xl rounded-lg -mt-60"
                  />
                </div>
              </div>
            </section>
  </main>
);
}