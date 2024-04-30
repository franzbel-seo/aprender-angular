import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
}
