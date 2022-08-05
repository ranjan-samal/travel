import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  items = [{
    "img": "",
    "content": "Meghalaya was awesome, for detiails I'm waiting for my wife to provide her experience but she is too busy to provide as she has a job too but she is not happy with that.",
    "title": "Bangalore to Gwahati"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
