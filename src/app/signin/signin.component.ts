import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../_service/authentication.service';

import { from } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  styleUrls: ['./signin.component.css'],
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  @Output() public toggleModalEvent: EventEmitter<any> = new EventEmitter<
    any
  >();

  public signinForm;
  public toDisplayMesage = false;
  public msg = '';

  constructor(
    private fb: FormBuilder,
    private authentication: AuthenticationService
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  public ngOnInit(): void {}

  public toggleModal(): void {
    this.toggleModalEvent.emit();
  }

  public async signin(event: any): Promise<void> {
    event.preventDefault();
    if (this.signinForm.invalid) {
      return;
    }
    this.authentication
      .signIn(this.signinForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log('data', data);
          this.toggleModal();
          // Navigate to somewhere as needed.
        },
        (error) => {
          console.log('from error');
          // Does nothing b/c error will be dealt with globally
          this.msg = error.message || 'There was an Error.  Please try again.';
          this.toDisplayMesage = true;
        }
      );
  }

  public toggleMsg(): void {
    this.toDisplayMesage = !this.toDisplayMesage;
    this.msg = '';
  }
}
