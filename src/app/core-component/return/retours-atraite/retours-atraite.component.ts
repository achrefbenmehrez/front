import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService, apiResultFormat, pageSelection, routes } from 'src/app/core/core.index';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-retours-atraite',
  templateUrl: './retours-atraite.component.html',
  styleUrls: ['./retours-atraite.component.scss']
})
export class RetoursATraiteComponent {
  initChecked: boolean = false;
  public tableData: Array<any> = [];
  public routes = routes;
  // pagination variables
  public pageSize: number = 10;
  public serialNumberArray: Array<any> = [];
  public totalData: any = 0;
  showFilter: boolean = false;
  dataSource!: MatTableDataSource<any>;
  public searchDataValue = '';
  retours: any[] = [];
  //** / pagination variables
  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private sweetalert: SweetalertService,
    private router: Router,
    private http: HttpClient
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.salesReturnList) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  getRetours() {
   
    
      this.http
        .get<any[]>('http://localhost:8089/api/Retours/traite')
        .subscribe(
          (retours) => {
            this.retours = retours;
            console.log(this.retours);
            // Handle successful response
          },
          (error) => {
            // Handle error
          }
        );
        console.log(this.retours)
    }
  
 
   
  

  date = new Date();
  ngOnInit(): void {
    this.getRetours();
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getSalesReturnList().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }
  
  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
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
  deleteBtn(id: string) {
    // Call the delete method of the ApiService with the URL and id
    this.sweetalert.deleteBtn();
    this.http
      .delete(`http://localhost:8089/api/Retours/delete/${id}`)
      .subscribe(
        (data) => {
          // Handle success
          console.log('Return deleted successfully:', data);
          this.router.navigateByUrl(routes.retourtraitees);
          // Refresh user list or perform other operations as needed
        },
        (error) => {
          // Handle error
          console.error('Failed to delete user:', error);
          // Display error message or perform other error handling as needed
        }
      );
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
}
