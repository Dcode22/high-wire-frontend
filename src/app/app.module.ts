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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-6s1h0nhp.us.auth0.com',
      clientId: 'lzl2tBwdy8SJJFpOmhxX7CSR77Biz0hb',
      authorizationParams: {
        redirect_uri: window.location.origin
      },
      httpInterceptor: {
        allowedList: [`${environment.apiEndpoint}/users/*`]
      }
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
