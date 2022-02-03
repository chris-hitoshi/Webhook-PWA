import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Webhook } from './webhook.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebhookService {

  // apiJson = "https://615dba8512571a0017207858.mockapi.io/back-webhook/webhooks";
  apiJson = "http://localhost:3001/webhooks";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router
  ) { }

  showMessage(msg: string, isError: Boolean = false): void {
    this.snackBar.open(msg, 'X' ,{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  createWebhook(webhook: Webhook): Observable<Webhook> {
    return this.http.post<Webhook>(this.apiJson, webhook).pipe(
      catchError(e => this.errorHandler(e))
    )
  }

  listWebhook(): Observable<Webhook[]> {
    return this.http.get<Webhook[]>(this.apiJson).pipe(
      catchError(e => this.errorHandler(e))
    )
  }

  getWebhookById(id: number): Observable<Webhook> {
    const url = `${this.apiJson}/${id}`;
    return this.http.get<Webhook>(url)
      // catchError(e => this.errorHandler(e))
  }

  listWebhookByUserId(userid: string): Observable<Webhook[]> {
    const url = `${this.apiJson}/?userId_like=${userid}`;
    return this.http.get<Webhook[]>(url).pipe(
      catchError(e => this.errorHandler(e))
    )
  }

  updateWebhook(webhook: Webhook): Observable<Webhook> {
    const url = `${this.apiJson}/${webhook.id}`;
    return this.http.put<Webhook>(url, webhook).pipe(
      catchError(e => this.errorHandler(e))
    )
  }

  deleteWebhook(id: any): Observable<Webhook> {
    const url = `${this.apiJson}/${id}`;
    return this.http.delete<Webhook>(url).pipe(
      catchError(e => this.errorHandler(e))
    )
  }

  // <verb(crud)><object> create get|list update update(*) delete + Webhook (creatWebhook...) 
  errorHandler(e: any): Observable<any>{
    console.log("API ERROR: " + e)
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}