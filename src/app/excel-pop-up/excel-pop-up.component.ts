import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-excel-pop-up',
  templateUrl: './excel-pop-up.component.html',
  styleUrls: ['./excel-pop-up.component.scss']
})
export class ExcelPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExcelPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }

}
