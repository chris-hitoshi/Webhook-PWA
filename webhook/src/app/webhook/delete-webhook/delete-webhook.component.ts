import { ActivatedRoute, Router } from '@angular/router';
import { WebhookService } from '../webhook.service';
import { Webhook } from '../webhook.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-webhook',
  templateUrl: './delete-webhook.component.html',
  styleUrls: ['./delete-webhook.component.scss']
})
export class DeleteWebhookComponent implements OnInit {

  webhook!: Webhook;

  constructor(
    private WebhookService: WebhookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.WebhookService.getWebhookById(id).subscribe(webhook => {
      this.webhook = webhook
    });
  }

  deleteWebhook(): void {
    this.WebhookService.deleteWebhook(this.webhook.id).subscribe(() => {
    this.WebhookService.showMessage('Webhook deletado com sucesso!');
    this.router.navigate([{outlets: {webhook: null} }])
    })
  }
  
  cancel(): void {
    this.router.navigate([{outlets: {webhook: null} }]);
  }

}
