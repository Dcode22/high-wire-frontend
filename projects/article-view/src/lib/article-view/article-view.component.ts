import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'projects/data-models/src/lib/models/article.models';
import { ArticleService } from 'projects/services/src/public-api';
import { first } from 'rxjs';

@Component({
  selector: 'lib-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private articleService: ArticleService){}
  article: Article | undefined;
  articleDateString: string;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id){
        this.articleService.getArticle(id).pipe(first()).subscribe((data: Article) => {
          console.log('data', data)
          this.article = data;
          let date = new Date(Number(this.article?.publishedDate!));
          this.articleDateString = date.toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' });
        })
      }
      // fetch(`http://localhost:3000/articles/${id}`)
      // .then(response => response.json())
      // .then(data => {
      //   console.log('data', data)
      //   this.article = data;
      //   let date = new Date(Number(this.article?.publishedDate!));
      //   this.articleDateString = date.toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' });
      // })
      // .catch(error => console.error(error));
    });
  }
}
