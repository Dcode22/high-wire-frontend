import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  articles = [];
  getArticles = async () => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => {
        console.log('data', data)
        this.articles = data;
      })
      .catch(error => console.error(error));
  }
  ngOnInit(): void {
    console.log('working')
    this.getArticles()
  }
}
