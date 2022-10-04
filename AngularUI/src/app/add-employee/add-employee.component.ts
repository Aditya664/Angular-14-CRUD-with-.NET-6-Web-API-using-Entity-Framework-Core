import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  AddEmp!:FormGroup;
  constructor(private fb:FormBuilder) { }

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

  }

}
