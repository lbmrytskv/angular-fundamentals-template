import { Directive } from "@angular/core";

@Directive({
    selector: '[emailValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidatorDirective,
        multi: true,
      },
    ],
})
export class EmailValidatorDirective implements Validator {
    // Add your code here
    validate(control: any): any {
        const emailValue = control.value;
        if (emailValue && !emailValue.includes('@')) {
            return { 'email': true };
        }
        return null;
    }
    
}


