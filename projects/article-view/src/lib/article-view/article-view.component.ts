import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticlesFacade } from 'src/app/state/articles/articles.facade';
import { LetDirective } from '@ngrx/component';
import { UsersFacade } from 'src/app/state/users/users.facade';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { first } from 'rxjs';
import { Article, User } from 'projects/data-models/src/public-api';
import { CheckDownvotedPipe } from 'projects/pipes/src/lib/check-downvoted/check-downvoted.pipe';
import { CheckUpvotedPipe } from 'projects/pipes/src/lib/check-upvoted/check-upvoted.pipe';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [CommonModule, LetDirective, MatIconModule, MatButtonModule, RouterModule, MatIconModule, MatTooltipModule, CheckDownvotedPipe, CheckUpvotedPipe],
  selector: 'lib-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private articlesFacade: ArticlesFacade, private usersFacade: UsersFacade){}
  selectedArticle$ = this.articlesFacade.selectedArticle$;
  articleDateString: string;
  user$ = this.usersFacade.user$;
  alreadyUpvoted: boolean = false;
  alreadyDownvoted: boolean = false;
  articleId: string;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id){
        this.articlesFacade.getArticle(id);
      }
    });

    this.user$.pipe(first()).subscribe(user => {
      if(user?.articleUpvotes?.includes(this.articleId)){
        this.alreadyUpvoted = true;
      }
      if(user?.articleDownvotes?.includes(this.articleId)){
        this.alreadyDownvoted = true;
      }
    })
  }

  getArticleDateString(articleDate: number | undefined){
    let date =  new Date(Number(articleDate!))
    return date.toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' });
  }

  upvoteClick(article: Article, user: User | null | undefined){
    if(!user){
      return 
    }
    if(!user.articleUpvotes?.includes(article._id)){
      this.articlesFacade.upvoteArticle(article._id, user._id)
    } else {
      console.log('remove upvote')
      this.articlesFacade.removeArticleUpvote(article._id, user._id)
    }
  }

  downvoteClick(article: Article, user: User | null | undefined){
    if(!user){
      return 
    }
    if(!user.articleDownvotes?.includes(article._id)){
      this.articlesFacade.downvoteArticle(article._id, user._id)
    } else {
      this.articlesFacade.removeArticleDownvote(article._id, user._id)
    }
  }
}
