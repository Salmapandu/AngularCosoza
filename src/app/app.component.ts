import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; 
import { MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'; 
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatColumnDef } from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import { MatHeaderCell } from '@angular/material/table';
import { MatHeaderCellDef} from '@angular/material/table';
import { MatHeaderRow } from '@angular/material/table';
import { MatHeaderRowDef } from '@angular/material/table';
import { MatNoDataRow } from '@angular/material/table';
import { MatRow } from '@angular/material/table';
import { MatCell } from '@angular/material/table';
import { MatInput } from '@angular/material/input';
import { MatCellDef } from '@angular/material/table';











@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,MatIconModule,
    MatButtonModule,MatDialogModule,
    MatFormFieldModule,MatInputModule,
    MatDatepickerModule,MatNativeDateModule,MatRadioModule,
    MatSelectModule,MatOptionModule,
    MatLabel,ReactiveFormsModule,HttpClientModule,
    MatTableModule,MatPaginatorModule,MatSortModule,MatColumnDef,
    MatIconButton,MatHeaderCell,MatHeaderCellDef,
    MatHeaderRow,MatHeaderRowDef, MatNoDataRow,MatRow,MatCell,
    MatInput,MatCellDef,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cosoza_business_registration_and_licensing_system';  


 
}
