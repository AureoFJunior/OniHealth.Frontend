import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';
import { Plan } from './plans.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  //URL base da aplicação
  baseUrl: string = 'http://localhost:8080/api/Plans'

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient, private storageService: StorageService) { }

  //Quando inserir o produto, mostra a mensagem de sucesso.
  showMessage(msg: string, action: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: action
    })
  }

  //Cadastra o plano
  create(Plan: Plan): Observable<Plan> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    console.log(token)
    return this.httpClient.post<Plan>(`${this.baseUrl}/AddPlan`, Plan, { headers: headers }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorhandler(e))
    );
  }

  //Pega o erro para mostrar na Snack Bar
  errorhandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro inesperado.', 'erro')
    return EMPTY;
  }

  //Lê os planos
  read() {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    return this.httpClient.get<any>(`${this.baseUrl}/GetPlans`, {headers: headers}).pipe(map((res: any) => {
      return res;
    }))
  }

  //Procura um plano com base em um id
  readById(id: string): Observable<Plan> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    const url = `${this.baseUrl}/GetPlan/${id}`
    return this.httpClient.get<Plan>(url, {headers: headers})
  }

  //Atualiza o plano
  update(plan: Plan): Observable<Plan> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    const url = `${this.baseUrl}/UpdatePlan`
    return this.httpClient.put<Plan>(url, plan, {headers: headers})
  }

  //Deleta o plano
  delete(id: string): Observable<Plan> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    const url = `${this.baseUrl}/DeletePlan?id=${id}`
    return this.httpClient.delete<Plan>(url, {headers: headers})
  }

  getPlanById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
