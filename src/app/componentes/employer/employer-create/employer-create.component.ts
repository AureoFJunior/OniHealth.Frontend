import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '../../roles/roles.model';
import { RolesService } from '../../roles/roles.service';
import { Employer } from '../employer.model';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-employer-create',
  templateUrl: './employer-create.component.html',
  styleUrls: ['./employer-create.component.css']
})
export class EmployerCreateComponent implements OnInit {

  //Inicializar o funcionário para ser utilizado posteriormente. 
  employer: Employer = {
    name: '',
    role: 0,
    email: '',
    phoneNumber: '',
    salary: 0,
    zipCode: ''
  }

  roles: Roles[] = [];

  constructor(private employerService: EmployerService, private rolesService: RolesService, private router: Router) { }

  ngOnInit(): void {
    this.rolesService.read().subscribe(role => {
    this.roles = role;
    })
  }

  //Função que verifica a criação do funcionário e então chama a função do Service para realmente criar o funcionário no banco de dados.
  createEmployer(): void {
    if (this.employer.name !== "") {
      this.employerService.create(this.employer).subscribe(() => {
        this.employerService.showMessage('Operação concluída com sucesso!', 'sucesso')
        
        this.router.navigate(['/employers']);
      })
  }
  //Não deixa cadastrar se estiver vazio o nome do funcionário.
  else 
  {
    this.employerService.showMessage('O nome do funcionário precisa ser preenchido. Verifique', 'erro')
    this.router.navigate(['/employers/create'])
  }
}

  //Aqui é só pra voltar pra tela de funcionários mesmo.
  cancel(): void {
    this.router.navigate(['/employers'])
    this.employerService.showMessage('Cadastro de funcionário cancelado', 'atencao')
  }

}
