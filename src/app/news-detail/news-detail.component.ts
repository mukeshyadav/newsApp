import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
    selector: "app-news-detail",
    templateUrl: "./news-detail.component.html",
    styleUrls: ["./news-detail.component.scss"]
})
export class NewsDetailComponent implements OnInit {
    public article$: Observable<object>;

    public comments: any[] = [
        {
            name: "Chris Nat",
            date: new Date(),
            avatar: "/assets/images/1.jpg",
            comment: `Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat`
        },
        {
            name: "Matt Damon",
            date: new Date(),
            avatar: "/assets/images/2.jpg",
            comment: `Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. `
        },
        {
            name: "Seb Willhelm",
            date: new Date(),
            avatar: "/assets/images/3.jpg",
            comment: `Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.`
        }
    ];

    constructor(
        public activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    public ngOnInit() {
        this.article$ = this.activatedRoute.paramMap.pipe(
            map(() => window.history.state)
        );

        this.article$.subscribe((state: any) => {
            if (!state.title) {
                this.router.navigate(["/"]);
            }
        });
    }

    public goToUrl(url: string): void {
        const win = window.open(url, "_blank");
        win.focus();
    }
}
