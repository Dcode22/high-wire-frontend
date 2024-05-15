import { Component, Input } from '@angular/core';
import { Article } from 'projects/data-models/src/lib/models/article.models';

@Component({
  selector: 'home-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() article: Article;
}
