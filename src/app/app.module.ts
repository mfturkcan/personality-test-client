import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TraitsComponent } from './traits/traits.component';
import { PersonalityTestComponent } from './personalityTest/personalityTest.component';
import { ArticlesComponent } from './articles/articles.component';
import "bootstrap";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ResultService } from './result.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TraitsComponent,
    PersonalityTestComponent,
    ArticlesComponent,
    FooterComponent,
    HeaderComponent,
    ResultsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
