import { Tag } from "./Tag";

type Project = {
  title: string;
  description: string;
  path: string;
  tags: string[];
  slug: string;
};

type ProjectThumbProps = {
  projects: Project[];
};

export const ProjectThumb = ({ projects }: ProjectThumbProps) => {
  return (
    <div className="grid gap-2 lg:grid-cols-2 grid-cols-1 pt-4 pb-4">
      {projects.map((proj) => (
        <div key={proj.slug} className="text-black">
          <div className="mb-1">
            <a
              href={proj.path}
              className="text-xl font-semibold font-ubuntu-mono hover:underline hover:text-accent">
              {proj.title}
            </a>
          </div>

          <div className="pb-4">{proj.description}</div>

          <div className="flex">
            {proj.tags.map((tag) => (
              <Tag key={tag} tagName={tag} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
