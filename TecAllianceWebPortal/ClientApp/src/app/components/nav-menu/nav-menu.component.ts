import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isAuthorised : boolean;
  constructor(private authService: AuthenticationService,
    private cookieSerivce: CookieService) {
    this.isAuthorised = cookieSerivce.check("email");
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout() {
    this.authService.logout().subscribe();
    
  }
}

