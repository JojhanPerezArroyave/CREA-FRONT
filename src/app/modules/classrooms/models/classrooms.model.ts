export interface ClassroomModel {
  id: string;
  name: string;
  resposible: string;
  startDate: string | Date;
  endDate: string | Date;
  status: ClassroomStatus;
}

enum ClassroomStatus {
  Available,
  Busy,
}
