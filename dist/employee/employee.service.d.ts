import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
export declare class EmployeeService {
    private employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    findAll(): Promise<Employee[]>;
    create(employee: EmployeeCreateDTO): Promise<Employee>;
}
