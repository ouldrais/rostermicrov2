import dayjs from 'dayjs/esm';

import { IResourceTraining, NewResourceTraining } from './resource-training.model';

export const sampleWithRequiredData: IResourceTraining = {
  id: 27476,
};

export const sampleWithPartialData: IResourceTraining = {
  id: 8113,
  level: 'weakly',
  trainer: 'jail commercial',
};

export const sampleWithFullData: IResourceTraining = {
  id: 7359,
  status: 'muddy now boo',
  level: 'with the misplace',
  trainer: 'hmph',
  activeFrom: dayjs('2024-01-31T17:08'),
  activeto: dayjs('2024-01-31T18:55'),
};

export const sampleWithNewData: NewResourceTraining = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
