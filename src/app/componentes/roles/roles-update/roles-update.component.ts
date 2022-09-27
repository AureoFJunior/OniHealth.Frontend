import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from '../roles.model';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles-update',
  templateUrl: './roles-update.component.html',
  styleUrls: ['./roles-update.component.css']
})
export class RolesUpdateComponent implements OnInit {

  constructor(private RolesService: RolesService, private router: Router, private route: ActivatedRoute) { }

  roles: Roles = {
    name: ''
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.RolesService.readById(id!).subscribe(roles => {
      this.roles = roles
    });
  }

  navigate(): void {
    this.router.navigate(['/Roles']);
  }

  updateRoles(): void {
    this.RolesService.update(this.roles).subscribe(() => {
      this.RolesService.showMessage(`Cargo [${this.roles.name}] atualizado com sucesso! :)`, 'sucesso');
      this.navigate();
    });
  }

  cancel(): void {
    this.navigate();
    this.RolesService.showMessage('Operação de edição cancelada :( ', 'erro');
  }
  
}
