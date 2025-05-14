
export default function Programacao() {
    return (
        <main className="bg-[url('/Media/rioDaAmazonia.jpeg')] bg-cover bg-center bg-fixed w-full overflow-x-hidden">
            <div className="w-full h-30 bg-gray-900"></div>
            <section className="w-full flex flex-col items-center py-14 bg-green-950/80 backdrop-blur-md">
                
                {/* Seção de Introdução */}
                <div className="-mt-10 ml-20 mr-20 text-center bg-gradient-to-r from-green-700 to-green-900 py-16 rounded-2xl flex-row mx-6 shadow-2xl md:w-full md:max-w-3xl animate-fade-in">
                    <h1 className="text-white text-5xl font-extrabold tracking-wide uppercase">Programação do Evento</h1>
                    <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mt-4 font-light">
                        Explore os eventos e palestras do <strong>I° Amazon TechEnergy</strong>. Planeje seu dia e aproveite ao máximo essa experiência transformadora!
                    </p>
                </div>

                {/* Seção de Programação */}
                <div className="w-full max-w-screen-lg mt-12 px-6">
                    <h2 className="text-white text-3xl font-bold text-center mb-10 tracking-wider">Agenda Oficial | 03 a 05 de Junho de 2025</h2>

                    {/* Lista refinada da programação */}
                    <div className="space-y-12 w-full max-w-4xl">
                        
                        {/* Dia 1 - 03 de Junho */}
                        <div className="bg-green-950/90 rounded-xl shadow-lg p-8 border border-green-500 hover:scale-105 transition-all">
                            <h3 className="text-white text-3xl font-bold mb-4 text-center uppercase">📅 Terça-feira - 03 de Junho</h3>
                            <div className=" border-t border-green-500"></div>
                            <ul className="text-gray-300 text-lg mt-6 space-y-4">
                                <li><strong>08:00</strong> | Credenciamento e Boas-Vindas</li>
                                <li><strong>09:00</strong> |  Mesa de Abertura</li>
                                <li><strong>10:00</strong> |  Palestra 1 - <span className="text-green-300">Rafaela Vieira (Subsea7)</span></li>
                                <li><strong>11:00</strong> |  Palestra 2 - <span className="text-green-300">José Walmir (JN Consultoria)</span></li>
                                <li><strong>12:00</strong> |  Almoço </li>
                                <li><strong>14:00</strong> |  Palestra 3 - <span className="text-green-300">Jonatan Conceição (RelyOn)</span></li>
                                <li><strong>15:00</strong> |  Palestra 4 - <span className="text-green-300">Marcio Pimentel (Seadrill)</span></li>
                                <li><strong>16:00</strong> |  Palestra 5 - <span className="text-green-300">Wilson Leal (ALTAVE)</span></li>
                                <li><strong>17:00</strong> |  Mesa Redonda 2: <span className="text-green-300"> Rafaela, José, Walmir, Wilson e Jonatan</span></li>
                                <li><strong>18:00</strong> |  Coffee Break</li>
                            </ul>
                        </div>

                        {/* Dia 2 - 04 de Junho */}
                        <div className="bg-green-950/90 rounded-xl shadow-lg p-8 border border-green-500 hover:scale-105 transition-all">
                            <h3 className="text-white text-3xl font-bold mb-4 text-center uppercase">📅 Quarta-feira - 04 de Junho</h3>
                            <div className="border-t border-green-500"></div>
                            <ul className="text-gray-300 text-lg mt-6 space-y-4">
                                <li><strong>08:00</strong> | Credenciamento</li>
                                <li><strong>09:00</strong> |  Palestra 6 - <span className="text-green-300">Cláudia Vasconcellos (Petrobras)</span></li>
                                <li><strong>10:00</strong> |  Palestra 7 - <span className="text-green-300">João Guandalini (Foresea)</span></li>
                                <li><strong>11:00</strong> |  Palestra 8 - <span className="text-green-300">Denis Angra (Ocyan e Presidente da Seção Macaé)</span></li>
                                <li><strong>12:00</strong> |  Almoço</li>
                                <li><strong>14:00</strong> |  Palestra 9 - <span className="text-green-300">Rafaela Vieira (WIN)</span></li>
                                <li><strong>15:00</strong> |  Palestra 10 - <span className="text-green-300">Luvas Sátiro (Geowellex)</span></li>
                                <li><strong>16:00</strong> |  Palestra 11 - <span className="text-green-300">Dalexa Fernandez (Infinity Power Center and Regional Activities Manager SPE)</span></li>
                                <li><strong>17:00</strong> |  Coffee Break</li>
                            </ul>
                        </div>

                        {/* Dia 3 - 05 de Junho */}
                        <div className="bg-green-950/90 rounded-xl shadow-lg p-8 border border-green-500 hover:scale-105 transition-all">
                            <h3 className="text-white text-3xl font-bold mb-4 text-center uppercase">📅 Quinta-feira - 05 de Junho</h3>
                            <div className="border-t border-green-500"></div>
                            <ul className="text-gray-300 text-lg mt-6 space-y-4">
                                <li><strong>08:00</strong> | Credenciamento</li>
                                <li><strong>09:00</strong> |  Palestra 12 - <span className="text-green-300">Ana Lígia (SLB)</span></li>
                                <li><strong>10:00</strong> |  Minicurso 1 - <span className="text-green-300">Fluidos de Perfuração</span> (Laura Musgueira - Petrobras)</li>
                                <li><strong>12:00</strong> |  Almoço</li>
                                <li><strong>14:00</strong> |  Palestra 13 - <span className="text-green-300">Fernanda Góis (SLB)</span></li>
                                <li><strong>15:00</strong> |  Minicurso 2 - <span className="text-green-300">Lucas Sátiro (Geowellex)</span></li>
                                <li><strong>17:00</strong> |  Mesa de Encerramento</li>
                                <li><strong>16:00</strong> |  Coquetel</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
