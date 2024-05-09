import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleViewComponent } from 'projects/article-view/src/lib/article-view/article-view.component';
import { ComposeComponent } from 'projects/compose/src/public-api';
import { HomepageComponent } from 'projects/home/src/public-api';
import { SettingsComponent } from 'projects/settings/src/public-api';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomepageComponent},
  {path: 'articles/:id', pathMatch: 'full', component: ArticleViewComponent},
  {path: 'settings', pathMatch: 'full', component: SettingsComponent},
  {path: 'compose', pathMatch: 'full', component: ComposeComponent},
  {path: 'compose/:id', pathMatch: 'full', component: ComposeComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
