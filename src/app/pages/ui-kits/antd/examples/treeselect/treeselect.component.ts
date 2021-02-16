import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-antd-treeselect-example',
  templateUrl: './treeselect.component.html',
})
export class KitAntdTreeSelectExampleComponent implements OnInit {
  expandKeys = ['100', '1001']
  value: string
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true },
          ],
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }],
        },
      ],
    },
  ]

  onChange($event: string): void {
    console.log($event)
  }

  ngOnInit(): void {
    // mock async
    setTimeout(() => {
      this.value = '1001'
    }, 1000)
  }
}
