import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ClassroomModel } from '../../models/classrooms.model';
import { GetClassroomService } from '../../services/classroom.service';
import { ClassroomItemListComponent } from '../../ui/classroom-item-list/classroom-item-list.component';
import { ClassroomFilterComponent } from '../../ui/classroom-filter/classroom-filter.component';
import { ClassroomButtonFilterComponent } from '../../ui/classroom-button-filter/classroom-button-filter.component';

@Component({
  selector: 'app-classroom-list-container',
  templateUrl: './classroom-list-container.component.html',
  styleUrls: ['./classroom-list-container.component.scss'],
  standalone: true,
  imports: [
    ClassroomItemListComponent,
    ClassroomFilterComponent,
    ClassroomButtonFilterComponent
  ]
})
export class ClassroomListContainerComponent implements OnInit {
  private readonly getClassroomService = inject(GetClassroomService);
  data = signal<ClassroomModel[]>([]);
  searchTerm = signal<string>('');
  filterStatus = signal<number | null>(null);

  ngOnInit(): void {
    this.getClassroomService.getDatos().subscribe((data) => {
      this.data.set(Array.isArray(data) ? data : [data]);
    });
  }
  
  filteredData = computed(() => {
    const status = this.filterStatus();
    const searchTerm = this.searchTerm().toLowerCase();
    const data = this.data();

    return data.filter((item) => {
      const matchesStatus = status === null || item.status === status;
      const matchesSearch = !searchTerm || 
                            item.responsible?.toLowerCase().includes(searchTerm) || 
                            item.name.toLowerCase().includes(searchTerm);
      return matchesStatus && matchesSearch;
    });
  });

  onSearchTermChange(searchTerm: string): void {
    this.searchTerm.set(searchTerm);
  }

  onFilterStatusChange(status: number): void {
    this.filterStatus.set(status);
  }
}

