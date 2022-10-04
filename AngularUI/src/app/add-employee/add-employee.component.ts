import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IEmployee } from 'src/Model/IEmployee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  AddEmp!:FormGroup;
  addEmployeeRequest!:IEmployee;
  constructor(private route: Router,private fb:FormBuilder,private services:EmployeeService) { }

  ngOnInit(): void {
     //this.util.addDummyUser();
     this.AddEmp = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      department:['',[Validators.required]],
    })
  }
  
 
  AddEmployee(){
    this.addEmployeeRequest = {
      id:'',
      name:this.AddEmp.value.name,
      email:this.AddEmp.value.name,
      phone:this.AddEmp.value.phone,
      salary:this.AddEmp.value.salary,
      department:this.AddEmp.value.department
    };
    this.services.addEmployees(this.addEmployeeRequest).
    subscribe({next: (emp) =>{
        this.route.navigate(['employees']);
    }
  });
}
}
