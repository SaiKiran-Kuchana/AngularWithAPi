import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})
export class EditDepartmentComponent implements OnInit {

  departmentDetails : Department = {
    id:'',
    departmentName:''
  };

  constructor(private route:ActivatedRoute,private departmentService:DepartmentService,private router:Router){}

  ngOnInit(): void {
 this.route.paramMap.subscribe({
  next:(params) => {
    const id = params.get('id');
    if(id){
      this.departmentService.getDepartment(id)
      .subscribe({
        next:(response) => {
          this.departmentDetails = response;
        }
      });
    }
  }
 })
}

updateEmployee(){
  this.departmentService.updateDepartment(this.departmentDetails.id,this.departmentDetails)
  .subscribe({
    next:(reponse) =>{
      this.router.navigate(['departments'])
    }
  });
}

deleteEmployee(id:string){
  this.departmentService.deleteDepartment(id)
  .subscribe({
    next:(reponse) => {
      this.router.navigate(['departments'])
    }
  });
}

}
