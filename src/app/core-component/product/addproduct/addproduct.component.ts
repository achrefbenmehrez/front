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
  avecvrac = '';
  vrac = '';
  quantiteTotale = '';
  montantApresRemise = '';
  disponible = '';
  productName = '';
  description = '';
  img: File = new File([], '');
  public routes = routes;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('codePCT', this.codePCT);
    formData.append('designation', this.designation);
    formData.append('uniteParCaisse', this.uniteParCaisse.toString());
    formData.append('prix', this.prix.toString());
    formData.append('productName', this.productName);
    formData.append('avecvrac', this.avecvrac);
    formData.append('remise', this.remise.toString());
    formData.append('carton', this.carton.toString());
    formData.append('vrac', this.vrac);
    formData.append('quantiteTotale', this.quantiteTotale.toString());
    formData.append('montantApresRemise', this.montantApresRemise.toString());
    formData.append('disponible', this.disponible.toString());
    formData.append('img', this.img);

    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    this.http.post('http://localhost:8089/api/products/add', formData, { headers: headers }).subscribe(
      (data) => {
        console.log('Product added successfully:', data);
      },
      (error) => {
        console.error('Failed to add product:', error);
      }
    );
  }

}
