import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core';
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
  public pageSize: number = 10;
  public serialNumberArray: Array<any> = [];
  public totalData: any = 0;
  showFilter: boolean = false;
  dataSource!: MatTableDataSource<any>;
  public searchDataValue = '';
  purchase: any;
  //** / pagination variables

  constructor(
    private pagination: PaginationService,
    private sweetlalert: SweetalertService,
    private router: Router,
    private http: HttpClient,
    private renderer: Renderer2

  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.addPurchase) {
        this.getTableData();
        this.pageSize = res.pageSize;
      }
    });
  }

  deleteBtn(id: number) {
    this.sweetlalert.deleteBtn();
    this.http.delete(`http://localhost:8089/api/auth/delete/${id}`).subscribe(
      (data) => {
        // Handle success
        console.log('Product deleted successfully:', data);
        // Refresh user list or perform other operations as needed
        this.getTableData();
      },

      (error) => {
        // Handle error
        console.error('Failed to delete product:', error);
        // Display error message or perform other error handling as needed
      }
    );
  }

  ngOnInit() {
    this.getTableData();
  }

  private getTableData(pageOption: pageSelection = { skip: 0, limit: 10 }): void {
    this.http.get('http://localhost:8089/api/products/all').subscribe(
      (data: any) => {
        // Update the tableData property with the retrieved data
        this.tableData = data;
        this.purchase = data; // Assign the fetched data to the purchase property

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

  // ...

  // ...

  // ...
  // ...

  calculateMontantApresRemise(purchase: any) {
    const price = parseFloat(purchase.prix) || 0;
    const discount = parseFloat(purchase.remise) || 0;
    const quantiteTotale = parseFloat(purchase.quantiteTotale) || 0;

    const amountAfterDiscount = price * quantiteTotale * (1 - discount / 100);
    purchase.montantApresRemise = amountAfterDiscount.toFixed(2);
  }

  calculateQuantities() {
    for (const purchase of this.tableData) {
      const carton = parseFloat(purchase.carton) || 0;
      const vrac = parseFloat(purchase.vrac) || 0;
      const unitPerCaisse = parseFloat(purchase.uniteParCaisse) || 1;

      const totalQuantity = carton * unitPerCaisse + vrac;
      purchase.quantiteTotale = totalQuantity.toFixed(2);

      this.calculateMontantApresRemise(purchase);
    }
  }

  cartonCalculate(event: any, purchase: any) {
    this.calculateQuantities();
  }

  vracCalculate(event: any, purchase: any) {
    this.calculateQuantities();
  }

  // ...
  // ...

  calculateTotalAmount(): number {
    let totalAmount = 0;
    for (const purchase of this.tableData) {
      totalAmount += Number(purchase.montantApresRemise) || 0;
    }
    return totalAmount;
  }

  // ...
  changeQuantity(purchase: any, field: string, increment: number) {
    if (field === 'carton') {
      purchase.carton += increment;
      this.cartonCalculate(null, purchase); // Call the cartonCalculate method
    } else if (field === 'vrac') {
      purchase.vrac += increment;
      this.vracCalculate(null, purchase); // Call the vracCalculate method
    }
  }

  commander() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const selectedProducts = this.tableData.filter(purchase => purchase.quantiteTotale > 0);
      const productsWithQuantity = selectedProducts.map(purchase => {
        return {
          productId: purchase.id,
          quantity: purchase.quantiteTotale
        };
      });

      this.http.post('http://localhost:8089/api/commandes/' + decodedToken.sub, productsWithQuantity
        .filter((product: any) => product.quantity > 0)
        .map((product: any) => {
          return {
            productId: product.productId,
            quantity: product.quantity
          };
        })
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
