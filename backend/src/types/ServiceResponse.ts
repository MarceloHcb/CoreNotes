type ServiceResponseErrorType = 'INVALID_DATA' 
| 'UNAUTHORIZED' | 'NOT_FOUND' | 'REQUIRED_FIELD' | 'SUCCESSFUL';

export type ServiceResponseError = {
  status: ServiceResponseErrorType, 
  data: { message: string }
};
  
export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED' | 'DELETED', 
  data: T 
};

export type ServiceResponseDeleted = {
  status: 'DELETED', 
  data: { message: string }
};
  
export type ServiceResponse<T> = ServiceResponseDeleted 
| ServiceResponseError | ServiceResponseSuccess<T>;