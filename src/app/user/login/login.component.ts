import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
import { UserModule } from '../user.module'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModule = new UserModule();
 

  constructor( private router: Router,private dataService: DataService,private userService:UserService) {}
  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user).subscribe(result => {
      console.log('User logged in successfully!', result);
    });
  }
  // navigateToContent(){
  //   this.router.navigate(['/content']);
  // }
  // login(username: string, password: string): void {
  //   if (this.authService.login(username, password)) {
    
  //         this.router.navigate(['/content']);
          
        
      
  //     // Redirect or perform actions upon successful login
  //   } else {
  //     // Handle login failure
  //      this.router.navigate(['/login']);
  //   }
   //}
    
  
    
  
  
}
