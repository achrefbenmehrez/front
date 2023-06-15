import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/core.index';
import { CoreComponentComponent } from './core-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: CoreComponentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },

      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('./sales/sales.module').then((m) => m.SalesModule),
      },
      {
        path: 'purchase',
        loadChildren: () =>
          import('./purchase/purchase.module').then((m) => m.PurchaseModule),
      },
      {
        path: 'return',
        loadChildren: () =>
          import('./return/return.module').then((m) => m.ReturnModule),
      },
      {
        path: 'people',
        loadChildren: () =>
          import('./people/people.module').then((m) => m.PeopleModule),
      },
      {
        path: 'commandes',
        loadChildren: () =>
          import('./commande/commande.module').then((m) => m.CommandeModule),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./report/report.module').then((m) => m.ReportModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'activities',
        loadChildren: () =>
          import('./activities/activities.module').then(
            (m) => m.ActivitiesModule
          ),
      },
      {
        path: 'reclamations',
        loadChildren: () =>
          import('./reclamation/reclamation.module').then(
            (m) => m.ReclamationModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('./message/message.module').then(
            (m) => m.MessageModule
          ),
      },
      {
        path: 'annonces',
        loadChildren: () =>
          import('./annonce/annonce.module').then(
            (m) => m.AnnonceModule
          ),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreComponentRoutingModule { }
