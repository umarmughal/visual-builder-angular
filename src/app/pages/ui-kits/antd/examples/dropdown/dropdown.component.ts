import { Component } from '@angular/core'
import {
  NzPlacementType,
  NzContextMenuService,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown'

@Component({
  selector: 'vb-antd-dropdown-example',
  templateUrl: './dropdown.component.html',
})
export class KitAntdDropdownExampleComponent {
  listOfPosition: NzPlacementType[] = [
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
    'topLeft',
    'topCenter',
    'topRight',
  ]

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu)
  }

  closeMenu(): void {
    this.nzContextMenuService.close()
  }

  constructor(private nzContextMenuService: NzContextMenuService) {}
}
