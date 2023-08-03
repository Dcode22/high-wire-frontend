import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'lib-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent {

  constructor(private fb: FormBuilder){}
  editor: Editor;
  html = '';

  form = this.fb.group({
    headline: ['', Validators.required],
    subtitle: ['', Validators.required],
    headlineImage: ['']
  })

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  save(){
    if(this.form.valid && this.html){
      let url = 'http://localhost:3000/articles';
      let data = {
        headline: this.form.value.headline,
        subtitle: this.form.value.subtitle,
        headlineImage: this.form.value.headlineImage,
        articleText: this.html
      };
      
      fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      }).then(data => {
        console.log('Success:', data);
      }).catch((error) => {
        console.error('Error:', error);
      });
    }
  }
}
