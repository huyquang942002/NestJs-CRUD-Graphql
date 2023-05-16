import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class EmployeeCreateDTO {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  designation: string;
  @Field({ nullable: true })
  city: string;
  @Field()
  projectId: string;
}
