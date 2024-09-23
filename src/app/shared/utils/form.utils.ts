import { FormGroup } from "@angular/forms";

export const validateForm = (form: FormGroup, includeNestedFields = false) => {
  Object.values(form.controls).forEach((control) => {
    if (control.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: !includeNestedFields });
    }
  });
};
