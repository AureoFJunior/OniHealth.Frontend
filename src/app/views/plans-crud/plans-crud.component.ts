import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans-crud',
  templateUrl: './plans-crud.component.html',
  styleUrls: ['./plans-crud.component.css']
})
export class PlanCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Faz a navegação para o cadastro de clientes.
  navigateToPlanCreate(): void {
    this.router.navigate(['/plans/create'])
  }

}
