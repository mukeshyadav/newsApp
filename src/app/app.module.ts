import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgnewsModule } from "angular-news-api";
import { NewsApiKeyConfig } from "angular-news-api";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewsDetailComponent } from "./news-detail/news-detail.component";
import { NewsComponent } from "./news/news.component";

const newsApiConfig: NewsApiKeyConfig = {
    key: "b42226f158ad4258b7ded412b29e7bd6"
};

@NgModule({
    declarations: [AppComponent, NewsDetailComponent, NewsComponent],
    imports: [
        NgnewsModule.forRoot(newsApiConfig),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
