import { Component, OnInit } from '@angular/core';
import { Article } from 'projects/data/src/lib/models/data.models';

@Component({
  selector: 'lib-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  articles: Array<Article> = [];
  getArticles = async () => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => {
        console.log('data', data)
        this.articles = data;
      })
      .catch(error => console.error(error));
  }
  dateString: string = new Date().toLocaleDateString(undefined, {dateStyle: 'full'})
  ngOnInit(): void {
    console.log('working')
    this.getArticles()
  }
}
