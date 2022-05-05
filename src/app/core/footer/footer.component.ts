import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-light text-center text-white fixed-bottom">
      <!-- Social Media -->
      <div class="container p-4 pb-0 mb-1">
        <!-- Facebook -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #3b5998;" href="#" role="button">
          <i class="fa fa-facebook-f"></i>

        </a>

        <!-- Twitter -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #55acee;" href="#" role="button">
          <i class="fa fa-twitter"></i>
        </a>

        <!-- Instagram -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #ac2bac;" href="#" role="button">
          <i class="fa fa-instagram"></i>
        </a>

        <!-- Github -->
        <a class="btn btn-primary btn-floating m-1" target="_blank" (click)="openGithubPages()" style="background-color: #333333;" href="#" role="button">
          <i class="fa fa-github"></i>
        </a>

        <!-- Swagger Test -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #1d562a;" target="_blank" [href]="swaggerUrl"
          role="button">
          <i class="fa fa-shield"></i>
        </a>

      </div>
      <!-- Social Media -->

      <!-- Copyright -->
      <div class="text-center p-2 bg-orange">
        <h6>
          © 2022 Copyright:
          <a class="text-black pl-1" href="#">GROUP2</a>
        </h6>
      </div>
      <!-- Copyright -->
    </footer>
`
})
export class FooterComponent {
  swaggerUrl = environment.serverUrl;

  openGithubPages() {
    window.open("https://github.com/mfturkcan/personality-test-client");
    window.open("https://github.com/mfturkcan/personality-types");
  }
}
