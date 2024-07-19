import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
import { UserModule } from '../user.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserModule = new UserModule();
  
  constructor(private router: Router,private dataService: DataService,private userService:UserService) { }
  
  // navigateToLogin() {
  //   // Navigate to '/content' route
  //   this.router.navigate(['/login']);
  // }
  register(): void {
    this.userService.register(this.user).subscribe(result => {
      console.log('User registered successfully!', result);
    });
  }
  ngOnInit(): void {
    console.log("TEST");
    
  }
  // submitForm() {
  //   // Handle form submission logic, e.g., save to service or local storage
  //   // For demonstration, just navigate to the next page with query params
  //   this.dataService.setFname(this.fname);
  //   this.router.navigate(['/login'], {
  //     queryParams: {
        
  //       email: this.formData.email,
  //       password:this.formData.password
  //     }
  //   });
  // }
}
  


