import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// dashboard
import { DashboardAlphaComponent } from './alpha/alpha.component'
import { DashboardBetaComponent } from './beta/beta.component'
import { DashboardCryptoComponent } from './crypto/crypto.component'
import { DashboardGammaComponent } from './gamma/gamma.component'

const routes: Routes = [
  {
    path: 'alpha',
    component: DashboardAlphaComponent,
    data: { title: 'Dashboard Alpha' },
  },
  {
    path: 'beta',
    component: DashboardBetaComponent,
    data: { title: 'Dashboard Beta' },
  },
  {
    path: 'crypto',
    component: DashboardCryptoComponent,
    data: { title: 'Dashboard Crypto' },
  },
  {
    path: 'gamma',
    component: DashboardGammaComponent,
    data: { title: 'Dashboard Gamma' },
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class DashboardRouterModule {}
