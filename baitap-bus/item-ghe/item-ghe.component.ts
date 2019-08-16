import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  @Input() ghe ;
  @Output() eventChonGhe = new EventEmitter();
  statusColor: boolean = false;


  constructor() { }
  chonGhe(){
      this.statusColor = !this.statusColor;
      this.eventChonGhe.emit({ghe: this.ghe, statusColor: this.statusColor});
  }
  ngOnInit() {  
  }

}
