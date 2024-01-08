import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  formularioLog : FormGroup = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(8)]],
    pass: ['', [Validators.required, Validators.minLength(7)]]
  });

  constructor(private fb: FormBuilder,
    private router : Router,
    private authService : AuthService) {}

    login(){
      console.log(this.formularioLog.value);
      console.log(this.formularioLog.valid);
      this.router.navigateByUrl('/dashboard');
    }

}
