import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';
import { Roles } from './roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  //URL base da aplicação
  baseUrl: string = 'http://localhost:8080/api/Roles'

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

  //Cadastra o cargos
  create(Roles: Roles): Observable<Roles> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    console.log(token)
    return this.httpClient.post<Roles>(`${this.baseUrl}/AddRoles`, Roles, { headers: headers }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorhandler(e))
    );
  }

  //Pega o erro para mostrar na Snack Bar
  errorhandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro inesperado.', 'erro')
    return EMPTY;
  }

  //Lê os cargos
  read() {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    return this.httpClient.get<any>(`${this.baseUrl}/GetRoles`, {headers: headers}).pipe(map((res: any) => {
      return res;
    }))
  }

  //Procura um cargos com base em um id
  readById(id: string): Observable<Roles> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    const url = `${this.baseUrl}/GetRoles/${id}`
    return this.httpClient.get<Roles>(url, {headers: headers})
  }

  //Atualiza o cargos
  update(Roles: Roles): Observable<Roles> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    const url = `${this.baseUrl}/UpdateRoles`
    return this.httpClient.put<Roles>(url, Roles, {headers: headers})
  }

  //Deleta o cargos
  delete(id: string): Observable<Roles> {
    let headers = new HttpHeaders()
    const token = this.storageService.getData('token')

    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Access-Control-Allow-Origin', '*')
    headers = headers.append('Authorization', 'Bearer ' + token)

    const url = `${this.baseUrl}/DeleteRoles/${id}`
    return this.httpClient.delete<Roles>(url, {headers: headers})
  }

}
