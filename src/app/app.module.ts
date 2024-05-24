import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'projects/header/src/public-api';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from './state/articles/articles.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesEffects } from './state/articles/articles.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { usersReducer } from './state/users/users.reducer';
import { UsersEffects } from './state/users/users.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    StoreModule.forRoot({ articles: articlesReducer, users: usersReducer}),
    EffectsModule.forRoot([ArticlesEffects, UsersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AuthModule.forRoot({
      domain: 'dev-6s1h0nhp.us.auth0.com',
      clientId: 'lzl2tBwdy8SJJFpOmhxX7CSR77Biz0hb',
      useRefreshTokens: true,
      authorizationParams: {
        redirect_uri: window.location.origin
      },
      httpInterceptor: {
        allowedList: [`${environment.apiEndpoint}/users/*`]
      },
      cacheLocation: 'localstorage'
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
