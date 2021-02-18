import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'vb-menu-flyout',
  templateUrl: './menu-flyout.component.html',
})
export class MenuFlyoutComponent {
  settings: any

  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.settings = state
    })
  }
}
