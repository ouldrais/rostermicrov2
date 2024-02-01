import { IShiftType } from 'app/entities/rostermicrov2/shift-type/shift-type.model';

export interface IRefRotation {
  id: number;
  order?: number | null;
  shiftType?: IShiftType | null;
}

export type NewRefRotation = Omit<IRefRotation, 'id'> & { id: null };
