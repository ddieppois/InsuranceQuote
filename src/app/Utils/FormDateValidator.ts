import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dateBeforeToday(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const inputDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (inputDate >= today) {
      // if the input date is today or in the future, return an error
      return { 'dateBeforeToday': { value } };
    }

    // Otherwise, the date is valid (before today)
    return null;
  };
}
