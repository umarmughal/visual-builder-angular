import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared.module'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { ChartistModule } from 'ng-chartist'
import { ChartModule } from 'angular2-chartjs'
import { UsMapModule } from 'angular-us-map'

import { VbGeneral1Component } from './WidgetsGeneral/1/1.component'
import { VbGeneral1v1Component } from './WidgetsGeneral/1v1/1v1.component'
import { VbGeneral2Component } from './WidgetsGeneral/2/2.component'
import { VbGeneral2v1Component } from './WidgetsGeneral/2v1/2v1.component'
import { VbGeneral2v2Component } from './WidgetsGeneral/2v2/2v2.component'
import { VbGeneral2v3Component } from './WidgetsGeneral/2v3/2v3.component'
import { VbGeneral2v4Component } from './WidgetsGeneral/2v4/2v4.component'
import { VbGeneral3Component } from './WidgetsGeneral/3/3.component'
import { VbGeneral3v1Component } from './WidgetsGeneral/3v1/3v1.component'
import { VbGeneral4Component } from './WidgetsGeneral/4/4.component'
import { VbGeneral5Component } from './WidgetsGeneral/5/5.component'
import { VbGeneral5v1Component } from './WidgetsGeneral/5v1/5v1.component'
import { VbGeneral6Component } from './WidgetsGeneral/6/6.component'
import { VbGeneral6v1Component } from './WidgetsGeneral/6v1/6v1.component'
import { VbGeneral7Component } from './WidgetsGeneral/7/7.component'
import { VbGeneral8Component } from './WidgetsGeneral/8/8.component'
import { VbGeneral9Component } from './WidgetsGeneral/9/9.component'
import { VbGeneral10Component } from './WidgetsGeneral/10/10.component'
import { VbGeneral10v1Component } from './WidgetsGeneral/10v1/10v1.component'
import { VbGeneral11Component } from './WidgetsGeneral/11/11.component'
import { VbGeneral11v1Component } from './WidgetsGeneral/11v1/11v1.component'
import { VbGeneral12Component } from './WidgetsGeneral/12/12.component'
import { VbGeneral12v1Component } from './WidgetsGeneral/12v1/12v1.component'
import { VbGeneral12v2Component } from './WidgetsGeneral/12v2/12v2.component'
import { VbGeneral12v3Component } from './WidgetsGeneral/12v3/12v3.component'
import { VbGeneral13Component } from './WidgetsGeneral/13/13.component'
import { VbGeneral13v1Component } from './WidgetsGeneral/13v1/13v1.component'
import { VbGeneral14Component } from './WidgetsGeneral/14/14.component'
import { VbGeneral15Component } from './WidgetsGeneral/15/15.component'
import { VbGeneral16Component } from './WidgetsGeneral/16/16.component'
import { VbGeneral17Component } from './WidgetsGeneral/17/17.component'
import { VbGeneral17v1Component } from './WidgetsGeneral/17v1/17v1.component'
import { VbGeneral17v2Component } from './WidgetsGeneral/17v2/17v2.component'
import { VbGeneral18Component } from './WidgetsGeneral/18/18.component'
import { VbGeneral18v1Component } from './WidgetsGeneral/18v1/18v1.component'
import { VbGeneral19Component } from './WidgetsGeneral/19/19.component'
import { VbGeneral20Component } from './WidgetsGeneral/20/20.component'
import { VbGeneral20v1Component } from './WidgetsGeneral/20v1/20v1.component'
import { VbGeneral21Component } from './WidgetsGeneral/21/21.component'
import { VbGeneral21v1Component } from './WidgetsGeneral/21v1/21v1.component'
import { VbGeneral21v2Component } from './WidgetsGeneral/21v2/21v2.component'
import { VbGeneral21v3Component } from './WidgetsGeneral/21v3/21v3.component'
import { VbGeneral22Component } from './WidgetsGeneral/22/22.component'
import { VbGeneral23Component } from './WidgetsGeneral/23/23.component'
import { VbGeneral23v1Component } from './WidgetsGeneral/23v1/23v1.component'
import { VbGeneral24Component } from './WidgetsGeneral/24/24.component'
import { VbGeneral24v1Component } from './WidgetsGeneral/24v1/24v1.component'
import { VbGeneral25Component } from './WidgetsGeneral/25/25.component'
import { VbGeneral25v1Component } from './WidgetsGeneral/25v1/25v1.component'
import { VbGeneral26Component } from './WidgetsGeneral/26/26.component'

import { VbList1Component } from './WidgetsLists/1/1.component'
import { VbList2Component } from './WidgetsLists/2/2.component'
import { VbList3Component } from './WidgetsLists/3/3.component'
import { VbList4Component } from './WidgetsLists/4/4.component'
import { VbList5Component } from './WidgetsLists/5/5.component'
import { VbList6Component } from './WidgetsLists/6/6.component'
import { VbList7Component } from './WidgetsLists/7/7.component'
import { VbList8Component } from './WidgetsLists/8/8.component'
import { VbList9Component } from './WidgetsLists/9/9.component'
import { VbList10Component } from './WidgetsLists/10/10.component'
import { VbList11Component } from './WidgetsLists/11/11.component'
import { VbList12Component } from './WidgetsLists/12/12.component'
import { VbList13Component } from './WidgetsLists/13/13.component'
import { VbList14Component } from './WidgetsLists/14/14.component'
import { VbList15Component } from './WidgetsLists/15/15.component'
import { VbList16Component } from './WidgetsLists/16/16.component'
import { VbList17Component } from './WidgetsLists/17/17.component'
import { VbList18Component } from './WidgetsLists/18/18.component'
import { VbList19Component } from './WidgetsLists/19/19.component'
import { VbList20Component } from './WidgetsLists/20/20.component'
import { VbList21Component } from './WidgetsLists/21/21.component'
import { VbList21v1Component } from './WidgetsLists/21v1/21v1.component'
import { VbList21v2Component } from './WidgetsLists/21v2/21v2.component'

import { VbChart1Component } from './WidgetsCharts/1/1.component'
import { VbChart2Component } from './WidgetsCharts/2/2.component'
import { VbChart3Component } from './WidgetsCharts/3/3.component'
import { VbChart4Component } from './WidgetsCharts/4/4.component'
import { VbChart4v1Component } from './WidgetsCharts/4v1/4v1.component'
import { VbChart4v2Component } from './WidgetsCharts/4v2/4v2.component'
import { VbChart4v3Component } from './WidgetsCharts/4v3/4v3.component'
import { VbChart5Component } from './WidgetsCharts/5/5.component'
import { VbChart6Component } from './WidgetsCharts/6/6.component'
import { VbChart7Component } from './WidgetsCharts/7/7.component'
import { VbChart8Component } from './WidgetsCharts/8/8.component'
import { VbChart9Component } from './WidgetsCharts/9/9.component'
import { VbChart10Component } from './WidgetsCharts/10/10.component'
import { VbChart11Component } from './WidgetsCharts/11/11.component'
import { VbChart11v1Component } from './WidgetsCharts/11v1/11v1.component'
import { VbChart11v2Component } from './WidgetsCharts/11v2/11v2.component'
import { VbChart12Component } from './WidgetsCharts/12/12.component'
import { VbChart12v1Component } from './WidgetsCharts/12v1/12v1.component'
import { VbChart13Component } from './WidgetsCharts/13/13.component'
import { VbChart13v1Component } from './WidgetsCharts/13v1/13v1.component'
import { VbChart13v2Component } from './WidgetsCharts/13v2/13v2.component'

import { VbTable1Component } from './WidgetsTables/1/1.component'
import { VbTable2Component } from './WidgetsTables/2/2.component'
import { VbTable3Component } from './WidgetsTables/3/3.component'
import { VbTable4Component } from './WidgetsTables/4/4.component'
import { VbTable5Component } from './WidgetsTables/5/5.component'
import { VbTable6Component } from './WidgetsTables/6/6.component'
import { VbTable7Component } from './WidgetsTables/7/7.component'
import { VbTable8Component } from './WidgetsTables/8/8.component'

const COMPONENTS = [
  VbGeneral1Component,
  VbGeneral1v1Component,
  VbGeneral2Component,
  VbGeneral2v1Component,
  VbGeneral2v2Component,
  VbGeneral2v3Component,
  VbGeneral2v4Component,
  VbGeneral3Component,
  VbGeneral3v1Component,
  VbGeneral4Component,
  VbGeneral5Component,
  VbGeneral5v1Component,
  VbGeneral6Component,
  VbGeneral6v1Component,
  VbGeneral7Component,
  VbGeneral8Component,
  VbGeneral9Component,
  VbGeneral10Component,
  VbGeneral10v1Component,
  VbGeneral11Component,
  VbGeneral11v1Component,
  VbGeneral12Component,
  VbGeneral12v1Component,
  VbGeneral12v2Component,
  VbGeneral12v3Component,
  VbGeneral13Component,
  VbGeneral13v1Component,
  VbGeneral14Component,
  VbGeneral15Component,
  VbGeneral16Component,
  VbGeneral17Component,
  VbGeneral17v1Component,
  VbGeneral17v2Component,
  VbGeneral18Component,
  VbGeneral18v1Component,
  VbGeneral19Component,
  VbGeneral20Component,
  VbGeneral20v1Component,
  VbGeneral21Component,
  VbGeneral21v1Component,
  VbGeneral21v2Component,
  VbGeneral21v3Component,
  VbGeneral22Component,
  VbGeneral23Component,
  VbGeneral23v1Component,
  VbGeneral24Component,
  VbGeneral24v1Component,
  VbGeneral25Component,
  VbGeneral25v1Component,
  VbGeneral26Component,
  VbList1Component,
  VbList2Component,
  VbList3Component,
  VbList4Component,
  VbList5Component,
  VbList6Component,
  VbList7Component,
  VbList8Component,
  VbList9Component,
  VbList10Component,
  VbList11Component,
  VbList12Component,
  VbList13Component,
  VbList14Component,
  VbList15Component,
  VbList16Component,
  VbList17Component,
  VbList18Component,
  VbList19Component,
  VbList20Component,
  VbList21Component,
  VbList21v1Component,
  VbList21v2Component,
  VbChart1Component,
  VbChart2Component,
  VbChart3Component,
  VbChart4Component,
  VbChart4v1Component,
  VbChart4v2Component,
  VbChart4v3Component,
  VbChart5Component,
  VbChart6Component,
  VbChart7Component,
  VbChart8Component,
  VbChart9Component,
  VbChart10Component,
  VbChart11Component,
  VbChart11v1Component,
  VbChart11v2Component,
  VbChart12Component,
  VbChart12v1Component,
  VbChart13Component,
  VbChart13v1Component,
  VbChart13v2Component,
  VbTable1Component,
  VbTable2Component,
  VbTable3Component,
  VbTable4Component,
  VbTable5Component,
  VbTable6Component,
  VbTable7Component,
  VbTable8Component,
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    ChartistModule,
    ChartModule,
    CommonModule,
    UsMapModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class WidgetsComponentsModule {}
