import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import cssVars from 'css-vars-ponyfill';

import { CanopyModule } from 'canopy';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabStoryContentComponent } from './tab-story-content.component';
import { LgCarouselFocusDirective } from './carousel-focus.directive';
import { LgCarouselItemComponent } from 'projects/canopy/src/lib/carousel/carousel-item/carousel-item.component';
import { LgCarouselComponent } from 'projects/canopy/src/lib/carousel/carousel.component';

@NgModule({
  declarations: [AppComponent, TabStoryContentComponent, LgCarouselFocusDirective],
  imports: [AppRoutingModule, ReactiveFormsModule, BrowserModule, CanopyModule],
  providers: [LgCarouselItemComponent, LgCarouselComponent],
  bootstrap: [AppComponent],
  exports: [LgCarouselFocusDirective]
})
export class AppModule {
  constructor() {
    cssVars({ watch: true });
  }
}
