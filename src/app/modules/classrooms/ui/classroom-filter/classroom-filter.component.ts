import { Component, EventEmitter, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonToolbar, IonSearchbar, IonRadioGroup, IonRadio, IonItem, IonLabel } from '@ionic/angular/standalone';

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
  aulaEstado: string = 'disponible'; // Valor inicial de "Estado del aula"

  onSearchTermChange(event: CustomEvent): void {
    this.searchTerm.emit(event.detail.value);
  }
}
