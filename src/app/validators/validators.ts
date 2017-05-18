/*
  Custom validators to use everywhere.
*/
import { FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
/**
 * SINGLE FIELD VALIDATORS for email
 */
export function validateEmail(control: FormControl) {
    let EMAIL_REGEXP = new RegExp('^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$')
    return EMAIL_REGEXP.test(control.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
}

// FORM GROUP VALIDATORS
export function matchingPasswords(control:AbstractControl) {
        const password = control.get('password');
        const confirmPassword = control.get('confirm');
        if(!password || !confirmPassword ) return null;
        return password.value === confirmPassword.value ? null : { mismatchedPasswords: true}
}


// /* checkbox must be checked */
// export function mustBeChecked(control: FormControl): {[key: string]: string} {
//     if (!control.value) {
//       return {mustBeCheckedError: 'Must be checked'};
//     } else {
//       return null;
//     }
//   }