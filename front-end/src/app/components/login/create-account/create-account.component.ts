import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/login/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public loginForm!: FormGroup;

  account = {
    email: '',
    password: '',
    keyword: ''
  };
  
  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required],
      keyword:['', Validators.required]
    });
    
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);
      
      if(result.sucess) {
        alert(result.message);
        this.router.navigate(['']);

      }
      else {
        alert(result.message);
      }
    }catch (error) {
      alert("Ocorreu um erro, tente novamente!");
    }
  }
}
