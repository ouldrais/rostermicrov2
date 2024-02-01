import { IResourceRoles, NewResourceRoles } from './resource-roles.model';

export const sampleWithRequiredData: IResourceRoles = {
  id: 32091,
};

export const sampleWithPartialData: IResourceRoles = {
  id: 5784,
};

export const sampleWithFullData: IResourceRoles = {
  id: 2213,
};

export const sampleWithNewData: NewResourceRoles = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
