import ProjectCard from "./ui/ProjectCard";
import { Project } from "../../types";

interface ProjectListProps {
    items: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ items }) => {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {items.map((item) => (
                    <ProjectCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;