import {Component, inject} from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {HolaMundoComponent} from "../../dialogs/hola-mundo/hola-mundo.component";


@Component({
  selector: 'app-dialogos',
  standalone: true,
  imports: [HolaMundoComponent, MatDialogActions, MatDialogContent, MatDialogTitle],
  templateUrl: './dialogos.component.html',
  styleUrl: './dialogos.component.scss'
})
export class DialogosComponent {
  readonly dialog = inject(MatDialog);
  openDialog(){
    let dialogRef = this.dialog.open(HolaMundoComponent, {
      height: '400px',
      width: '600px',
      data: {id: 'abc123', name: 'John Doe'}
    })
  }
}
