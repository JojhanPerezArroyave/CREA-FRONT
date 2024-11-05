import { Component, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

import { JsonPipe } from '@angular/common';
import { GetClassroomService } from './home.repository';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, JsonPipe],
})
export class HomePage implements OnInit {
  private readonly getClassroomService = inject(GetClassroomService);
  data = [];

  ngOnInit(): void {
    this.getClassroomService.getDatos().subscribe((data) => {
      this.data = data;
    });
  }
}
