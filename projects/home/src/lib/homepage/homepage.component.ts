import { Component, OnInit } from '@angular/core';
import { ArticlesFacade } from 'src/app/state/articles/articles.facade';
import { UsersFacade } from 'src/app/state/users/users.facade';

@Component({
  selector: 'lib-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(private articlesFacade: ArticlesFacade, private usersFacade: UsersFacade){}
  allArticles$ = this.articlesFacade.allArticles$;
  dateString: string = new Date().toLocaleDateString(undefined, {dateStyle: 'full'})
  user$ = this.usersFacade.user$;
  ngOnInit(): void {
    this.articlesFacade.getArticles();
  }
}
