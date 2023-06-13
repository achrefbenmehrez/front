import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-modifier-message',
  templateUrl: './modifier-message.component.html',
  styleUrls: ['./modifier-message.component.scss']
})
export class ModifierMessageComponent {
  public routes = routes;
  public content: string = '';

  constructor(private http: HttpClient, private router: Router, private ac: ActivatedRoute) { }

  ngOnInit() {
    this.http.get("http://localhost:8089/api/messages/" + this.ac.snapshot.params['id']).subscribe((res: any) => {
      this.content = res.content;
    });
  }

  modifierMessage() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const headers = new HttpHeaders({ Authorization: 'Bearer ' + token });
      this.http.put('http://localhost:8089/api/messages/update/' + this.ac.snapshot.params['id'], this.content, { headers }).subscribe(
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
