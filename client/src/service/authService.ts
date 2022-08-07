import { AxiosError } from 'axios';
import api from './api';

const login = (loginRequest: ILoginFormInput): Promise<UserProfile> => {
  return api
  .post<UserProfile>(`/login`, loginRequest)
  .then((response) => response.data)
  .catch((error: AxiosError<ErrorResponse>) => {
    throw new Error(error.response!.data?.message || error.message);
  });
}

const logout = () => {
  return api
    .post<UserProfile>(`/logout`, {})
    .then((response) => response.data)
    .catch((error: AxiosError<ErrorResponse>) => {
      throw new Error(error.response!.data?.message || error.message);
    });
};

export default {
  login,
  logout
}