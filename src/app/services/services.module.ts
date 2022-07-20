import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteReuseStrategy } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalsService } from './core/globals.service';
import { StorageServices } from './core/storage-services.service';

import { InstitutionService } from './features/institution/institution.service';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorsHandler } from '../interceptors/errors-handler';


export const providers: Array<any> = [
  NgxSpinnerService,
  GlobalsService, StorageServices,
  InstitutionService,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorsHandler, multi: true }
  // { provide: RouteReuseStrategy }
]

@NgModule({
	imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CommonModule,
	],
  providers: providers
})
export class ServicesModule { }
