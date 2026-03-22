import { techsInfiniteScroll } from "@/data/techs-data";
import { Container } from "./ui/Container";
import Image from "next/image";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Hero() {
  return (
    <section className="relative h-dvh min-h-[700px] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Real Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/50 to-background z-10 pointer-events-none" />

        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0 animate-bg-pan">
          <Image
            src="/assets/Hero.png"
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0 animate-bg-pan">
          <Image
            src="/assets/Hero mobile.png"
            alt="Hero Background Mobile"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      <Container className="relative z-10 w-full h-full flex-1 flex flex-col">
        <div className="w-full max-w-6xl mx-auto flex flex-col justify-center flex-1 relative">
          {/* Spacer block to push content slightly down visually relative to center */}
          <div className="pt-8 lg:pt-0" />

          {/* Split Typography - Diagonal Alignment on all screens, but Centered block on Mobile */}
          <div className="hidden md:flex font-heading font-black text-primary/90 flex-col w-fit mx-auto md:mx-0 md:w-full relative z-10 cursor-default">
            
            <ScrollReveal delay={0}>
              <div className="relative hover:scale-[1.02] transition-transform w-fit z-10 animate-float">
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-3 text-outline select-none text-[clamp(4.5rem,11vw,9rem)] leading-[0.8] tracking-tighter opacity-80">
                  DE
                </div>
                <div className="relative text-glow mix-blend-screen text-[clamp(4.5rem,11vw,9rem)] leading-[0.8] tracking-tighter">
                  DE
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="ml-[12vw] md:ml-[25%] mt-2 sm:mt-1 md:mt-6 z-20">
              <div className="relative hover:scale-[1.02] transition-transform w-fit animate-float" style={{ animationDelay: "1s" }}>
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-3 text-outline select-none text-[clamp(4.5rem,11vw,9rem)] leading-[0.8] tracking-tighter opacity-80">
                  VE
                </div>
                <div className="relative text-glow mix-blend-screen text-[clamp(4.5rem,11vw,9rem)] leading-[0.8] tracking-tighter">
                  VE
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="ml-[24vw] md:ml-[50%] mt-2 sm:mt-1 md:mt-6 z-30">
              <div className="relative hover:scale-[1.02] transition-transform w-fit animate-float" style={{ animationDelay: "2s" }}>
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-3 text-outline select-none text-[clamp(4.5rem,11vw,9rem)] leading-[0.8] tracking-tighter opacity-80">
                  LO
                </div>
                <div className="relative text-glow mix-blend-screen text-[clamp(4.5rem,11vw,9rem)] leading-[0.8] tracking-tighter">
                  LO
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600} className="ml-[36vw] md:ml-[70%] mt-2 sm:mt-1 md:mt-6 z-40">
              <div className="relative hover:scale-[1.02] transition-transform w-fit animate-float" style={{ animationDelay: "3s" }}>
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-3 text-outline select-none text-[clamp(4.5rem,11vw,9rem)] leading-[0.8] tracking-tighter opacity-80">
                  PER
                </div>
                <div className="relative text-glow mix-blend-screen text-[clamp(4.5rem,11vw,9rem)] leading-[0.8] tracking-tighter">
                  PER
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Bottom descriptive block - Centered on mobile, aligned near bottom on desktop */}
        <ScrollReveal delay={800} className="w-full max-w-6xl mx-auto flex flex-col pt-8 md:pt-0 md:absolute md:bottom-16 md:left-4 lg:left-8 z-30">
          <div className="max-w-xs sm:max-w-sm lg:max-w-xl mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left bg-background/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-xl space-y-4 md:space-y-6">
            <h2 className="text-white font-bold text-sm sm:text-base lg:text-xl tracking-wider uppercase leading-snug">
              Desenvolvedor Web <span className="text-primary">&</span> UX/UI
              Designer
            </h2>
            <p className="text-foreground/80 text-xs sm:text-xs md:text-base font-sans leading-relaxed">
              Atuo no desenvolvimento de aplicações web performáticas e
              escaláveis com React, Next.js, Node.js e TypeScript, construindo
              interfaces de alta qualidade, integradas a APIs e otimizadas para
              oferecer experiências modernas, eficientes e orientadas a
              resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full md:w-auto">
              <a
                href="#projetos"
                className="flex-1 md:flex-none justify-center bg-primary hover:bg-primary-hover text-white text-center px-6 py-3 rounded font-bold text-xs tracking-widest uppercase transition-all shadow-[0_4px_14px_0_rgba(0,168,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,168,255,0.23)] hover:-translate-y-1"
              >
                Projetos
              </a>
              <a
                href="#sobre"
                className="flex-1 md:flex-none justify-center bg-panel border border-white/10 hover:border-white/20 text-white text-center px-6 py-3 rounded font-bold text-xs tracking-widest uppercase transition-all shadow-lg hover:-translate-y-1 hover:bg-white/5"
              >
                Sobre mim
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Infinite Looping Marquee exactly at the bottom border of the viewport - Fix squish on mobile */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t-2 border-white/5 bg-black/60 backdrop-blur-md z-40 py-2.5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
          {techsInfiniteScroll.map((tech, i) => (
            <div
              key={i}
              className="flex shrink-0 justify-around items-center text-foreground/50 font-mono text-xs uppercase tracking-widest gap-12 px-6"
            >
              <span className="flex items-center gap-2 transition-colors hover:text-white cursor-default">
                <span className="text-primary"> • </span>
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
