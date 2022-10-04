import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/Model/IEmployee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees : IEmployee[] = [];
  constructor(private services:EmployeeService) { }

  ngOnInit(): void {
    this.services.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

}
