import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../environments/environment';
import ErrorIntercepter from './_helpers/errorInterceptor';

const mainAPIAxios = axios.create({ baseURL: environment.mainHost });

const errorInterceptor = ErrorIntercepter(mainAPIAxios);

export default mainAPIAxios;
