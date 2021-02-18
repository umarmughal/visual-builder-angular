import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { select, Store } from '@ngrx/store'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'vb-menu-simply-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class MenuSimplyLanguageSwitcherComponent {
  language: string
  mapFlags = {
    en: '/assets/flags/en.svg',
    ru: '/assets/flags/ru.svg',
    fr: '/assets/flags/fr.svg',
    zh: '/assets/flags/zh.svg',
  }

  constructor(private translate: TranslateService, private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.language = state.locale.substr(0, 2)
    })
  }

  changeLanguage(locale: any) {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        locale,
      }),
    )
  }
}
