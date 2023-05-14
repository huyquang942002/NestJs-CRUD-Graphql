import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
export declare class ProjectResolver {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectInput: CreateProjectInput): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    updateProject(project: UpdateProjectInput): string;
    removeProject(id: string): string;
}
