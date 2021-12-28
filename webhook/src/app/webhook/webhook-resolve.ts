import { Webhook } from './webhook.model';
import { catchError } from 'rxjs/operators';
import { WebhookService } from './webhook.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })
export class WebhookResolver implements Resolve<Webhook>{
      constructor(
          private webhookService: WebhookService,
          private router: Router,
        ) {}

      resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.webhookService.getWebhookById(route.params['id']).pipe(
          catchError(err => {
            this.router.navigate(['/home'])
            this.webhookService.showMessage("Ocorreu um erro!", true);
            return of(null);
          })
        );
      }
}