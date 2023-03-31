import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer-model';
import { CustomerService } from '../customer-service';
import {FormControl} from '@angular/forms';
import { Plan } from '../../signedPlan/plans.model';
import { PlanService } from '../../signedPlan/plans.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  selectIsDependent = new FormControl();

  constructor(private customerService: CustomerService, private planService: PlanService, private router: Router, private route: ActivatedRoute) { }

  customer: Customer = {
    name: '',
    email: '',
    birthDate: new Date(),
    signedPlanId: 0,
    isDependent: false,
    phoneNumber: '',
    lastPaymentDate: new Date()
  }

  plan: Plan[] = [];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.planService.read().subscribe(signedPlan => {
      this.plan = signedPlan;
      })

    this.customerService.readById(id!).subscribe(customer => {
      this.customer = customer
    });
  }

  navigate(): void {
    this.router.navigate(['/customers']);
  }

  updateCustomer(): void {
    if (this.customer.name !== "" && this.verifyLastPaymentDate(this.customer.lastPaymentDate)){
      this.customerService.update(this.customer).subscribe(() => {
        this.customerService.showMessage(`Cliente [${this.customer.name}] atualizado com sucesso! :)`, 'sucesso');
        this.navigate();
      });
    }
    else if (this.customer.name === "") {
      this.customerService.showMessage('O nome do cliente precisa ser preenchido. Verifique', 'erro')
      this.router.navigate(['/customers/create'])
    }
  }

  cancel(): void {
    this.navigate();
    this.customerService.showMessage('Operação de edição cancelada :( ', 'erro');
  }

  updateDate(value: string) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regex.test(value)) {
      const [day, month, year] = value.split('/');
      const currentDate = new Date();
      this.customer.lastPaymentDate = new Date(Number(year), Number(month) - 1, Number(day), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
    } else {
      // Tratar erro de entrada inválida aqui
    }
  }

  updateBirthDate(value: string){
    const regexBirthDate = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regexBirthDate.test(value)) {
      const [dayBirth, monthBirth, yearBirth] = value.split('/');
      this.customer.birthDate = new Date(Number(yearBirth), Number(monthBirth) - 1, Number(dayBirth))
    }
    else{
      // Tratar erro de entrada inválida aqui
    }
  }

  verifyLastPaymentDate(lastPaymentDate: Date): boolean {
    let birthDate = this.customer.birthDate;
    if (lastPaymentDate < birthDate) {
      this.customerService.showMessage('A data de último pagamento não pode ser anterior à data de nascimento!', 'erro');
      return false;
    }
    return true;
  }
}
