import { ITeamPlan, NewTeamPlan } from './team-plan.model';

export const sampleWithRequiredData: ITeamPlan = {
  id: 3899,
};

export const sampleWithPartialData: ITeamPlan = {
  id: 4439,
};

export const sampleWithFullData: ITeamPlan = {
  id: 16869,
};

export const sampleWithNewData: NewTeamPlan = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
