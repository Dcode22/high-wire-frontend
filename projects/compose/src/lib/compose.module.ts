import { NgModule } from '@angular/core';
import { ComposeComponent } from './compose/compose.component';
import { NgxEditorModule } from 'ngx-editor';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ComposeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ComposeComponent
  ]
})
export class ComposeModule { }
