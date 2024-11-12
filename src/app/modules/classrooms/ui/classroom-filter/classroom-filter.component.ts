import { Component, EventEmitter, Output } from '@angular/core';
import { IonToolbar, IonHeader, IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-classroom-filter',
  templateUrl: './classroom-filter.component.html',
  styleUrls: ['./classroom-filter.component.scss'],
  standalone: true,
  imports: [IonSearchbar, IonToolbar],
})
export class ClassroomFilterComponent {
  @Output() searchTerm = new EventEmitter<string>();

  onSearchTermChange(event: CustomEvent): void {
    this.searchTerm.emit(event.detail.value);
  }
}
