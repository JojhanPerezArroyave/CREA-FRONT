import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomItemListComponent } from './classroom-item-list/classroom-item-list.component';
import { ClassroomFilterComponent } from './classroom-filter/classroom-filter.component';
import { ClassroomButtonFilterComponent } from './classroom-button-filter/classroom-button-filter.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ClassroomItemListComponent,
    ClassroomFilterComponent,
    ClassroomButtonFilterComponent
  ],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [
    ClassroomItemListComponent,
    ClassroomFilterComponent,
    ClassroomButtonFilterComponent
  ]
})
export class ClassroomComponentsModule {}
