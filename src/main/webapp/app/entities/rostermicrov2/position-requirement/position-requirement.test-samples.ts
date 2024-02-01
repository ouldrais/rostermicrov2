import { IPositionRequirement, NewPositionRequirement } from './position-requirement.model';

export const sampleWithRequiredData: IPositionRequirement = {
  id: 27727,
};

export const sampleWithPartialData: IPositionRequirement = {
  id: 9002,
};

export const sampleWithFullData: IPositionRequirement = {
  id: 28473,
  mandatoty: 'caramelize huzzah via',
};

export const sampleWithNewData: NewPositionRequirement = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
