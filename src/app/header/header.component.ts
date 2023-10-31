import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'laliguria-frontend';

  currentRoute: string = '';

  constructor(private router: Router) { }

  routes: any = [
    {link: 'home', name: 'Inicio'},
    {link: 'warehouse', name: 'Almacén'},
    {link: 'production', name: 'Producción'},
    {link: 'sales', name: 'Ventas'}
  ]
}
