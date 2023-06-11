import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../../core.index';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {
    if (localStorage.getItem('sideBarPosition') === 'expand') {
      this.expandSideBar.next(true);
    } else {
      this.expandSideBar.next(false);
    }
  }

  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<any> = new BehaviorSubject<any>(
    localStorage.getItem('isMobileSidebar') || false
  );

  public expandSideBar: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  public switchSideMenuPosition(): void {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }

  public switchMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next(false);
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next(true);
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }

  private sidebarData: Array<any> = [
    {
      tittle: 'Menu Principal',
      hasSubRoute: true,
      icon: 'assets/img/icons/menu-icon.svg',
      showSubRoute: false,
      route: '',
      activeRoute: '',
      subRoutes: [
        {
          tittle: 'Tableau de bord',
          hasSubRoute: false,
          icon: 'assets/img/icons/dashboard.svg',
          showSubRoute: false,
          route: routes.dashboard,
          activeRoute: this.getActiveRoute(routes.dashboard),
          subRoutes: [],
        },
        {
          tittle: 'Produit',
          hasSubRoute: true,
          icon: 'assets/img/icons/product.svg',
          showSubRoute: false,
          route: routes.product,
          activeRoute: this.getActiveRoute(routes.product),
          subRoutes: [
            {
              tittle: 'Liste des produits',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.productList,
              activeRoute: this.getActiveRoute(routes.productList),
              subRoutes: [],
            },
            {
              tittle: 'Ajouter un produit',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.addProduct,
              activeRoute: this.getActiveRoute(routes.addProduct),
              subRoutes: [],
            },
         
            
          ],
        },

        
        {
          tittle: 'Utilisateurs',
          hasSubRoute: true,
          icon: 'assets/img/icons/users1.svg',
          showSubRoute: false,
          route: routes.people,
          activeRoute: this.getActiveRoute(routes.people),
          subRoutes: [
            {
              tittle: 'Liste des utilisateurs',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.userList,
              activeRoute: this.getActiveRoute(routes.userList),
              subRoutes: [],
            },
            {
              tittle: 'Ajouter un utilisateur',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.addUser,
              activeRoute: this.getActiveRoute(routes.addUser),
              subRoutes: [],
            },
            {
              tittle: 'Liste des clients',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.customerList,
              activeRoute: this.getActiveRoute(routes.customerList),
              subRoutes: [],
            },
            {
              tittle: 'Ajouter un client',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.addCustomer,
              activeRoute: this.getActiveRoute(routes.addCustomer),
              subRoutes: [],
            },
            {
              tittle: 'Liste des fournisseurs',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.supplierList,
              activeRoute: this.getActiveRoute(routes.supplierList),
              subRoutes: [],
            },
            {
              tittle: 'Ajouter un fournisseur',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.addSupplier,
              activeRoute: this.getActiveRoute(routes.addSupplier),
              subRoutes: [],
            },
            
          ],
        },

        
        {
          tittle: 'Ventes',
          hasSubRoute: true,
          icon: 'assets/img/icons/sales1.svg',
          showSubRoute: false,
          route: routes.salesList,
          activeRoute: this.getActiveRoute(routes.salesList),
          subRoutes: [
            {
              tittle: 'Liste des ventes',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.salesList,
              activeRoute: this.getActiveRoute(routes.salesList),
              subRoutes: [],
            },
            
            {
              tittle: 'Nouvelle vente',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.addSales,
              activeRoute: this.getActiveRoute(routes.addSales),
              subRoutes: [],
            },
            
          ],
        },

        {
          tittle: 'Achats',
          hasSubRoute: true,
          icon: 'assets/img/icons/purchase1.svg',
          showSubRoute: false,
          route: routes.purchase,
          activeRoute: this.getActiveRoute(routes.purchase),
          subRoutes: [
            {
              tittle: 'Liste des achats',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.purchaseList,
              activeRoute: this.getActiveRoute(routes.purchaseList),
              subRoutes: [],
            },
            {
              tittle: 'Ajouter une commande',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.addPurchase,
              activeRoute: this.getActiveRoute(routes.addPurchase),
              subRoutes: [],
            },
            {
              tittle: 'Mes Livraisions',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.livraison,
              activeRoute: this.getActiveRoute(routes.livraison),
              subRoutes: [],
            },
            {
              tittle: 'Importer commande',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.importProduct,
              activeRoute: this.getActiveRoute(routes.importProduct),
              subRoutes: [],
            },
            
          ],
        },

        {
          tittle: 'Dépenses',
          hasSubRoute: true,
          icon: 'assets/img/icons/expense1.svg',
          showSubRoute: false,
          route: routes.expense,
          activeRoute: this.getActiveRoute(routes.expense),
          subRoutes: [
            {
              tittle: 'Liste des dépenses',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.expenseList,
              activeRoute: this.getActiveRoute(routes.expenseList),
              subRoutes: [],
            },
            {
              tittle: 'Ajouter une dépense',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.createExpense,
              activeRoute: this.getActiveRoute(routes.createExpense),
              subRoutes: [],
            },
            
          ],
        },

       

       
        {
          tittle: 'Retour',
          hasSubRoute: true,
          icon: 'assets/img/icons/return1.svg',
          showSubRoute: false,
          route: routes.return,
          activeRoute: this.getActiveRoute(routes.return),
          subRoutes: [
            {
              tittle: 'Liste des retours de ventes',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.salesReturnList,
              activeRoute: this.getActiveRoute(routes.salesReturnList),
              subRoutes: [],
            },
            {
              tittle: 'Ajouter un retour de vente',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.createSalesReturn,
              activeRoute: this.getActiveRoute(routes.createSalesReturn),
              subRoutes: [],
            },
           
          ],
        },
        {
          tittle: 'Paramètres',
          hasSubRoute: true,
          icon: 'assets/img/icons/settings.svg',
          showSubRoute: false,
          route: routes.settings,
          activeRoute: this.getActiveRoute(routes.settings),
          subRoutes: [
            {
              tittle: 'Permissions',
              hasSubRoute: false,
              icon: '',
              showSubRoute: false,
              route: routes.groupSettings,
              activeRoute: this.getActiveRoute(routes.groupSettings),
              subRoutes: [],
            },
            
          ],
        },
    


        
        
      ],
    },

    

    

    

    

    
  ];

  public getSideBarData: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(this.sidebarData);

  getActiveRoute(route: string): string {
    let url = route.split('/');
    return url[url.length - 1];
  }
}
