import { Component } from '@angular/core'

@Component({
  selector: 'vb-antd-timepicker-example',
  templateUrl: './timepicker.component.html',
})
export class KitAntdTimePickerExampleComponent {
  time: Date | null = null
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0)
}
