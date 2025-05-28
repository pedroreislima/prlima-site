import { Tag } from './Tag';

type ProjectThumbProps = {
  title: string;
  description: string;
  path: string;
  tags: string[];
};

export const ProjectThumb = ({ title, description, path, tags }: ProjectThumbProps) => {
    return (
        <div className="bg-primary/10 text-black p-2">
            <div className='border-b-1 mb-1'>
                <a href = {path} className='text-xl font-semibold'>{title}</a>
            </div>

            <div className = "pb-4">
                {description}
            </div>           

            <div className = "flex">
                {tags.map((tag) => (
                    <Tag key={tag} tagName={tag} />
                ))}
            </div>            
        </div>
    )
}