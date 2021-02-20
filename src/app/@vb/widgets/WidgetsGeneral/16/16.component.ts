import { Component, Input, OnChanges } from '@angular/core'

@Component({
  selector: 'vb-widgets-general-16',
  templateUrl: './16.component.html',
  styleUrls: ['./16.component.scss'],
})
export class VbGeneral16Component implements OnChanges {
  @Input() isNew: boolean
  @Input() isFavourite: boolean
  @Input() image: string
  @Input() name: string
  @Input() price: string
  @Input() oldPrice: string
  setFavorite() {
    this.isFavourite = !this.isFavourite
  }
  ngOnChanges() {}
}
