import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import cssVars from 'css-vars-ponyfill';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoryContentComponent } from './story-content.component';
import {
  LgAccordionModule,
  LgAlertModule,
  lgBrandIconCalendar,
  LgBrandIconModule,
  LgBrandIconRegistry,
  LgBreadcrumbModule,
  LgButtonModule,
  LgCardModule,
  LgCarouselModule,
  LgCheckboxGroupModule,
  LgDataPointModule,
  LgDateFieldModule,
  LgDetailsModule,
  LgFooterModule,
  LgGridModule,
  LgHeaderModule,
  LgHeadingModule,
  LgHeroModule,
  LgHintModule,
  lgIconAdd,
  lgIconArrowDown,
  lgIconClose,
  LgIconModule,
  LgIconRegistry,
  lgIconRepeat,
  lgIconSearch,
  lgIconSecureMessaging,
  LgInputModule,
  LgMarginModule,
  LgPaddingModule,
  LgPageModule,
  LgPrefixModule,
  LgPrimaryMessageModule,
  LgPromoCardModule,
  LgQuickActionModule,
  LgRadioModule,
  LgSelectModule,
  LgSeparatorModule, LgSideNavModule,
  LgSortCodeModule,
  LgSpinnerModule,
  LgSuffixModule,
  LgTabsModule,
  LgToggleModule,
} from 'canopy';

@NgModule({
  declarations: [AppComponent, StoryContentComponent],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    LgAccordionModule,
    LgAlertModule,
    LgBrandIconModule,
    LgBreadcrumbModule,
    LgButtonModule,
    LgCardModule,
    LgCarouselModule,
    LgCheckboxGroupModule,
    LgDataPointModule,
    LgDateFieldModule,
    LgDetailsModule,
    LgFooterModule,
    LgGridModule,
    LgHeaderModule,
    LgHeadingModule,
    LgHeroModule,
    LgHintModule,
    LgIconModule,
    LgInputModule,
    LgMarginModule,
    LgPaddingModule,
    LgPageModule,
    LgPrefixModule,
    LgPrimaryMessageModule,
    LgPromoCardModule,
    LgQuickActionModule,
    LgRadioModule,
    LgSelectModule,
    LgSeparatorModule,
    LgSideNavModule,
    LgSortCodeModule,
    LgSpinnerModule,
    LgSuffixModule,
    LgTabsModule,
    LgToggleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private iconRegistry: LgIconRegistry,
    private brandIconRegistry: LgBrandIconRegistry,
  ) {
    cssVars({ watch: true });

    this.iconRegistry.registerIcons([
      lgIconAdd,
      lgIconArrowDown,
      lgIconClose,
      lgIconSearch,
      lgIconRepeat,
      lgIconSecureMessaging
    ]);
    this.brandIconRegistry.registerBrandIcon([
      lgBrandIconCalendar,
    ]);
  }
}
