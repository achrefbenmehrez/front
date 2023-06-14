import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { routes, DataService, pageSelection } from 'src/app/core/core.index';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.scss']
})
export class MesCommandesComponent {
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
  //** / pagination variables

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private sweetlalert: SweetalertService,
    private router: Router,
    private http: HttpClient
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.productList) {
        this.getTableData();
        this.pageSize = res.pageSize;
      }
    });
  }

  ngOnInit() {
    this.getTableData();
  }

  private getTableData(pageOption: pageSelection = { skip: 0, limit: 10 }): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      this.http.get('http://localhost:8089/api/commandes/by-client/' + decodedToken.sub).subscribe(
        (data: any) => {
          this.tableData = data;
          this.dataSource = new MatTableDataSource(this.tableData);
        },
        error => {
          console.error('Error fetching user data:', error);
        }
      );
    }
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
}
