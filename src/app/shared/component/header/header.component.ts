import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

export interface Lang {
  value: string;
  viewValue: string;
}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  langs: Lang[] = [
    { value: 'fr', viewValue: 'FRANCAIS' },
    { value: 'en', viewValue: 'ENGLISH' }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('fr');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
