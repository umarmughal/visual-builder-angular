import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared.module'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { ChartistModule } from 'ng-chartist'
import { ChartModule } from 'angular2-chartjs'
import { UsMapModule } from 'angular-us-map'

import { VbGeneral1Component } from './General/1/1.component'
import { VbGeneral1v1Component } from './General/1v1/1v1.component'
import { VbGeneral2Component } from './General/2/2.component'
import { VbGeneral2v1Component } from './General/2v1/2v1.component'
import { VbGeneral2v2Component } from './General/2v2/2v2.component'
import { VbGeneral2v3Component } from './General/2v3/2v3.component'
import { VbGeneral2v4Component } from './General/2v4/2v4.component'
import { VbGeneral3Component } from './General/3/3.component'
import { VbGeneral3v1Component } from './General/3v1/3v1.component'
import { VbGeneral4Component } from './General/4/4.component'
import { VbGeneral5Component } from './General/5/5.component'
import { VbGeneral5v1Component } from './General/5v1/5v1.component'
import { VbGeneral6Component } from './General/6/6.component'
import { VbGeneral6v1Component } from './General/6v1/6v1.component'
import { VbGeneral7Component } from './General/7/7.component'
import { VbGeneral8Component } from './General/8/8.component'
import { VbGeneral9Component } from './General/9/9.component'
import { VbGeneral10Component } from './General/10/10.component'
import { VbGeneral10v1Component } from './General/10v1/10v1.component'
import { VbGeneral11Component } from './General/11/11.component'
import { VbGeneral11v1Component } from './General/11v1/11v1.component'
import { VbGeneral12Component } from './General/12/12.component'
import { VbGeneral12v1Component } from './General/12v1/12v1.component'
import { VbGeneral12v2Component } from './General/12v2/12v2.component'
import { VbGeneral12v3Component } from './General/12v3/12v3.component'
import { VbGeneral13Component } from './General/13/13.component'
import { VbGeneral13v1Component } from './General/13v1/13v1.component'
import { VbGeneral14Component } from './General/14/14.component'
import { VbGeneral15Component } from './General/15/15.component'
import { VbGeneral16Component } from './General/16/16.component'
import { VbGeneral17Component } from './General/17/17.component'
import { VbGeneral17v1Component } from './General/17v1/17v1.component'
import { VbGeneral17v2Component } from './General/17v2/17v2.component'
import { VbGeneral18Component } from './General/18/18.component'
import { VbGeneral18v1Component } from './General/18v1/18v1.component'
import { VbGeneral19Component } from './General/19/19.component'
import { VbGeneral20Component } from './General/20/20.component'
import { VbGeneral20v1Component } from './General/20v1/20v1.component'
import { VbGeneral21Component } from './General/21/21.component'
import { VbGeneral21v1Component } from './General/21v1/21v1.component'
import { VbGeneral21v2Component } from './General/21v2/21v2.component'
import { VbGeneral21v3Component } from './General/21v3/21v3.component'
import { VbGeneral22Component } from './General/22/22.component'
import { VbGeneral23Component } from './General/23/23.component'
import { VbGeneral23v1Component } from './General/23v1/23v1.component'
import { VbGeneral24Component } from './General/24/24.component'
import { VbGeneral24v1Component } from './General/24v1/24v1.component'
import { VbGeneral27Component } from './General/27/27.component'
import { VbGeneral27v1Component } from './General/27v1/27v1.component'

import { VbList1Component } from './Lists/1/1.component'
import { VbList2Component } from './Lists/2/2.component'
import { VbList3Component } from './Lists/3/3.component'
import { VbList4Component } from './Lists/4/4.component'
import { VbList5Component } from './Lists/5/5.component'
import { VbList6Component } from './Lists/6/6.component'
import { VbList7Component } from './Lists/7/7.component'
import { VbList8Component } from './Lists/8/8.component'
import { VbList9Component } from './Lists/9/9.component'
import { VbList10Component } from './Lists/10/10.component'
import { VbList11Component } from './Lists/11/11.component'
import { VbList12Component } from './Lists/12/12.component'
import { VbList13Component } from './Lists/13/13.component'
import { VbList14Component } from './Lists/14/14.component'
import { VbList15Component } from './Lists/15/15.component'
import { VbList16Component } from './Lists/16/16.component'
import { VbList17Component } from './Lists/17/17.component'
import { VbList18Component } from './Lists/18/18.component'
import { VbList19Component } from './Lists/19/19.component'
import { VbList20Component } from './Lists/20/20.component'
import { VbList21Component } from './Lists/21/21.component'
import { VbList21v1Component } from './Lists/21v1/21v1.component'
import { VbList21v2Component } from './Lists/21v2/21v2.component'

import { VbChart1Component } from './Charts/1/1.component'
import { VbChart2Component } from './Charts/2/2.component'
import { VbChart3Component } from './Charts/3/3.component'
import { VbChart4Component } from './Charts/4/4.component'
import { VbChart4v1Component } from './Charts/4v1/4v1.component'
import { VbChart4v2Component } from './Charts/4v2/4v2.component'
import { VbChart4v3Component } from './Charts/4v3/4v3.component'
import { VbChart5Component } from './Charts/5/5.component'
import { VbChart6Component } from './Charts/6/6.component'
import { VbChart7Component } from './Charts/7/7.component'
import { VbChart8Component } from './Charts/8/8.component'
import { VbChart9Component } from './Charts/9/9.component'
import { VbChart10Component } from './Charts/10/10.component'
import { VbChart11Component } from './Charts/11/11.component'
import { VbChart11v1Component } from './Charts/11v1/11v1.component'
import { VbChart11v2Component } from './Charts/11v2/11v2.component'
import { VbChart12Component } from './Charts/12/12.component'
import { VbChart12v1Component } from './Charts/12v1/12v1.component'
import { VbChart13Component } from './Charts/13/13.component'
import { VbChart13v1Component } from './Charts/13v1/13v1.component'
import { VbChart13v2Component } from './Charts/13v2/13v2.component'

import { VbTable1Component } from './Tables/1/1.component'
import { VbTable2Component } from './Tables/2/2.component'
import { VbTable3Component } from './Tables/3/3.component'
import { VbTable4Component } from './Tables/4/4.component'
import { VbTable5Component } from './Tables/5/5.component'
import { VbTable6Component } from './Tables/6/6.component'
import { VbTable7Component } from './Tables/7/7.component'
import { VbTable8Component } from './Tables/8/8.component'

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
  VbGeneral27Component,
  VbGeneral27v1Component,
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
