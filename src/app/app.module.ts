import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfferingPortfolioComponent } from './offering-portfolio/offering-portfolio.component';
import { NgChartsModule } from 'ng2-charts';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { ExcelPopUpComponent } from './excel-pop-up/excel-pop-up.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    OfferingPortfolioComponent,
    ExcelPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    NgChartsModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
