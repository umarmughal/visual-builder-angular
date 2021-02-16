import { Component } from '@angular/core'

@Component({
  selector: 'vb-antd-drawer-example',
  templateUrl: './drawer.component.html',
})
export class KitAntdDrawerExampleComponent {
  visible = false

  open(): void {
    this.visible = true
  }

  close(): void {
    this.visible = false
  }
}
