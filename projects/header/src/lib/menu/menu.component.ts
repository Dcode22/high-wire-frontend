import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'header-menu',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <!-- <button mat-flat-button color="primary" (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
        Log out
      </button> -->
      <button [matMenuTriggerFor]="menu" mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
      <mat-menu #menu>
        <div class="menu-item"  mat-menu-item (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">Log out</div>
        <a routerLink="/settings"><div class="menu-item" mat-menu-item>Settings</div></a>
        <a routerLink="/compose"><div class="menu-item" mat-menu-item>Compose</div></a>
      </mat-menu>
    </ng-container>

    <ng-template #loggedOut>
      <button mat-raised-button color="primary" (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  styles: [
    ` .menu-item {
        width: 400px;
      }
    `
  ]
})
export class MenuComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}