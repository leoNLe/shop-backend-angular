import { Injectable } from '@angular/core';

import axios from 'axios';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private env = environment;
  constructor() {}

  public register(user: User): any {
    console.log(this.env.mainHost);
    console.log(user);
    return axios({
      data: user,
      method: 'post',
      url: `${this.env.mainHost}/api/user/register`
    });
  }
}
