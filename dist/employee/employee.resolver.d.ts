import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDTO } from './dto/create-employee.input';
export declare class EmployeeResolver {
    private employeeService;
    constructor(employeeService: EmployeeService);
    findAll(): Promise<Employee[]>;
    create(employee: EmployeeCreateDTO): Promise<Employee>;
}
