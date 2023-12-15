import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeeListComponent
  },
  {
    path:'employees',
    component:EmployeeListComponent
  },
  {
    path:'employees/add',
    component:AddEmployeeComponent
  },
  {
    path:'employees/edit/:id',
    component:EditEmployeeComponent
  },
  {
    path:'departments',
    component:DepartmentListComponent
  },
  {
    path:'departments/add',
    component:AddDepartmentComponent
  },
  {
    path:'departments/edit/:id',
    component:EditDepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
