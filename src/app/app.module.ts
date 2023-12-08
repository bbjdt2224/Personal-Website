import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AirtableService } from './services/airtable.service';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AirtableService, DashboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
