import { IPosition, NewPosition } from './position.model';

export const sampleWithRequiredData: IPosition = {
  id: 3885,
};

export const sampleWithPartialData: IPosition = {
  id: 8828,
  key: 9485,
};

export const sampleWithFullData: IPosition = {
  id: 23141,
  key: 24056,
  leadership: 'given',
};

export const sampleWithNewData: NewPosition = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
