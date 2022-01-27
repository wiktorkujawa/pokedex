import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
    key: 'name',
    type: 'input',
    templateOptions: {
      label: 'Name',
      placeholder: 'Enter name',
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
  },
  {
    key: 'password2',
    type: 'password',
    templateOptions: {
      label: 'Password',
      placeholder: 'Confirm password',
      required: true,
    }
  }
 ];

 onSubmit(model:any) {
   this.message$ = this.userService.register(model);
 }

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }

}
