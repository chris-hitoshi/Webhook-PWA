import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { WebhookService } from '../webhook.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Webhook } from '../webhook.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})

export class TableViewComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'userName', 'webhookUrl', 'action'];
  dataSource = new MatTableDataSource<Webhook>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private webhookService: WebhookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.webhookService.listWebhook().subscribe(webhook => {
      this.dataSource.data = webhook
      console.log(webhook)
    })
  }

  listWebhookSearch(evento: any): void {
    this.webhookService.listWebhookByUserId(evento.newUserid).subscribe(foundWebhook =>{
      if(foundWebhook.length == 0){
        this.webhookService.showMessage('Nenhum webhook encontrado', true)
      } else{
        this.dataSource.data = foundWebhook
        console.log(foundWebhook)
      }
    })
  }

}
