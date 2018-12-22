import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'user-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // constructor(private breakpointObserver: BreakpointObserver, public routers:Router, public drawer :MatDrawer) {}
  constructor(private breakpointObserver: BreakpointObserver, public routers:Router ) {}
  ngOnInit() {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    onLogOut(){
     this.routers.navigate(['/']) ;
    }
 

}
