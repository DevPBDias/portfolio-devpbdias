import { projects } from "@/data/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: `${project.title} | Dev Paulo Dias`,
    description: project.description,
  };
}

// Em Next.js 15+, 'params' é uma Promise que deve ser resolvida antes do uso num componente RSC
export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/30 text-foreground pt-20">
      <Container className="py-12 md:py-24">
        
        {/* Helper Navigation */}
        <div className="mb-12">
           <Link href="/" className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest border border-white/10 hover:border-primary/50 bg-black/30 px-4 py-2 rounded-lg">
             <span className="text-lg leading-none">&larr;</span> Voltar ao Portfólio
           </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
           {/* Left Column: Image & Quick Info */}
           <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-panel border-2 border-white/5 relative shadow-[0_0_50px_rgba(0,168,255,0.05)] group">
                 {project.image ? (
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                     sizes="(max-width: 1024px) 100vw, 60vw"
                     priority
                   />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center font-mono text-sm text-foreground/30">
                     [ Image ]
                   </div>
                 )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                 {project.liveUrl && (
                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary hover:bg-primary-hover text-white text-center py-4 rounded-xl text-xs font-bold uppercase tracking-widest shadow-[0_6px_20px_rgba(0,168,255,0.3)] hover:-translate-y-1 transition-all">
                      Acessar Projeto Web
                   </a>
                 )}
                 {project.githubUrl && (
                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-panel border-2 border-white/10 hover:border-white/20 hover:bg-white/5 text-white text-center py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:-translate-y-1 transition-all">
                      Repositório do Código
                   </a>
                 )}
              </div>
           </div>

           {/* Right Column: Title & Detailed Description */}
           <div className="lg:col-span-5 flex flex-col space-y-10">
              
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-sans">
                     {project.category.charAt(0)}
                   </div>
                   <span className="text-xs uppercase tracking-widest text-primary font-bold">
                     {project.category} • {project.year}
                   </span>
                 </div>
                 <h1 className="font-heading text-4xl sm:text-5xl font-black text-white leading-tight">
                    {project.title}
                 </h1>
              </div>

              {/* Tópico: Visão Geral */}
              <div className="space-y-4">
                 <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-primary/30 flex items-center justify-center text-[10px] text-primary">01</span>
                    Visão Geral
                 </h3>
                 <p className="text-foreground/80 font-sans leading-relaxed text-sm md:text-base">
                    {project.longDescription}
                 </p>
                 {project.longDescription === project.description && (
                   <p className="text-foreground/80 font-sans leading-relaxed text-sm md:text-base mt-4">
                      Este projeto foi desenvolvido com as mais recentes arquiteturas e visa resolver problemas clássicos através de uma interface intuitiva e uma estrutura de código resiliente, priorizando desde a escalabilidade até a adoção e adaptação da melhor experiência de usuário possível no contexto envolvido.
                   </p>
                 )}
              </div>

              {/* Tópico: Tecnologias Utilizadas */}
              <div className="space-y-4">
                 <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-primary/30 flex items-center justify-center text-[10px] text-primary">02</span>
                    Stack Tecnológico
                 </h3>
                 <div className="flex flex-wrap gap-2 pt-2">
                   {project.technologies.map((tech) => (
                      <div key={tech} className="bg-black/30 px-4 py-2 rounded-lg border border-white/5 hover:border-primary/50 transition-colors cursor-default">
                         <span className="font-bold text-xs sm:text-sm text-foreground/90 tracking-wide">{tech}</span>
                      </div>
                   ))}
                 </div>
              </div>

           </div>
        </div>

      </Container>
    </main>
  );
}
