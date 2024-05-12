import { Component, OnInit } from '@angular/core';
import { AuthService, User as Auth0User } from '@auth0/auth0-angular';
import { UserService } from 'projects/services/src/public-api';
import { first } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ){}
  ngOnInit(): void {
    this.userService.getUserWithAuth0Data().pipe(first()).subscribe(res => {
      console.log('user res: ', res)
    })
  }
}
