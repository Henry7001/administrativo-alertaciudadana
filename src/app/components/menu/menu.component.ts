import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  routerService: Router;

  constructor(router:Router) { 
    this.routerService = router;
   }

  public menuItems = [
    {
      label: 'Página principal',
      link: '/',
      role: ['administrador', 'secretaria', 'financiero'],
      class: []
    },
    {
      label: 'Inicio de Sesión',
      link: '/login',
      role: ['guest'],
      class: []
    },
    {
      label: 'Administración de Usuarios',
      link: '/Usuarios',
      role: ['administrador'],
      class: []
    },
    {
      label: 'Editor de Menús',
      link: '/EditMenu',
      role: ['administrador'],
      class: []
    }
  ];

  public concatenateClasses(menuItem: any): string {
    if(this.routerService.url == menuItem.link){
      return menuItem.class.join(' ') + ' activa';
    }
    return menuItem.class.join(' ');
  }

}
