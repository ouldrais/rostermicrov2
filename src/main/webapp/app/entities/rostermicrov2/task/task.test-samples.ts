import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 8817,
};

export const sampleWithPartialData: ITask = {
  key: 14863,
  id: 3861,
};

export const sampleWithFullData: ITask = {
  key: 20708,
  id: 2369,
  description: 'above diesel',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
