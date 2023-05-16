import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectService: Repository<Project>,
  ) {}
  create(project: CreateProjectInput): Promise<Project> {
    let proj = this.projectService.create(project);
    return this.projectService.save(proj);
  }

  async findAll(): Promise<Project[]> {
    return this.projectService.find({ relations: ['employees'] });
  }

  async findOne(id: string): Promise<Project> {
    return await this.projectService.findOne({ where: { id } });
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
