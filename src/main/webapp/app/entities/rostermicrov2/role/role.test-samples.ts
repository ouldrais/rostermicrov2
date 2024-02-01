import { IRole, NewRole } from './role.model';

export const sampleWithRequiredData: IRole = {
  id: 27274,
};

export const sampleWithPartialData: IRole = {
  id: 27844,
};

export const sampleWithFullData: IRole = {
  key: 15099,
  id: 25764,
};

export const sampleWithNewData: NewRole = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
