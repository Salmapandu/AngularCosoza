import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckbox } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-application-form2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatPseudoCheckbox,
    MatDialogModule
  ],
  templateUrl: './application-form2.component.html',
  styleUrl: './application-form2.component.css'
})
export class ApplicationForm2Component {
  checkboxForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkboxForm = this.fb.group({
      activities: this.fb.group({
        radio_station: [false],
        tv_station: [false],
        hotel: [false],
        inn: [false],
        motel: [false],
        resthouse: [false],
        restaurant: [false],
        bar: [false],
        bottle_store: [false],
        supermarket: [false],
        shop: [false],
        tavern: [false],
        discotheque: [false],
        entertainment_hall: [false],
        saloon: [false],
        bus_minibus: [false],
        taxi_operator: [false],
        car_hire_operator: [false],
        other_activities: [false]
      }),
      devices: this.fb.group({
        radio: [false],
        radio_cassette: [false],
        record_player: [false],
        music_centre: [false],
        compact_disk: [false],
        live_band: [false],
        television_set: [false],
        other_devices: [false]
      })
    });
  }

  generateControlNumber() {
    console.log(this.checkboxForm.value);
    // Implement control number generation logic here
  }

  formatLabel(key: string): string {
    // Replace underscores with spaces and capitalize the first letter of each word
    return key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  }

}
