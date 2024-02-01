import dayjs from 'dayjs/esm';

import { IShiftTemplate, NewShiftTemplate } from './shift-template.model';

export const sampleWithRequiredData: IShiftTemplate = {
  id: 23905,
};

export const sampleWithPartialData: IShiftTemplate = {
  id: 6215,
};

export const sampleWithFullData: IShiftTemplate = {
  id: 10389,
  key: 23308,
  shiftStart: dayjs('2024-01-31T17:06'),
  shiftEnd: dayjs('2024-01-31T09:30'),
  type: 'modification blurt than',
};

export const sampleWithNewData: NewShiftTemplate = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
