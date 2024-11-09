import { Component, inject, OnInit, signal } from '@angular/core';
import { ClassroomItemListComponent } from '../../ui/classroom-item-list/classroom-item-list.component';
import { GetClassroomService } from '../../services/classroom.service';
import { ClassroomModel } from '../../models/classrooms.model';

@Component({
  selector: 'app-classroom-list-container',
  standalone: true,
  templateUrl: './classroom-list-container.component.html',
  imports: [ClassroomItemListComponent],
  styleUrls: ['./classroom-list-container.component.scss'],
})
export class ClassroomListContainerComponent implements OnInit {
  private readonly getClassroomService = inject(GetClassroomService);
  data = signal<ClassroomModel[]>([]);
  
  ngOnInit(): void {
    this.getClassroomService.getDatos().subscribe((data) => {
      this.data().push(data);
    });
  }
}
