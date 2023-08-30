export const EVENT_DATE = new Date('2023-08-31T08:30:00-03:00');
export const EVENT_SALE_URL = 'https://eventos.funarbe.org.br/xxviii-semana-da-informatica';

export const EVENT_DESCRIPTION = "A semana de informática é um evento voltado para que os alunos da área de Tecnologia da Informação. Este ano a organização é de competência do Departamento de Informática da UFV. Serão 4 dias de evento, entre os dias 31/08/2023 e 03/09/2023, com minicursos, painel de discussão, competições de programação e palestras ministrados por profissionais gabaritados de diversas empresas, professores e pesquisadores do segmento de computação de todo o país. Temas como Inteligência Artificial, Tecnologia da Informação, Inclusão, Carreira e Empreendedorismo serão abordados.";

export const EVENT_MARATONA_DESCRITION = "A Maratona de Programação é um evento da Sociedade Brasileira de Computação que existe desde o ano de 1996. Nasceu das competições regionais classificatórias para as etapas mundiais da competição de programação, o International Collegiate Programming Contest, e é parte da regional sul-americana do evento. Ela se destina a alunos e alunas de cursos de graduação e início de pós-graduação na área de Computação e afins. A competição promove nos estudantes a criatividade, a capacidade de trabalho em equipe, a busca de novas soluções de software e a habilidade de resolver problemas sob pressão. A cada ano, observa-se que as instituições de ensino e, principalmente, as grandes empresas da área têm valorizado os alunos que participam do evento.";
export const EVENT_MARATONA_SUBSCRIPTION_URL = "https://forms.gle/sLiRHMxc1VRKvGdg7";

export const EVENT_SCHEDULE_DESCRIPTION = "Atividades para o período de 31/08/2023 a 03/09/2023. ATENÇÃO: Programação sujeita a alterações. Acompanhe o site para se manter a par das atualizações e novidades."
export const DAY_1_SCHEDULE = [
    {
        hour: "08:30 - 12:30",
        title: "Maratona de Programação da Semana de Informática",
        speakerDescription: "",
        localLink: "",
        local: "Laboratório de Ensino do DPI - Sala CCE 416",
        description: "Maratona interna da UFV. Evento não-oficial da SBC, aberto ao público do Curso de Ciência da Computação. Atenção: será no laboratório do prédio do CCE (sala 416).",
        image: "/SI2023/maratona-logo.jpg",

        links: [
            { button_name: "Inscrição", button_url: "https://forms.gle/sLiRHMxc1VRKvGdg7", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: '<p style="color: #ff0000;">TESTANDO</p>',
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "14:00        ",
        title: "Palestra Cientec",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Mais informações em breve",
        image: "/SI2023/cientec.png",
        links: [
            ////{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "15:00        ",
        title: "Empregabilidade e dia a dia com um produto global: Visão do RH e um Tech Lead",
        speakerDescription: "Verônica Leite (Sydle)",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Verônica Leite, gestora de pessoas da Sydle traz uma visão, do ponto de vista de Recursos Humanos, do mercado de TI e empregabilidade.",
        image: "/SI2023/sydle.png",

        links: [
            ////{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "16:00        ",
        title: "Coffee-break",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Pausa para socialização",
        image: "/SI2023/coffee.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "16:30 - 18:00",
        title: "Painel: Trilhando Caminhos na Tecnologia",
        speakerDescription: "Convidadas",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Um painel composto exclusivamente por mulheres discutirá os caminhos da carreira de um profissional de TI. Participarão profissionais da UFV e do mercado de trabalho e ex-alunas do curso de Ciência da Computação da UFV.",
        image: "/SI2023/no_picture_2.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "18:00        ",
        title: "Abertura do Evento e Divulgação dos Resultados da Maratona da SI",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Uma breve cerimônia de abertura do evento, seguida da divulgação dos resultados da Maratona da Semana de Informática",
        image: "/SI2023/logo_dpi.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
];

export const DAY_2_SCHEDULE = [
    {
        hour: "08:30 - 10:30",
        title: "Minicurso de React JS",
        speakerDescription: "Levty",
        localLink: "",
        local: "Laboratório de Ensino DPI - CCE 416",
        description: "Minicurso da plataforma React JS, ministrado por profissional da Levty. Atenção: será no laboratório do prédio do CCE (sala 416). O curso poderá ser feito em duplas, portanto, existem 50 vagas disponíveis",
        image: "/SI2023/levity.png",

        links: [
            { button_name: "Inscrição", button_url: "https://forms.gle/MFJjDjN5f4yGt6gw7", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "09:30 - 12:00",
        title: "Processo Seletivo BITKA",
        speakerDescription: "BITKA",
        localLink: "",
        local: "Sala de reuniões do Departamento de Informática (prédio do CCE)",
        description: "A BITKA, empresa que cria soluções inovadoras na área de sistemas de apoio a decisão, está à procura de talentos para preencher futuras vagas nas áreas de TI, Otimização e Análise Preditiva. Faremos na Semana da Informática a primeira etapa do processo seletivo, que será aberta para candidatos que estão cursando do 4º período para frente ( quem estiver em períodos anteriores a esses podem enviar o currículo para cadastramos na nossa base de talentos para futuras oportunidades). Iremos considerar currículos para vagas efetivas ou part-time dependendo da proximidade de formatura de cada candidato. Temos como prioridade construir um ambiente saudável, colaborativo e justo entre as pessoas para que possamos construir soluções incríveis. Venha trabalhar em uma empresa que está em pleno crescimento e que investe na carreira das suas pessoas. Mais informações em breve",
        image: "/SI2023/bitka.png",

        links: [
            { button_name: "Inscrição", button_url: "https://forms.gle/d9tYw3w9kpdtF9Y46", },
            { button_name: "Agendamento de entrevista", button_url: "https://calendly.com/d/2vz-c92-yqq/semana-da-informatica-ufv-bitka", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "10:30                        ",
        title: "Coffee-break",
        speakerDescription: "",
        localLink: "",
        local: "Hall de entrada do corredor do Departamento de Informática (prédio do CCE)",
        description: "Pausa para socialização",
        image: "/SI2023/coffee.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "11:00 - 12:00",
        title: "Minicurso de React JS",
        speakerDescription: "Levty",
        localLink: "",
        local: "Laboratório de Ensino DPI - CCE 416",
        description: "Minicurso da plataforma React JS, ministrado por profissional da Levty. Atenção: será no laboratório do prédio do CCE (sala 416). O curso poderá ser feito em duplas, portanto, existem 50 vagas disponíveis",
        image: "/SI2023/levity.png",

        links: [
            { button_name: "Inscrição", button_url: "https://forms.gle/MFJjDjN5f4yGt6gw7", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "13:00 - 15:00",
        title: "Processo Seletivo BITKA",
        speakerDescription: "BITKA",
        localLink: "",
        local: "Sala de reuniões do Departamento de Informática (prédio do CCE)",
        description: "A BITKA, empresa que cria soluções inovadoras na área de sistemas de apoio a decisão, está à procura de talentos para preencher futuras vagas nas áreas de TI, Otimização e Análise Preditiva. Faremos na Semana da Informática a primeira etapa do processo seletivo, que será aberta para candidatos que estão cursando do 4º período para frente ( quem estiver em períodos anteriores a esses podem enviar o currículo para cadastramos na nossa base de talentos para futuras oportunidades). Iremos considerar currículos para vagas efetivas ou part-time dependendo da proximidade de formatura de cada candidato. Temos como prioridade construir um ambiente saudável, colaborativo e justo entre as pessoas para que possamos construir soluções incríveis. Venha trabalhar em uma empresa que está em pleno crescimento e que investe na carreira das suas pessoas. Mais informações em breve",
        image: "/SI2023/bitka.png",

        links: [
            { button_name: "Inscrição", button_url: "https://forms.gle/d9tYw3w9kpdtF9Y46", },
            { button_name: "Agendamento de entrevista", button_url: "https://calendly.com/d/2vz-c92-yqq/semana-da-informatica-ufv-bitka", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "14:00                        ",
        title: "A interdisciplinaridade na carreira. O Relato de um pato.",
        speakerDescription: "Jéferson Coêlho",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Um relato bem-humorado da experiência pessoal do palestrante através de sua carreira acadêmica e profissional e de como a interdisciplinaridade o ajudou a alcançar seus objetivos.",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "15:00                        ",
        title: "Mitigando riscos de ciberataques com certificados digitais",
        speakerDescription: "Cláudio Loris (GlobalSign)",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Mais informações em breve",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "16:00                        ",
        title: "Coffee-break",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Pausa para socialização",
        image: "/SI2023/coffee.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "16:30                        ",
        title: "BITKA Analytics - Decisões Inteligentes, Resultados Extraordinários: História, Inovação e Oportunidades",
        speakerDescription: "Colaboradores da BITKA Analytics",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Nessa conversa, iremos compartilhar a história da BITKA, empresa que foi criada por grandes referências no mercado brasileiro na área de sistemas de apoio a decisão. Apesar de pouco tempo de existência, a BITKA se destaca pelo extraordinário crescimento desde então. Atualmente o time conta com aproximadamente 140 pessoas sendo 60% desses cientistas de dados. Aliando técnicas de análise prescritiva (otimização) e preditiva, a BITKA tem como objetivo criar soluções de planejamento aderentes à realidade dos clientes e que irão auxiliá-los a extrair o máximo potencial do seu negócio. A filosofia da empresa é construir um ambiente saudável e colaborativo entre as pessoas, ajudando cada indivíduo a atingir a excelência profissional e proporcionando o ambiente correto para a construção de soluções incríveis. Nesse ambiente a prioridade é valorizar as diferenças entre cada um dos indivíduos entendendo que elas são essenciais para construirmos sistemas aderentes e impactantes. Um acompanhamento de carreira, com feedbacks justos e transparentes, foi construído para sustentar esses pilares. Os Palestrantes, além de dar dicas sobre carreira, irão falar um pouco a respeito dos projetos inovadores e oportunidades abertas na BITKA.",
        image: "/SI2023/bitka.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "17:30                        ",
        title: "Banco de Dados Geográficos: uma história",
        speakerDescription: "Prof. Marconi Pereira / UFSJ",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Aguardando detalhes. Mais informações em breve",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    }
];

export const DAY_3_SCHEDULE = [
    {
        hour: "08:30                        ",
        title: "Deep Learning para Visão Computacional: Aplicações e Estado da Arte",
        speakerDescription: "Hugo Oliveira",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Aguardando detalhes. Mais informações em breve",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "09:30 - 12:00",
        title: "Maratona Brasileira de Programação - Sede Regional de Viçosa.",
        speakerDescription: "",
        localLink: "",
        local: "LBI - Prédio da CEF",
        description: "Etapa regional da maratona oficial da SBC. Este ano, será concomitante com a Semana de Informática. As inscrições foram feitas previamente, pelos meios convencionais da SBC. Participarão 17 equipes, de 3 cidades/instituições distintas. As cidades de Viçosa, Ubá e Leopoldina estarão representadas. A competição acontecerá no segundo andar do prédio da Caixa Econômica Federal, nos laboratórios de ensino do Departamento de Informática.",
        image: "/SI2023/maratona-logo.jpg",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "09:30                        ",
        title: "Coffee-break",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Pausa para socialização",
        image: "/SI2023/coffee.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "10:00 - 12:30        ",
        title: "Tutorial: Desinformação em Plataformas Digitais: Conceitos, Abordagens Tecnológicas e Desafios.",
        speakerDescription: "Julio Cesar Reis",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "O prof. Julio Reis, do Departamento de Informática, irá apresentar uma versão resumida do curso que ministrou no 43º Congresso da SBC, ocorrido no dia 07/08/2023.",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "13:30 - 19:00",
        title: "Maratona Brasileira de Programação - Sede Regional de Viçosa.",
        speakerDescription: "",
        localLink: "",
        local: "LBI - Prédio da CEF",
        description: "Etapa regional da maratona oficial da SBC. Este ano, será concomitante com a Semana de Informática. As inscrições foram feitas previamente, pelos meios convencionais da SBC. Participarão 17 equipes, de 3 cidades/instituições distintas. As cidades de Viçosa, Ubá e Leopoldina estarão representadas. A competição acontecerá no segundo andar do prédio da Caixa Econômica Federal, nos laboratórios de ensino do Departamento de Informática.",
        image: "/SI2023/maratona-logo.jpg",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "14:00                        ",
        title: "Modelos text-to-image e image-to-text",
        speakerDescription: "Daniel L. Fernandes",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Aguardando detalhes Mais informações em breve",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "15:00                        ",
        title: "Título: Explorando o Drex - A importância da blockchain na criação do Real Digital Brasileiro",
        speakerDescription: "Bruno Coelho",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Formado em Ciência da Computação pela UFV, Bruno Coelho atua como engenheiro de software na área automotiva e é entusiasta de crypto e finanças no geral. A palestra cobrirá aspectos importantes para a criação da moeda digital brasileira por parte do Banco Central, como: Fundamentos do Drex, Arquitetura Técnica, Papel das Blockchains, Processo de Transação e Mineração, Desafios Técnicos e Soluções e Impacto no Setor de TI.",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "16:00                        ",
        title: "Coffee-break e confraternização",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Pausa para socialização",
        image: "/SI2023/coffee.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "19:30                        ",
        title: "Divulgação dos Resultados da Maratona da SBC",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Divulgação dos resultados da Maratona",
        image: "/SI2023/maratona-logo.jpg",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    }
];

export const DAY_4_SCHEDULE = [
    {
        hour: "09:30                        ",
        title: "Geração Procedural em Jogos Digitais",
        speakerDescription: "Lucas N. Ferreira",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Aguardando confirmação dos palestrantes. Mais informações em breve",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "10:30                        ",
        title: "Coffee-break",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Pausa para socialização",
        image: "/SI2023/coffee.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "11:00                        ",
        title: "Iniciando no mercado + exemplos de projetos",
        speakerDescription: "Victor Alexandrino (Microsoft)",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Aguardando detalhes. Mais informações em breve",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "14:00                        ",
        title: "Palestra Cadence",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Aguardando detalhes. Mais informações em breve",
        image: "/SI2023/logo_dpi.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "15:00                        ",
        title: "Startups: Decifrando os Desafios Iniciais",
        speakerDescription: "Guttardo Pereira (Bioflore)",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Formado em Ciência da Computação pela UFV, Guttardo Pereira traz uma visão inspiradora que une a paixão pela tecnologia e o empreendedorismo. Durante a graduação na UFV viveu experiências únicas que somente a vida de um estudante de Viçosa pode proporcionar. Entrou no mercado como desenvolvedor, mas logo descobriu sua paixão pelo empreendedorismo. A cultura da UFV de Ensino, Pesquisa e Extensão foram essenciais para o surgimento da Bioflore, startup fundada por ele e mais dois amigos, pesquisadores com formação na UFV. Nesta apresentação ele compartilhará um pouco sobre a Bioflore, mostrará como o conhecimento sólido em programação pode ser uma ferramenta poderosa para gerar ideias inovadoras, além de explorar os vários desafios enfrentados na vida de um empreendedor de primeira viagem. Durante a palestra, será compartilhada a a experiência do palestrante como ex-aluno da UFV, desenvolvedor e co-fundador da Bioflore. Irá abordar sua carreira, o surgimento da Bioflore, a missão da empresa, focada em mudanças climáticas e sustentabilidade, e os desafios e rotinas que enfrentou como empreendedor. ",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "16:00                        ",
        title: "Coffee-break",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Pausa para socialização",
        image: "/SI2023/coffee.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "16:30                        ",
        title: "Engenharia de Performance e Gráficos para Jogos para Dispositivos Móveis",
        speakerDescription: "Marcelo Menezes (Wildlife Studios)",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Marcelo é bacharel e mestre em Ciência da Computação pela UFV. Em seu mestrado pesquisou e desenvolveu algoritmos exatos para solucionar problemas de geometria computacional utilizando GPUs. Atualmente trabalha como Graphics Engineer na Wildlife Studios, onde é um dos engenheiros responsáveis pela rendering stack e performance em live games. Nessa palestra discutiremos sobre a carreira em desenvolvimento de jogos, com foco em gráficos e performance em dispositivos móveis. Tópicos importantes em um mercado cada vez mais competitivo.",
        image: "/SI2023/no_picture.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    },
    {
        hour: "17:30                        ",
        title: "Encerramento",
        speakerDescription: "",
        localLink: "",
        local: "Auditório da Biblioteca Central / UFV",
        description: "Breve cerimônia de encerramento do evento.",
        image: "/SI2023/logo_dpi.png",

        links: [
            //{ button_name: "INSCREVA-SE", button_url: "", },
            //{ button_name: "INSCREVA-SE", button_url: "", },
        ],
        speakers: [
            /*{
                name: "teste",
                role: "teste",
                picture: "/no_picture.png",
                htmlDescription: "<p></p>",
            },
            {
                name: "teste2",
                role: "teste2",
                picture: "/no_picture_2.png",
                htmlDescription: "<p></p>",
            }*/
        ]
    }

];

export const EVENT_SPONSORS_DESCRIPTION = "Empresas apoiadoras e patrocinadoras do evento.";

export const EVENT_SPONSORS = [
    {
        image: "/SI2023/bitka.png",
        url: "https://www.bitkaanalytics.com.br/",
    },
    {
        image: "/SI2023/cientec.png",
        url: "",
    },
    {
        image: "/SI2023/levity.png",
        url: "https://levty.com/br/",
    },
    {
        image: "/SI2023/sydle.png",
        url: "https://www.sydle.com/br/",
    },
    {
        image: "/SI2023/oriontec.png",
        url: "https://www.oriontec.com.br/",
    },
];

export const COMMON_QUESTIONS = [
    {
        question: "Como me inscrever no evento?",
        response: "A partir do dia 24/08/2023, às 08:00h, as inscrições estarão abertas para todos interessados. As inscrições serão feitas utilizando um sistema da FUNARBE, em um link externo. Basta clicar nas opções de link com o texto 'Inscrições'."
    },
    {
        question: "Como me inscrever nas Maratonas?",
        response: "Para a Maratona da Semana de Informática, as inscrições estão abertas. Basta clicar no botão presente na seção MARATONA, da página principal ou clicar na atividade, dentro da grade de programação, e usar o botão INSCRIÇÃO. No entanto, infelizmente não é mais possível realizar inscrições na Maratona Brasileira de Programação. O evento oficial da SBC tem o processo de inscrição independente da organização da Semana de Informática e o mesmo já aconteceu."
    },
    {
        question: "Existem atividades da Semana de Informática com inscrição separada?",
        response: "Sim. Além da Maratona da Semana de Informática, o minicurso (React) também tem inscrições separadas, devido ao número restrito de vagas. Há, ainda, o processo seletivo da patrocinadora BITKA (ver pergunta frequente específica). As atividades mencionadas aqui serão gratuitas para quem já se inscreveu no evento geral."
    },
    {
        question: "Como me inscrever nas atividades com inscrição separada?",
        response: "Acesse a grade de programação do evento e clique sobre a atividade. Juntamente com a descrição, haverá um botão (ou dois) que irá te redirecionar para o respectivo formulário de inscrição."
    },
    {
        question: "Quem pode participar do processo seletivo da BITKA?",
        response: "Alunos que estão cursando do 4º período para frente. Porém, quem estiver em períodos anteriores a esses pode enviar o currículo para ser cadastrado na base de talentos da empresa para futuras oportunidades. Para mais informações, consulte a atividade correspondente na seção PROGRAMAÇÃO."
    },
    {
        question: "Acontecerão atividades simultâneas/em paralelo?",
        response: "Em parte da programação do evento, sim. A Maratona de Programação da SBC e o processo seletivo da BITKA acontecerão em paralelo com outras atividades. Consulte a programação do evento."
    }
];

export const UPDATES = [
    {
        "title": "25/08, 13:30h",
        "content": "Novas atualizações na grade de programação"
    },
    {
        "title": "24/08, 19:30h",
        "content": "Adicionados links de inscrição e agendamento de entrevista para o processo seletivo da BITKA"
    },
    {
        "title": "24/08, 19:30h",
        "content": "Abertas inscrições para o mini-curso de React JS"
    },
    {
        "title": "24/08, 19:30h",
        "content": "Inscrições abertas Maratona de Semana de Informática"
    }
]
