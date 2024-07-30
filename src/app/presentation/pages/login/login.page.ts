import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ERROR_LOGIN_MESSAGE, SUCCESS_LOGIN_MESSAGE } from 'src/app/core/constants/form-messages.constants';
import { FormMessage } from 'src/app/domain/interfaces/form-message.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [MessageService]
})
export class LoginPage implements OnInit {

  error: string = '';
  loginForm!: FormGroup;
  loading = false;
  returnUrl = '';
  submitted = false;

  get f() { return this.loginForm.controls; }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log('enviado', this.loginForm);
    const condition = this.submitted && this.loginForm.status === 'VALID';
    return condition ? this.validForm() : this.show(ERROR_LOGIN_MESSAGE);
  }

  validForm() {
    this.show(SUCCESS_LOGIN_MESSAGE);
    this.router.navigateByUrl('tabs-teacher');
  }

  show(message: FormMessage) {
    this.messageService.add({ severity: message.SEVERITY, summary: message.SUMMARY, detail: message.DETAIL });
  }


}
