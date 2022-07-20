import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppIndexComponent } from './app-index/app-index.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'overview', component: AppIndexComponent },
  { path: 'transactions', component: AppIndexComponent },
  { path: 'customers', component: AppIndexComponent },
  { path: 'access', component: AppIndexComponent },
  { path: 'staffs', component: AppIndexComponent },
  { path: 'subscriptions', component: AppIndexComponent },
  { path: 'orders', component: AppIndexComponent },
  { path: 'invoices', component: AppIndexComponent },
  { path: 'reports', component: AppIndexComponent },
  { path: 'settings', component: AppIndexComponent },
  { path: 'profile', component: AppIndexComponent },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
