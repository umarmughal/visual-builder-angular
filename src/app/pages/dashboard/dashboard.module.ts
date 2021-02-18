import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { DashboardRouterModule } from './dashboard-routing.module'
import { WidgetsComponentsModule } from 'src/app/@vb/widgets/widgets-components.module'
import { FormsModule } from '@angular/forms'
import { ChartistModule } from 'ng-chartist'
import { NgApexchartsModule } from 'ng-apexcharts'

// dashboard
import { DashboardAlphaComponent } from './alpha/alpha.component'
import { DashboardBetaComponent } from './beta/beta.component'
import { DashboardCryptoComponent } from './crypto/crypto.component'
import { DashboardGammaComponent } from './gamma/gamma.component'

const COMPONENTS = [
  DashboardAlphaComponent,
  DashboardBetaComponent,
  DashboardCryptoComponent,
  DashboardGammaComponent,
]

@NgModule({
  imports: [
    SharedModule,
    DashboardRouterModule,
    WidgetsComponentsModule,
    FormsModule,
    ChartistModule,
    NgApexchartsModule,
  ],
  declarations: [...COMPONENTS],
})
export class DashboardModule {}
