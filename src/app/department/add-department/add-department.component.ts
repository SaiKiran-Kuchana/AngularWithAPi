import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Router } from '@angular/router';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent implements OnInit {

  addDepartmentRequest : Department = {
    id:'',
    departmentName:''
  };

  constructor(private departmentService:DepartmentService,private router:Router){}
  ngOnInit(): void {
  }

  addDepartment(){
    this.departmentService.addDepartment(this.addDepartmentRequest)
    .subscribe({
      next:(department) =>{
        this.router.navigate(['departments'])
      }
    });
  }

}
