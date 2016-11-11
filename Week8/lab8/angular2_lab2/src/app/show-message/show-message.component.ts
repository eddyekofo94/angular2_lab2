import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {

  clickMessage: string = "";

  constructor() { }

  onClickMe(myMessage: string) {
    this.clickMessage = myMessage;
  }

  ngOnInit() {
  }

}
