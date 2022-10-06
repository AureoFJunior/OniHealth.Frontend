import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from '../../roles/roles.model';
import { RolesService } from '../../roles/roles.service';
import { Employer } from '../employer.model';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-employer-update',
  templateUrl: './employer-update.component.html',
  styleUrls: ['./employer-update.component.css']
})
export class EmployerUpdateComponent implements OnInit {

  constructor(private employerService: EmployerService, private rolesService: RolesService, private router: Router, private route: ActivatedRoute) { }

  employer: Employer = {
    name: '',
    role: 0,
    email: '',
    phoneNumber: '',
    salary: 0,
    zipCode: ''
  }
  
  roles: Roles[] = [];
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.rolesService.read().subscribe(role => {
      this.roles = role;
      })
      
    this.employerService.readById(id!).subscribe(employer => {
      this.employer = employer
    });
  }

  navigate(): void {
    this.router.navigate(['/employers']);
  }

  updateEmployer(): void {
    this.employerService.update(this.employer).subscribe(() => {
      this.employerService.showMessage(`Funcionário [${this.employer.name}] atualizado com sucesso! :)`, 'sucesso');
      this.navigate();
    });
  }

  cancel(): void {
    this.navigate();
    this.employerService.showMessage('Operação de edição cancelada :( ', 'erro');
  }
  
}
