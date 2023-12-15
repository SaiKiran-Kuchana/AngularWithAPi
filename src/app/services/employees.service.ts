import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  readonly apiUrl = 'http://localhost:5263/';

  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl+'api/Employees');
  }

  addEmployee(addEmployeeRequest:Employee):Observable<Employee> {
    addEmployeeRequest.id='0';
    return this.http.post<Employee>(this.apiUrl+'api/Employees',addEmployeeRequest);
  }

  getEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.apiUrl + 'api/Employees/'+id)
  }

  updateEmployee(id:string,udateemployeeRequest:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.apiUrl+'api/Employees/'+id,udateemployeeRequest)
  }

  deleteEmployee(id:string):Observable<Employee>{
   return this.http.delete<Employee>(this.apiUrl+'api/Employees/'+id)
  }

}
