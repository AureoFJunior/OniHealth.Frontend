import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../plans.model';
import { PlanService } from '../plans.service';

@Component({
  selector: 'app-plans-read',
  templateUrl: './plans-read.component.html',
  styleUrls: ['./plans-read.component.css']
})
export class PlanReadComponent implements OnInit {

  plan: Plan[] = [];
  displayedColumns: String[] = ['id', 'name', 'details', 'totalValue', 'hasEmergency','action']
  dataSource = new MatTableDataSource<Plan>()
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private PlanService: PlanService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      if (id !== "")
      this.deletePlan(id!)
    }

    this.PlanService.read().subscribe(plan => {
    this.dataSource = plan
    this.dataSource.paginator = this.paginator;
    })
  }

  deletePlan(id: string): void {
    this.PlanService.delete(id).subscribe(() => {
      this.PlanService.showMessage(`Plano [${id}] excluído com sucesso.`, 'sucesso');
      setTimeout(() => {
        this.router.navigate(['/plans']);
      }, 500);
    });
  }
}
