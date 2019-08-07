import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
    selector: "app-news",
    templateUrl: "./news.component.html",
    styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
    public articles: any[] = [];
    public search: string;
    public loading = false;
    public initialized = false;
    private searchChanged: Subject<string> = new Subject<string>();

    constructor(private newsService: NewsService) {
        this.searchChanged
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe((search: string) => {
                this.search = search;

                this.fetchArticles(search);
            });
    }

    public ngOnInit() {
        this.fetchArticles();
    }

    public onSearchChange(search: string) {
        this.searchChanged.next(search);
    }

    private fetchArticles(search?: string): void {
        this.loading = true;

        this.newsService.getTopHeadlines(search).subscribe((response: any) => {
            this.articles = response.articles;

            for (const article of this.articles) {
                if (!article.urlToImage) {
                    article.urlToImage = "/assets/images/placeholder.jpg";
                }
            }

            this.loading = false;
            this.initialized = true;
        });
    }
}
