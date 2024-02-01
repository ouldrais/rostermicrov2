import { ITraining, NewTraining } from './training.model';

export const sampleWithRequiredData: ITraining = {
  id: 21028,
};

export const sampleWithPartialData: ITraining = {
  id: 1046,
  key: 26793,
};

export const sampleWithFullData: ITraining = {
  id: 26110,
  key: 5846,
  description: 'hence',
};

export const sampleWithNewData: NewTraining = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
