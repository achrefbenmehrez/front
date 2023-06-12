import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  public routes = routes;
  productName: any;
  codePCT: any;
  codeTeriak: any;
  uniteParCaisse: any;
  prix: any;
  avecvrac: any;
  remise: any;
  carton: any;
  vrac: any;
  quantiteTotale: any;
  montantApresRemise: any;
  disponible: any;
  img: any;

  constructor(private http: HttpClient, private router: Router, private ac: ActivatedRoute) {
    this.http.get(`http://localhost:8089/api/products/find/${ac.snapshot.params['id']}`).subscribe((data: any) => {
      this.productName = data.productName;
      this.codePCT = data.codePCT;
      this.codeTeriak = data.codeTeriak;
      this.uniteParCaisse = data.uniteParCaisse;
      this.prix = data.prix;
      this.avecvrac = data.avecvrac;
      this.remise = data.remise;
      this.carton = data.carton;
      this.vrac = data.vrac;
      this.quantiteTotale = data.quantiteTotale;
      this.montantApresRemise = data.montantApresRemise;
      this.disponible = data.disponible;
      this.img = data.imgLink;
    });
  }

  onFileSelected(event: any): void {
    this.img = event.target.files[0];
  }

  editProduct() {
    // Create a new FormData instance
    const formData = new FormData();

    // Append the data to the FormData instance
    formData.append('id', this.ac.snapshot.params['id']);
    formData.append('productName', this.productName);
    formData.append('codePCT', this.codePCT);
    formData.append('codeTeriak', this.codeTeriak);
    formData.append('uniteParCaisse', this.uniteParCaisse.toString());
    formData.append('prix', this.prix.toString());
    formData.append('avecvrac', this.avecvrac);
    formData.append('remise', this.remise.toString());
    formData.append('carton', this.carton.toString());
    formData.append('vrac', this.vrac);
    formData.append('quantiteTotale', this.quantiteTotale.toString());
    formData.append('montantApresRemise', this.montantApresRemise.toString());
    formData.append('disponible', this.disponible.toString());

    // Append the image file to the FormData instance
    formData.append('imgLink', this.img);

    // Send the PUT request using HttpClient
    this.http.put('http://localhost:8089/api/products/update/' + this.ac.snapshot.params['id'], formData)
      .subscribe((data: any) => {
        this.router.navigate([this.routes.productList]);
      });
  }

  ngOnInit(): void {

  }

}
