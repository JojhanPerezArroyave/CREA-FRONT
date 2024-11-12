import { Component, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  ClassroomModel,
  ClassroomStatus,
  ClassroomStatusLabels,
} from '../../models/classrooms.model';

@Component({
  selector: 'app-classroom-item-list',
  standalone: true,
  templateUrl: './classroom-item-list.component.html',
  styleUrls: ['./classroom-item-list.component.scss'],
  imports: [CommonModule, DatePipe],
})
export class ClassroomItemListComponent {
  classroom = input<ClassroomModel[]>();

  classroomStatusLabels = ClassroomStatusLabels;

  getClassroomStatusLabel(status: ClassroomStatus): string {
    return ClassroomStatusLabels[status];
  }
}
