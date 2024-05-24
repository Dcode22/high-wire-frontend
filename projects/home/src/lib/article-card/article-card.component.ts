import { Component, Input } from '@angular/core';
import { Article } from 'projects/data-models/src/lib/models/article.models';
import { User } from 'projects/data-models/src/public-api';

@Component({
  selector: 'home-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  constructor(){}
  @Input() article: Article;
  @Input() user: User | null | undefined;
}
