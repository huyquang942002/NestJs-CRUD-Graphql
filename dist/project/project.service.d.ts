import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
export declare class ProjectService {
    private projectService;
    constructor(projectService: Repository<Project>);
    create(project: CreateProjectInput): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    update(id: string, updateProjectInput: UpdateProjectInput): string;
    remove(id: string): string;
}
