import { Component } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";



@Component({
  selector: 'app-header',
  template: `
      <!-- Navbar   -->
    <section class="content-header text-center">
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="container">
          <ul class="navbar-nav nav-fill justify-content-around w-100 text-black">
            <li class="nav-item" *ngFor="let route of routes">
              <a class="nav-link" [class.active]="activeRoute==route.routePath" [routerLink]="route.routePath">{{route.routeText}}</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
`
})
export class HeaderComponent {
  routes: any[] = [
    { routePath: "/", routeText: "WHAT IS MBTI?" },
    { routePath: "/traits", routeText: "PERSONALITY TRAITS" },
    { routePath: "/articles", routeText: "ARTICLES" },
    { routePath: "/results", routeText: "RESULTS" },
    { routePath: "/test", routeText: "TAKE THE TEST" },
  ]

  activeRoute: string = "";
  constructor(private route: ActivatedRoute, private router: Router) {

    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationStart) {
        this.activeRoute = e.url;
      }
    });

  }

}
