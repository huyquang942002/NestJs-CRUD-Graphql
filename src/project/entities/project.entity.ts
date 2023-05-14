import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;
  @Field()
  @Column()
  name: string;
  @Field(()=>Int)
  @Column()
  code: number;
}
