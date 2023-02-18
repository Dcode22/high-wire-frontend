import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userAction = async () => {
    const response = await fetch('https://high-wire-news.herokuapp.com/articles');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
  }
  ngOnInit(): void {
    console.log('working')
    this.userAction()
  }
}
