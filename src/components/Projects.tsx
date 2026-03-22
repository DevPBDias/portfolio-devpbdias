import { Container } from "./ui/Container";
import { ScrollReveal } from "./ui/ScrollReveal";
import Image from "next/image";
import { projects, Project } from "@/data/projects-data";

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <ScrollReveal delay={index * 150} className="h-full">
      <div className="bg-panel border border-panel-border rounded-xl overflow-hidden group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,168,255,0.1)] transition-all duration-300 flex flex-col h-full">
        {/* Image Display */}
        <div className="w-full aspect-16/10 bg-black/40 flex items-center justify-center relative overflow-hidden shrink-0">
          {project.image ? (
             <Image sizes="(max-width: 768px) 100vw, 50vw" src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 z-0" priority={index < 2} />
          ) : (
             <span className="text-foreground/30 font-mono text-sm z-10">[ Project Image ]</span>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-panel to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        </div>
        
        {/* Details */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${project.category === "Freelancer" ? "bg-primary/20 text-primary" : "bg-purple-500/20 text-purple-400"}`}>
              <span className="text-[10px] sm:text-xs">
                 {project.category.charAt(0)}
              </span>
            </div>
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${project.category === "Freelancer" ? "text-primary" : "text-purple-400"}`}>
                 {project.category} • {project.year}
              </span>
              <h4 className="text-white font-bold text-xl font-heading leading-tight">{project.title}</h4>
            </div>
          </div>
          
          <p className="text-sm text-foreground/70 mb-6 flex-1">
            {project.description}
          </p>

          {/* Tags footer */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map(tag => (
              <span key={tag} className="text-[10px] font-bold text-foreground/50 border border-white/10 bg-white/5 px-2 py-1 rounded-md uppercase tracking-wider">
                {tag}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-bold text-foreground/50 border border-white/10 bg-white/5 px-2 py-1 rounded-md uppercase tracking-wider">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Call-to-action buttons */}
          <div className="flex gap-4 mt-auto">
             {project.liveUrl && (
               <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/5 hover:bg-primary hover:text-white text-foreground text-center py-2.5 rounded text-xs font-bold uppercase tracking-widest border border-white/10 hover:border-primary transition-all shadow-sm flex items-center justify-center">
                 Ver Live
               </a>
             )}
             <a href={`/projetos/${project.id}`} className="flex-1 bg-transparent border border-white/10 hover:bg-white/10 text-foreground hover:text-white text-center py-2.5 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-sm flex items-center justify-center">
               Detalhes
             </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Projects() {
  const displayProjects = projects.filter(p => p.featured); // Mostrar apenas destaques na página inicial

  return (
    <section id="projetos" className="w-full py-48 lg:py-64 bg-background relative z-20 overflow-hidden">
      <Container>
        <ScrollReveal className="mb-12">
           <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tighter uppercase inline-block">
             Projetos
           </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {displayProjects.map((project, idx) => (
             <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
