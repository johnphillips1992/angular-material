import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { SpaceLaunchesTableComponent } from './components/space-launches-table/space-launches-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    MatGridListModule,
    MatDividerModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSliderModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
    ]),
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SpaceLaunchesTableComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/