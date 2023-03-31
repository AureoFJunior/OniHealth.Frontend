import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from '../../signedPlan/plans.service';
import { Customer } from '../customer-model';
import { CustomerService } from '../customer-service';
import { Plan } from '../../signedPlan/plans.model';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements OnInit {

  customers: Customer[] = [];
  plans: Plan[] = [];
  displayedColumns: String[] = ['id', 'name', 'email', 'birthDate', 'signedPlanId', 'isDependent', 'phoneNumber', 'lastPaymentDate', 'action']
  dataSource = new MatTableDataSource<Customer>()
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private customerService: CustomerService, private planService: PlanService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      if (id !== "")
      this.deleteCustomer(id!)
    }

    this.customerService.read().subscribe(customers => {
    this.dataSource = customers;
    this.dataSource.paginator = this.paginator;
    })

    this.planService.read().subscribe(plans =>{
      this.plans = plans;
    })
  }

  deleteCustomer(id: string): void {
    this.customerService.delete(id).subscribe(() => {
      this.customerService.showMessage(`Cliente [${id}] excluído com sucesso.`, 'sucesso');
      setTimeout(() => {
        this.router.navigate(['/customers']);
      }, 500);
    });
  }

  getPlanName(signedPlanId: number): string{
    const signedPlan = this.plans.find(plan => plan.id === signedPlanId);
    return signedPlan ? signedPlan.name : '';
  }
}
