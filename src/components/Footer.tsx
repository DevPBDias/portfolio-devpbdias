import { Container } from "./ui/Container";
import { ScrollReveal } from "./ui/ScrollReveal";
import Image from "next/image";
import { socialLinks } from "@/data/contact-data";

export function Footer() {
  return (
    <section
      id="contato"
      className="relative w-full min-h-dvh pt-32 pb-8 overflow-hidden bg-background flex flex-col"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
        <Image
          src="/assets/Footer.png"
          alt="Footer Background"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <Container className="relative z-20 flex-1 flex flex-col items-center justify-between w-full h-full">
        <ScrollReveal className="flex flex-col items-center mt-auto">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-primary mb-6 tracking-tighter uppercase text-center text-glow drop-shadow-2xl">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-white font-sans text-center max-w-2xl mb-12 text-sm md:text-base leading-relaxed drop-shadow-lg">
            Aberto a oportunidades como Desenvolvedor Web. Vamos conversar?
          </p>
          <p className="text-white font-sans text-center max-w-2xl mb-12 text-sm md:text-base leading-relaxed drop-shadow-lg">
            React • Next.js • TypeScript • Node.js • APIs REST
          </p>
        </ScrollReveal>

        <ScrollReveal
          delay={200}
          className="w-full flex flex-wrap items-center justify-center gap-4 mb-24"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-panel border border-white/20 hover:border-primary/50 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest px-8 py-3 rounded flex items-center gap-3 hover:bg-white/10 hover:scale-105 transition-all shadow-2xl group backdrop-blur-md"
            >
              <link.icon size={18} color={link.color} />
              <span className="group-hover:text-primary transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </ScrollReveal>

        {/* Absolute Bottom Footer Inside the Section - Push to bottom with mt-auto */}
        <div className="w-full mt-auto border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-xs text-white/70 font-sans gap-4 pb-4">
          <span>© 2026 • Dev Paulo Dias</span>
          <span className="text-center">
            Desenvolvido com foco em performance, escalabilidade e boas
            práticas. Todos os direitos reservados.
          </span>
          <span>Obrigado por visitar :)</span>
        </div>
      </Container>
    </section>
  );
}
