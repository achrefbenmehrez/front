import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { routes, DataService, pageSelection } from 'src/app/core/core.index';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-saisie-commande',
  templateUrl: './saisie-commande.component.html',
  styleUrls: ['./saisie-commande.component.scss']
})
export class SaisieCommandeComponent {
  initChecked: boolean = false;
  products: any[] = [];
  public tableData: Array<any> = [];
  public routes = routes;
  // pagination variables
  public serialNumberArray: Array<any> = [];
  showFilter: boolean = false;
  dataSource!: MatTableDataSource<any>;
  public searchDataValue = '';
  public prixTotal = 0;
  //** / pagination variables

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private sweetlalert: SweetalertService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getTableData();
  }

  private getTableData(pageOption: pageSelection = { skip: 0, limit: 10 }): void {
    this.http.get('http://localhost:8089/api/products/all').subscribe(
      (data: any) => {
        // Update the tableData property with the retrieved data
        this.tableData = data;
        // Create a new MatTableDataSource with the updated tableData
        this.dataSource = new MatTableDataSource(this.tableData);
      },
      error => {
        // Handle any errors that may occur during the HTTP request
        console.error('Error fetching user data:', error);
      }
    );
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f: any) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f: any) => {
        f.isSelected = false;
      });
    }
  }

  // Other methods and component code...

  searchData(searchDataValue: string) {
    // Implementation for searchData method
  }

  updatePrixTotal() {
    this.prixTotal = this.tableData.reduce((total, product, remise) => {
      if (remise != 0)
        return total + (product.quantity || 0) * product.prix;
      else
        return total + (product.quantity || 0) * product.prix * (1 - product.remise / 100);
    }, 0);
  }

  commander() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      this.http.post('http://localhost:8089/api/commandes/' + decodedToken.sub, this.tableData
        .filter((product: any) => product.quantity > 0)
        .map((product: any) => product.id)
      ).subscribe(
        (data: any) => {
          this.router.navigate([this.routes.mesCommandes]);
        },
        error => {
          // Handle any errors that may occur during the HTTP request
          console.error('Error fetching products data:', error);
        }
      );
    }
  }
}
