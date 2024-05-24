import { NgModule } from '@angular/core';
import { HeaderModule } from 'projects/header/src/public-api';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CheckDownvotedPipe } from 'projects/pipes/src/lib/check-downvoted/check-downvoted.pipe';
import { CheckUpvotedPipe } from 'projects/pipes/src/lib/check-upvoted/check-upvoted.pipe';
import { MatIconModule } from '@angular/material/icon';
import { LetDirective } from '@ngrx/component';



@NgModule({
  declarations: [
    HomepageComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatCardModule,
    RouterModule,
    CheckDownvotedPipe,
    CheckUpvotedPipe,
    MatIconModule,
    LetDirective
  ],
  exports: [
  ]
})
export class HomeModule { }
