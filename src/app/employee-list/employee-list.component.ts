import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[] = [];

  constructor(private employeeService : EmployeesService){}

  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (employees) =>{
        console.log(employees);
        this.employees = employees

      },
      error:(response) => {
        console.log(response)
      }
    })
  }

}
