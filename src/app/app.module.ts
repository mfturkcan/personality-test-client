import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TraitsComponent } from './traits/traits.component';
import { TestComponent } from './test/test.component';
import { ArticlesComponent } from './articles/articles.component';
import "bootstrap";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TraitsComponent,
    TestComponent,
    ArticlesComponent,
    FooterComponent,
    HeaderComponent,
    ResultsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
