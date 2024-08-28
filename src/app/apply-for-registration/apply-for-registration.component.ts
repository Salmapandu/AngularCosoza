import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkDeclarasionFormComponent } from '../work-declarasion-form/work-declarasion-form.component';
import { ApplicationForm2Component } from '../application-form2/application-form2.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-for-registration',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './apply-for-registration.component.html',
  styleUrl: './apply-for-registration.component.css'
})
export class ApplyForRegistrationComponent {

  constructor(private dialog: MatDialog) { }

  openArtistForm() {
    this.dialog.open(WorkDeclarasionFormComponent, {
      width: '800px', // Adjust width as needed
    });
  }

  openLicenseeForm() {
    this.dialog.open(ApplicationForm2Component, {
      width: '750px', // Adjust width as needed
      height: '800px'
    });
  }
}

