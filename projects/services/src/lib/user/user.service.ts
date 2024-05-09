import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string){
    return this.http.get(`http://localhost:3000/users/email/${email}`)
    .pipe(
      catchError(error => {
        if(error.error.message === 'cannot find user'){
          return of('cannot find user')
        }
        return throwError(() => error);
      })
    )
  };

  createUserProfile(email: string){
    return this.http.post(`http://localhost:3000/users/`, {
      email
    }).pipe(
      catchError(error => throwError(() => error))
    )
  };
}
