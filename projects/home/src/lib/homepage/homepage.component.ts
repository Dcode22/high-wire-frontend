import { Component, OnInit } from '@angular/core';
import { Article } from 'projects/data-models/src/lib/models/article.models';
import { ArticleService } from 'projects/services/src/public-api';
import { first } from 'rxjs';

@Component({
  selector: 'lib-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(private articleService: ArticleService){}
  articles: Array<Article> = [];
  dateString: string = new Date().toLocaleDateString(undefined, {dateStyle: 'full'})
  ngOnInit(): void {
    this.articleService.getArticles().pipe(first()).subscribe((articles: Article[]) => {
      this.articles = articles;
    })
  }
}
