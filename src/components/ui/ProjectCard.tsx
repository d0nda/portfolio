import Image from "next/image";
import Link from "next/link";


import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Project } from "../../../types";

interface ProjectCard {
    data: Project;
}

const ProjectCard: React.FC<ProjectCard> = ({ data }) => {
    return (
        <Link href={data.link} target="_blank" className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
            <Card className="h-full">
                <CardContent className="p-0">
                    <div className="relative h-60 w-full">
                        <Image
                            className="rounded-t-lg"
                            src={data.images?.[0]}
                            alt="website image"
                            fill
                            sizes="(min-width: 1000px) 30vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-start">
                    <div>
                        <p className="font-semibold text-lg">{data.name}</p>
                        <p className="text-sm text-primary/80">{data.category}</p>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default ProjectCard;