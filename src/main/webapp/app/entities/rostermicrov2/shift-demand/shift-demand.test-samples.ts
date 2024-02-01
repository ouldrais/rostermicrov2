import { IShiftDemand, NewShiftDemand } from './shift-demand.model';

export const sampleWithRequiredData: IShiftDemand = {
  id: 15803,
};

export const sampleWithPartialData: IShiftDemand = {
  id: 26403,
  count: 20160,
};

export const sampleWithFullData: IShiftDemand = {
  id: 4218,
  count: 20659,
};

export const sampleWithNewData: NewShiftDemand = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
