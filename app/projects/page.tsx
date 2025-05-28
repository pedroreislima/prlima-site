import { ProjectThumb } from "@/components/ProjectThumb";
import { projects } from "@/lib/projects";

export default function Projects() {
    return (
        <div className = "lg:max-w-[120ch] lg:p-0 pl-4 pr-4 mx-auto">
            <p>
                aqui é onde vão ficar os projetos
            </p>
            <div className="grid gap-4 grid-cols-2">
                {projects.map((proj) => (
                <ProjectThumb
                    key={proj.slug}
                    title={proj.title}
                    description={proj.description}
                    path={proj.link}
                    tags={proj.tags}
                />
                ))}
            </div>
        </div>
        
    )
}