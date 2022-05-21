import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { SpaceApiService } from 'src/app/services/space-api.service';
import { ISpaceLaunches } from 'src/app/models/space-launches';

@Component({
  selector: 'app-space-launches-table',
  templateUrl: './space-launches-table.component.html',
  styleUrls: ['./space-launches-table.component.css']
})
export class SpaceLaunchesTableComponent implements OnInit, OnDestroy {
  private subs = new Subscription();

  displayedColumns: string[] = ['action', 'name', 'rocket', 'window_start',];

  public dataSource!: MatTableDataSource<ISpaceLaunches>;
  public dataArray!: any;
  public dataResults: any;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;



  constructor(private spaceService: SpaceApiService, private _snackBar: MatSnackBar) { }
  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subs.add(this.spaceService.getRandomUsers()
      .subscribe((res) => {
        console.log(res);
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<ISpaceLaunches>(this.dataArray.results);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataResults = this.dataArray.results;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }));
  }
  public openRecord(id: number, name: string): void {
    this._snackBar.open(`Record ${id} ${name}`, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    }); 
  }
}
