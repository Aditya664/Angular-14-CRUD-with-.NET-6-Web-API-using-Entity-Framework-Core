import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IEmployee } from 'src/Model/IEmployee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  EditEmp!: FormGroup;
  Emp!: IEmployee;
  constructor(private router: Router,private route:ActivatedRoute, private service: EmployeeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.EditEmp = this.fb.group({
        id:['responce.id'],
        name: [ 'responce.name', [Validators.required]],
        email: ['responce.email', [Validators.required, Validators.email]],
        phone: ['responce.phone', [Validators.required]],
        salary: ['responce.salary', [Validators.required]],
        department:['responce.department',[Validators.required]],
      })
    const id = String(this.route.snapshot.paramMap.get('id')); // getting id from url
    this.service.getEmployee(id).subscribe(emp =>{
      this.Emp = emp;
    }) 
  }

  EditEmployee() {
    var updeatEmployeeRequest:IEmployee = {
      id:this.EditEmp.value.id,
      name:this.EditEmp.value.name,
      email:this.EditEmp.value.email,
      phone:this.EditEmp.value.phone,
      salary:this.EditEmp.value.salary,
      department:this.EditEmp.value.department
    };
    let id = this.Emp.id;
    console.log(id);
    console.log(updeatEmployeeRequest);
    this.service.updateEmployee(updeatEmployeeRequest.id, updeatEmployeeRequest).
    subscribe({next: (emp) =>{
      this.router.navigate(['employees']);
    }
  })
      
  }
}
