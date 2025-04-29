 export default function Palestrantes() {
    return (
        <main className="bg-gray-900 w-full overflow-x-hidden">
            <section className="bg-[url('Media/background.jpeg')] bg-fixed bg-cover bg-center w-full flex flex-col py-10">

                {/* Seção Inicial */}
                <div className="mt-17 flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-700 to-green-900 py-16 rounded-xl mx-6 shadow-2xl">
                    <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide mb-6">
                        <span className="text-green-300">NOSSOS </span>PALESTRANTES
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl max-w-3xl">
                        Conheça os palestrantes que fazem parte do <strong>I° AMAZON TECHENERGY</strong>. Cada um trará insights inovadores e experiências únicas
                        para discutir o futuro do setor energético e destacar oportunidades estratégicas.
                    </p>
                </div>

                {/* Destaques */}
                <div className="flex justify-center mt-10">
                    <img
                        src="Icons/speufpa.PNG"
                        alt="Destaques"
                        className="max-w-sm sm:max-w-md md:max-w-lg rounded-xl shadow-lg border-4 border-green-500"
                    />
                </div>

                {/* Lista de Palestrantes */}

                <div className="flex flex-col items-center w-full py-12">
                    <h2 className="text-green-300 text-3xl md:text-4xl font-semibold mb-10 tracking-wider">
                        PARTICIPANTES DE DESTAQUE
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-6">

                         {/* Botão - Ana Lígia */}
                         <a
                            href="https://www.linkedin.com/in/ana-ligia-r-trannin-43690020?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-950/90 rounded-lg shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            <img
                                src="Members/ana_ligia.jpg"
                                alt="Ana Lígia"
                                className="w-44 h-44 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-white text-2xl font-bold mb-2">Ana Lígia Trannin</h3>
                            <h4 className="text-green-300 text-lg font-semibold mb-3">Gerente de Recrutamento na SLB</h4>
                            <p className="text-gray-300 text-base text-justify leading-relaxed">
                                Gerente de recrutamento na empresa SLB, tem como missão identificar e atrair os melhores talentos, desempenhando papel relevante
                                na construção de equipes de sucesso. Formada em Engenharia pela Universidade Federal de Itajubá, trabalha há mais de 13 anos no setor
                                de óleo e gás. Iniciou sua carreira como engenheira de campo, atuando por mais de 9 anos com integridade de poços e gestão de equipes operacionais.
                                Nos últimos anos, trazendo consigo o entendimento das complexidades e demandas do setor, tem se dedicado à jornada em recursos humanos.
                            </p>
                        </a>

                         {/* Botão - Cláudia Vasconcellos */}
                        <a
                            href="https://www.linkedin.com/in/claudia-vasconcellos-engenheira?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-950/90 rounded-lg shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            <img
                                src="Members/claudia_vasconcellos.jpg"
                                alt="Claudia Vasconcellos"
                                className="w-44 h-44 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-white text-2xl font-bold mb-2">Claudia Vasconcellos</h3>
                            <h4 className="text-green-300 text-lg font-semibold mb-3">Consultora Técnica na Petrobrás</h4>
                            <p className="text-gray-300 text-base text-justify leading-relaxed">
                                Profissional com mais de 18 anos de experiência no mercado de engenharia, tendo atuado majoritariamente no setor de óleo e gás nas áreas de: projeto de
                                processo, auditorias, treinamentos (bow tie, HAZOP, APR), liderança em análise de risco e relacionamento com órgãos reguladores. Engenheira Química formada
                                pelo Instituto Militar de Engenharia (IME), especialista em segurança de processo pelo SENAI-CETIQT, mestra em Engenharia Química pela UERJ, concludente do
                                treinamento em liderança Harvard Manage Mentor (Harvard Business School). Atualmente, consultora técnica na Petrobrás na área de contratos e relacionamento
                                com a ANP para o segmento de E&P.
                            </p>
                        </a>

                        {/* Botão - Wilson Leal */}
                        <a
                            href="https://www.linkedin.com/in/wilsonleal11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-950/90 rounded-lg shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            <img
                                src="Members/wilson_leal.jpg"
                                alt="Wilson Leal"
                                className="w-44 h-44 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-white text-2xl font-bold mb-2">Wilson Leal</h3>
                            <h4 className="text-green-300 text-lg font-semibold mb-3">Desenvolvedor de Negócios</h4>
                            <p className="text-gray-300 text-base text-justify leading-relaxed">
                                Hoje atuando com foco em inovação e tecnologia para o setor de energia, graduado em Engenharia de Produção
                                pela Universidade Veiga de Almeida (RJ) e possui mestrado em Negócios Internacionais pela Miami University of Science and Technology (EUA). Com
                                trajetória nos últimos anos voltada à transformação digital no setor de óleo e gás, vem liderando a implantação de soluções baseadas em vídeo
                                analytics e inteligência artificial, com foco em segurança ocupacional, eficiência operacional e compliance em ativos offshore e onshore no Brasil e no exterior.
                            </p>
                        </a>

                        {/* Rafaela Vieira */}
                        <a
                            href="https://www.linkedin.com/in/rafaela-rezende-vieira?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-950/90 rounded-lg shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            <img
                                src="Members/rafaela_vieira.jpg"
                                alt="Rafaela Vieira"
                                className="w-44 h-44 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-white text-2xl font-bold mb-2">Rafaela Vieira</h3>
                            <h4 className="text-green-300 text-lg font-semibold mb-3">Coordenadora Comercial na Subsea7</h4>
                            <p className="text-gray-300 text-base text-justify leading-relaxed">
                                Hoje atuando como Coordenadora Comercial, Rafaela possui graduação em Engenharia Mecatrônica pela Universidade
                                Católica de Petrópolis e pela California State University nos EUA. Realizou seu mestrado em Engenharia de Petróleo
                                pela Heriot-Watt University em parceria com a operadora Galp em Portugal. Com anos de experiência como Engenheira
                                de Projetos offshore embarcando em navios PLSVs e como Engenheira de estimativa de propostas comerciais, Rafaela
                                também é formada em Metrologia e Qualidade pelo Inmetro, onde esteve por 10 anos antes de ingressar na indústria de óleo e gás.
                                Voluntariamente, é Diretora da Diretoria de Diversidade e Inclusão da SPE seção Brasil, onde se dedica às pautas sociais de incentivo e capacitação
                                no setor de energia.
                            </p>
                        </a>

                        {/* João Guandalini */}
                        <a
                            href="https://www.linkedin.com/in/joaohgbatista?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-950/90 rounded-lg shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            <img
                                src="Members/joao_guandalini.jpg"
                                alt="João Guandalini"
                                className="w-44 h-44 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-white text-2xl font-bold mb-2">João Guandalini</h3>
                            <h4 className="text-green-300 text-lg font-semibold mb-3">Engenheiro de Petróleo</h4>
                            <p className="text-gray-300 text-base text-justify leading-relaxed">
                                Profissional experiente no setor de óleo & gás, tem experiência em diferentes funções gerenciais como Desenvolvimento de Negócios, Vendas,
                                Gerenciamento de Projetos e Assistência Técnica de Campo. Especialidades: Óleo & Gás, Desenvolvimento de Negócios, Marketing & Vendas,
                                Tendering, Gerenciamento de Projetos, Gerenciamento de Contas, Negociações complexas, Equipamentos submarinos, Intervenções de Poços,
                                Sistemas de Controle Submarino e Abandono de Poços.
                            </p>
                        </a>

                    </div>
                </div>
            </section>
        </main>
    );
}
