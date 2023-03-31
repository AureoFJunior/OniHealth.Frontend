import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';
import { Customer } from './customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //URL base da aplicação
  baseUrl: string = 'http://localhost:8080/api/Customer'

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient, private storageService: StorageService, private router: Router) { }

  //Quando inserir o produto, mostra a mensagem de sucesso.
  showMessage(msg: string, action: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: action
    })
  }

  //Cadastra o Cliente
  create(customer: Customer): Observable<Customer> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    return this.httpClient.post<Customer>(`${this.baseUrl}/AddCustomer`, customer, { headers: headers }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorhandler(e))
    );
  }

  //Pega o erro para mostrar na Snack Bar
  errorhandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro inesperado.', 'erro')
    return EMPTY;
  }

  //Lê os Clientes
  read() {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    return this.httpClient.get<any>(`${this.baseUrl}/GetCustomers`, {headers: headers}).pipe(map((res: any) => {
      return res;
    }))
  }

  //Procura um Cliente com base em um id
  readById(id: string): Observable<Customer> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    const url = `${this.baseUrl}/GetCustomer/${id}`
    return this.httpClient.get<Customer>(url, {headers: headers})
  }

  //Atualiza o Cliente
  update(customer: Customer): Observable<Customer> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    const url = `${this.baseUrl}/UpdateCustomer`
    return this.httpClient.put<Customer>(url, customer, {headers: headers})
  }

  //Deleta o Cliente
  delete(id: string): Observable<Customer> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    const url = `${this.baseUrl}/DeleteCustomer?id=${id}`
    return this.httpClient.delete<Customer>(url, {headers: headers})
  }

  getNameById(id: number): Observable<string> {
    const url = `${this.baseUrl}/GetNameById/${id}`;
    return this.httpClient.get<string>(url);
  }
}
