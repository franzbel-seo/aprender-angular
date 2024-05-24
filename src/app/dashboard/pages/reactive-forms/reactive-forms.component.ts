import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  onSubmit(){
    console.log(this.form.value)
  }

  formularioPerfil =  new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    direccion: new FormGroup({
      calle: new FormControl(''),
      ciudad: new FormControl(''),
      telefono: new FormControl('')
    })
  });

  nuevoUsuario = new FormGroup({
    nombreDeUsuario: new FormControl(''),
    telefonos: new FormGroup({
      celular: new FormControl(''),
      fijo: new FormControl('')
    })
  })

  usuario = new FormGroup({
    edad: new FormControl('', [Validators.min(18), Validators.required]),
    habilidad: new FormControl(
      '', [
        Validators.minLength(4),
        Validators.maxLength(8),
        Validators.required
      ]),
  })


  get edad(){
    return this.usuario.get('edad');
  }
  get habilidad(){
    return this.usuario.get('habilidad');
  }

  // METODOS DE INSTANCIA FORM GROUP
  setValue(){
    this.nuevoUsuario.setValue({
      nombreDeUsuario: 'Nancy',
      telefonos: {
        celular: '70710228',
        fijo: '4260296'
      }
    });
  }

  patchValue(){
    this.nuevoUsuario.patchValue({
      telefonos: {
        celular: '75936842',
      }
    });
  }
}
