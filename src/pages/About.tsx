export default function About() {
    return (
        <main className="w-full overflow-x-hidden">
            <section className="bg-[url('Media/rioDaAmazonia.jpeg')] bg-fixed bg-cover w-full bg-center flex flex-col">
                
                {/* Seção Principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full bg-green-700/60 p-5">
                    
                    {/* Texto - SOBRE O EVENTO */}
                    <div className="text-gray-300 bg-green-950/70 text-justify rounded-2xl p-4 flex flex-col justify-center ">
                        <h1 className="text-white text-3xl md:text-4xl text-center font-bold mb-2">
                            <span className="text-green-600">SOBRE </span>O EVENTO
                        </h1>
                        <p className="text-gray-300">
                            De <strong>03 a 05 de junho de 2025</strong>, Salinópolis-PA será palco do <strong>I° AMAZON TECHENERGY</strong>, um evento inovador que reunirá especialistas da indústria de petróleo, gás e energia, além de estudantes e profissionais da região Norte e de todo o Brasil.
                            Promovido pelo <strong>Capítulo Estudantil da SPE-UFPA</strong>, este encontro será uma oportunidade única para debater o futuro do setor energético, explorar os desafios e oportunidades da Margem Equatorial e promover a troca de conhecimento entre academia e indústria.
                            Mais do que um evento técnico, o I° AMAZON TECHENERGY será um espaço de <strong>networking, aprendizado e desenvolvimento profissional</strong>, onde empresas, pesquisadores e estudantes poderão se conectar e fortalecer o setor energético no Brasil.
                        </p>
                    </div>

                    {/* Imagem e título - PATROCINADORES */}
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        <ul>
                            <li></li>
                            </ul><h1 className="text-white text-3xl md:text-4xl text-center font-bold">
                            PATROCINADORES
                        </h1>
                        <img 
                            src="Media/patrocinadores.png"
                            alt="Patrocinadores"
                            className="w-full max-w-md md:max-h-lg md:max-w-lg rounded-lg"
                        />
                    </div>
                </div>

                {/* Seção de Patrocinadores */}
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
                        
                        <div className="flex justify-center">
                            <img 
                                src="Media/9.png"
                                alt="Local"
                                className="max-w-xs sm:max-w-md md:max-w-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>    
    );
}