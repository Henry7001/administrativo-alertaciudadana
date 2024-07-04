import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ecuadorianCedulaValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cedula = control.value;
    if (!cedula || cedula.length !== 10) {
      return { invalidCedula: true };
    }

    const digito_region = parseInt(cedula.substring(0, 2), 10);

    if (digito_region < 1 || digito_region > 24) {
      return { invalidCedula: true };
    }

    const ultimo_digito = parseInt(cedula.substring(9, 10), 10);
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 9; i++) {
      const digito = parseInt(cedula.charAt(i), 10);

      if (i % 2 === 0) { // impares
        let result = digito * 2;
        if (result > 9) result -= 9;
        impares += result;
      } else { // pares
        pares += digito;
      }
    }

    const suma_total = pares + impares;
    const decena = Math.ceil(suma_total / 10) * 10;
    const digito_validador = decena - suma_total;

    if (digito_validador !== ultimo_digito) {
      return { invalidCedula: true };
    }

    return null;
  };
}
