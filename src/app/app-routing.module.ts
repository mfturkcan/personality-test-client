import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { IndexComponent } from './index/index.component';
import { ResultsComponent } from './results/results.component';
import { TestComponent } from './test/test.component';
import { TraitsComponent } from './traits/traits.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'traits', component: TraitsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'test', component: TestComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
