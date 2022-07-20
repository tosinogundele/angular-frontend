import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showsplash: boolean = true
  title = 'admin';

  ngOnInit() {
    setTimeout(() => {
      this.showsplash = false
    }, 1000)
    
  }
}

