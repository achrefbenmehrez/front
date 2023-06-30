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
  public tableData :any[]=[] ;

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
addline()
{
  const newLine = {
    motif: this.motifRetour,
    commentaire: this.commentaire,
    article: this.product,
    quantite: this.quantite
    // Add other properties as needed
  };
  this.tableData.push(newLine);
  this.motifRetour = '';
  this.commentaire = '';
  this.product = null;
  this.quantite = 0;

}
  date = new Date();
  ngOnInit(): void {
    this.getCommandesByClient();
  }
  delete(index: any) {
    this.tableData.splice(index, 1);
  }
  async opsubmit() {
   await this.createRetour();
    this.router.navigateByUrl("/return/mesretours")
  }
  createRetour() {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      for (const retour of this.tableData) {
        const body = {
          motifRetour: retour.motif,
          commentaire: retour.commentaire,
          product: retour.article,
          quantite: retour.quantite
        };
  
        this.http.post<any>('http://localhost:8089/api/Retours/create', body, { headers })
          .subscribe((data) => {
            console.log(data);
            // You can perform additional actions here, such as updating the UI or displaying a success message
          });
      }
      this.router.navigate(['/return/mesretours']);
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
