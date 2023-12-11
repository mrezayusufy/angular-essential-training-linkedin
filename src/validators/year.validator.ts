import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function yearValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const min: number = 1900;
        const max: number = 2024;
        const year = Number(control.value);

        if(year < min || year > max)
            return { invalidYear: true }
        return null
    }
}