import { Component, input, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classroom-item-list',
  standalone: true,
  templateUrl: './classroom-item-list.component.html',
  styleUrls: ['./classroom-item-list.component.scss'],
  imports: [CommonModule],
})
export class ClassroomItemListComponent  {
  classroom = input<any>();
}
