import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit():void {
  }

  navigateToUserUpdate(): void {
    this.router.navigate(['/user/update'])
  }
}
