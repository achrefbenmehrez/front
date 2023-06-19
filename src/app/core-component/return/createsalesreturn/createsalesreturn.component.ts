import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/core.index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createsalesreturn',
  templateUrl: './createsalesreturn.component.html',
  styleUrls: ['./createsalesreturn.component.scss'],
})
export class CreatesalesreturnComponent implements OnInit {
  public routes = routes;
  public tableData = [{}];

  id = '';
  user: any;
  dateCreation = '';
  traitee: boolean = false;
  validee: boolean = false;
  dateTraitement: any;
  numBL = '';
  numFactur = '';
  motifRetour = '';

  commentaire = '';
  quantite = 0;
  retour: any;
  dataSource: any;
  public tableDatat: any[] = [];
  public produits: any[] = [];
  allProducts: any[] = [];
  
  product: any;
  constructor(private http: HttpClient,private router:Router) {}

  date = new Date();
  ngOnInit(): void {
    this.getCommandesByClient();
  }
  delete(index: any) {
    this.tableData.splice(index, 1);
  }
  async opsubmit() {
   await this.createRetour(this.motifRetour, this.commentaire, this.product,this.quantite);
    this.router.navigateByUrl("/return/mesretours")
  }
  createRetour(motifRetour: string, commentaire: string, product: any,quantite:number) {
    console.log(this.product);
    const body = { motifRetour, commentaire, product,quantite };

    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      this.http
        .post<any>('http://localhost:8089/api/Retours/create', body, {
          headers,
        })
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/return/mesretours']);
        });
    }
  }
  getCommandesByClient() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      this.http
        .get(
          'http://localhost:8089/api/commandes/by-client/' + decodedToken.sub
        )
        .subscribe(
          (data: any) => {
            this.tableDatat = data;

            // Collect all the products from commandes

            for (const commande of this.tableDatat) {
              this.allProducts.push(...commande.produits);
            }
            console.log(this.allProducts);

            // Set up the MatTableDataSource with the collected products
            this.dataSource = new MatTableDataSource(this.allProducts);
          },
          (error) => {
            console.error('Error fetching user data:', error);
          }
        );
    }
  }
}
