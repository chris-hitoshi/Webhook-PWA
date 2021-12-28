import { WebhookService } from '../webhook.service';
import { Webhook } from '../webhook.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-webhook',
  templateUrl: './create-webhook.component.html',
  styleUrls: ['./create-webhook.component.scss']
})
export class CreateWebhookComponent implements OnInit {

  webhook: Webhook = {
    userName: '',
    userId: '',
    webhookUrl: '',
    jwtUrl: '',
    clientSecret: '',
    clientAudience: ''
  }

  constructor(private router: Router, private webhookService: WebhookService) { }

  ngOnInit(): void {
  }

  createWebhook(){
    // if(this.webhook.userName == '' || this.webhook.userId == '' || this.webhook.webhookUrl == '' ||
    // this.webhook.jwtUrl == '' || this.webhook.authenticationType == ''){
    //   this.webhookService.showMessage('Preencha os campos corretamente!', true)
    // } else {
      this.webhookService.createWebhook(this.webhook).subscribe(() =>{
        this.webhookService.showMessage('Webhook criado!', false);
        this.router.navigate([{outlets: {webhook: null} }]);
        });
      // }
  }


  cancel():void {
    this.router.navigate([{outlets: {webhook: null} }])
  }


}
