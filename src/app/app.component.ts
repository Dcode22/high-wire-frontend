import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userAction = async () => {
    const response = fetch('https://high-wire-news-backend.herokuapp.com/articles')
      .then(response => response.json())
      .then(data => {
        
        console.log(data)
      })
      .catch(error => console.error(error));
  }
  ngOnInit(): void {
    console.log('working')
    this.userAction()
  }
}
