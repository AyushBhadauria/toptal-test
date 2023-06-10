import { AxiosError } from 'axios';
import api from './api';

const create = (dietRequest: ICalorieFormInput): Promise<UserProfile> => {
  return api
    .post<UserProfile>(`/diet`, dietRequest)
    .then((response) => response.data)
    .catch((error: AxiosError<ErrorResponse>) => {
    throw new Error(error.response!.data?.message || error.message);
  });
}

const createRootDiet = (dietRequest: ICalorieFormInput, userId: number): Promise<UserProfile> => {
  return api
    .post<UserProfile>(`/diet/${userId}`, dietRequest)
    .then((response) => response.data)
    .catch((error: AxiosError<ErrorResponse>) => {
    throw new Error(error.response!.data?.message || error.message);
  });
}

const deleteItem = (id: number): Promise<void> => {
  return api
    .delete(`/diet/${id}`)
    .then((response) => {})
    .catch((error: AxiosError<ErrorResponse>) => {
    throw new Error(error.response!.data?.message || error.message);
  });
}

const update = (id: number, dietRequest: ICalorieFormInput): Promise<void> => {
  return api
    .put(`/diet/${id}`, dietRequest)
    .then((response) => {})
    .catch((error: AxiosError<ErrorResponse>) => {
    throw new Error(error.response!.data?.message || error.message);
  });
}

const reportCount = (): Promise<IAdminReportCount> => {
  return api
    .get<IAdminReportCount>('/report-count')
    .then((response) => response.data)
    .catch((error: AxiosError<ErrorResponse>) => {
    throw new Error(error.response!.data?.message || error.message);
  });
}


export default {
  create,
  deleteItem,
  createRootDiet,
  update,
  reportCount
}