import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-signup',
  styleUrls: ['./signup.component.css'],
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  @Output() public toggleModalEvent: EventEmitter<any> = new EventEmitter<
    any
  >();
  public msg: string;
  public toDisplayMesage = false;
  public signupForm;

  @ViewChild('messageButton') public messageBtn: ElementRef;
  // Use to set Focus onto OK button.  NOT WORKING
  public setFocus(): void {
    console.log(this.messageBtn.nativeElement);
    this.messageBtn.nativeElement.focus();
  }
  constructor(private fb: FormBuilder, private userService: UserService) {
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

  public async signupFormSubmit(event: any): Promise<void> {
    event.preventDefault();
    console.log(this.signupForm.value);
    if (this.signupForm.invalid) {
      return;
    }
    // create new variable that only have one password
    const data = {
      ...this.signupForm.value,
      password: this.signupForm.value.passwordGroup.password
    };
    delete data.passwordGroup;
    try {
      const res = await this.userService.register(data);
      console.log(res);
      if (res.status === 200) {
        // Display success modal with an OK button to dismiss
        this.toDisplayMesage = true;
        this.msg = res.data.msg;
      }
    } catch (err) {
      console.log(err);
      // Display modal with message

      this.toDisplayMesage = true;
      this.msg = err.msg;
    }
  }

  public toggleModal(): void {
    this.toggleModalEvent.emit();
  }

  public toggleMessageModal(): void {
    this.toDisplayMesage = !this.toDisplayMesage;
    this.msg = '';
    this.toggleModal();
  }
  public confirmPassword(group: FormGroup): any {
    console.log(group);
    const pass = group.get('password').value;
    const rePassword = group.get('rePassword').value;
    return pass === rePassword ? null : { notSame: true };
  }
}
