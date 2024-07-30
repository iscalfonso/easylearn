import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { User } from '../../domain/interfaces/user.interface';
import { URLS } from '../constants/urls.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  doLogin(user : User): Observable<any> {
    const url = `${environment.baseUrl}${URLS.LOGIN}`;
    return this.http.post(url, user);
  }
}
