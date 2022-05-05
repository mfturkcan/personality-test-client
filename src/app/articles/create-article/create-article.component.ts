import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { SpinnerService } from 'src/app/core/spinner/spinner.service';
import { ArticleDto } from 'src/app/domains/dtos/ArticleDto';
import { ArticleService } from 'src/app/services/article.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  errorMessage: string = "";
  imageUrl!: string;
  localImageUrl: string = "";

  constructor(private articleService: ArticleService,
    private spinnerService: SpinnerService,
    private storage: AngularFireStorage,
    private router: Router) { }

  ngOnInit(): void {
  }

  handleArticleSubmit(formValues: any) {
    this.spinnerService.requestStarted();

    if (formValues["image"]) {
      let image: any = document.getElementById("article-image");
      this.saveImageToFirebase(image.files[0]).then((value) => {
        this.saveArticle(formValues);
      });
    }
    else {
      this.saveArticle(formValues);
    }
  }

  saveImageToFirebase(image: File): Promise<any> {
    const randomUUID = v4();
    const filePath = "ArticleImages/" + randomUUID + "_" + image.name;

    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, image);
    return task
      .snapshotChanges()
      .pipe(map(data => {
        if (data) {
          console.log(data);
        }
      })).toPromise()
      .then(value => {
        return fileRef.getDownloadURL().pipe(map((data) => {
          console.log(data);
          this.imageUrl = data;
        })).toPromise();
      });
  }

  saveArticle(formValues: any) {
    let articleDto = new ArticleDto(formValues["text"]
      , formValues["title"]
      , formValues["author"]
      , this.imageUrl ?? "");
    this.spinnerService.requestStarted();

    this.articleService.addArticle(articleDto).subscribe(
      {
        next: next => {
          console.log(next);
          this.spinnerService.requestEnded();
          this.router.navigate(['/articles']);
        },
        error: error => {
          this.errorMessage = `An error occured with status : ${error.status}`;
          console.log(this.errorMessage);
          this.spinnerService.requestEnded();
        },
        complete: () => {
          this.spinnerService.requestEnded();
        }
      }
    );
  }


}
