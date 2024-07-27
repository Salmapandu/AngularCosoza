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
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatTooltipModule,
    MatSortHeader,
    MatTabsModule,
  ],
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.css',
})
export class UserManageComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    's/n',
    'firstname',
    'lastname',
    'email',
    'dob',
    'gender',
    'worktype',
    'worktitle',
    'reg_no',
    'address',
    'action',
  ];

  displayedColumns2: string[] = [
    's/n',
    'firstname',
    'lastname',    
    'email',
    'dob',
    'gender',
    'licensetype',
    'deviceused',
    'reg_no',
    'address',
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

  deleteArtist(artistId: any) {
    this.artistService.deleteArtist(artistId).subscribe({
      next: (res) => {
        this.toastr.success('Artist Permanently Deleted', 'Successfully');
        this.getArtists();
      },
      error: (err) => {
        console.log(err);
        // this.getArtists();
        this.toastr.error('Failed to Delete Artist', 'Error');
      },
    });
  }

  deleteLicensee(licenseeId: any) {
    this.licenseetService.deleteLicensee(licenseeId).subscribe({
      next: (res) => {
        this.toastr.success('Licensee Permanently Deleted', 'Successfully');
        this.getLicensees();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Failed to Delete Licensee', 'Error');
      },
    });
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

  getLicensees(): void {
    this.licenseetService.getLicensees().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource2 = new MatTableDataSource(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

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
