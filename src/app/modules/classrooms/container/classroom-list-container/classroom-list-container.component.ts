import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ClassroomItemListComponent } from '../../ui/classroom-item-list/classroom-item-list.component';
import { GetClassroomService } from '../../services/classroom.service';
import { ClassroomModel, ClassroomStatus } from '../../models/classrooms.model';
import { ClassroomFilterComponent } from '../../ui/classroom-filter/classroom-filter.component';

@Component({
  selector: 'app-classroom-list-container',
  standalone: true,
  templateUrl: './classroom-list-container.component.html',
  imports: [ClassroomItemListComponent, ClassroomFilterComponent],
  styleUrls: ['./classroom-list-container.component.scss'],
})
export class ClassroomListContainerComponent implements OnInit {
  private readonly getClassroomService = inject(GetClassroomService);
  data = signal<ClassroomModel[]>([]);
  searchTerm = signal<string>('');
  selectedStatus = signal<ClassroomStatus | null>(null);

  ngOnInit(): void {
    this.getClassroomService.getDatos().subscribe((data) => {
      const classrooms = Array.isArray(data) ? data : [data];
      this.data.set(classrooms);
    });
  }

  filteredData = computed(() => {
    const searchTerm = this.searchTerm();
    const selectedStatus = this.selectedStatus;
    const data = this.data();

    let filtered = data;

    if (searchTerm) {
      filtered = filtered.filter(
        (item: ClassroomModel) =>
          item.responsible?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedStatus() !== null) {
      filtered = filtered.filter(
        (item: ClassroomModel) => item.status === selectedStatus()
      );
    }

    return selectedStatus() === undefined ? data : filtered;
  });

  onSearchTermChange(searchTerm: string): void {
    this.searchTerm.set(searchTerm);
    this.filteredData();
  }

  onStatusChange(status: ClassroomStatus): void {
    this.selectedStatus.set(status);
    this.filteredData();
  }
}
