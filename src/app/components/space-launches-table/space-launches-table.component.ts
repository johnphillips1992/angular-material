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
export class SpaceLaunchesTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
