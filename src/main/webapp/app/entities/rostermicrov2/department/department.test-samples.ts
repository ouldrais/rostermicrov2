import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 30745,
};

export const sampleWithPartialData: IDepartment = {
  id: 17454,
};

export const sampleWithFullData: IDepartment = {
  id: 14303,
  key: 18377,
  team: 'so after soupy',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
