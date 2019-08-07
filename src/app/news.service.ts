import { Injectable } from "@angular/core";
import { NewsApiService } from "angular-news-api";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class NewsService {
    constructor(private newsApiService: NewsApiService) {}

    /**
     * Return 'top headlines' from NewsAPI for articles
     * in english language, optionally filtered by a search
     * word or phrase.
     *
     * @param search - Optional search word or phrase
     */
    public getTopHeadlines(search?: string): Observable<any> {
        return this.newsApiService.topHeadlines({
            language: "en",
            q: search
        });
    }
}
