import { IResource, NewResource } from './resource.model';

export const sampleWithRequiredData: IResource = {
  id: 24713,
};

export const sampleWithPartialData: IResource = {
  id: 11401,
  key: 17084,
  firstName: 'Anahi',
  exchangeAllowed: false,
};

export const sampleWithFullData: IResource = {
  id: 12324,
  key: 21884,
  firstName: 'Otis',
  lastName: 'Daniel-Krajcik',
  teamRole: 'bashfully',
  exchangeAllowed: false,
};

export const sampleWithNewData: NewResource = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
