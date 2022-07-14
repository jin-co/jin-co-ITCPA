import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './services/spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ITCPA';
  hideHeader: boolean = false;
  isLoading:boolean = false;   

  constructor(private router: Router, private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url == '/login' || event['url'] == '/signup') {
          this.hideHeader = true;
        } else {
          // console.log("NU")
          this.hideHeader = false;
        }
      }
    });

    this.spinnerService.getIsLoading().subscribe(result => {      
      this.isLoading = result      
    })    
  }
}
