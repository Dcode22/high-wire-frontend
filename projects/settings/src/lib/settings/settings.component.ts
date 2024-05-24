import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersFacade } from 'src/app/state/users/users.facade';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { LetDirective } from '@ngrx/component';
import { User } from 'projects/data-models/src/public-api';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'lib-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [ CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, LetDirective]
})
export class SettingsComponent implements OnInit {
  user$ = this.userFacade.user$;
  constructor(private fb: FormBuilder, private userFacade: UsersFacade){}
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    picture: [''],
    bio: ['', Validators.required],
    location: ['', Validators.required]
  })

  ngOnInit(): void {
    this.user$.pipe(first(res => !!res)).subscribe(user => {
      this.form.patchValue(user!)
    })
  }

  editUser(userId: string){
    if(this.form.valid){
      this.userFacade.editUser(userId, this.form.value as Partial<User>)
    }
  }
}
