import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { AirtableService } from './services/airtable.service';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AirtableService, DashboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
