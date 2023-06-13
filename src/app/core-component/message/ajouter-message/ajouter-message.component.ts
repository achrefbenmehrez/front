import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-ajouter-message',
  templateUrl: './ajouter-message.component.html',
  styleUrls: ['./ajouter-message.component.scss']
})
export class AjouterMessageComponent {
  public routes = routes;
  public content: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  createMessage() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const headers = new HttpHeaders({ Authorization: 'Bearer ' + token });
      this.http.post('http://localhost:8089/api/messages', this.content, { headers }).subscribe(
        (data: any) => {
          this.router.navigate([this.routes.listeMessages]);
        },
        error => {
          console.error('Error fetching messages data:', error);
        }
      );
    }
  }
}
