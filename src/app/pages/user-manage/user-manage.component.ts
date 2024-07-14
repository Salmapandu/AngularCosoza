import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatCellDef, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PageAddEditComponent } from '../../page-add-edit/page-add-edit.component';
import { ArtistService } from '../../services/artist/artist.service';
import { LicenseeService } from '../../services/licensee/licensee.service';

@Component({
  selector: 'app-user-manage',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatLabel,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCellDef,
    MatSortHeader,
    MatTabsModule,
  ],
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.css',
})
export class UserManageComponent implements OnInit, OnDestroy {
deleteArtist(_t72: any) {
throw new Error('Method not implemented.');
}
  displayedColumns: string[] = [
    's/n',
    // 'firstName',
    // 'lastName',
    // 'email',
    // 'dob',
    // 'gender',
    // 'worktype',
    // 'worktitle',
    // 'reg_no',
    'address',
    'mobile_phone',
    'action',
  ];

  displayedColumns2: string[] = [
    's/n',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'worktype',
    'worktitle',
    'reg_no',
    'address',
    // 'mobile_phone',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  artistSub?: Subscription;

  constructor(private _dialog: MatDialog, private toastr: ToastrService) {}
  private artistService = inject(ArtistService);
  private licenseetService = inject(LicenseeService);

  openAddEditEmpForm() {
    this._dialog.open(PageAddEditComponent);
  }

  getArtists(): void {
    this.artistSub = this.artistService.getArtists().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getLicensees(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getArtists();
    this.getLicensees();
  }

  ngOnDestroy(): void {
    this.artistSub?.unsubscribe();
  }
}
