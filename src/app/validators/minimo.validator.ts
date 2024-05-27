import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
export function minimoValidator(number: number): ValidatorFn{ // ------> Retornamos una función de validacion
  return (control: AbstractControl): ValidationErrors | null => {
    return (number > control.value) ? { 'minimo': { minimo: number, actual: control.value } } : null;
    // null -> Cuando el valor del control es valido

    // { minimo: {...}} -> Objeto error de validación cuando el valor del control es no valido. Usualmente este objeto
    //                     tiene una propiedad cuyo nombre es la validation key ('minimo') y cuyo valor es un diccionario
    //                     arbitrario de valores que podemos insertar en el mensaje de error.
  }
}
