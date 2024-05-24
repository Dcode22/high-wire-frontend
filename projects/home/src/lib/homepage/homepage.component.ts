import { Component, OnInit } from '@angular/core';
import { ArticlesFacade } from 'src/app/state/articles/articles.facade';

@Component({
  selector: 'lib-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(private articlesFacade: ArticlesFacade){}
  allArticles$ = this.articlesFacade.allArticles$;
  dateString: string = new Date().toLocaleDateString(undefined, {dateStyle: 'full'})
  ngOnInit(): void {
    this.articlesFacade.getArticles();
  }
}
