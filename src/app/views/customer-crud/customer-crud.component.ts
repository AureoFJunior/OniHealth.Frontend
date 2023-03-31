import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-crud',
  templateUrl: './customer-crud-component.html',
  styleUrls: ['./customer-crud.component.css']
})
export class CustomerCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Faz a navegação para o cadastro de clientes.
  navigateToCustomerCreate(): void {
    this.router.navigate(['/customers/create'])
  }

}
