import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  styleUrls: ['./signup.component.css'],
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  @Output() public toggleModalEvent: EventEmitter<any> = new EventEmitter<
    any
  >();

  public signupForm;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      passwordGroup: this.fb.group(
        {
          password: ['', Validators.required],
          rePassword: ['', Validators.required]
        },
        {
          validator: this.confirmPassword
        }
      )
    });
  }

  public ngOnInit(): void {}

  public signupFormSubmit(event: any): void {
    event.preventDefault();
    console.log(this.signupForm.value);
  }

  public toggleModal(): void {
    this.toggleModalEvent.emit();
  }
  public confirmPassword(group: FormGroup): any {
    console.log(group);
    const pass = group.get('password').value;
    const rePassword = group.get('rePassword').value;
    return pass === rePassword ? null : { notSame: true };
  }
}
