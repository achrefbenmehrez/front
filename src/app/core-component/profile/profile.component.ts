import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  password = 'password';
  show = false;

  constructor(private http: HttpClient, private webStorage: WebstorgeService) {}
  userrr: any;
  ngOnInit(): void {
    this.getUserByToken().subscribe((user: any) => {
      this.userrr = user;
      console.log(this.userrr);
    });
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  getUserByToken(): Observable<any> {
    return this.http.get<any>('http://localhost:8089/api/users/profile');
  }
  updateprofileUser() {
    this.updateyserByToken(this.userrr).subscribe((newuser: any) => {
      this.userrr = newuser;
      this.webStorage.Logout();
    });
  }

  updateyserByToken(user: any): Observable<any> {
    const formData = new FormData();

    if (user.password) formData.append('password', user.password);
    if (user.firstname) formData.append('firstname', user.firstname);
    if (user.lastname) formData.append('lastname', user.lastname);
    if (user.emailadd[0]) formData.append('emailadd1', user.emailadd[0]);
    if (user.emailadd[1]) formData.append('emailadd2', user.emailadd[1]);
    if (user.emailadd[2]) formData.append('emailadd3', user.emailadd[2]);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.put(
      'http://localhost:8089/api/users/updateProfile',
      formData,
      {
        headers: headers,
      }
    );
  }
}
