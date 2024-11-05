import { Component, inject, OnInit } from '@angular/core';
import { ClassroomItemListComponent } from '../../ui/classroom-item-list/classroom-item-list.component';
import { GetClassroomService } from '../../services/classroom.service';
import { JsonPipe } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-classroom-list-container',
  standalone: true,
  templateUrl: './classroom-list-container.component.html',
  imports: [
    ClassroomItemListComponent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    JsonPipe,
  ],
  styleUrls: ['./classroom-list-container.component.scss'],
})
export class ClassroomListContainerComponent implements OnInit {
  private readonly getClassroomService = inject(GetClassroomService);
  data = [];

  classroom = {
    name: 'D302 Edificio del parque',
    teacher: 'Mario Alejandro Perez',
    status: 'Disponible',
    date: '6pm',
  };

  constructor() {}

  ngOnInit(): void {
    this.getClassroomService.getDatos().subscribe((data) => {
      this.data = data;
    });
  }
}
