import { Component } from '@angular/core';
import { IonToolbar, IonHeader, IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-classroom-filter',
  templateUrl: './classroom-filter.component.html',
  styleUrls: ['./classroom-filter.component.scss'],
  standalone: true,
  imports: [IonSearchbar, IonHeader, IonToolbar],
})
export class ClassroomFilterComponent {}
