# 👨‍💻 Dev Paulo Dias - Portfólio Moderno

Elegante, rápido e impactante. Este é o repositório fonte do meu portfólio pessoal e profissional, desenvolvido do zero para entregar a melhor Experiência do Usuário (UX) aliada à mais arrojada engenharia Front-end.

## 🚀 Tecnologias

Este projeto foi construído utilizando as ferramentas mais modernas do ecossistema JavaScript:
- **[Next.js 15](https://nextjs.org/)** (App Router & Server Components)
- **[React 19](https://react.dev/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**

## ✨ Destaques e Funcionalidades

- **Design Premium e Dark Mode Nativo**: Identidade visual forte com tipografia híbrida marcante (Inter + Erbaum).
- **Animações de Scroll Profundas**: Elementos monitorados via `IntersectionObserver` surgem de forma orgânica à medida que a rolagem avança.
- **Performance e Otimização**: Backgrounds responsivos otimizados nativamente, fontes geridas de forma local (`next/font/local`) sem bloqueio de renderização, e roteamento dinâmico assíncrono.
- **Glassmorphism & Efeitos Visuais**: Componentização madura utilizando filtros de desfoque, gradientes precisos tipo *vignette* e sombreamento "neon".
- **Rotas de Detalhe dinâmicas**: Sistema de rotas individuais riquíssimas para navegação e detalhamento dos cases de estudo (`/projetos/[id]`).

## 📦 Como rodar localmente

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/DevPBDias/portfolio-devpbdias.git
cd portfolio-devpbdias
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador e você verá o projeto rodando localmente!

## 📂 Estrutura do Código
Arquitetado para ser modular, preditivo e de fácil manutenção:
- **`src/app/`**: Páginas e configurações globais de roteamento.
- **`src/components/`**: Arquitetura de blocos visuais separados por seção sem acoplamento extremo.
- **`src/data/`**: Abstração de todo conteúdo estático da tela. Mudar informações de currículo, de projetos ou de contato da página exige apenas a modificação nestes arrays.

---
*Desenvolvido e Desenhado por **Paulo Dias**.*
