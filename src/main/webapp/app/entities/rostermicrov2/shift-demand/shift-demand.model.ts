import { IShift } from 'app/entities/rostermicrov2/shift/shift.model';
import { ITask } from 'app/entities/rostermicrov2/task/task.model';
import { IPosition } from 'app/entities/rostermicrov2/position/position.model';
import { IDepartment } from 'app/entities/rostermicrov2/department/department.model';

export interface IShiftDemand {
  id: number;
  count?: number | null;
  shift?: IShift | null;
  task?: ITask | null;
  position?: IPosition | null;
  department?: IDepartment | null;
}

export type NewShiftDemand = Omit<IShiftDemand, 'id'> & { id: null };
