import { Container } from "./ui/Container";
import { ScrollReveal } from "./ui/ScrollReveal";
import Image from "next/image";
import { stats } from "@/data/techs-data";

export function About() {
  return (
    <section
      id="sobre"
      className="w-full py-48 lg:py-64 bg-background relative z-20 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tighter uppercase">
              Quem é o Dev Paulo Dias?
            </h2>

            <div className="space-y-4 text-foreground/80 font-sans leading-relaxed text-sm lg:text-base">
              <p>
                Desenvolvedor Web com 2 anos de experiência em criação de
                produtos web, atuando do design ao deploy, com foco em
                performance, UX e escalabilidade. Atuação com React, Next.js,
                TypeScript, Tailwind, integração com APIs, arquitetura front-end
                moderna, clean code e abordagem local-first em aplicações
                offline-first.
                <br /> <br />
                Sou formado em Desenvolvimento Full Stack pela Trybe, graduando
                em Análise e Desenvolvimento de Sistemas, com especialização em
                UX Design (Google) e certificação AWS Cloud Practitioner pela
                Escola da Nuvem, ampliando minha visão sobre aplicações
                escaláveis e cloud-ready.
                <br /> <br />
                Antes da transição para tecnologia, atuei por 5 anos como
                Engenheiro Civil, experiência que fortaleceu minha capacidade
                analítica, organização, responsabilidade técnica e visão
                orientada a resultados, habilidades que aplico diretamente no
                desenvolvimento de software.
                <br /> <br />
                Já desenvolvi soluções para empresas e instituições como Olé
                Mídia, Max Training, CAMV Sports, Nelore INDI Ouro e a Federação
                Tocantinense de Basquete, entregando produtos focados em
                conversão, usabilidade e valor de negócio.
              </p>
            </div>
          </ScrollReveal>

          {/* Profile Image Place */}
          <ScrollReveal
            delay={200}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-white/20 bg-panel shadow-2xl flex items-center justify-center group">
              <Image
                src="/assets/profile.png"
                alt="Foto de Perfil Dev Paulo Dias"
                fill
                sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Inner styling ring decoration */}
              <div className="absolute inset-0 border border-primary/20 rounded-full scale-95 pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>

        {/* Statistics Bar */}
        <ScrollReveal delay={400}>
          <div className="mt-16 sm:mt-24 w-full">
            <div className="w-full bg-panel/50 border border-panel-border rounded-xl p-8 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-panel-border gap-y-8 lg:gap-y-0 items-center justify-center backdrop-blur-sm">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center w-full">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                    {stat.number}
                  </span>
                  <span className="text-[10px] sm:text-xs text-primary tracking-widest uppercase font-bold text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
