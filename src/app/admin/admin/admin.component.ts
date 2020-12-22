import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FakesessionitemService]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
