import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-crud',
  templateUrl: './roles-crud.component.html',
  styleUrls: ['./roles-crud.component.css']
})
export class RolesCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Faz a navegação para o cadastro de funcionários.
  navigateToRolesCreate(): void {
    this.router.navigate(['/roles/create'])
  }

}
