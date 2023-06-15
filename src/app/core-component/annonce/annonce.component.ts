import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService, pageSelection, routes } from 'src/app/core/core.index';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent {
  titre = '';
  selectedFile: File | null = null;
  public routes = routes;
  initChecked: boolean = false;
  products: any[] = [];
  public tableData: Array<any> = [];
  // pagination variables
  public pageSize: number = 10;
  public serialNumberArray: Array<any> = [];
  public totalData: any = 0;
  showFilter: boolean = false;
  dataSource!: MatTableDataSource<any>;
  public searchDataValue = '';

  constructor(private http: HttpClient, private router: Router, private data: DataService,
    private pagination: PaginationService,
    private sweetlalert: SweetalertService) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.productList) {
        this.getTableData();
        this.pageSize = res.pageSize;
      }
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.getTableData();
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('titre', this.titre);
    if (this.selectedFile)
      formData.append('file', this.selectedFile);
    else
      console.log('No file selected')
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    this.http.post('http://localhost:8089/api/annonces', formData, { headers: headers }).subscribe(
      (data) => {
        console.log('Annonce added successfully:', data);
        this.router.navigate(['/annonces']);
      },
      (error) => {
        console.error('Failed to add annonce:', error);
      }
    );
  }

  deleteBtn(id: number) {
    this.sweetlalert.deleteBtn();
    this.http.delete(`http://localhost:8089/api/annnonces/${id}`).subscribe(
      (data) => {
        // Handle success
        console.log('Annonce deleted successfully:', data);
        // Refresh user list or perform other operations as needed
        this.getTableData();
      },

      (error) => {
        // Handle error
        console.error('Failed to delete annonce:', error);
        // Display error message or perform other error handling as needed
      }
    );
  }

  private getTableData(pageOption: pageSelection = { skip: 0, limit: 10 }): void {
    this.http.get('http://localhost:8089/api/annonces').subscribe(
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

  }
}
