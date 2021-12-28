import { Webhook } from '../webhook.model';
import { WebhookService } from '../webhook.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-webhook',
  templateUrl: './update-webhook.component.html',
  styleUrls: ['./update-webhook.component.scss']
})
export class UpdateWebhookComponent implements OnInit {

  webhook!: Webhook;

  constructor(
    private WebhookService: WebhookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // const id =+ this.route.snapshot.paramMap.get('id')!;
    // this.WebhookService.readById(id).subscribe(webhook => {
    //   this.webhook = webhook
    // });
    this.route.data.subscribe(data => {
      console.log("Mensagem")
      this.webhook= data['webhook'];
    });
  }

  updateWebhookById(): void {
    this.WebhookService.updateWebhook(this.webhook).subscribe(() => {
      this.WebhookService.showMessage('Webhook editado com sucesso!');
      this.router.navigate([{outlets: {webhook: null} }])
    })
  }


  cancel(): void {
    this.router.navigate([{outlets: {webhook: null} }]);
  }


}
