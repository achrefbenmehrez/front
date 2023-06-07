import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  firstName = '';
  lastName = '';
  userName = '';
  password = 'password';
  show = false;
  phone = '';
  email = '';
  role = '';
  profileImage :any;


  public routes = routes;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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

  onFileChange(event: any) {
    // Handle file change event and update userImage property
    const file = event.target.files[0];
    
  }

  onSubmit() {
    // Create form data object
    const formData = new FormData();
    formData.append('firstname', this.firstName);
    formData.append('lastname', this.lastName);
    formData.append('username', this.userName);
    formData.append('password', this.password);
    formData.append('email', this.email);
    formData.append('role', this.role);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    // Call the API to add the user
    this.http.post('http://localhost:8089/api/users/add', formData,{headers:headers}).subscribe(
      (data) => {
        // Handle success
        console.log('User added successfully:', data);
        // Refresh user list or perform other operations as needed
      },
      (error) => {
        // Handle error
        console.error('Failed to add user:', error);
        // Display error message or perform other error handling as needed
      }
    );
  }

}