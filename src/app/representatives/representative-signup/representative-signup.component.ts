import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { validateEmail, matchingPasswords } from '../../validators/validators';
import { PeopleService } from '../../services/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'representative-signup',
  templateUrl: './representative-signup.component.html',
  styleUrls: ['./representative-signup.component.scss']
})

export class RepresentativeSignupComponent implements OnInit {
  private isSuccess = false;
  private isError = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private peopleService: PeopleService) { }

  form: FormGroup;
  formErrors = {
    name: 'Name is required.',
    email: 'email is required.',
    password: 'password is required.',
    confirm: 'password is required.',
    avatar: 'avatar is required'
  };
  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 3 characters.',
      maxlength: 'Name can\'t be longer than 8 characters.'
    },
    email: {
      required: 'email is required.',
      validateEmail: 'must be a valid email'
    },
    confirm: {
      required: 'password is required.',
      minlength: 'password must be at least 6 characters.',
      mismatchedPasswords: 'confirm should match the password'
    },
    password: {
      required: 'password is required.',
      minlength: 'password must be at least 6 characters.',
      mismatchedPasswords: 'confirm should match the password'
    },
    avatar: {
      required: 'avatar url is required.',
      pattern: 'Must be a png or jpg url'
    }
  };



  ngOnInit() {
    // build the data model for our form
    this.buildForm();
  }

  /**
   * build the initial form
   */
  buildForm() {
    // build our form
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.maxLength(6), Validators.required]],
      email: ['', [Validators.required, validateEmail]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirm: ['', [Validators.minLength(6), Validators.required]],
      avatar: ['', [Validators.required, Validators.pattern('.*\/.*.(png|jpg)')]],
      region: ['']
    }, { validator: matchingPasswords });

    // watch for changes and validate
    this.form.valueChanges.subscribe(data => this.validateForm());
  }

  /**
   * validate the entire form and alert with the right message
   */
  validateForm() {
    for (let field in this.formErrors) {
      // clear that input field errors
      this.formErrors[field] = '';

      // grab an input field by name
      let input = this.form.get(field);

      if (input.invalid && input.dirty) {
        // figure out the type of error
        // loop over the formErrors field names
        for (let error in input.errors) {
          // assign that type of error message to a variable
          this.formErrors[field] = this.validationMessages[field][error];
        }
      }
    }
  }


  processForm() {
    this.peopleService.adduser(this.form.value).subscribe(
      data => {
        this.isSuccess = true;
        window.setTimeout(() => this.router.navigate(['Login']), 1000);
      },
      (err) => {
        this.isError = true;
        console.log(err)
      }
    );
  }
}