const TagColors: Record<string, [string, string]> = {
    "R": ["bg-red-100", "text-red-800"],
    "Python": ["bg-green-100", "text-green-800"],
    "Machine Learning": ["bg-yellow-100", "text-yellow-800"],
};

type TagProps = {
  tagName: string;
};

export const Tag = ({tagName}:TagProps) => {
    const colors = TagColors[tagName] || ["bg-gray-100", "text-gray-800"]
    
    return (
        <div>
            <span className ={ colors.join(" ") + " text-2xs me-2 px-2.5 py-0"}>
                {tagName}
            </span>
        </div>
    )
}




