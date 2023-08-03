import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomepageComponent,
    ArticleCardComponent
  ]
})
export class HomepageModule { }
