import { NgModule } from '@angular/core';
import { ArticleViewComponent } from './article-view/article-view.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ArticleViewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MatIconModule,
    ArticleViewComponent
  ]
})
export class ArticleViewModule { }
