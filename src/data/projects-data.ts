import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string | StaticImageData;
  technologies: string[];
  category: string;
  year: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website CAMV Sports",
    description:
      "Website institucional premium e dinâmico para time de voleibol de alto rendimento.",
    longDescription:
      "Website institucional premium desenvolvido para o Centro de Atividades Mais Vôlei (CAMV Sports), projeto de alto rendimento no voleibol. A plataforma apresenta a história, conquistas e comissão técnica do time, focando em atrair novos patrocinadores com um design moderno, micro-animações fluidas e excelente performance utilizando Next.js e Framer Motion.",
    image: "/images/camv_thumbnail.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Figma",
      "Vercel",
    ],
    features: [
      "Design Premium e Totalmente Responsivo",
      "Micro-animações elaboradas com Framer Motion",
      "Otimização de SEO e Static Site Generation",
      "Reutilização de Padrões e UI Exclusiva",
    ],
    category: "Freelancer",
    year: "2026",
    githubUrl: "https://github.com/DevPBDias/camvsports-website",
    liveUrl: "https://camvsports.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Website Olé Mídia",
    description:
      "Site institucional da agência Olé Mídia, focado em alta perfomance, portfólio dinâmico e leads automáticos.",
    longDescription:
      "Site institucional desenvolvido para a Olé Mídia, focado em apresentar a história da empresa, seus serviços atuais e um portfólio rico visualmente com categorização. A plataforma possui design pixel-perfect com animações e conta com um sistema prático de captação de leads utilizando o EmailJS.",
    image: "/images/olemidia_thumbnail.png",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Styled-Components",
      "Framer Motion",
      "EmailJS",
      "Vercel",
    ],
    features: [
      "Integração nativa de recebimento de e-mails via EmailJS",
      "Filtros interativos dinâmicos no portfólio",
      "Micro-animações e Interações ao Scroll",
      "Ajuste fino de Responsividade Pixel-Perfect",
    ],
    category: "Freelancer",
    year: "2024",
    githubUrl: "https://github.com/DevPBDias/ole-midia-v3",
    liveUrl: "https://olemidia.com.br/",
    featured: true,
  },
  {
    id: 3,
    title: "App Nelore INDI Ouro",
    description:
      "Aplicativo PWA Local-First de nível corporativo para gestão completa de rebanhos bovinos.",
    longDescription:
      "Aplicativo corporativo PWA com arquitetura Offline-First (Local-First) projetado para a gestão de rebanhos de alto desempenho. Permite 100% de funcionalidade sem internet, garantindo registro de animais, controle reprodutivo, pesagens, vacinas e relatórios através da reatividade do RxDB e sincronização bidirecional em tempo real com o Supabase.",
    image: "/images/indi_ouro_thumbnail.png",
    technologies: [
      "React",
      "Next.js",
      "Supabase",
      "RxDB",
      "TypeScript",
      "Dexie",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Arquitetura Offline-First (100% Funcional no Curral)",
      "Replicação de Dados Bidirecional (RxDB + Supabase)",
      "Gestão Genealógica, Reprodutiva e Biometria",
      "Geração Dinâmica de Relatórios e Exportação",
      "Módulo Comercial, Vendas e Financiamento",
    ],
    category: "Freelancer",
    year: "2025",
    githubUrl: "https://github.com/DevPBDias/rico-ouro-app",
    liveUrl: "https://www.youtube.com/watch?v=3sHPDj5pnvo",
    featured: true,
  },
  {
    id: 4,
    title: "FullStack - FTB Platform",
    description:
      "Plataforma fullstack de gestão e mídia para a Federação Tocantinense de Basketball.",
    longDescription:
      "Plataforma avançada desenvolvida para a Federação Tocantinense de Basketball. Oferece portal de notícias publicas, calendário de competições e um completo dashboard administrativo para gestão de times, jogadores e sistema de arbitragem. Desenvolvida com Next.js e Firebase oferecendo um forte controle de acesso e autenticação.",
    image: "/images/ftb.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Framer Motion",
    ],
    features: [
      "Dashboard Administrativo Completo e Tabelas de Jogos",
      "Gestão de Competições, Equipes e Árbitros",
      "Autenticação Segura e Hierárquica via Firebase",
      "Portal Público de Notícias e Galerias Inclusivo",
    ],
    category: "Freelancer",
    year: "2025",
    githubUrl: "https://github.com/DevPBDias/ftb-platform",
    liveUrl: "https://ftb-platform.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "FullStack - AutoFlex Challenge",
    description:
      "Sistema fullstack para controle de produção industrial, gerenciamento de matérias-primas e sugestão de fabricação otimizada.",
    longDescription:
      "Desenvolvido como teste técnico, este sistema fullstack em Node.js e Next.js realiza o controle de produção industrial. Ele gerencia produtos, matérias-primas e a composição de itens (Bill of Materials), oferecendo um algoritmo inteligente de sugestão que calcula a capacidade de produção baseada no estoque disponível focando na maior lucratividade.",
    image: "/images/autoflex_thumbnail.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Zustand",
      "Vitest",
    ],
    features: [
      "CRUD de Produtos e Matérias-Primas",
      "Associação de Receitas (Produto x Matéria-Prima)",
      "Algoritmo de Sugestão de Fabricação Inteligente",
      "Arquitetura em Camadas Sólidas com Node e Prisma",
      "Testes Unitários e Testes de Integração Completos",
    ],
    category: "Pessoal",
    year: "2026",
    githubUrl: "https://github.com/DevPBDias/autoflex-challenge",
    featured: true,
  },
  {
    id: 6,
    title: "Candida Bio",
    description:
      "Website institucional para Candida Bio com design pixel-perfect e animações.",
    longDescription:
      "Website institucional desenvolvido para a Candida Bio, focado em apresentar a história da empresária, seus serviços atuais e um portfólio rico visualmente com categorização. A bio possui design pixel-perfect com animações.",
    image: "/images/candida_bio_thumbnail.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Figma",
      "Vercel",
    ],
    features: [
      "Design Premium e Totalmente Responsivo",
      "Micro-animações elaboradas com Framer Motion",
      "Otimização de SEO e Static Site Generation",
      "Reutilização de Padrões e UI Exclusiva",
    ],
    category: "Freelancer",
    year: "2026",
    githubUrl: "https://github.com/DevPBDias/candida-bio-site",
    liveUrl: "https://candida-bio-site.vercel.app",
    featured: true,
  },
];
