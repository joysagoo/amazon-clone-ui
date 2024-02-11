import { Component } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
``
@Component({
  selector: 'amazon-clone-ui-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) 
    {
      this.loginForm = this.formBuilder.group({
        emailId: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })

      if(this.authService.isUserLoggedIn()){
        // router.navigate(['/home']);
      }
    }

  login(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        // this.router.navigate(['/home']);
        console.log('inside imaginative home component')
      },
      error: (err) => {
        console.log(err);
      } 
    })
  }
  
  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
