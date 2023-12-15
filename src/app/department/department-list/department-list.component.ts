import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit {

  departments : Department[] = [];

  constructor(private departmentService : DepartmentService){}

  ngOnInit(): void {
    this.departmentService.getAllDepartments()
    .subscribe({
      next: (departments) =>{
        this.departments = departments

      },
      error:(response) => {
        console.log(response)
      }
    })
  }

}
