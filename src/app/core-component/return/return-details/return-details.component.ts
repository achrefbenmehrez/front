import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-return-details',
  templateUrl: './return-details.component.html',
  styleUrls: ['./return-details.component.scss']
})
export class ReturnDetailsComponent implements OnInit{
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
  user:any;
  traitee: any;
    validee:any;
    motifRetour: any;
    product:any;
    dateCreation: any;
    dateTraitement: any;
    numBL: any;
    numFactur: any;
    commentaire: any;
    quantite: any;
    usertrait:any;
  constructor(private http: HttpClient, private router: Router, private ac: ActivatedRoute) {
  }
  details(){
    this.http.get(`http://localhost:8089/api/Retours/details/${this.ac.snapshot.params['id']}`).subscribe(
      (data: any) => {
        this.user=data.user;
        this.traitee=data.traitee;
        this.validee=data.validee;
        this.motifRetour = data.motifRetour;
        this.product = data.product;
        this.dateCreation = data.dateCreation;
        this.dateTraitement = data.dateTraitement;
        this.numBL = data.numBL;
        this.quantite = data.quantite;
        this.commentaire = data.commentaire;
        this.numFactur=data.numFactur;
        this.usertrait=data.usertrait;
        console.log(this.motifRetour)
      },

      (error) => {
        // Handle error
        console.error('Failed to fetch product:', error);
        // Display error message or perform other error handling as needed
      }
    );
  }
  

  ngOnInit(): void { 
    
    this.details()
  
  }
}
