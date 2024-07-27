import { Dialog } from '@angular/cdk/dialog';
import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatCell, MatHeaderRowDef, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatHeaderCellDef } from '@angular/material/table';
import { MatColumnDef } from '@angular/material/table';
import { MatHeaderCell } from '@angular/material/table';
import { MatCellDef } from '@angular/material/table';
import { ArtworkService } from '../../services/artwork/artwork.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-artwork',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginator,
    MatDialogModule,
    MatCell,
    MatLabel,
    MatHeaderCell,
    MatSort,
    MatColumnDef,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatTooltipModule,
    MatSortHeader,
    MatTabsModule,
    MatHeaderRowDef,
    MatHeaderCellDef,
    MatCellDef,
    MatIconButton,
    MatTooltip,
  ],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.css'
})
export class ArtworkComponent implements OnInit {
  displayedColumns: string[] = ['artworktype', 'artworktitle', 'action'];
 

 
 
  dataSource!: MatTableDataSource<any>;
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  artworkSub?: Subscription;

  constructor(private _dialog: MatDialog, private toastr: ToastrService) {}
  private artworkService = inject(ArtworkService);
 

  deleteArtwork(artworkId: any) {
    this.artworkService.deleteArtwork(artworkId).subscribe({
      next: (_res: any) => {
        this.toastr.success('Artwork Permanently Deleted', 'Successfully');
        this.getArtworks();
      },
      error: (err: any) => {
        console.log(err);
        // this.getArtwork();
        this.toastr.error('Failed to Delete Artwork', 'Error');
      },
    });
  }


  
  getArtworks(): void {
    this.artworkSub = this.artworkService.getArtworks().subscribe({
      next: (res: any[] | undefined) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
      },
      error: (err: any) => {
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
    this.getArtworks();
  }

  ngOnDestroy(): void {
    this.artworkSub?.unsubscribe();
  }
}
