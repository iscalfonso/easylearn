import { FormMessage } from '../../domain/interfaces/form-message.interface';

export const SUCCESS_LOGIN_MESSAGE: FormMessage = {
  SEVERITY: 'success',
  SUMMARY: 'Acceso Correcto',
  DETAIL: 'Bienvenido a EasyLearn'
};

export const ERROR_LOGIN_MESSAGE = {
  SEVERITY: 'error',
  SUMMARY: 'Algo salió mal',
  DETAIL: 'Revise nuevamente sus credenciales'
};
