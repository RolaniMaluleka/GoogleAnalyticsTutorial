import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatsbarComponent } from './components/statsbar/statsbar.component';
import { HomeComponent } from './pages/home/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { NominateComponent } from './pages/nominate/nominate/nominate.component';
import { TrailblaizerComponent } from './pages/trailblaizer/trailblaizer/trailblaizer.component';
import { UploadComponent } from './pages/uploadAws/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatsbarComponent,
    HomeComponent,
    DashboardComponent,
    NominateComponent,
    TrailblaizerComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
