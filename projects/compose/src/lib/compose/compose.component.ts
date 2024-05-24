import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Editor } from 'ngx-editor';
import { NgxEditorModule } from 'ngx-editor';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ArticlesFacade } from 'src/app/state/articles/articles.facade';
import { UsersFacade } from 'src/app/state/users/users.facade';
import { first } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { ArticlesActions } from 'src/app/state/articles/articles.actions';
import { Article, User } from 'projects/data-models/src/public-api';
import { LetDirective } from '@ngrx/component';
@Component({
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LetDirective
  ],
  selector: 'lib-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent {
  constructor(
    private fb: FormBuilder, 
    private articlesFacade: ArticlesFacade, 
    private usersFacade: UsersFacade, 
    private activatedRoute: ActivatedRoute,
    private actions$: Actions
  ){}
  editor: Editor;
  html = '';
  user$ = this.usersFacade.user$;
  accessDenied: boolean = false;
  existingArticle: Article | undefined;
  form = this.fb.group({
    headline: ['', Validators.required],
    subtitle: ['', Validators.required],
    headlineImage: ['']
  })

  ngOnInit(): void {
    this.editor = new Editor();
    const routeArticleId = this.activatedRoute.snapshot.paramMap.get('id')
    this.user$.pipe(first(res => !!res)).subscribe(user => {
      if(routeArticleId){
        this.articlesFacade.getArticle(routeArticleId);
        this.actions$.pipe(
          ofType(ArticlesActions.getArticleSuccess),
          first()
        ).subscribe(action => {
          if(action.article.userId === user?._id || user?.admin){
            this.existingArticle = action.article;
            this.form.patchValue(action.article)
            this.html = action.article.articleText;
          } else if(routeArticleId){
            console.log('access denied')
            this.accessDenied = true;
          }
        })
      } 
    })
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  save(user: User){
    if(this.form.valid && this.html){
      let data = {
        headline: this.form.value.headline || undefined,
        subtitle: this.form.value.subtitle || undefined,
        headlineImage: this.form.value.headlineImage || undefined,
        articleText: this.html
      };
      if(user){
        if(this.existingArticle){
          this.articlesFacade.editArticle(this.existingArticle._id, data)
        } else {
          this.articlesFacade.createArticle({...data, userId: user?._id})
        }
      }
    }
  }
}
