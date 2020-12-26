import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import mainAPIAxios from '../axios';
import { User } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {
    this.currentUser = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.userObservable = this.currentUser.asObservable();
  }
  private env = environment;
  private currentUser: BehaviorSubject<User>;
  public userObservable: Observable<User>;

  public signIn(userObj: User): Observable<User> {
    return from(
      mainAPIAxios({
        data: userObj,
        method: 'post',
        url: `${this.env.mainHost}/api/user/login`
      })
    ).pipe(
      map((res: any) => {
        const user: User = { token: res.data.token };
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser.next(user);
        return user;
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser.next(null);
  }

  public currentUserValue(): User {
    return this.currentUser.value;
  }
}
