import { Component, OnInit } from '@angular/core'
import { MenuService } from 'src/app/services/menu'

@Component({
  selector: 'vb-menu-simply-pages',
  templateUrl: './menu-pages.component.html',
  styleUrls: ['./menu-pages.component.scss'],
})
export class MenuSimplyPagesComponent implements OnInit {
  menuData: any = []

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenuData().subscribe(menuData => (this.menuData = menuData))
  }
}
