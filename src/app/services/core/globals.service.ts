import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { StorageServices } from './storage-services.service';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $ :any;

@Injectable({
  providedIn: 'root'
})
export class GlobalsService 
{
  loading: boolean = false;
  loader: any;
  url:string;
  title:string = 'overview';

  constructor(
    public spinner: NgxSpinnerService,
    public router: Router, 
    private location: Location, 
    public storage: StorageServices
  ) {
    this.url = this.location.path();
  }

  navigate(path: string, subpage: boolean = true) {
    this.router.navigate([path], { replaceUrl: subpage });
  }
}
