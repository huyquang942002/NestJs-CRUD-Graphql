import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/entities/employee.entity';
import { ProjectModule } from './project/project.module';
import { Project } from './project/entities/project.entity';

@Module({
  imports: [
    EmployeeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'huy123',
      database: 'employee',
      entities: [Employee, Project],
      synchronize: true,
    }),
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
