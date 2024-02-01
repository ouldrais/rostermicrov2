import { IRefCalendar, NewRefCalendar } from './ref-calendar.model';

export const sampleWithRequiredData: IRefCalendar = {
  id: 18572,
};

export const sampleWithPartialData: IRefCalendar = {
  key: 1003,
  id: 30008,
};

export const sampleWithFullData: IRefCalendar = {
  key: 17815,
  id: 13281,
  status: 'break violently gadzooks',
};

export const sampleWithNewData: NewRefCalendar = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
