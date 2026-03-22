# 🏐 CAMV Sports - Website Institucional

<div align="center">

<img src="public/Logo CAMV Sports.png" alt="Logo CAMV Sports" width="120" />

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer)

Website institucional moderno e responsivo para o projeto esportivo **CAMV Sports**, desenvolvido com as melhores práticas de desenvolvimento front-end.

[🌐 Demo ao Vivo](https://camvsports.com) • [📸 Screenshots](#-screenshots) • [🚀 Começando](#-começando)

</div>

---

## 📋 Sobre o Projeto

O **CAMV Sports** (Centro de Atividades Mais Vôlei) é um projeto de alto rendimento e formação esportiva de voleibol que compete nos principais campeonatos do Brasil. Este website institucional foi desenvolvido para apresentar o projeto, sua história, conquistas e atrair novos patrocinadores.

### ✨ Destaques

- 🎨 **Design Premium** - Interface moderna com animações suaves e gradientes elegantes
- 📱 **Totalmente Responsivo** - Experiência otimizada para mobile, tablet e desktop
- ⚡ **Performance** - Otimizado com Next.js App Router e Static Site Generation
- 🎭 **Micro-animações** - Transições fluidas com Framer Motion
- ♿ **Acessibilidade** - Seguindo boas práticas de a11y
- 🔧 **Código Limpo** - Arquitetura componentizada e reutilizável

---

## 📸 Screenshots

<div align="center">

| Desktop                                                         | Mobile                                                        |
| --------------------------------------------------------------- | ------------------------------------------------------------- |
| <img src="public/desktop.png" alt="Desktop View" width="500" /> | <img src="public/mobile.png" alt="Mobile View" width="200" /> |

</div>

---

## 🛠️ Tecnologias Utilizadas

### Core

- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática

### Estilização

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[tw-animate-css](https://github.com/Wombosvideo/tw-animate-css)** - Animações CSS

### Animações & UI

- **[Framer Motion 12](https://www.framer.com/motion/)** - Animações declarativas
- **[Lucide React](https://lucide.dev/)** - Ícones SVG

### Utilitários

- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para classes condicionais
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes

---

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (páginas e layouts)
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout root
│   └── globals.css        # Estilos globais
│
├── components/             # Componentes React
│   ├── ui/                # Componentes UI reutilizáveis
│   │   ├── SectionTag.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── CTAButton.tsx
│   │   ├── InstagramLink.tsx
│   │   └── index.ts
│   ├── hero/              # Seção Hero
│   ├── history/           # Seção História
│   ├── technical/         # Seção Comissão Técnica
│   ├── stats/             # Seção Estatísticas
│   ├── results/           # Seção Resultados
│   ├── calendar/          # Seção Calendário
│   ├── sponsors/          # Seção Patrocinadores
│   ├── gallery/           # Seção Galeria
│   └── layout/            # Header, Footer, etc
│
├── constants/              # Constantes e dados estáticos
│   ├── navigation.ts      # Links de navegação
│   ├── social.ts          # Links de redes sociais
│   ├── achievements.ts    # Conquistas
│   ├── sponsors.ts        # Patrocinadores
│   └── index.ts
│
├── assets/                 # Imagens e ícones
│   ├── images/
│   └── icons-logo/
│
└── lib/                    # Utilitários
    └── utils.ts
```

---

## 🚀 Começando

### Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/DevPBDias/camvsports-website.git
cd camvsports-website
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Abra no navegador**

```
http://localhost:3000
```

### Scripts Disponíveis

| Comando         | Descrição                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção             |
| `npm run start` | Inicia o servidor de produção        |
| `npm run lint`  | Executa o linter                     |

---

## 🎨 Sistema de Design

### Paleta de Cores

| Cor                 | Hex       | Uso                        |
| ------------------- | --------- | -------------------------- |
| Primary (Azul)      | `#005096` | Cor principal, backgrounds |
| Accent (Ciano)      | `#01B6F5` | CTAs, destaques            |
| Foreground (Branco) | `#FFFFFF` | Texto sobre fundos escuros |
| Muted (Escuro)      | `#1E1E1E` | Texto sobre fundos claros  |

### Tipografia

- **Headings**: Erbaum Black (custom)
- **Body**: Montserrat (Google Fonts)

### Componentes UI Reutilizáveis

```tsx
// Tag de seção
<SectionTag text="Nossa história" variant="primary" />

// Título de seção
<SectionTitle variant="light">Título da Seção</SectionTitle>

// Botão CTA
<CTAButton href="#" icon={Camera} external>
  Texto do Botão
</CTAButton>

// Link Instagram
<InstagramLink variant="header" showUsername />
```

---

## 📱 Responsividade

O projeto utiliza os breakpoints padrão do Tailwind CSS:

| Breakpoint | Largura | Dispositivo         |
| ---------- | ------- | ------------------- |
| `sm`       | 640px   | Mobile landscape    |
| `md`       | 768px   | Tablet              |
| `lg`       | 1024px  | Desktop             |
| `xl`       | 1280px  | Desktop largo       |
| `2xl`      | 1536px  | Desktop extra largo |

---

## ‍💻 Autor

<div align="center">

**Paulo Bruno Dias**

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=for-the-badge&logo=vercel)](https://portfolio-v-final-plum.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/devpaulobrunomdias/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)](https://github.com/DevPBDias)

</div>

---

## 📄 Licença

Este projeto é privado e desenvolvido exclusivamente para o **CAMV Sports**.

---

<div align="center">

Feito com 💙 por [Dev Paulo Bruno Dias](https://portfolio-v-final-plum.vercel.app/)

</div>
