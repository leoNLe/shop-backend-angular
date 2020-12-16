import { Router } from '@angular/router';
import axios from 'axios';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
export default (axiosInstance: axios): axios.interceptor => {
  return axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      // If no status then it will be network Error
      if (!error.status) {
        console.log('network error: ', error);
        error.message =
          'Unable to connect to network.  Please try again later.';
        throw error;
      } else {
        switch (error.status) {
          case 400:
            return Promise.reject();
          case 404:
            console.log('404 error');
            // Do something with this error
            location.reload(true);
            return Promise.reject(404);
          default:
            console.log('default error');
            // will want to parse out error message;
            throw error;
        }
      }
    }
  );
};
