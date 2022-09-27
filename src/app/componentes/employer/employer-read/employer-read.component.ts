import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Employer } from '../employer.model';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-employer-read',
  templateUrl: './employer-read.component.html',
  styleUrls: ['./employer-read.component.css']
})
export class EmployerReadComponent implements OnInit {

  employers: Employer[] = [];
  displayedColumns: String[] = ['id', 'name', 'role', 'salary', 'email', 'phoneNumber', 'zipCode','action']
  dataSource = new MatTableDataSource<Employer>()
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(private employerService: EmployerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      if (id !== "")
      this.deleteEmployer(id!)
    }

    this.employerService.read().subscribe(employers => {
    this.dataSource = employers
    console.log(employers)
    this.dataSource.paginator = this.paginator;
    })
  }

  deleteEmployer(id: string): void {
    this.employerService.delete(id).subscribe(employer => {
      this.employerService.showMessage(`Funcionário [${id}] excluído com sucesso.`, 'sucesso')
    });
    this.router.navigate(['/employers'])
  }

  defineRole(role: number): string {
    //aqui vamos tratar o Enum e retornar o nome do cargo, fazendo uma busca na tabela.
    return ''
  }


}
