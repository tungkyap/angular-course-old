import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestingAppComponent } from './testing-app/testing-app.component';
import { SpyAnchorDirective } from './testing-app/spy-anchor.directive';
import { SpyAreaForDirective } from './testing-app/spy-area-for.directive';
import { SpyScrollContainerDirective } from './testing-app/spy-scroll-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestingAppComponent,
    SpyAnchorDirective,
    SpyAreaForDirective,
    SpyScrollContainerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
