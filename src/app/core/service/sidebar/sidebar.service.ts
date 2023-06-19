import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../../core.index';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarData: Array<any> = []; // Initialize with an empty array

  constructor() {
    this.initializeSidebarData();
    this.initializeSideBarPosition();
    this.initializeMobileSidebar();
  }

  private initializeSidebarData(): void {
    const token = localStorage.getItem('token');
    if (token !== null) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userRole = decodedToken.roles[0];
      if (userRole === 'ROLE_ADMIN') {
        this.sidebarData = [
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
                ],
              },
              {
                tittle: 'Commandes',
                hasSubRoute: true,
                icon: 'assets/img/icons/sales1.svg',
                showSubRoute: false,
                route: routes.commande,
                activeRoute: this.getActiveRoute(routes.salesList),
                subRoutes: [
                  {
                    tittle: 'Liste des commandes',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.listeCommandes,
                    activeRoute: this.getActiveRoute(routes.listeCommandes),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Commandes a traiter',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.commandesNonTraites,
                    activeRoute: this.getActiveRoute(routes.commandesNonTraites),
                    subRoutes: [],
                  },
                ],
              },
              {
                tittle: 'Réclamations',
                hasSubRoute: true,
                icon: 'assets/img/icons/settings.svg',
                showSubRoute: false,
                route: routes.settings,
                activeRoute: this.getActiveRoute(routes.reclamations),
                subRoutes: [
                  {
                    tittle: 'Liste des réclamations non traitées',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.listeReclamationsNonTraites,
                    activeRoute: this.getActiveRoute(routes.listeReclamationsNonTraites),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Liste des réclamations traitées',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.listeReclamationsTraites,
                    activeRoute: this.getActiveRoute(routes.listeReclamationsTraites),
                    subRoutes: [],
                  }
                ],
              },
              {
                tittle: 'Messages',
                hasSubRoute: true,
                icon: 'assets/img/icons/transfer1.svg',
                showSubRoute: false,
                route: routes.messages,
                activeRoute: this.getActiveRoute(routes.messages),
                subRoutes: [
                  {
                    tittle: 'Liste messages',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.listeMessages,
                    activeRoute: this.getActiveRoute(routes.listeMessages),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Ajouter un message',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.ajouterMessage,
                    activeRoute: this.getActiveRoute(routes.ajouterMessage),
                    subRoutes: [],
                  },
                ],
              },
              {
                tittle: 'Annonces',
                hasSubRoute: false,
                icon: 'assets/img/icons/mail.svg',
                showSubRoute: false,
                route: routes.annonces,
                activeRoute: this.getActiveRoute(routes.annonces),
                subRoutes: [],
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
                    tittle: 'Liste des retours non traités',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.retournontraitees,
                    activeRoute: this.getActiveRoute(routes.retournontraitees),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Liste des retours traités',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.retourtraitees,
                    activeRoute: this.getActiveRoute(routes.retourtraitees),
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
              }
            ],
          },
        ];
      } else {
        this.sidebarData = [
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
                tittle: 'Commandes',
                hasSubRoute: true,
                icon: 'assets/img/icons/product.svg',
                showSubRoute: false,
                route: routes.commande,
                activeRoute: this.getActiveRoute(routes.commande),
                subRoutes: [
                  {
                    tittle: 'Saisie commande',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.saisieCommande,
                    activeRoute: this.getActiveRoute(routes.saisieCommande),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Importer commande',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.importCommande,
                    activeRoute: this.getActiveRoute(routes.importCommande),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Mes Commandes',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.mesCommandes,
                    activeRoute: this.getActiveRoute(routes.mesCommandes),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Mes Livraisons',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.mesLivraisons,
                    activeRoute: this.getActiveRoute(routes.mesLivraisons),
                    subRoutes: [],
                  },
                ],
              },
              {
                tittle: 'Retour/Reclamation',
                hasSubRoute: true,
                icon: 'assets/img/icons/return1.svg',
                showSubRoute: false,
                route: routes.return,
                activeRoute: this.getActiveRoute(routes.return),
                subRoutes: [
                  {
                    tittle: 'Mes retours',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.salesReturnList,
                    activeRoute: this.getActiveRoute(routes.salesReturnList),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Mes réclamations',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.mesReclamations,
                    activeRoute: this.getActiveRoute(routes.mesReclamations),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Nouveau retour',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.createSalesReturn,
                    activeRoute: this.getActiveRoute(routes.createSalesReturn),
                    subRoutes: [],
                  },
                  {
                    tittle: 'Nouvelle réclamation',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.createReclamation,
                    activeRoute: this.getActiveRoute(routes.createReclamation),
                    subRoutes: [],
                  },
                ],
              },
              {
                tittle: 'Contact',
                hasSubRoute: true,
                icon: 'assets/img/icons/settings.svg',
                showSubRoute: false,
                route: routes.settings,
                activeRoute: this.getActiveRoute(routes.contact),
                subRoutes: [
                  {
                    tittle: 'Contact',
                    hasSubRoute: false,
                    icon: '',
                    showSubRoute: false,
                    route: routes.contact,
                    activeRoute: this.getActiveRoute(routes.contact),
                    subRoutes: [],
                  },
                ],
              },
            ],
          },
        ];
      }
      this.getSideBarData.next(this.sidebarData);
    }
  }

  private initializeSideBarPosition(): void {
    const storedSidebarPosition = localStorage.getItem('sideBarPosition');
    if (storedSidebarPosition === 'expand') {
      this.expandSideBar.next(true);
    } else {
      this.expandSideBar.next(false);
    }
    this.sideBarPosition.next(storedSidebarPosition || 'false');
  }

  private initializeMobileSidebar(): void {
    const isMobileSidebar = localStorage.getItem('isMobileSidebar');
    this.toggleMobileSideBar.next(isMobileSidebar === 'true');
  }

  public sideBarPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sideBarPosition') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    localStorage.getItem('isMobileSidebar') === 'true'
  );

  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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

  public getSideBarData: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(this.sidebarData);

  getActiveRoute(route: string): string {
    const url = route.split('/');
    return url[url.length - 1];
  }
}
