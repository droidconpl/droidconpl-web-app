import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppMainModule} from './appMain/app-main.module';
import {AppFooterModule} from './appFooter/app-footer.module';
import {AboutModule} from './about/about.module';
import { NavigationModule } from './navigation/navigation.module';

import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppMainModule,
        AppFooterModule,
        AboutModule,
        NavigationModule,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}