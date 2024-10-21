import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.scss'
})
export class HolaMundoComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: {id: string, name: string}) {
    }
}
