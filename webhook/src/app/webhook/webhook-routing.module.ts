import { TableViewComponent } from './table-webhook/table-view.component';
import { WebhookResolver } from './webhook-resolve';
import { DeleteWebhookComponent } from './delete-webhook/delete-webhook.component';
import { UpdateWebhookComponent } from './update-webhook/update-webhook.component';
import { CreateWebhookComponent } from './create-webhook/create-webhook.component';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

const routes = [
  {
    path: "",
    component: TableViewComponent,
    outlet: 'webhook'
  },
  {
    path: "webhook/create",
    component: CreateWebhookComponent,
    outlet: 'webhook'
  },
  {
    path: "update/:id",
    component: UpdateWebhookComponent,
    outlet: 'webhook',
    resolve: {webhook: WebhookResolver}
  },
  {
    path: "delete/:id",
    component: DeleteWebhookComponent,
    outlet: 'webhook'
  },
  { 
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({  
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule]
})

export class WebhookRoutingModule { }
