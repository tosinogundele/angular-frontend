import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LoadingComponent } from './ui/loading/loading.component';
import { DatatablesComponent } from './ui/datatables/datatables.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component';
import { SidebarLayoutComponent } from './layouts/sidebar-layout/sidebar-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { ErrorComponent } from './ui/error/error.component';
import { NoContentComponent } from './ui/no-content/no-content.component';

import { LoginFormComponent } from './forms/login-form/login-form.component';

import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { AccountsPageComponent } from './pages/accounts-page/accounts-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { StaffsPageComponent } from './pages/staffs-page/staffs-page.component';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { InvoicePageComponent } from './pages/invoice-page/invoice-page.component';

export const component: Array<any> = [
	HeaderComponent, FooterComponent,
	SidebarLayoutComponent, AuthLayoutComponent,
	BreadcrumbComponent, LoadingComponent, DatatablesComponent, NoContentComponent, NavbarComponent, ErrorComponent,
	LoginFormComponent, 

	OverviewPageComponent, AccountsPageComponent, OrdersPageComponent, 
	SubscriptionPageComponent, StaffsPageComponent, ReportsPageComponent, 
	SettingsPageComponent, InvoicePageComponent
]

@NgModule({
	declarations: component,
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		NgxSpinnerModule,
		ReactiveFormsModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: component
})
export class ComponentsModule {}
