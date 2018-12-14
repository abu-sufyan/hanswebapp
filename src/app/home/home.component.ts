import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginComponent } from '../login/login.component'
declare var Razorpay: any; 
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  toggled:boolean;
  animal: string = "zebra";
  name: string = "amit";
  socialInfo:string;

  constructor(public dialog: MatDialog) {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'app-full-bleed-dialog',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.socialInfo = result;
    });
  }
  toggleMenu()
  {
    this.toggled = !this.toggled;
  }

}
