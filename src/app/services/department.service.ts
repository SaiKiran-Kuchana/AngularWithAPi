import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly apiUrl = 'http://localhost:5263/';
  constructor(private http: HttpClient) { }

  getAllDepartments():Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl+'api/Departments');
  }

  addDepartment(addDepartmentRequest:Department):Observable<Department> {
    addDepartmentRequest.id='0';
    return this.http.post<Department>(this.apiUrl+'api/Departments',addDepartmentRequest);
  }

  getDepartment(id:string):Observable<Department>{
    return this.http.get<Department>(this.apiUrl + 'api/Departments/'+id)
  }

  updateDepartment(id:string,updatedepartmentRequest:Department):Observable<Department>{
    return this.http.put<Department>(this.apiUrl+'api/Departments/'+id,updatedepartmentRequest)
  }

  deleteDepartment(id:string):Observable<Department>{
   return this.http.delete<Department>(this.apiUrl+'api/Departments/'+id)
  }

}
