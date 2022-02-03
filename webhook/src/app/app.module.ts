import { FilterComponent } from './webhook/filter-webhook/filter.component';
import { CreateWebhookComponent } from './webhook/create-webhook/create-webhook.component';
import { UpdateWebhookComponent } from './webhook/update-webhook/update-webhook.component';
import { DeleteWebhookComponent } from './webhook/delete-webhook/delete-webhook.component';
//Imports Module
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebhookRoutingModule } from './webhook/webhook-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

//Imports Components
import { AppComponent } from './app.component';
import { TableViewComponent } from './webhook/table-webhook/table-view.component';

//Imports Material
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    FilterComponent,
    CreateWebhookComponent,
    UpdateWebhookComponent,
    DeleteWebhookComponent
  ],
  imports: [
    BrowserModule,
    WebhookRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('webhook-widget', el);
  }
  ngDoBootstrap() {}
}
