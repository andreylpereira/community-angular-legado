import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalCalendarComponent } from 'src/app/pages/panel-control/calendar/modal-calendar/modal-calendar.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {}

  public dateForm: FormGroup = this.formBuilder.group({
    date: ['', [Validators.required]],
  });

  createDate() {
    let date: any = {
      date: this.dateForm.get('date')?.value,
    };

    console.log(date.date);
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    this.dialog.open(ModalCalendarComponent, dialogConfig);
  }
}
