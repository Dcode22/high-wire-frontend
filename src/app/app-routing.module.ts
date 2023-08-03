import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from 'projects/compose/src/public-api';
import { HomepageComponent } from 'projects/homepage/src/lib/homepage/homepage.component';
import { SettingsComponent } from 'projects/settings/src/public-api';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomepageComponent},
  {path: 'settings', pathMatch: 'full', component: SettingsComponent},
  {path: 'compose', pathMatch: 'full', component: ComposeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
