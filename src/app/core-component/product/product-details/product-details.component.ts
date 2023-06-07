import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
    },
    nav: true,
  };
  productName: any;
  codePCT: any;
  designation: any;
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
  constructor(private http: HttpClient, private router: Router, ac: ActivatedRoute) {
    this.http.get(`http://localhost:8089/api/products/find/${ac.snapshot.params['id']}`).subscribe(
      (data: any) => {
        this.productName = data.productName;
        this.codePCT = data.codePCT;
        this.designation = data.designation;
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
      },

      (error) => {
        // Handle error
        console.error('Failed to fetch product:', error);
        // Display error message or perform other error handling as needed
      }
    );
  }

  ngOnInit(): void { }

}
