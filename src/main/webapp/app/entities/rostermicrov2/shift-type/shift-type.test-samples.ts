import dayjs from 'dayjs/esm';

import { IShiftType, NewShiftType } from './shift-type.model';

export const sampleWithRequiredData: IShiftType = {
  id: 7330,
};

export const sampleWithPartialData: IShiftType = {
  id: 7098,
  start: dayjs('2024-01-31T05:40'),
};

export const sampleWithFullData: IShiftType = {
  key: 25547,
  id: 14249,
  start: dayjs('2024-01-31T19:02'),
  end: dayjs('2024-01-31T19:56'),
};

export const sampleWithNewData: NewShiftType = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
