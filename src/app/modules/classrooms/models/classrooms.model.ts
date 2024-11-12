export interface ClassroomModel {
  id: string;
  name: string;
  responsible?: string;
  startDate?: string | Date;
  endDate?: string | Date;
  status: ClassroomStatus;
}

export enum ClassroomStatus {
  Available,
  Busy,
}
