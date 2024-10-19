import { Component, OnInit } from '@angular/core';
import { ClassroomItemListComponent } from '../../ui/classroom-item-list/classroom-item-list.component';

@Component({
  selector: 'app-classroom-list-container',
  standalone: true,
  templateUrl: './classroom-list-container.component.html',
  imports: [ClassroomItemListComponent],
  styleUrls: ['./classroom-list-container.component.scss'],
})
export class ClassroomListContainerComponent  implements OnInit {

  classroom = {
    name: 'D302 Edificio del parque',
    teacher: 'Mario Alejandro Perez',
    status: 'Disponible',
    date: '6pm'
  }

  constructor() { }

  ngOnInit() {}

}
