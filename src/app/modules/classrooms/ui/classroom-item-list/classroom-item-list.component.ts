import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-item-list',
  standalone: true,
  templateUrl: './classroom-item-list.component.html',
  styleUrls: ['./classroom-item-list.component.scss'],
})
export class ClassroomItemListComponent implements OnInit {
  @Input({ required: true }) classroom: any;

  constructor() {}

  ngOnInit() {}
}
