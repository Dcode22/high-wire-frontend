import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { first } from 'rxjs';
import { UsersFacade } from './state/users/users.facade';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private usersFacade: UsersFacade
  ){}
  ngOnInit(): void {
    this.authService.isAuthenticated$.pipe(first()).subscribe(res => {
      if(res){
        this.usersFacade.getUser();
      } else {
        console.log('not logged in')
      }
    })
  }
}
