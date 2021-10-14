import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/login/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  login = {
    email: '',
    password: ''
  }

  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });

  }

  async onSubmit() {
    
    try {
      const result = await this.accountService.login(this.login);
      
      if(result.auth){
        alert('Login efetuado com sucesso!');
        this.router.navigate(['']);
      }
      else{
        if(result.valid === 'user'){
          alert('Usuário não encontrado!');
        }
        else {
          alert('Senha inválida!');
        }
      }
    }catch (error) {
      console.error(error);
    }
  }
}
