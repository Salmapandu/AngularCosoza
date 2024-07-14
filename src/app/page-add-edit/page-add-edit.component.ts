import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOption, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastrService } from 'ngx-toastr';
import { ArtistService } from '../services/artist/artist.service';

@Component({
  selector: 'app-page-add-edit',
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
    MatOption
  ],
  templateUrl: './page-add-edit.component.html',
  styleUrl: './page-add-edit.component.css',
})
export class PageAddEditComponent implements OnInit {
  empForm: FormGroup;

  worktype: string[] = ['Video', 'Audio'];

  private artistService = inject(ArtistService);

  constructor(private _fb: FormBuilder, private toastr: ToastrService, private dialog: MatDialog) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      worktype: '',
      worktitle: '',
      reg_no: '',
      address: '',
    });
  }


  onFormSubmit() {
    if (this.empForm.valid) {
      this.artistService.addArtist(this.empForm.value).subscribe({
        next: resp => {
          this.toastr.success('Artist Added Successfully!', 'Success!');
          this.dialog.closeAll();
        },
        error: err => {
          console.log(err);
          this.toastr.error('Fail to add artist', 'Error!');
        }
      });
    }
  }

  ngOnInit(): void {
      
  }
}
