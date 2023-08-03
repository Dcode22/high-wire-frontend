import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UserProfileComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
