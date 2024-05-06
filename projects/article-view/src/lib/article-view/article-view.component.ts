import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'projects/data/src/lib/models/data.models';

@Component({
  selector: 'lib-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  constructor(private route: ActivatedRoute){}
  article: Article | undefined;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      fetch(`http://localhost:3000/articles/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('data', data)
        this.article = data;
      })
      .catch(error => console.error(error));
      // Now do something with this.id, like call a service to get the blog post details
      // If 'id' was not provided in the route, params.get('id') will return null
    });
  }
}
