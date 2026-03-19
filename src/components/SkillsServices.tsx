import { Container } from "./ui/Container";
import { ScrollReveal } from "./ui/ScrollReveal";
import { skills } from "@/data/techs-data";
import Image from "next/image";

export function SkillsServices() {
  const services = [
    {
      title: "Desenvolvimento Web",
      desc: "Criação de sites e web apps rápidos e responsivos.",
    },
    {
      title: "UX/UI Design",
      desc: "Design de interfaces focadas na experiência do usuário.",
    },
    {
      title: "Otimização de Performance",
      desc: "Melhoria de métricas vitais da web (Core Web Vitals).",
    },
    {
      title: "Manutenção de Software",
      desc: "Evolução e correção de aplicações existentes.",
    },
  ];

  return (
    <section
      id="habilidades"
      className="w-full py-48 lg:py-64 bg-background relative z-20 overflow-hidden"
    >
      {/* Background Image with Solid Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/90 z-10 pointer-events-none" />
        <Image
          src="/assets/Habilidade.jpg"
          alt="Habilidades Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Habilidades Panel */}
          <ScrollReveal className="flex flex-col space-y-6">
            <h3 className="font-heading text-2xl font-bold text-primary uppercase tracking-wider">
              Habilidades
            </h3>
            <div className="bg-panel border border-panel-border rounded-xl rounded-t-lg overflow-hidden flex-1 flex flex-col shadow-2xl">
              {/* Terminal Header */}
              <div className="h-10 border-b border-panel-border bg-black/40 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 font-mono text-xs text-foreground/40">
                  skills.tsx
                </span>
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col gap-8 flex-1 bg-black/10">
                {skills.map((cat) => (
                  <div key={cat.category} className="space-y-4">
                    <h4
                      className="font-bold text-[10px] sm:text-xs tracking-widest uppercase border-b border-white/5 pb-2 flex items-center gap-2"
                      style={{ color: cat.color }}
                    >
                      <cat.icon size={16} /> {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="bg-black/30 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/20 transition-colors"
                        >
                          <span className="font-bold text-xs text-white">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Serviços Panel */}
          <ScrollReveal
            delay={200}
            className="flex flex-col space-y-6 lg:self-start"
          >
            <h3 className="font-heading text-2xl font-bold text-primary uppercase tracking-wider">
              Serviços
            </h3>
            <div className="bg-panel border border-panel-border rounded-xl rounded-t-lg overflow-hidden flex flex-col shadow-2xl">
              {/* Terminal Header */}
              <div className="h-10 border-b border-panel-border bg-black/40 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 font-mono text-xs text-foreground/40">
                  services.ts
                </span>
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col gap-4 justify-start">
                {services.map((svc) => (
                  <div
                    key={svc.title}
                    className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    <p className="font-bold text-sm text-white flex items-center gap-2">
                      <span className="text-primary text-lg">▹</span>{" "}
                      {svc.title}
                    </p>
                    <p className="text-xs text-foreground/60 font-sans pl-5 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
