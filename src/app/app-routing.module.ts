import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ArticleViewComponent } from 'projects/article-view/src/lib/article-view/article-view.component';
import { ComposeComponent } from 'projects/compose/src/public-api';
import { HomepageComponent } from 'projects/home/src/public-api';
import { SettingsComponent } from 'projects/settings/src/public-api';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomepageComponent},
  {path: 'articles/:id', pathMatch: 'full', component: ArticleViewComponent},
  {path: 'settings', canActivate: [AuthGuard], pathMatch: 'full', component: SettingsComponent},
  {path: 'compose', canActivate: [AuthGuard], pathMatch: 'full', component: ComposeComponent},
  {path: 'compose/:id', canActivate: [AuthGuard], pathMatch: 'full', component: ComposeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
