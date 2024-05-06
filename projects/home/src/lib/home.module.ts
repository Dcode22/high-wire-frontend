import { NgModule } from '@angular/core';
import { HeaderModule } from 'projects/header/src/public-api';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomepageComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
  ]
})
export class HomeModule { }
