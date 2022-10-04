import {HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee } from 'src/Model/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private HttpClient:HttpClient) {

  }

  getAllEmployees(): Observable<IEmployee[]>{
    return this.HttpClient.get<IEmployee[]>(this.baseApiUrl+"/employee");
  }

  addEmployees(addEmployees: IEmployee): Observable<IEmployee> {
    return this.HttpClient.post<IEmployee>(this.baseApiUrl+"/employee",addEmployees);
  }
}
