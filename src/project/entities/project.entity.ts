import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;
  @Field()
  @Column()
  name: string;
  @Field(() => Int)
  @Column()
  code: number;

  @Field(() => [Employee], { nullable: true })
  @OneToMany(() => Employee, (employee) => employee.project)
  employees: Employee[];
}
