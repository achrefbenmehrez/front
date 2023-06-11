import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { routes } from 'src/app/core/helpers/routes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  codePCT = '';
  designation = '';
  uniteParCaisse = '';
  prix = '';
  remise = '';
  carton = '';
  vrac = '';
  quantiteTotale = '';
  montantApresRemise = '';
  disponible = '';
  productName = '';
  description = '';
  public routes = routes;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const product = {
      codePCT: this.codePCT,
      designation: this.designation,
      prix: this.prix,
      remise: this.remise,
      carton: this.carton,
      vrac: this.vrac,
      quantiteTotale: this.quantiteTotale,
      montantApresRemise: this.montantApresRemise,
      disponible: this.disponible,
      productName: this.productName,
      description: this.description
      
    };

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    this.http.post('http://localhost:8089/api/auth/addproduct', product, {headers: headers}).subscribe(
      (data) => {
        console.log('Product added successfully:', data);
      },
      (error) => {
        console.error('Failed to add product:', error);
      }
    );
  }

}
