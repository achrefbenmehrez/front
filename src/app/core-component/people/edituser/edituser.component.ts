import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
})
export class EdituserComponent implements OnInit {
  password = 'password';
  show = false;
  id: number = 0;
  user: any;
  firstname = '';
  lastname = '';
  remise = '';
  email = '';
  role = '';
  emailadd1 = '';
  emailadd2 = '';
  emailadd3 = '';
  profileImage: any;
  selectedFile: any;

  constructor(
    private _router: Router,
    private http: HttpClient,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.getuserByid(this.id).subscribe((data: any) => {
      this.user = data;
      this.firstname = this.user.firstname; // Assurez-vous que les propriétés sont correctement définies
      this.lastname = this.user.lastname;
      this.remise = this.user.remise;
      this.email = this.user.email;
      this.role = this.user.role;
      this.emailadd1 = this.user.emailadd[0];
      this.emailadd2 = this.user.emailadd[1];
      this.emailadd3 = this.user.emailadd[2];

      console.log(this.user);
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

  OnSubmit(id: number) {
    // convert to boolean

    this.updateUser(this.id).subscribe((newuser: any) => {
      this.user = newuser;
      this._router.navigate(['/people/user-list']);
    });
  }
  onFileSelected(event: any) {
    if (event.target) {
      this.user.profileImage = event.target.files[0];
    }
  }
  onSelect(event: any) {
    console.log(event);
    this.selectedFile = event.addedFiles[0];
    this.user.profileImage = this.selectedFile;
    console.log('selected file: ' + this.selectedFile.name);
  }

  onRemove(event: any) {
    console.log(event);
    const removedFile = this.profileImage.splice(0, 1)[0];
    console.log('removed file: ' + removedFile.name);
  }
  getuserByid(id: number) {
    return this.http.get('http://localhost:8089/api/users/' + id);
  }
  updateUser(id: number): Observable<any> {
    const formData = new FormData();

    if (this.user.password) formData.append('password', this.user.password);
    if (this.user.firstname) formData.append('firstname', this.user.firstname);
    if (this.user.lastname) formData.append('lastname', this.user.lastname);
    if (this.user.email) formData.append('email', this.user.email);

    if (this.user.remise) formData.append('remise', this.user.remise);
    if (this.user.role) formData.append('role', this.user.role);
    if (this.user.emailadd[0])
      formData.append('emailadd1', this.user.emailadd[0]);
    if (this.user.emailadd[1])
      formData.append('emailadd2', this.user.emailadd[1]);
    if (this.user.emailadd[2])
      formData.append('emailadd3', this.user.emailadd[2]);
    if (this.user.profileImage)
      formData.set('file', this.user.profileImage, this.user.profileImage.name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.put(
      'http://localhost:8089/api/users/update/' + id,
      formData,
      {
        headers: headers,
      }
    );
  }
}
