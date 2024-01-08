import React from 'react';
import { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaBootstrap, FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaNodeJs, FaLink } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ProjectDetailBox } from './style';
import { Link } from 'react-router-dom';
import CafeHero from "../../assets/cafe/FireShot Capture 030 - Café 3 Corações - .png"
import CafeBody from "../../assets/cafe/FireShot Capture 029 - Café 3 Corações - .png"
import cafeCa1 from "../../assets/cafe/FireShot Capture 031 - Café 3 Corações - .png"
import cafeCa2 from "../../assets/cafe/FireShot Capture 032 - Café 3 Corações - .png"
import cafeCa3 from "../../assets/cafe/FireShot Capture 033 - Café 3 Corações - .png"
import cafeCa4 from "../../assets/cafe/FireShot Capture 035 - Café 3 Corações - .png"
import cafeCa5 from "../../assets/cafe/FireShot Capture 036 - Café 3 Corações - .png"
import cafeCa6 from "../../assets/cafe/FireShot Capture 030 - Café 3 Corações - .png"
import pokedexHero from "../../assets/pokedex/FireShot Capture 028 - PokeDex - .png"
import pokedexBody from "../../assets/pokedex/FireShot Capture 024 - PokeDex - .png"
import pokedexCa1 from "../../assets/pokedex/FireShot Capture 025 - PokeDex - .png"
import pokedexCa2 from "../../assets/pokedex/FireShot Capture 026 - PokeDex - .png"
import pokedexCa3 from "../../assets/pokedex/FireShot Capture 027 - PokeDex - .png"
import pokedexCa4 from "../../assets/pokedex/FireShot Capture 028 - PokeDex - .png"
import ommaHero from "../../assets/omma/FireShot Capture 038 - Omma - Receitas legais - .png"
import ommaBody from "../../assets/omma/FireShot Capture 042 - Onma - gleibercoelho.github.io.png"
import ommaCa1 from "../../assets/omma/FireShot Capture 039 - Omma - Receitas legais - .png"
import ommaCa2 from "../../assets/omma/FireShot Capture 038 - Omma - Receitas legais - .png"
import ommaCa3 from "../../assets/omma/FireShot Capture 041 - Omma - Receitas legais - .png"
import gadgetsHero from "../../assets/mercado Gadgets/home.png"
import gadgetsBody from "../../assets/mercado Gadgets/FireShot Capture 043 - Mercado da Informática - 127.0.0.1.png"
import gadgetsCa1 from "../../assets/mercado Gadgets/FireShot Capture 022 - Mercado da Informática - 127.0.0.1.png"
import gadgetsCa2 from "../../assets/mercado Gadgets/FireShot Capture 045 - Mercado da Informática - 127.0.0.1.png"
import gadgetsCa3 from "../../assets/mercado Gadgets/FireShot Capture 046 - Mercado da Informática - 127.0.0.1.png"
import gadgetsCa4 from "../../assets/mercado Gadgets/FireShot Capture 047 - Mercado da Informática - 127.0.0.1.png"
import gadgetsCa5 from "../../assets/mercado Gadgets/FireShot Capture 044 - Mercado da Informática - 127.0.0.1.png"
import gadgetsCa6 from "../../assets/mercado Gadgets/FireShot Capture 049 - Mercado da Informática - 127.0.0.1.png"
import ggwpHero from "../../assets/ggwp/FireShot Capture 052 - GG-WP - www.gg-wp.info.png"
import ggwpBody from "../../assets/ggwp/FireShot Capture 053 - GG-WP - www.gg-wp.info.png"
import ggwpCa1 from "../../assets/ggwp/FireShot Capture 054 - GG-WP - www.gg-wp.info copia 2.png"
import ggwpCa2 from "../../assets/ggwp/FireShot Capture 054 - GG-WP - www.gg-wp.info copia.png"
import ggwpCa3 from "../../assets/ggwp/FireShot Capture 054 - GG-WP - www.gg-wp.info.png"
import pompomHero from "../../assets/pompom/FireShot Capture 066 - Pompom - gleibercoelho.github.io 12.png"
import pompomBody from "../../assets/pompom/sheilla.png"
import pompomCa1 from "../../assets/pompom/FireShot Capture 011 - Pompom - .png"
import pompomCa2 from "../../assets/pompom/FireShot Capture 010 - Pompom - .png"
import pompomCa3 from "../../assets/pompom/FireShot Capture 058 - Pompom - gleibercoelho.github.io.png"
import pompomCa4 from "../../assets/pompom/FireShot Capture 059 - Pompom - gleibercoelho.github.io.png"
import soundgardenHero from "../../assets/soundgardenfile/pexels-wendy-wei-2183361.jpg"
import soundgardenBody from "../../assets/soundgardenfile/FireShot Capture 055 - Sound Garden - gleibercoelho.github.io.png"
import soundgardenCa1 from "../../assets/soundgardenfile/FireShot Capture 056 - Sound Gardens - Painel Administrativo - gleibercoelho.github.io.png"
import netflixHero from "../../assets/netflix/FireShot Capture 037 - NETFLIX CLONE - gleibercoelho.github.io copia.png"
import netflixBody from "../../assets/netflix/FireShot Capture 037 - NETFLIX CLONE - gleibercoelho.github.io.png"
import netflixCa1 from "../../assets/netflix/FireShot Capture 037 - NETFLIX CLONE - gleibercoelho.github.io.png"
import dindinHero from "../../assets/dindin/dindin.png"
import dindinBody from "../../assets/dindin/FireShot Capture 004 - Dindin - gleibercoelho.github.io.png"
import dindinCa1 from "../../assets/dindin/FireShot Capture 061 - Dindin - .png"
import dindinCa2 from "../../assets/dindin/FireShot Capture 060 - Dindin - .png"
import dindinCa3 from "../../assets/dindin/FireShot Capture 063 - Dindin - .png"
import dindinCa4 from "../../assets/dindin/FireShot Capture 008 - Dindin - gleibercoelho.github.io.png"
import mechHero from "../../assets/mech/login.jpeg"
import mechBody from "../../assets/mech/home.jpeg"
import mechCa1 from "../../assets/mech/sales.jpeg"
import mechCa2 from "../../assets/mech/stock.jpeg"
import lavieBody from "../../assets/La Vie/0_MNVJq_8e0SJoqZb5.jpg"
import codeleapHero from "../../assets/codeleap/codeleap.png"
import codeleapBody from "../../assets/codeleap/FireShot Capture 013 - Codeleap - gleibercoelho.github.io.png"
import codeleapCa1 from "../../assets/codeleap/FireShot Capture 015 - Codeleap - gleibercoelho.github.io.png"
import APIFeriadoHero from "../../assets/Feriados API/FireShot Capture 064 - Consulta feriados - 127.0.0.1.png"
import APICEPHero from "../../assets/CEP API/FireShot Capture 065 - Consulta API-CEP - 127.0.0.1.png"
import { motion } from 'framer-motion';
import { RevealTwo } from '../test/reveal two';

interface ProductDetailsProps {
  product: {
    id: number;
    heroPhoto: string;
    heroPhotoClass: string;
    title: string;
    subText: string;
    subText2: string;
    infoEnd: string;
    infoRepo: string;
    infoTechs: JSX.Element;
    bodyPhoto: string;
    bodyPhotoClass: string;
    textSide: string;
    textBottom: string;
    PhotoCarrosel1: string;
    PhotoCarrosel2: string;
    PhotoCarrosel3: string;
    PhotoCarrosel4: string;
    PhotoCarrosel5: string;
    PhotoCarrosel6: string;     
    textcarrosel: string;
    totalSlide: number;
  };
}



export const product: ProductDetailsProps['product'][] =

  [
    {
      id: 0,
      heroPhoto: gadgetsHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Mercado de Gadgets. ',
      subText: 'Este é um projeto ecommerce desenvolvido com React. Inspirado no design da Apple.',
      subText2: 'Este é um projeto de Ecommerce Full Stack no qual eu sou responsável pelo desenvolvimento do front end e integração com o back end. O site oferece toda a experiencia de compra para um usuário.',
      infoEnd: '#',
      infoRepo: 'https://github.com/gleibercoelho/Gama-XP-47-final',
      infoTechs: (<div><p>
        <FaReact />
        < SiRedux />
        <SiTypescript />
        <SiStyledcomponents />
        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: gadgetsBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'Dentro do site é possível se cadastrar como usuário, ver seu histórico de compras, adicionar e remover produtos do seu carinho, fechar pedidos, adicionar cupons de desconto. Este site foi desenvolvido em React. Eu configurei toda integração do CRUD com o back end',
      textBottom: 'Este site foi desenvolvido como trabalho de conclusão do meu curso de programação com ênfase em front end na Gama Academy. Para conhecer como foi o processo de desenvolvimento, consulte meu repositório.',
      PhotoCarrosel1: gadgetsCa1,
      PhotoCarrosel2: gadgetsCa2,
      PhotoCarrosel3: gadgetsCa3,
      PhotoCarrosel4: gadgetsCa4,
      PhotoCarrosel5: gadgetsCa5,
      PhotoCarrosel6: gadgetsCa6,
      
      
      textcarrosel: 'O site também conta com painel de controle para o administrador verificar todos os produtos cadastrados, classes de produtos, usuários cadastrados, pedidos feitos. O painel foi desenvolvido para o usuário administrador realizar toda gestão do site sem precisar programar.',
      totalSlide: 5,
    },
    {
      id: 1,
      heroPhoto: ggwpHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'GG-WP',
      subText: 'Esta é uma aplicação web desenvolvida em React. Criada para jogadores do game League of Legends.',
      subText2: 'Essa aplicação foi desenvolvida para mostrar os status das partidas de qualquer jogador de Lol em qualquer servidor do mundo. Basta digitar um nome de usuário válido para acessar os dados do jogador.',
      infoEnd: 'https://www.gg-wp.info/',
      infoRepo: '#',
      infoTechs: (<div><p>
        <FaReact />
        <FaNodeJs />
        <SiTypescript />
        <SiStyledcomponents />
        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: ggwpBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'Dentro do site é possível gráficos de dano, quantidade de kills, e receber insight exclusivos com base na análise dos dados disponíveis',
      textBottom: 'A criação desse site foi possível graças as API da Riot Games produtora do League of Legends. Nesta API sao disponibilizadas uma quantidade absurda de informação. É necessário bastante conhecimento prévio do jogo para conseguir organizar estes dados e trazer análises para os usuários.',
      PhotoCarrosel1: ggwpCa1,
      PhotoCarrosel2: ggwpCa2,
      PhotoCarrosel3: ggwpCa3,
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'Para ser elegível a uma das chaves da Riot Games que possibilita a consulta de dados das APIs em grande escala é necessário colocar camadas de proteção desta chave token de acesso. Para isso ser possível foi necessário criar um servidor intermediário no back end para receber as requisições do navegador e enviar para o servidor da Riot e retornar apenas os dados solicitados pelo usuário.',
      totalSlide: 3,
    },
    {
      id: 2,
      heroPhoto: soundgardenHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Sound Garden',
      subText: 'Sound Garden é uma grande empresa de eventos que promove shows e festivais pelo país.',
      subText2: 'Este é um site desenvolvido com HTML e Javascript para que os usuários possam entrar para consultar os proximos eventos e realizar a reserva do seu ingresso bem como a compra do mesmo.',
      infoEnd: 'https://gleibercoelho.github.io/soundgarden-front/',
      infoRepo: 'https://github.com/gleibercoelho/soundgarden-front',
      infoTechs: (<div><p>
        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
        <FaBootstrap />
      </p></div>),
      bodyPhoto: soundgardenBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'O design do front end foi criado inspirados em sites do mesmo segmento.',
      textBottom: 'O administrador também pode consultar, editar, remover ou adicionar reservas que os demais usuário fizeram para cada evento.',
      PhotoCarrosel1: soundgardenCa1,
      PhotoCarrosel2: 'url-da-foto-2',
      PhotoCarrosel3: 'url-da-foto-3',
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'O back end desse site foi fornecido pela Gama Academy durante meu curso de front end e infelizmente nao esta mais disponível; imposibilitando visualizar todas as propriedades do site.',
      totalSlide: 1,
    },
    {
      id: 3,
      heroPhoto: codeleapHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Codeleap',
      subText: 'Esta é uma aplicação web criada em React para se compartilhar ideias.',
      subText2: 'Codeleap é um micro blog no qual e possivel logar com seu usuário e compartilhar suas ideias com o resto do mundo. Voce pode escrever sobre qualquer assunto e publicar neste site. Que tal começar agora?',
      infoEnd: 'https://gleibercoelho.github.io/codeleapPage/',
      infoRepo: 'https://github.com/gleibercoelho/codeLeap',
      infoTechs: (<div><p>
        <FaReact />
        < SiRedux />
        <SiTypescript />
        <SiStyledcomponents />
        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: codeleapBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'Este projeto faz parte de um desafio de código técnica para uma vaga de front end na Codeleap. O desafio é criar o código de um blog disponibilizado a partir do Figma. A criação, edição e remoção dos posts do blog é feita através da API disponibilizada para esse desafio.',
      textBottom: 'Este foi meu primeiro projeto desenvolvido usando session storage. Eu pude aprender como enviar informações armazenadas na session para o Redux, uma vez que ele perde as informações da store quando a página é recarregada',
      PhotoCarrosel1: codeleapCa1,
      PhotoCarrosel2: 'url-da-foto-2',
      PhotoCarrosel3: 'url-da-foto-3',
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'A session storage e o Redux foram combinados porque esse site foi imaginado para acessos recorrentes ao longo do dia. Dessa forma é possível o usuário continuar logado e voltar a página que estava lendo sem precisar relogar',
      totalSlide: 1,
    },
    {
      id: 4,
      heroPhoto: dindinHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Dindin',
      subText: 'Dindin é um site de educação financeira onde você aprende a investir',
      subText2: 'Este site foi criado para que os usuários possam ler artigos sobre economia e finanças e também assistir a vídeo aulas de como aplicar seu dinheiro de forma segura e duradoura. Venha assistir uma aula e planejar seu futuro.',
      infoEnd: 'https://gleibercoelho.github.io/Dindin-website-of-education/',
      infoRepo: 'https://github.com/gleibercoelho/Dindin-website-of-education',
      infoTechs: (<div><p>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: dindinBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'Este projeto foi o primeiro criado por mim no curso de fron end da Gama Academy. Desenvolvido com HTML, CSS e Javascript. ',
      textBottom: 'Com este site aprendi conceitos iniciais de flexbox e grid.',
      PhotoCarrosel1: dindinCa1,
      PhotoCarrosel2: dindinCa2,
      PhotoCarrosel3: dindinCa3,
      PhotoCarrosel4: dindinCa4,
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'Que tal aprender sobre educação financeira?',
      totalSlide: 4,
    },
    {
      id: 5,
      heroPhoto: pompomHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Pompom',
      subText: 'Este é o lugar para os fãs encontrarem conteúdo exclusivo da sua criadora de conteúdo gamer preferida.',
      subText2: 'Este site foi criado para criadora de conteúdo de jogos Sheilla Pompom possa compartilhar o conteudo das suas lives, youtube e demais redes com seus fãs. Sheilla é uma Drag Queen',
      infoEnd: 'https://gleibercoelho.github.io/SheillaPompom/',
      infoRepo: 'https://github.com/gleibercoelho/SheillaPompom',
      infoTechs: (<div><p>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: pompomBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'Este é um site colorido para um público colorido por uma criadora colorida.',
      textBottom: 'Através do site os fãs podem acompanhar o último conteúdo lançado. Desenvolvido em HTML e Javascript.',
      PhotoCarrosel1: pompomCa1,
      PhotoCarrosel2: pompomCa2,
      PhotoCarrosel3: pompomCa3,
      PhotoCarrosel4: pompomCa4,
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'Quer saber da próxima live ou rever a última? Vem pra cá',
      totalSlide: 4,
    },
    {
      id: 6,
      heroPhoto: netflixHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Netflix Clone',
      subText: 'Este projeto recria a home page do maior site de streaming do mundo.',
      subText2: 'Este projeto foi desenvolvido utilizando o Bootstrap, a biblioteca do Javascript para criar o carrossel de imagens que simula os filmes disponíveis no catálogo do site. ',
      infoEnd: 'https://gleibercoelho.github.io/Neflix-Ladding-Page-Clone/',
      infoRepo: 'https://github.com/gleibercoelho/Neflix-Ladding-Page-Clone',
      infoTechs: (<div><p>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaBootstrap />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: netflixBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'O bootstrap fornece diversos blocos de código predefinidos para que programadores possam reaproveitar esses blocos prontos e incorporarem aos seus projetos. ',
      textBottom: 'Outra vantagem que usar bootstrap no projeto é a sua responsividade. O código já é construído para os diferentes tamanhos de tela.',
      PhotoCarrosel1: netflixCa1,
      PhotoCarrosel2: 'url-da-foto-2',
      PhotoCarrosel3: 'url-da-foto-3',
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'Este tipo de biblioteca e amplamente usado por programadores para acelerar o processo de criação. ',
      totalSlide: 1,
    },
    {
      id: 7,
      heroPhoto: pokedexHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Pokedex',
      subText: 'Encontre todos os seus pokémons preferidos da primeira geração do clássico anime japonês.',
      subText2: 'Este e o projeto de um catálogo de pokémons inspirado em uma agenda eletrônica do anime onde é possível consultar informações de todos os monstros criados que você encontrar pelo caminho.',
      infoEnd: 'https://gleibercoelho.github.io/pokedex/',
      infoRepo: 'https://github.com/gleibercoelho/pokedex',
      infoTechs: (<div><p>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: pokedexBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'Este projeto consome dados de uma API usando Javascript para trazer as informações dos monstrinhos direito para o site.',
      textBottom: 'Projeto curinga no portifólio de todo programador iniciante, a pokedex é um otimo desafio para começar no Javascript e consumir dados de APIs.',
      PhotoCarrosel1: pokedexCa1,
      PhotoCarrosel2: pokedexCa2,
      PhotoCarrosel3: pokedexCa3,
      PhotoCarrosel4: pokedexCa4,
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'Conheça todos os monstros da primeira temporada do anime',
      totalSlide: 4,
    },
    {
      id: 8,
      heroPhoto: CafeHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Café 3 Corações',
      subText: 'Site criado inspirado na marca de cafés brasileiro 3 Corações',
      subText2: 'Site criado em HTML com Javascript para uma marca de cafés onde é possível ver seus produtos, avaliações, encontrar lojas físicas e entrar em contato com o atendimento ao cliente. O design é inspirado em sites de cafeteria.',
      infoEnd: 'https://gleibercoelho.github.io/Site-case-caf-3-coracoes/',
      infoRepo: 'https://github.com/gleibercoelho/Site-case-caf-3-coracoes',
      infoTechs: (<div><p>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: CafeBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'Este projeto front end foi imaginado para fornecer uma experiencia para os consumidores encontrarem não só café, mas outros produtos que a marca oferece.',
      textBottom: 'No site também é possível comprar os produtos disponives e colocar no seu carinho. Veja os produtos mais bem avaliados para ajudar na sua decisão.',
      PhotoCarrosel1: cafeCa1,
      PhotoCarrosel2: cafeCa2,
      PhotoCarrosel3: cafeCa3,
      PhotoCarrosel4: cafeCa4,
      PhotoCarrosel5: cafeCa5,
      PhotoCarrosel6: cafeCa6,
      
      
      textcarrosel: 'Conheça e aprenda a fazer as últimas receitas mais deliciosas no nosso blog.',
      totalSlide: 6,
    },
    {
      id: 10,
      heroPhoto: mechHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Mech Oficina',
      subText: 'Este é um projeto front end de uma oficina desenvolvido em React.',
      subText2: 'Este foi meu primeiro projeto desenvolvido com React e Typescript. Neste projeto foi desenvolvido a simulação de sistema de uma loja de peças que monitora as vendas feitas e o estoque de peças. o login foi implementado com Redux',
      infoEnd: '#',
      infoRepo: 'https://github.com/gleibercoelho/vite-project',
      infoTechs: (<div><p>
        <FaReact />
        <SiTypescript />
        < SiRedux />
        <SiStyledcomponents />
        <IoLogoJavascript />
        <FaSass />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: mechBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'O foco do projeto é desenvolver o front end, então para o back end eu criei um mock up do estoque e das vendas.',
      textBottom: 'O sistema de login foi implementado com Redux para que o estado de login do usuário esteja disponível em todo o site.',
      PhotoCarrosel1: mechCa1,
      PhotoCarrosel2: mechCa2,
      PhotoCarrosel3: 'url-da-foto-3',
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'Este site pode atender facilmente uma pequena loja e realizar seus controles de vendas e estoque.',
      totalSlide: 2,
    },
    {
      id: 9,
      heroPhoto: ommaHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'Omma',
      subText: 'Site de culinária para você preparar as melhores receitas.',
      subText2: ' Este site foi desenvolvido no meu curso de front end na Gama Academy. Consiste em disponibilizar um site com receitas para que os usuários possam consultar ingredientes, instruções e vídeos para realizar o preparo da receita escolhida. ',
      infoEnd: 'https://gleibercoelho.github.io/Site-de-Receitas/index.html',
      infoRepo: 'https://github.com/gleibercoelho/Site-de-Receitas',
      infoTechs: (<div><p>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: ommaBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'Omma é um site de receitas onde você pode consultar as melhores opções do que servir naquele almoço especial de domingo. Escolha dentre os melhores doces até os melhores pratos.',
      textBottom: 'Omma foi desenvolvido com HTML e CSS.',
      PhotoCarrosel1: ommaCa1,
      PhotoCarrosel2: ommaCa2,
      PhotoCarrosel3: ommaCa3,
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'Conheça e aprenda a fazer as últimas receitas mais deliciosas no nosso site.',
      totalSlide: 3,
    },
    {
      id: 11,
      heroPhoto: lavieBody,
      heroPhotoClass: 'classeHerophoto0',
      title: 'La Vie',
      subText: 'La vie é um projeto de back end para um clínica médica desenvolvida com Node Js.',
      subText2: 'Neste projeto os usuários são psicólogos da clinica La vie que entram no sistema desenvolvido para criar o cadastro dos pacientes e o registro das consultar para registrar os seus respectivos prontuários médicos.',
      infoEnd: 'https://gleibercoelho.github.io/Site-de-Receitas/index.html',
      infoRepo: 'https://github.com/gleibercoelho/Site-de-Receitas',
      infoTechs: (<div><p>


        <FaNodeJs />
        <SiTypescript />
        <IoLogoJavascript />
        <GrMysql />

      </p></div>),
      bodyPhoto: lavieBody,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'O servidor foi desenvolvido com autenticação de token JWT de modo o registro do médico seja registrado no prontuário dos pacientes.',
      textBottom: 'O mesmo paciente pode ter vários prontuários de atendimento no qual são registrados os médicos que fizeram seu atendimento.',
      PhotoCarrosel1: lavieBody,
      PhotoCarrosel2: 'url-da-foto-2',
      PhotoCarrosel3: 'url-da-foto-3',
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'O sistema foi criado com um administrador que pode criar cadastro de novos psicólogos com seu login e senha.',
      totalSlide: 1,
    },
    /* {
      id: 12,
      heroPhoto: ecommerce,
      heroPhotoClass: 'classeHerophoto0',
      title: 'La Vie',
      subText: 'La vie é um projeto de back end para um clinica medica desenvolvida com Node Js.',
      subText2: 'Neste projeto os usuarios sao psicologos da clinica La vie que entram no sistema desenvolvido para criar o cadastro dos pacientes e o registro das consultar para registrar os seus respectivos prontuarios medicos.',
      infoEnd: 'https://gleibercoelho.github.io/Site-de-Receitas/index.html',
      infoRepo: 'https://github.com/gleibercoelho/Site-de-Receitas',
      infoTechs: (<div><p> 
        
        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: ecommerce,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'O servidor foi desenvolvido com autenicacao de token JWT de modo o registro do medico seja reistrado no prontuario dos pacientes.',
      textBottom: 'O mesmo paciente pode ter varios prontuarios de atendimento no qual sao registrados os medicos que fizeram seu atendimento.',
      PhotoCarrosel1: ecommerce,
      PhotoCarrosel2: ecommerce,
      PhotoCarrosel3: ecommerce,
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'O sitema foi criado com um adminstrador que pode criar cadastro de novos psicologos com seu login e senha.',
    }, */
    {
      id: 13,
      heroPhoto: APIFeriadoHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'API de Feriados',
      subText: 'Esta é uma aplicação web desenvolvida com HTML e Javascript',
      subText2: 'Neste site é possível consultar todos feriados nacionais de um ano. Basta digitar o ano e buscar pelos feriados.',
      infoEnd: 'https://gleibercoelho.github.io/API-Feriados-Nacionais/',
      infoRepo: 'https://github.com/gleibercoelho/API-Feriados-Nacionais',
      infoTechs: (<div><p>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: APIFeriadoHero,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'APIs são criadas a partir de servidores que fornecem determinados dados quando você se conecta com eles de forma correta.',
      textBottom: 'Apesar de simples, essa aplicação pode ser facilmente incorporada a outros sites e ser usados de forma automática em uma página ou através de requisições do usuário.',
      PhotoCarrosel1: APIFeriadoHero,
      PhotoCarrosel2: 'url-da-foto-2',
      PhotoCarrosel3: 'url-da-foto-3',
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'Quando configuradas de forma correta, o front end traz informações diretamente de um back end através da API',
      totalSlide: 1,
    },
    {
      id: 12,
      heroPhoto: APICEPHero,
      heroPhotoClass: 'classeHerophoto0',
      title: 'API de Endereços',
      subText: 'Esta é uma aplicação web desenvolvida com HTML e Javascript',
      subText2: 'Neste site e possível consultar todos os endereços nacionais através do CEP. Basta digitar o CEP e o site vai retornas demais informações do endereço como bairro, cidade e nome da rua.',
      infoEnd: 'https://gleibercoelho.github.io/API-Feriados-Nacionais/',
      infoRepo: 'https://github.com/gleibercoelho/API-Feriados-Nacionais',
      infoTechs: (<div><p>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </p></div>),
      bodyPhoto: APICEPHero,
      bodyPhotoClass: 'classe-da-foto-corpo',
      textSide: 'APIs são criadas a partir de servidores que fornecem determinados dados quando você se conecta com eles de forma correta.',
      textBottom: 'apesar de simples essa aplicação pode ser facilmente incorporado a outros sites e ser usados de forma automática em uma página ou através de requisições do usuário.',
      PhotoCarrosel1: APICEPHero,
      PhotoCarrosel2: 'url-da-foto-2',
      PhotoCarrosel3: 'url-da-foto-3',
      PhotoCarrosel4: 'url-da-foto-4',
      PhotoCarrosel5: 'url-da-foto-5',
      PhotoCarrosel6: 'url-da-foto-6',
      
      
      textcarrosel: 'Quando confiuradas de forma correta o front end traz informacoes diretamente de um back end atraves da API',
      totalSlide: 1,
    },
    // Adicione outros produtos conforme necessário
  ];

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [index, setIndex] = useState(0);



  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
    console.log(index);
    return handleSelect;
  };

  const [currentSlide, setCurrentSlide] = useState(1);

  const totalSlides = product.totalSlide; // Número total de slides

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
  };

  const handleLinkClick = (path: any) => {
    if (window.location.pathname === path) {
      // Se o usuário já está na mesma página, substitua a entrada mais recente no histórico
      window.history.replaceState(null, '', path);
    }
  };
  return (
    <ProjectDetailBox>
      <div
        className='heroPhoto'>
        <motion.div
          style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: 'linear-gradient(to left, #aa076b, #980369, #860267, #730363, #61045f)' }}
          initial={{ translateY: "0%" }}
          animate={{ translateY: "-100%" }}
          transition={{ duration: 0.4, delay: 1 }}
        />
        <motion.img src={product.heroPhoto} alt="" className={product.heroPhotoClass}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <RevealTwo>
        <div className='infoDiv'>
          <div>
            <h1>{product.title}</h1>
            <h2>{product.subText}</h2>
          </div>
          <div className='subtextDiv'>
            <p>{product.subText2}</p>
          </div>
          <div className='infoEnd'>
            <p>Site: <Link to={product.infoEnd} target="_blank" ><FaLink /></Link></p>
            <p>Repositorio <Link to={product.infoRepo} target="_blank" ><FaGithub /></Link></p>
            <p>Techs: {product.infoTechs}</p>
          </div>
        </div>
      </RevealTwo>
      <RevealTwo>
        <div className='bodyDiv'>
          <div>
            <img src={product.bodyPhoto} alt="" className={product.bodyPhotoClass} />
            <p className='pBottom'>{product.textBottom}</p>
          </div>
          <div>
            <p>{product.textSide}</p>
          </div>
        </div>
      </RevealTwo>
      <RevealTwo>
        <div className='carosselDiv'>
          <div className="carousel">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <img
                key={`slide${index + 1}`}
                src={String(product[`PhotoCarrosel${index + 1}` as keyof typeof product])}
                alt=""
                className={`slide ${currentSlide === index + 1 ? 'active' : ''} ${String(product[`imageClassSecret${index + 1}` as keyof typeof product])}`}
                id={`slide${index + 1}`}
              />
            ))}
          </div>

          <p>{product.textcarrosel}</p>
        </div>
      </RevealTwo>
      <div className='links'>
        <Link to={product.id === 0 ? '#' : `/projects/${product.id - 1}`} onClick={() => handleLinkClick(`/projects/${product.id - 1}`)}>
          <FaArrowLeft /> Anterior
        </Link>
        <Link to="/projects" onClick={() => handleLinkClick('/projects')}>Projetos</Link>
        <Link to={product.id === 13 ? '#' : `/projects/${product.id + 1}`} onClick={() => handleLinkClick(`/projects/${product.id + 1}`)} >
          Próximo <FaArrowRight />
        </Link>

      </div>
    </ProjectDetailBox>
  );
};

export default ProductDetails;
