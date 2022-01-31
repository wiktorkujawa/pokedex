import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({});
  message$!: Observable<any>;
  model = { 
    name: '',
    email: '',
    password: '',
    password2: ''
  };
 fields: FormlyFieldConfig[] = [
   {
     key: 'email',
     type: 'input',
     templateOptions: {
       label: 'Email address',
       placeholder: 'Enter email',
       required: true,
     }
   },
    {
      key: 'password',
      type: 'password',
      templateOptions: {
        label: 'Password',
        placeholder: 'Enter password',
        required: true,
      }
    }
 ];

  onSubmit(model:any) {
    this.message$ = this.userService.login(model)
  }
  constructor( private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userService.getUser().pipe(take(1)).subscribe( user => {
      if(user){
        this.router.navigate(['/'])
      }
    })
}

}
