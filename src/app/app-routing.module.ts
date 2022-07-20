import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { SidebarLayoutComponent } from './components/layouts/sidebar-layout/sidebar-layout.component';
import { AuthGuardsService } from './guards/app.guard';

const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./pages/apps/apps.module').then( m => m.AppsModule), component: SidebarLayoutComponent, 
    // canLoad: [AuthGuardsService] 
  },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthModule), component: AuthLayoutComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
