import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/services/core/globals.service';

@Component({
  selector: 'app-app-index',
  templateUrl: './app-index.component.html',
  styleUrls: ['./app-index.component.css']
})
export class AppIndexComponent implements OnInit {

  constructor(
    public _globals: GlobalsService,
  ) {
    this._globals.title  = this._globals.router.url.split('/')[1]
  }

  ngOnInit(): void {
  }

}
