import { Directive, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[phoneValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PhoneValidatorDirective), multi: true }
  ]
})
export class PhoneValidatorDirective implements Validator {

  constructor() { }

  validate(control: FormControl): { [key: string]: any } | null {
    const phoneValue = control.value;
    if (phoneValue && typeof phoneValue === 'string' && phoneValue.length === 10) {
      const regex = /^09\d{8}$/;
      return regex.test(control.value) ? null : { invalidPhoneNumber: true };
    }
    return { invalidPhoneNumber: true };
  }
}