import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-classroom-button-filter',
  templateUrl: './classroom-button-filter.component.html',
  styleUrls: ['./classroom-button-filter.component.scss'],
  standalone: true,
})
export class ClassroomButtonFilterComponent {
  @Output() filterStatus = new EventEmitter<number>();

  onAvailableClick() {
    this.filterStatus.emit(0); // 0 para disponibles
  }

  onUnavailableClick() {
    this.filterStatus.emit(1); // 1 para no disponibles
  }
}
