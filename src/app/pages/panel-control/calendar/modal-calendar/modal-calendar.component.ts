import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-calendar',
  templateUrl: './modal-calendar.component.html',
  styleUrls: ['./modal-calendar.component.css']
})
export class ModalCalendarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalCalendarComponent>
  ) {}


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

