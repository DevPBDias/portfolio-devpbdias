import Link from "next/link";
import { Container } from "./ui/Container";

export function Navbar() {
  const navLinks = [
    { name: "SOBRE", href: "#sobre" },
    { name: "PROJETOS", href: "#projetos" },
    { name: "HABILIDADES", href: "#habilidades" },
    { name: "CONTATO", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 backdrop-blur-sm bg-background/50 border-b border-white/5">
      <Container className="flex items-center justify-between gap-8">
        {/* LOGO */}
        <a
          href="#"
          className="text-primary hover:text-white transition-colors cursor-pointer select-none font-heading font-black tracking-widest text-lg sm:text-xl"
        >
          DevPBDias
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-white font-bold tracking-widest text-[10px] sm:text-xs transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://wa.me/5563992310976"
            className="bg-white text-black px-6 py-2.5 rounded-sm font-bold tracking-widest text-[10px] sm:text-xs hover:bg-gray-200 transition-colors"
          >
            CONTRATAR
          </Link>
        </div>
      </Container>
    </nav>
  );
}
