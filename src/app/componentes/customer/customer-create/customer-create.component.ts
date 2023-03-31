import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer-model';
import { CustomerService } from '../customer-service';
import { FormControl } from '@angular/forms';
import { Plan } from '../../signedPlan/plans.model';
import { PlanService } from '../../signedPlan/plans.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  //Inicializar o Cliente para ser utilizado posteriormente.
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

  selectIsDependent = new FormControl();

  constructor(private customerService: CustomerService, private planService: PlanService, private router: Router) { }

  ngOnInit(): void {
    this.planService.read().subscribe(signedPlan => {
      this.plan = signedPlan;
      })
  }

  //Função que verifica a criação do cliente e então chama a função do Service para realmente criar o Cliente no banco de dados.
  createCustomer(): void {
    if (this.customer.name !== "" && this.verifyLastPaymentDate(this.customer.lastPaymentDate)) {
      this.customer.isDependent = this.selectIsDependent.value
      this.customerService.create(this.customer).subscribe(() => {
        this.customerService.showMessage('Operação concluída com sucesso!', 'sucesso')
        this.router.navigate(['/customers']);
      })
    } else if (this.customer.name === "") {
      this.customerService.showMessage('O nome do cliente precisa ser preenchido. Verifique', 'erro')
      this.router.navigate(['/customers/create'])
    }
  }

  //Aqui é só pra voltar pra tela de clientes mesmo.
  cancel(): void {
    this.router.navigate(['/customers'])
    this.customerService.showMessage('Cadastro de cliente cancelado', 'atencao')
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
