import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TraitsComponent } from './traits/traits.component';
import { ArticlesComponent } from './articles/articles.component';
import "bootstrap";
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { ResultService } from './services/result.service';
import { UserResultComponent } from './user-result/user-result.component';
import { PersonalityTestComponent } from './personality-test/personality-test.component';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { ToastComponent } from './core/toast/toast.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';

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
    ErrorPageComponent,
    UserResultComponent,
    SpinnerComponent,
    ToastComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [
    ResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
