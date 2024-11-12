import { Component, EventEmitter, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonToolbar, IonSearchbar, IonRadioGroup, IonRadio, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ClassroomStatus } from '../../models/classrooms.model';

@Component({
  selector: 'app-classroom-filter',
  templateUrl: './classroom-filter.component.html',
  styleUrls: ['./classroom-filter.component.scss'],
  standalone: true,
  imports: [IonSearchbar, IonToolbar, IonRadioGroup, IonRadio, IonItem, IonLabel, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClassroomFilterComponent {
  @Output() searchTerm = new EventEmitter<string>();
  @Output() statusFilter = new EventEmitter<ClassroomStatus>();

  classroomStatus = ClassroomStatus;

  onSearchTermChange(event: CustomEvent): void {
    this.searchTerm.emit(event.detail.value);
  }

  onStatusChange(event: CustomEvent): void {
    this.statusFilter.emit(event.detail.value);
  }
}
