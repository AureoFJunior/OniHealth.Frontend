import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from '../roles.model';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles-read',
  templateUrl: './roles-read.component.html',
  styleUrls: ['./roles-read.component.css']
})
export class RolesReadComponent implements OnInit {

  roles: Roles[] = [];
  displayedColumns: String[] = ['id', 'name','action']
  dataSource = new MatTableDataSource<Roles>()
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(private RolesService: RolesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      if (id !== "")
      this.deleteRoles(id!)
    }

    this.RolesService.read().subscribe(roles => {
    this.dataSource = roles
    this.dataSource.paginator = this.paginator;
    })
  }

  deleteRoles(id: string): void {
    this.RolesService.delete(id).subscribe(roles => {
      this.RolesService.showMessage(`Cargo [${id}] excluído com sucesso.`, 'sucesso')
    });
    this.router.navigate(['/roles'])
  }
}
