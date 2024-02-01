import dayjs from 'dayjs/esm';

import { IShift, NewShift } from './shift.model';

export const sampleWithRequiredData: IShift = {
  id: 32619,
};

export const sampleWithPartialData: IShift = {
  id: 10842,
  shiftStart: dayjs('2024-01-31T08:37'),
  shiftEnd: dayjs('2024-01-31T16:35'),
};

export const sampleWithFullData: IShift = {
  id: 14500,
  key: 26635,
  shiftStart: dayjs('2024-01-31T13:13'),
  shiftEnd: dayjs('2024-01-31T23:34'),
  type: 'reorganisation geez',
};

export const sampleWithNewData: NewShift = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
