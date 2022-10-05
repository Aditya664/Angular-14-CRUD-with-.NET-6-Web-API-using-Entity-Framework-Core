import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private router: ActivatedRoute, private service: EmployeeService, private fb: FormBuilder) { }

  ngOnInit(): void {
     this.EditEmp = this.fb.group({
        id:['responce.id'],
        name: [ 'responce.name', [Validators.required]],
        email: ['responce.email', [Validators.required, Validators.email]],
        phone: ['responce.phone', [Validators.required]],
        salary: ['responce.salary', [Validators.required]],
        department:['responce.department',[Validators.required]],
      })
    const id = String(this.router.snapshot.paramMap.get('id')); // getting id from url
    this.service.getEmployee(id).subscribe(emp =>{
      this.Emp = emp;
    }) 
    this.EditEmp = this.fb.group({
      name: [this.Emp.name, [Validators.required]],
      email: [this.Emp.email, [Validators.required, Validators.email]]
    })
  }

  EditEmployee() {

  }
}
