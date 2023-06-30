import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editreturn',
  templateUrl: './editreturn.component.html',
  styleUrls: ['./editreturn.component.scss']
})
export class EditreturnComponent implements OnInit{
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
    data:any;
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
          this.data=data
          console.log(this.user.email)
        },
  
        (error) => {
          // Handle error
          console.error('Failed to fetch product:', error);
          // Display error message or perform other error handling as needed
        }
      );
    }
    edit() {
      const dataa = {
        quantite: this.quantite,
        commentaire: this.commentaire,
        motifRetour: this.motifRetour
      };
    
      this.http.put(`http://localhost:8089/api/Retours/edit/${this.ac.snapshot.params['id']}`, dataa)
        .subscribe(response => {
          // Handle the response here
        });
    }

 opsubmit() {
  this.edit();
  this.router.navigate(['/return/traitees']);
}

ngOnInit(): void {
  this.details();
}

}

