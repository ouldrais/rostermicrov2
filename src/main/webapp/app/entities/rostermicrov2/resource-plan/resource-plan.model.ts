import { IResource } from 'app/entities/rostermicrov2/resource/resource.model';
import { IShift } from 'app/entities/rostermicrov2/shift/shift.model';
import { IPosition } from 'app/entities/rostermicrov2/position/position.model';

export interface IResourcePlan {
  id: number;
  availability?: boolean | null;
  resource?: IResource | null;
  shift?: IShift | null;
  position?: IPosition | null;
}

export type NewResourcePlan = Omit<IResourcePlan, 'id'> & { id: null };
