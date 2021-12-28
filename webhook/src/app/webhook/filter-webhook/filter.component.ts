import { Webhook } from '../webhook.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() newSearch = new EventEmitter();

  userid: string = '';
  webhook: Webhook[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  clear(): void {
    this.userid = '';
  }

  search(): void{
    this.newSearch.emit({newUserid: this.userid});
  }

}
