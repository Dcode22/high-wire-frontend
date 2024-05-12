import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'projects/data/src/public-api';
import { Observable, catchError, first, map, of, switchMap, take, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { User as Auth0User, AuthService } from '@auth0/auth0-angular';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private authService: AuthService) { }

  getUserWithAuth0Data(): Observable<User>{
    return this.authService.user$.pipe(
      switchMap((user: Auth0User | undefined | null) => {
        return this.http.post<User>(`${environment.apiEndpoint}/users/auth0`, {
          ...user
        })
        .pipe(
          catchError(error => {
            return throwError(() => error);
          })
        )
      })
    )
  };

}
