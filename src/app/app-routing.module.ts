import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { IndexComponent } from './index/index.component';
import { PersonalityTestComponent } from './personality-test/personality-test.component';
import { ResultsComponent } from './results/results.component';
import { TraitsComponent } from './traits/traits.component';
import { UserResultComponent } from './user-result/user-result.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'traits', component: TraitsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'personality-test', component: PersonalityTestComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'userResult/:resultId', component: UserResultComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }