import { IRefRotation, NewRefRotation } from './ref-rotation.model';

export const sampleWithRequiredData: IRefRotation = {
  id: 4555,
};

export const sampleWithPartialData: IRefRotation = {
  id: 18676,
};

export const sampleWithFullData: IRefRotation = {
  id: 6971,
  order: 15934,
};

export const sampleWithNewData: NewRefRotation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
