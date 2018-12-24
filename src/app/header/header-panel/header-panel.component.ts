import { Component, Input, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { fromEvent } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LocationSectionService } from './location-section.service';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'ms-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class HeaderPanelComponent implements OnInit {

  // test
  @Input('items') items;
  @Input('img') img;
  @Input('companyName') companyName;

  selectedItem;
  hoveredItem;

  isScrolled;
  activeTranslation;
  allLanguages;
  languageSettingsVisible = false;

  currentUrl;

  constructor(private router: Router,
              private location: Location,
              private route: ActivatedRoute,
              private locationService: LocationSectionService,
              private translateService: TranslateService) {

    this.router.events
      .pipe(distinctUntilChanged())
      .subscribe(
      event => {
        const {url} = (event as any);
        if (url) {
          const urlString = url.substring(1);
          this.currentUrl = this.items.find(item => item.link === urlString) || this.items[0];
        }
      }
    );
  }

  ngOnInit() {
    this.activeTranslation = `assets/img/flags/${this.translateService.currentLang}.png`;
    this.allLanguages = this.translateService.langs;

    this.translateService.onLangChange.subscribe(
      () => {
        const activeLang = this.translateService.currentLang;
        this.activeTranslation = `assets/img/flags/${activeLang}.png`;
      }
    );

    fromEvent(window, 'scroll')
      .subscribe(e => {
        // const offsetHeight = this.isScrolled ? 0 : 55;
        if (document.documentElement.scrollTop < 55) {
          this.isScrolled = false;
        } else {
          this.isScrolled = true;
        }
      });
  }

  openLanguages() {
    this.languageSettingsVisible = !this.languageSettingsVisible;
  }

  selectItem(item) {
    this.locationChange(item.link);
  }

  setLanguage(language) {
    this.translateService.use(language);
    this.languageSettingsVisible = false;
  }

  resetHoverItem() {
    this.hoveredItem = null;
  }

  hoverItem(item) {
    this.hoveredItem = item;
  }

  hasUnderline(item) {
    return this.selectedItem === item || this.hoveredItem === item;
  }

  getLanguageImage(language) {
    return `assets/img/flags/${language}.png`;
  }

  private locationChange(location) {
    this.locationService.currentLocation.next({location, scroll: true});
    this.location.go(location);
  }
}
