import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../plans.model';
import { PlanService } from '../plans.service';

@Component({
  selector: 'app-plans-update',
  templateUrl: './plans-update.component.html',
  styleUrls: ['./plans-update.component.css']
})
export class PlanUpdateComponent implements OnInit {

  selectIsDependent = new FormControl();

  constructor(private PlanService: PlanService, private router: Router, private route: ActivatedRoute) { }

  plan: Plan = {
    name: '',
    details: '',
    totalValue: 0,
    hasEmergency: true
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.PlanService.readById(id!).subscribe(plan => {
      this.plan = plan
    });
  }

  navigate(): void {
    this.router.navigate(['/plans']);
  }

  updatePlan(): void {
    this.PlanService.update(this.plan).subscribe(() => {
      this.PlanService.showMessage(`Plano [${this.plan.name}] atualizado com sucesso! :)`, 'sucesso');
      this.navigate();
    });
    if (this.plan.name === "") {
      this.PlanService.showMessage('O nome do plano precisa ser preenchido. Verifique', 'erro')
      this.router.navigate(['/plans/create'])
    }
  }

  cancel(): void {
    this.navigate();
    this.PlanService.showMessage('Operação de edição cancelada :( ', 'erro');
  }

}
