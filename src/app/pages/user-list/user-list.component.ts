
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {PageAddEditComponent} from '../../page-add-edit/page-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatColumnDef } from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import { MatHeaderCell } from '@angular/material/table';
import { MatHeaderCellDef} from '@angular/material/table';
import { MatHeaderRow } from '@angular/material/table';
import { MatHeaderRowDef } from '@angular/material/table';
import { MatNoDataRow } from '@angular/material/table';
import { MatRow } from '@angular/material/table';
import { MatCell } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatInput } from '@angular/material/input';
import { MatCellDef } from '@angular/material/table';
import { MatSortHeader } from '@angular/material/sort';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatIconModule,MatToolbarModule,
    MatButtonModule,PageAddEditComponent,
    MatTableModule,MatPaginatorModule,
    MatSortModule,MatFormField, MatLabel,
    ReactiveFormsModule,MatColumnDef,
    MatIconButton,MatHeaderCell,MatHeaderCellDef,
    MatHeaderRow, MatHeaderRowDef,MatNoDataRow,
    MatRow,MatCell,MatInputModule,MatInput,MatCellDef,
    MatSortHeader, MatIcon,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  displayedColumns: string[] = [
    's/n', 
    'firstName',
     'lastName',
      'email',
      'dob', 
      'gender',
       'licensetype',
        'deviceused',
        'reg_no',
       'address',
        'action', ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort








  constructor(private _dialog: MatDialog) {}
  openAddEditEmpForm() {
    this._dialog.open(PageAddEditComponent);
  }
  

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  }
  

