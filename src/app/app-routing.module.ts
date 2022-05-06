import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { UsedTechsComponent } from './core/used-techs/used-techs.component';
import { IndexComponent } from './index/index.component';
import { PersonalityTestComponent } from './personality-test/personality-test.component';
import { ResultsComponent } from './results/results.component';
import { TraitsComponent } from './traits/traits.component';
import { UserResultComponent } from './user-result/user-result.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'traits', component: TraitsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'publishArticle', component: CreateArticleComponent },
  { path: 'personality-test', component: PersonalityTestComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'userResult/:resultId', component: UserResultComponent },
  { path: 'usedTechs', component: UsedTechsComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
