import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomItemListComponent } from './classroom-item-list/classroom-item-list.component';
import { ClassroomFilterComponent } from './classroom-filter/classroom-filter.component';
import { ClassroomButtonFilterComponent } from './classroom-button-filter/classroom-button-filter.component';

@NgModule({
  declarations: [
    ClassroomItemListComponent,
    ClassroomFilterComponent,
    ClassroomButtonFilterComponent
  ],
  imports: [CommonModule],
  exports: [
    ClassroomItemListComponent,
    ClassroomFilterComponent,
    ClassroomButtonFilterComponent
  ]
})
export class ClassroomComponentsModule {}
