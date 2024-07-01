import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatLabel } from '@angular/material/form-field';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';


@Component({
  selector: 'app-list-add-edit',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatLabel,
    ReactiveFormsModule,
    MatTableModule,
    MatSelect,
    MatOption,
  ],
  templateUrl: './list-add-edit.component.html',
  styleUrl: './list-add-edit.component.css'
})
export class ListAddEditComponent {
  empForm: FormGroup;

  licensetype: string[] = ['Radio Station', 'Hotel', 'Restaurant', 'Supermarket', 
    'Shop', 'Saloon', 'Bus', 'Taxi Operator', 'Car Hire Operator', 'Other'];

  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      licensetype: '',
      deviceused: '',
      reg_no: '',
      address: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }

}
