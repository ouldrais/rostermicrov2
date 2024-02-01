import { IResourcePlan, NewResourcePlan } from './resource-plan.model';

export const sampleWithRequiredData: IResourcePlan = {
  id: 2269,
};

export const sampleWithPartialData: IResourcePlan = {
  id: 30738,
};

export const sampleWithFullData: IResourcePlan = {
  id: 8848,
  availability: true,
};

export const sampleWithNewData: NewResourcePlan = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
