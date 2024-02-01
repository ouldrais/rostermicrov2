import { ITeam, NewTeam } from './team.model';

export const sampleWithRequiredData: ITeam = {
  id: 28866,
};

export const sampleWithPartialData: ITeam = {
  key: 30087,
  id: 6036,
};

export const sampleWithFullData: ITeam = {
  key: 18806,
  id: 5677,
};

export const sampleWithNewData: NewTeam = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
