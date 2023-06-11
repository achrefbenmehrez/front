import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements OnInit {
  firstName = '';
  lastName = '';
  remise = '';
  password = 'password';
  show = false;

  email = '';
  role = '';
  profileImage: any;
  selectedFile: any;
  emailadd1 = '';
  emailadd2 = '';
  emailadd3 = '';

  public routes = routes;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  onFileSelected(event: any) {
    if (event.target) {
      this.profileImage = event.target.files[0];
    }
  }
  onSelect(event: any) {
    console.log(event);
    this.selectedFile = event.addedFiles[0];
    this.profileImage = this.selectedFile;
    console.log('selected file: ' + this.selectedFile.name);
  }

  onRemove(event: any) {
    console.log(event);
    const removedFile = this.profileImage.splice(0, 1)[0];
    console.log('removed file: ' + removedFile.name);
  }

  onSubmit() {
    // Create form data object
    const formData = new FormData();
    formData.append('firstname', this.firstName);
    formData.append('lastname', this.lastName);
    if (!this.remise) {
      this.remise = '0';
    }
    formData.append('remise', parseFloat(this.remise).toFixed(2));

    formData.append('password', this.password);
    formData.append('email', this.email);
    formData.append('role', this.role);
    if (this.profileImage) {
      formData.append('file', this.profileImage);
    }
    formData.append('emailadd', this.emailadd1);
    formData.append('emailadd', this.emailadd2);
    formData.append('emailadd', this.emailadd3);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    // Call the API to add the user
    this.http
      .post('http://localhost:8089/api/users/add', formData, {
        headers: headers,
      })
      .subscribe(
        (data) => {
          // Handle success
          console.log('User added successfully:', data);
          this.router.navigate(['/people/user-list']);
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
