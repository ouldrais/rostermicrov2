import { IFacility, NewFacility } from './facility.model';

export const sampleWithRequiredData: IFacility = {
  id: 26887,
};

export const sampleWithPartialData: IFacility = {
  key: 25704,
  id: 17284,
};

export const sampleWithFullData: IFacility = {
  key: 30123,
  id: 22042,
};

export const sampleWithNewData: NewFacility = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
