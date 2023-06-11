import { Component, OnInit } from '@angular/core';
import { SettingsService, SidebarService } from 'src/app/core/core.index';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-one',
  templateUrl: './sidebar-one.component.html',
  styleUrls: ['./sidebar-one.component.scss'],
})
export class SidebarOneComponent implements OnInit {
  public activePath: string = '';
  public sidebarData: Array<any> = [];
  public sideBarControls: any = [
    { value: false, key: 'product' },
    { value: false, key: 'sales' },
    { value: false, key: 'purchase' },
    { value: false, key: 'expense' },
    { value: false, key: 'quotation' },
    { value: false, key: 'transfer' },
    { value: false, key: 'return' },
    { value: false, key: 'people' },
    { value: false, key: 'places' },
    { value: false, key: 'errorpages' },
    { value: false, key: 'element' },
    { value: false, key: 'charts' },
    { value: false, key: 'icons' },
    { value: false, key: 'forms' },
    { value: false, key: 'table' },
    { value: false, key: 'application' },
    { value: false, key: 'report' },
    { value: false, key: 'users' },
    { value: false, key: 'settings' },
  ];
  constructor(private Router: Router, private sidebar: SidebarService) {
    this.activePath = this.Router.url.split('/')[1];
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.activePath = data.url.split('/')[1];
      }
    });

    this.sidebar.getSideBarData.subscribe((res: any) => {
      res.forEach((mainMenus: any) => {
        if (
          mainMenus.tittle == 'Users' ||
          mainMenus.tittle == 'Report' ||
          mainMenus.tittle == 'Application' ||
          mainMenus.tittle == 'Settings'
        ) {
          res[0].subRoutes.push(mainMenus);
        }
      });
      this.sidebarData = res;
    });
  }

  ngOnInit(): void {}

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  public showSubMenus(menu: any): void {
    this.sidebarData.map((res: any) => {
      res.subRoutes.map((resMenu: any) => {
        if (resMenu.tittle == menu.tittle) {
          resMenu.showSubRoute = !resMenu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
}
