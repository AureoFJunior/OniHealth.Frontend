import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '../roles.model';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles-create',
  templateUrl: './roles-create.component.html',
  styleUrls: ['./roles-create.component.css']
})
export class RolesCreateComponent implements OnInit {

  //Inicializar o cargo para ser utilizado posteriormente. 
  roles: Roles = {
    name: ''
  }

  constructor(private RolesService: RolesService, private router: Router) { }

  ngOnInit(): void {
  }

  //Função que verifica a criação do cargo e então chama a função do Service para realmente criar o cargo no banco de dados.
  createRoles(): void {
    if (this.roles.name !== "") {
      this.RolesService.create(this.roles).subscribe(() => {
        this.RolesService.showMessage('Operação concluída com sucesso!', 'sucesso')
        
        this.router.navigate(['/roles']);
      })
  }
  //Não deixa cadastrar se estiver vazio o nome do cargo.
  else 
  {
    this.RolesService.showMessage('O nome do cargo precisa ser preenchido. Verifique', 'erro')
    this.router.navigate(['/roles/create'])
  }
}

  //Aqui é só pra voltar pra tela de cargos mesmo.
  cancel(): void {
    this.router.navigate(['/roles'])
    this.RolesService.showMessage('Cadastro de cargo cancelado', 'atencao')
  }

}
