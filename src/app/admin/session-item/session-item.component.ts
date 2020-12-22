import { Component, Input, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
@Input() session: any;
  constructor(private sessionItemService: FakesessionitemService) { }

  ngOnInit(): void {
  }
  onDelete()
  {
this.sessionItemService.delete(this.session);
  }
}
