import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {

    getEmployees(): string[] {
        return ['John', 'Jane', 'Jim', 'Jill'];
    }
}
