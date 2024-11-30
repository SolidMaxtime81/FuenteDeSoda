import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faBoxesStacked, faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'frnd-menu',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  faHome = faHome;
  faBoxesStacked = faBoxesStacked;
  faChartPie = faChartPie;
}
