import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from '../plans.model';
import { PlanService } from '../plans.service';

@Component({
  selector: 'app-plans-create',
  templateUrl: './plans-create.component.html',
  styleUrls: ['./plans-create.component.css']
})
export class PlanCreateComponent implements OnInit {

  //Inicializar o plano para ser utilizado posteriormente.
  plan: Plan = {
    name: '',
    details: '',
    totalValue: 0,
    hasEmergency: true
  }

  selectIsEmergency = new FormControl();

  constructor(private PlanService: PlanService, private router: Router) { }

  ngOnInit(): void {
  }

  //Função que verifica a criação do plano e então chama a função do Service para realmente criar o plano no banco de dados.
  createPlan(): void {
    if (this.plan.name !== "") {
      this.PlanService.create(this.plan).subscribe(() => {
        this.PlanService.showMessage('Operação concluída com sucesso!', 'sucesso')

        this.router.navigate(['/plans']);
      })
  }
  //Não deixa cadastrar se estiver vazio o nome do plano.
  else
  {
    this.PlanService.showMessage('O nome do plano precisa ser preenchido. Verifique', 'erro')
    this.router.navigate(['/plans/create'])
  }
}

  //Aqui é só pra voltar pra tela de planos mesmo.
  cancel(): void {
    this.router.navigate(['/plans'])
    this.PlanService.showMessage('Cadastro de plano cancelado', 'atencao')
  }

}
