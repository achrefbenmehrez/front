import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-create-reclamation',
  templateUrl: './create-reclamation.component.html',
  styleUrls: ['./create-reclamation.component.scss']
})
export class CreateReclamationComponent {
  public routes = routes;
  public description: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  createReclamation() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const headers = new HttpHeaders({ Authorization: 'Bearer ' + token });
      this.http.post('http://localhost:8089/api/reclamations?userEmail=' + decodedToken.sub, {
        "description": this.description
      }, { headers }).subscribe(
        (data: any) => {
          this.router.navigate([this.routes.mesReclamations]);
        },
        error => {
          console.error('Error fetching reclamations data:', error);
        }
      );
    }
  }
}
